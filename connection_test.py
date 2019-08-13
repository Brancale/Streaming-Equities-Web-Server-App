import mysql.connector
from mysql.connector import Error
try:
    connection = mysql.connector.connect(host='192.168.99.100',
                             database='mydb',
                             user='root',
                             password='ppp')
    if connection.is_connected():
       db_Info = connection.get_server_info()
       print("Connected to MySQL database... MySQL Server version on ",db_Info)
       cursor = connection.cursor()
       cursor.execute("select database();")
       record = cursor.fetchone()
       print ("You're connected to - ", record)
except Error as e :
    print ("Error while connecting to MySQL", e)
finally:
    #closing database connection.
    if(connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")


def authenticate_user(userId, password):
    connection = mysql.connector.connect(host='192.168.99.100',
                                         database='mydb',
                                         user='root',
                                         password='ppp')
    query = ('SET @userId = "%s", @password ="%s"; ' % (userId, password))
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
        is_user_authenticated = True;

    connection.close()


authenticate_user('Jools', 'pwd')