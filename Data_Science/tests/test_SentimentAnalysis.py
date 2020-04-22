import csv
import unittest

from Data_Science.PreProcess import PreProcess
from Data_Science.SentimentAnalysis import SentimentAnalysis


class TestSentimentAnalysis(unittest.TestCase):

    @classmethod
    def setUp(self):
        file = open("../tests/TestingData.csv", 'r')
        # all the records in the file are converted to a 2d array
        data = list(csv.reader(file, delimiter=','))
        self.trainData = []
        self.trainLabel = []
        # # append the pre-processed the review and the sentiment, to trainData and trainLabel
        for j in range(1, len(data)):
            self.trainData.append(PreProcess.pre_process_review(data[j][0], "svr"))
            self.trainLabel.append(float(data[j][1]))
        file.close()

    def test_predict_sentiment(self):
        values = SentimentAnalysis.predict_sentiment(self.trainData, self.trainLabel)
        self.assertEqual(values["overall_sentiment"], 49.54589647711921)

    @classmethod
    def tearDown(self):
        pass

if __name__ == '__main__':
    unittest.main()
