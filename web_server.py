import ast
import threading
# from RandomDealData import *
import mysql.connector
from datetime import datetime
import json
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)


daoAddr = 'http://daodatagen-group15.apps.dbgrads-6eec.openshiftworkshop.com/'
daoPortLogin = '/login'
daoPortQuery = '/webserver_to_dao'

@app.route("/login", methods=['GET'])
def login():
    username = request.args.get('username', None)
    password = request.args.get('password', None)
    print(username)
    data = {'username': username,'password': password}
    url = daoAddr + daoPortLogin
    response = requests.get(url, data)
    return response.text, response.status_code

# operation for avgSellPrices data
def op_avgSellPrices(data, operName):
    # gather fields for this operation

    data = json.loads(data)
    startDate = data['periodStart']
    endDate = data['periodEnd']

    # Set up SQL query
    query = 'SELECT instrumentName, AVG(Price) AS AverageSellPrice, (SELECT AVG(Price) FROM Deals Where Date(time) >= ' \
            '("' + startDate + '") and Date(Time) <= ("' + endDate + '") and type = "B") AS AverageBuyPrice ' \
            'From Deals ' \
            'Where Date(time) >= ("' + startDate + '") and Date(Time) <= ("' + endDate + '") and type= "S"' \
            'GROUP BY instrumentName;'

    data = {'query': query}
    url = daoAddr + daoPortQuery
    # Make get request to dao for DB data
    resultReq = requests.get(url, data)
    json_data = json.loads(resultReq.text)

    strData = json_data['msg']

    listData = list(ast.literal_eval(strData))
    # results = result['result']

    # Business logic. Prepare data for React frontend

    instrumentLabels = []
    buyPriceList = []
    sellPriceList = []
    # Go through rows in record and create data for React
    for row in listData:
        instrumentName = row[0]
        avgSellPrice = row[1]
        avgBuyPrice = row[2]

        instrumentLabels.append(instrumentName)
        sellPriceList.append(avgSellPrice)
        buyPriceList.append(avgBuyPrice)

    # Build JSON
    response = {}

    response['operationType'] = operName
    response['labels'] = instrumentLabels
    response['Buys'] = buyPriceList
    response['Sells'] = sellPriceList

    # Reply
    #return response.text, response.status_code
    return jsonify(msg=response, status = 200)

@app.route("/query", methods=['GET'])
def send_query():
    print(request.args)
    operationRequest = request.args.get('operation', None)
    operParams = request.args.get('params', None)
    if operationRequest == 'avgSellPrices':
        return op_avgSellPrices(operParams, operationRequest)
    else:
        response = {'Error'}
        status_code = 500
        return response, status_code


class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password


def as_user(dct):
    return User(dct.get('username', None), dct.get('password', None))

def stream_to_sql(jsonData, connection, cursor):

    date_obj = datetime.strptime(jsonData['time'], "%d-%b-%Y (%H:%M:%S.%f)")
    dt = date_obj.strftime("%y-%m-%d %H:%M:%S.%f")

    sql_insert_query = " INSERT INTO Deals " \
                   " (dealId, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) " \
                   ' VALUES (' + str(jsonData['dealId']) + ' , "'+ jsonData['instrumentName'] + '","' \
                       + jsonData['cpty']+ '",' + str(jsonData['price']) + ',"' + jsonData['type'] + '",' +  str(jsonData['quantity'])\
                       + ',"' + str(dt) + '");'
    result = cursor.execute(sql_insert_query)

    connection.commit()
    print("Record inserted successfully into Deals table")


def boot_app():
    app.run(debug=True, threaded=True, host=('0.0.0.0'), port='8080')
