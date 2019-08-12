import numpy

class Instrument:
    instrumentName = None
    hashedValue = 0
    isNegative = False
    basePrice = 0.0
    drift = 0.0
    variance = 0.0

    def __init__(self, instrumentName, hashedValue, isNegative, basePrice, drift, variance):
        self.instrumentName = instrumentName
        self.hashedValue = hashedValue
        self.isNegative = isNegative
        self.basePrice = basePrice
        self.drift = drift
        self.variance = variance

    def calculateNextPrice(self, direction):
        newPriceStarter = self.__price + numpy.random.normal(0, 1) * self.__variance + self.__drift
        newPrice = newPriceStarter if (newPriceStarter > 0) else 0.0
        if self.__price < self.__startingPrice * 0.4:
            self.__drift = (-0.7 * self.__drift)
        self.__price = newPrice * 1.01 if direction == 'B' else newPrice * 0.99
        return self.__price




