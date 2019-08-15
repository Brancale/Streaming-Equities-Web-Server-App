import json
from flask import Flask, Response, request
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
CORS(app)

@app.route('/send', methods=['GET'])
def sendData():
    url = 'http://127.0.0.1:7000/recv'

    payload = {'username':'Trader','password':'haxx'}
    headers = {'content-type': 'application/json'}
    while(True):
        response = requests.get(url, payload)
        print(".")
        if (response.status_code != 200):
            print(response.status_code)
            continue;
        elif (response.status_code == 200):
            break;
        time.sleep(1.0)
    return str(response.status_code)

def boot_app():
    app.run(debug=True, threaded=True)
    sendData()

if __name__ == "__main__":
     boot_app()