import numpy

class Instrument:
    __instrumentName = None
    __hashedValue = 0
    __isNegative = False
    __basePrice = 0.0
    __drift = 0.0
    __variance = 0.0
    __price = 0.0

    def __init__(self, instrumentName, hashedValue, isNegative, basePrice, drift, variance):
        self.__instrumentName = instrumentName
        self.__hashedValue = hashedValue
        self.__isNegative = isNegative
        self.__basePrice = basePrice
        self.__drift = drift
        self.__variance = variance

    def getName(self):
        return self.__instrumentName

    def gethashedValue(self):
        return self.__hashedValue

    def getisNegative(self):
        return self.__isNegative

    def getbasePrice(self):
        return self.__basePrice

    def getdrift(self):
        return self.__drift

    def getvariance(self):
        return self.__variance

    def getprice(self):
        return self.__price

    def calculateNextPrice(self, direction):
        newPriceStarter = self.__price + numpy.random.normal(0, 1) * self.__variance + self.__drift
        newPrice = newPriceStarter if (newPriceStarter > 0) else 0.0
        if self.__price < self.__basePrice * 0.4:
            self.__drift = (-0.7 * self.__drift)
        self.__price = newPrice * 1.01 if direction == 'B' else newPrice * 0.99
        return self.__price




