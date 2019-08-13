from flask import Flask, Response
from RandomDealData import *
app = Flask(__name__)

# Can inject. All the routes declared here are prefixed with "/streams"
#app.register_blueprint( sse, url_prefix='/streams' )

@app.route("/datastream")
def output_data_stream():
    def dataStream():


        # Create Random Data Generator Object
        randDataObj = RandomDealData()
        # Create instrument list
        instrumentList = randDataObj.createInstrumentList()
        while True:
            jsonData = randDataObj.createRandomData(instrumentList)

            yield jsonData + '\n'

    # eventStream keeps stream open so data can keep going in
    return Response(dataStream(), mimetype="text/event-stream")


# def sendToDB(jsonData):
#     try:
#         connection = mysql.connector.connect(host='192.168.99.100',
#                                              database='mydb',
#                                              user='root',
#                                              password='ppp')
#
#         date_obj = datetime.strptime(jsonData.time, "%d-%b-%Y (%H:%M:%S)")
#         dt = date_obj.strftime("%y-%m-%d %H:%M:%S")
#
#         # sql_insert_query = " INSERT INTO Deals" \
#         #                    " (dealId, instrumentName, cpty, price, type, quantity, time) " \
#         #                    " VALUES (" + str(jsonData.dealId) + ',"' + str(jsonData.instrumentName) + '","'\
#         #                    + str(jsonData.cpty) + '",' + str(jsonData.price) + ',"' + str(jsonData.type) + '",'\
#         #                    + str(jsonData.quantity) + '","' + dt + '")'
#         #
#         # date_obj = datetime.strptime("12-Aug-2019 (09:26:48)", "%d-%b-%Y (%H:%M:%S)")
#         # dt = date_obj.strftime("%y-%m-%d %H:%M:%S")
#         sql_insert_query = string.format("INSERT INTO Deals "
#                                          "(dealId, instrumentName, cpty, price, type, quantity, time) "
#                                          'VALUES (%d, "%s", "%s", "%f", "%s", "%d", "%s")', jsonData.dealId, jsonData.instrumentName, jsonData.cpty, jsonData.price, jsonData.type, jsonData.quantity, dt)
#         # sql_insert_query = " INSERT INTO Deals " \
#         #                    " (dealId, `instrumentName`, `cpty`, `price`, `type`, `quantity`, `time`) " \
#         #                    ' VALUES (66, "Astronomica", "John", 1.2112907399534845, "B", 5, "' + dt + '")'
#         cursor = connection.cursor()
#         result = cursor.execute(sql_insert_query)
#         connection.commit()
#         print("Record inserted successfully into Deals table")
#     except mysql.connector.Error as error:
#         connection.rollback()  # rollback if any exception occurred
#         print("Failed inserting record into Deals table {}".format(error))
#     finally:
#         # closing database connection.
#         if (connection.is_connected()):
#             cursor.close()
#             connection.close()
#             print("MySQL connection is closed")


def bootapp():
    # app.run(debug=True, threaded=True, host=('0.0.0.0'))
    app.run(debug=True, threaded=True, host=('127.0.0.1'))


if __name__ == '__main__':
     bootapp()