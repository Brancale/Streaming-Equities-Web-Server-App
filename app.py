import datetime
import time
from flask import Flask, Response, jsonify, Request, request, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# class Deal:
#     def __init__(self, deal_id, instrument_name, cpty, price, type, quantity, time, hashed_value, is_negative, base_price, drift, variance):
#         self.deal_id = deal_id
#         self.instrument_name = instrument_name
#         self.cpty = cpty
#         self.price = price
#         self.type = type
#         self.quantity = quantity
#         self.time = time
#         self.hashed_value = hashed_value
#         self.is_negative = is_negative
#         self.base_price = base_price
#         self.drift = drift
#         self.variance = variance

class Deal(object):
    def __init__(self, j):
        self.__dict__ = json.loads(j)

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
    # data = request.json
    # print(data['dealId'])
    # print(data)
    data = '{"dealId": 20001, "instrumentName": "Astronomica", "cpty": "Lewis", "price": 0.0, "type": "B", "quantity": 322, "time": "11-Aug-2019 (14:14:35.394758)", "hashedValue": -1372613350, "isNegative": true, "basePrice": 3440.0, "drift": -0.0, "variance": -3.5}';
    # obj = jsonify(data)
    deal = Deal(data)
    print(deal.deal_id)
    return Response(status=200)

def get_time():
    time.sleep(1.0)
    return f"Current date {str(datetime.date.today())} " + f"Current time {str(datetime.datetime.now().time())}"


if __name__ == "__main__":
    app.run(port='5001')
    # app.run(port=5001, threaded=True, host=('192.168.0.1'))
    #   app.run(port='5000', threaded=True, host=('0.0.0.0'))








