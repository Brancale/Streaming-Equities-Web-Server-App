import json
from flask import Flask, Response, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/recv', methods=['GET', 'POST'])
def recvData():
    url = 'http://127.0.0.1:5000'
    payload = request.json
    headers = {'content-type': 'application/json'}
    Response(json=payload, headers=headers, status=200)
    print(payload.get("type"))
    return "Receiving" + payload.get("type")

def boot_app():
    app.run(debug=True, threaded=True, host='127.0.0.1', port='7000')

if __name__ == "__main__":
    boot_app()