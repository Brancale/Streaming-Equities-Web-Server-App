instruments = ("Astronomica", "Borealis", "Celestial", "Deuteronic", "Eclipse",
			"Floral", "Galactia", "Heliosphere", "Interstella", "Jupiter", "Koronis", "Lunatic")

class   RandomDealData:
    def createInstrumentList(self):
        f = open('initialRandomValues.txt', 'r')
        instrumentId = 1000
        instrumentList = []
        for instrumentName in instruments:
            hashedValue = int(f.readline())
            isNegative = hashedValue < 0
            basePrice = (abs(hashedValue) % 10000) + 90.0
            drift = ((abs(hashedValue) % 5) * basePrice) / 1000.0
            drift = 0 - drift if isNegative else drift
            variance = (abs(hashedValue) % 1000) / 100.0
            variance = 0 - variance if isNegative else variance

            print("----------------------\ninstrumentId: " + str(instrumentId) + "\n----------------------\ninstrumentName: "
                  + str(instrumentName) + "\nhashedValue: " + str(hashedValue) + "\nisNegative: " + str(isNegative) + "\nbasePrice: " + str(basePrice) +
                  "\ndrift: " + str(drift) + "\nvariance: " + str(variance))

            instrumentId += 1
        return instrumentList


randomDataObj = RandomDealData()
randomDataObj.createInstrumentList()