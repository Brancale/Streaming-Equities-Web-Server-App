import datetime
import time
from flask import Flask, Response, jsonify, Request, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def clock():
    return Response(f"Current date {str(datetime.date.today())}\n" + f"Current time {str(datetime.datetime.now().time())}")

@app.route('/time')
def get_time():
    def eventsStream():
        while True:
            yield str(get_time()) + " \r\n";

    return Response(eventsStream());

@app.route('/sendjson', methods=['GET', 'POST'])
def send_json():
    data = {'dealId': '20001'}
    return Response(str(data), status=200, mimetype='application/json');

@app.route('/recieveJSON', methods=['GET', 'POST'])
def recieve_json():
    data = request.json
    print(data['dealId'])
    print(data)
    return Response(status=200)

def get_time():
    time.sleep(1.0)
    return f"Current date {str(datetime.date.today())} " + f"Current time {str(datetime.datetime.now().time())}"


if __name__ == "__main__":
    app.run(port='5001')
    # app.run(port=5001, threaded=True, host=('192.168.0.1'))
    #   app.run(port='5000', threaded=True, host=('0.0.0.0'))








