import jsonify
from RandomDealData import *


def main():
    while(True):
        # Create Random Data Generator Object
        randDataObj = RandomDealData()
        # Create instrument list
        instrumentList = randDataObj.createInstrumentList()
        # Create random data and store in JSON
        jsonData = randDataObj.createRandomData(instrumentList)

        print(jsonData)


if __name__ == "__main__":
    main()