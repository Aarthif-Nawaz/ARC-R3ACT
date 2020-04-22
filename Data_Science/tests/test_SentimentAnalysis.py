# import pickle
# import unittest
# from unittest import mock
#
# from sklearn import svm
# from sklearn.feature_extraction.text import CountVectorizer
#
# from Data_Science.SentimentAnalysis import SentimentAnalysis
#
#
# class TestSentimentAnalysis(unittest.TestCase):
#
#     @classmethod
#     def setUp(self):
#         self.results=SentimentAnalysis.retrieve_preprocessed_reviews_test_labels("../tests/TestingData.csv")
#
#     def test_predict_sentiment(self):
#     # with mock.patch('Data_Science.SentimentAnalysis.predict_sentiment(preprocessedReviews, testLabels)'):
#     #     self.testfile = open("../MLModels/TfidfVect.pk")
#     #     self.testdata = self.testfile.read()
#         count_vect = pickle.load(open("../MLModels/TfidfVect.pk", 'rb'))
#         # model=svm.SVR()
#         # vectorizer= CountVectorizer()
#         # vectorized_data=vectorizer.transform(self.results["preprocessedReviews"])
#         # model.predict(vectorized_data)
#         # assert
#         # values=SentimentAnalysis.predict_sentiment(self.results["preprocessedReviews"], self.results["testLabels"])
#         # self.assertEqual(values["overall_sentiment"],120.2071020491731)
#
#     @classmethod
#     def tearDown(self):
#         # print('teardownClass')
#         pass
#
# if __name__ == '__main__':
#     unittest.main()
