import threading
from RandomDealData import *
import mysql.connector
from datetime import datetime
import json
from flask import Flask, Response, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


sqlHostAddr = '192.168.99.100'


@app.route("/login", methods=['GET', 'POST'])
def login():
    data = request.json
    user = as_user(data)

    is_user_authenticated = authenticate_user(user.username, user.password)
    if is_user_authenticated == 1:
        return Response(status=200)
    else:
        return Response(status=401)


def authenticate_user(userid, password):
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


def activate_stream():
    connection, cursor = connect_to_db()
    thr = threading.Thread(target=data_stream, args=(connection, cursor), kwargs={})
    thr.start()  # Will run "data_stream"

def data_stream(connection, cursor):
    # Create Random Data Generator Object
    randDataObj = RandomDealData()
    # Create instrument list
    instrumentList = randDataObj.createInstrumentList()
    while True:
        jsonRaw = randDataObj.createRandomData(instrumentList)
        jsonData = json.loads(jsonRaw)
        stream_to_sql(jsonData, connection, cursor)


def connect_to_db():
    try:
        connection = mysql.connector.connect(host=sqlHostAddr,
                                             database='mydb',
                                             user='root',
                                             password='ppp')
        cursor = connection.cursor()
        result = cursor.execute("DELETE FROM Deals")
        return connection, cursor
    except mysql.connector.Error as error:
        connection.rollback()  # rollback if any exception occurred
        print("Failed inserting record into Deals table {}".format(error))

def disconnect_from_db(connection, cursor):
    # closing database connection.
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")


def stream_to_sql(jsonData, connection, cursor):



    date_obj = datetime.strptime(jsonData['time'], "%d-%b-%Y (%H:%M:%S.%f)")
    dt = date_obj.strftime("%y-%m-%d %H:%M:%S")

    sql_insert_query = " INSERT INTO Deals " \
                   " (dealId, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) " \
                   ' VALUES (' + str(jsonData['dealId']) + ' , "'+ jsonData['instrumentName'] + '","' \
                       + jsonData['cpty']+ '",' + str(jsonData['price']) + ',"' + jsonData['type'] + '",' +  str(jsonData['quantity'])\
                       + ',"' + str(dt) + '");'
    result = cursor.execute(sql_insert_query)

    connection.commit()
    print("Record inserted successfully into Deals table")


def boot_app():
    app.run(debug=True, threaded=True, host='127.0.0.1')


# if __name__ == "__main__":
#     app.run(port='5001')
