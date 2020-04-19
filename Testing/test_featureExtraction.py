# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in FeatureExtraction.py

#Imports
import unittest

from sklearn.feature_extraction.text import TfidfVectorizer

import Data_Science.FeatureExtraction

# Defining the class to perform unit test
class TestFeatureExtraction(unittest.TestCase):

    def setUp(self):
        self.corpus = ["Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis ","download game . Game play spotty . ball disappears lose points . spot ball hits court , ball ","low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game ","enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches"]
        self.vectorizer = TfidfVectorizer(max_features=200, min_df=2)
        tf_idf_vector = self.vectorizer.fit_transform(self.corpus)
        self.features = self.vectorizer.get_feature_names()
        self.tf_idf_vectors = self.vectorizer.transform(
            ["download game . Game play spotty . ball disappears lose points . spot ball hits court , ball"])
        self.sorted_features = Data_Science.FeatureExtraction.FeatureExtraction.sort_matrix(self.tf_idf_vectors.tocoo())

    def test_find_keywords(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords(self.corpus),[['pay', 'tennis', 'choice', 'depend', 'accuracy', 'levels', 'tactics', 'stats', 'difference', 'play', 'system', 'poor', 'matching', 'destroys'], ['download', 'play', 'spotty', 'spot', 'ball', 'disappears', 'lose', 'points', 'hits', 'court'], ['win', 'edit', 'pay', 'low', 'amounts', 'gold', 'given', 'not', 'progress', 'purchasing', 'items', 'makes', 'impossible', 'collect', 'rewards', 'unlocking', 'timers', 'boxes', 'extend', 'upto', 'hours', 'open', 'multiple', 'sucks', 'complete'], ['enjoyed', 'got', 'glitchy', 'work', 'not', 'giving', 'certain', 'attributes', 'power', 'frustrating', 'try', 'developers', 'bad', 'able', 'fix', 'glitches']],"Testing Successful to Find Keywords")

    def test_find_keywords_sentence(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis "),['play', 'pay', 'game'])
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"download game . Game play spotty . ball disappears lose points . spot ball hits court , ball "),['game', 'play'])
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game "),['not', 'game', 'pay'])
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches"),['not', 'game'])

    def test_extract_topn_features_from_vector(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.extract_topn_features_from_vector(self.features,self.sorted_features,0), {'game': 0.798, 'play': 0.603})

    def test_sort_matrix(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.sort_matrix(self.tf_idf_vectors.tocoo()), self.sorted_features)

    def test_retrieveWords(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.retrieveWords(self.vectorizer,"download game . Game play spotty . ball disappears lose points . spot ball hits court , ball",self.features), ['game', 'play'])

    def test_convertToArray(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.convertToArray(self.corpus), ['Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis ', 'download game . Game play spotty . ball disappears lose points . spot ball hits court , ball ', 'low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game ', 'enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches'])

if __name__ == '__main__':
    unittest.main()


