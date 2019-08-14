import threading
from RandomDealData import *
import mysql.connector
from datetime import datetime
import json
from flask import Flask, Response, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


daoAddr = 'http://127.0.0.1'
daoPort = ':7000/login'


@app.route("/login", methods=['GET'])
def login():
    username = request.args.get('username', None)
    password = request.args.get('password', None)
    print(username)
    data = {'username': username,'password': password}
    url = daoAddr + daoPort
    response = requests.get(url, data)
    return response.text, response.status_code


def send_query(userid, password):
    connection = mysql.connector.connect(host='192.168.99.100',
                                         database='mydb',
                                         user='root',
                                         password='ppp')
    query = ('SET @userId = "%s", @password ="%s"; ' % (userid, password))
    query += 'SELECT COUNT(1) FROM `Users` WHERE userId = @userId AND password = @password;'
    print(query)
    cursor = connection.cursor()
    results = cursor.execute(query, multi=True)
    result = 0
    is_user_authenticated = False
    for cur in results:
        if cur.with_rows:
            result = cur.fetchall()[0][0]
            print(result)

    if result == 1:
        is_user_authenticated = True

    cursor.close()
    connection.close()

    return is_user_authenticated


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
    app.run(debug=True, threaded=True, host='127.0.0.1', port='5001')


# if __name__ == "__main__":
#     app.run(port='5001')
