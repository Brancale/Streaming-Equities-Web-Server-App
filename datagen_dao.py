
import threading
from RandomDealData import *
import mysql.connector
from datetime import datetime
import json

sqlHostAddr = '192.168.99.100'

def activate_stream():
    thr = threading.Thread(target=stream_to_sql, args=(), kwargs={})
    thr.start()  # Will run "foo"

def stream_to_sql():


    try:
        connection = mysql.connector.connect(host=sqlHostAddr,
                                             database='mydb',
                                             user='root',
                                             password='ppp')
        # Create Random Data Generator Object
        randDataObj = RandomDealData()
        # Create instrument list
        instrumentList = randDataObj.createInstrumentList()
        while True:
            jsonRaw = randDataObj.createRandomData(instrumentList)
            jsonData = json.loads(jsonRaw)
            date_obj = datetime.strptime(jsonData['time'], "%d-%b-%Y (%H:%M:%S.%f)")
            dt = date_obj.strftime("%y-%m-%d %H:%M:%S")
            sql_insert_query = " INSERT INTO Deals " \
                           " (dealId, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) " \
                           ' VALUES (' + str(jsonData['dealId']) + ' , "'+ jsonData['instrumentName'] + '","' \
                               + jsonData['cpty']+ '",' + str(jsonData['price']) + ',"' + jsonData['type'] + '",' +  str(jsonData['quantity'])\
                               + ',"' + str(dt) + '");'
            cursor = connection.cursor()
            result = cursor.execute(sql_insert_query)
            connection.commit()
            print("Record inserted successfully into Deals table")
    except mysql.connector.Error as error:
        connection.rollback()  # rollback if any exception occurred
        print("Failed inserting record into Deals table {}".format(error))
    finally:
        # closing database connection.
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


if __name__ == "__main__":
    activate_stream()