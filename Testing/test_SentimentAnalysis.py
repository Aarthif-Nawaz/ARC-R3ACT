# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in SentinmentAnalysis.py

# Imports
import glob
import unittest
import pytest
from pandas import array

from vaderSentiment import vaderSentiment

import Data_Science.SentimentAnalysis
import Data_Science.PreProcess
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import Data_Science.MLModels

class TestSentimentAnalysis(unittest.TestCase):

    def setUp(self):
        self.review = []
        self.lexicon = []
        for i in range(0, 2):
            vaderSentimentAnalyzer = vaderSentiment.SentimentIntensityAnalyzer()
            score = vaderSentimentAnalyzer.polarity_scores(
                "have never use an editor that exit without ask to save your work feature allow user enter text these day we all expect autosave too be waaaay much for this worthless app")
            negScore = -1 * score["neg"]
            posScore = score["pos"]
            sentiment = posScore + negScore
            self.lexicon.append(sentiment)
            self.review.append(
                "have never use an editor that exit without ask to save your work feature allow user enter text these day we all expect autosave too be waaaay much for this worthless app")

    def test_predict_sentiment(self):
        self.assertEqual(Data_Science.SentimentAnalysis.SentimentAnalysis.predict_sentiment(self.review,self.lexicon),{'overall_sentiment': 0.09051192713829448, 'predicted': array([0.04525596, 0.04525596]), 'rating': 3, 'r2_score': 0.0, 'mean_square_error': 0.02472943807806097})


if __name__ == '__main__':
    unittest.main()

