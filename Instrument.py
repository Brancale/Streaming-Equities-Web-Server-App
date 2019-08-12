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

    def calculateNextPrice(type):
        if (type == 'S'):

        else: # type is B




