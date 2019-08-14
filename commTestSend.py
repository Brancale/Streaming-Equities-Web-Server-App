import json
from flask import Flask, Response, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/send', methods=['GET'])
def sendData():
    url = 'http://127.0.0.1:7000'

    payload = {'type':'Admin'}
    headers = {'content-type': 'application/json'}
    response = requests.get(url, payload)
    print(response.status_code)
    return "Sending" + response.status_code

def boot_app():
    app.run(debug=True, threaded=True)
    sendData()

if __name__ == "__main__":
     boot_app()