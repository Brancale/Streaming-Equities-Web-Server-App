from flask import Flask, Response, request
from flask_cors import CORS

import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

# def test_connection():
#     try:
#         connection = mysql.connector.connect(host='192.168.99.100',
#                                              database='mydb',
#                                              user='root',
#                                              password='ppp')
#         if connection.is_connected():
#             db_Info = connection.get_server_info()
#             print("Connected to MySQL database... MySQL Server version on ", db_Info)
#             cursor = connection.cursor()
#             cursor.execute("select database();")
#             record = cursor.fetchone()
#             print("You're connected to - ", record)
#     except Error as e:
#         print("Error while connecting to MySQL", e)
#     finally:
#         # closing database connection.
#         if (connection.is_connected()):
#             cursor.close()
#             connection.close()
#             print("MySQL connection is closed")


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


@app.route("/login", methods=['GET', 'POST'])
def login():
    data = request.json
    user = as_user(data)

    is_user_authenticated = authenticate_user(user.username, user.password)
    if is_user_authenticated == 1:
        return Response(status=200)
    else:
        return Response(status=401)


if __name__ == "__main__":
    app.run(port='5001')
    # app.run(port=5001, threaded=True, host=('192.168.0.1'))
    # app.run(port='5000', threaded=True, host=('0.0.0.0'))
