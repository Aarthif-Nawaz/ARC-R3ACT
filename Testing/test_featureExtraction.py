# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in FeatureExtraction.py

#Imports
import unittest
from sklearn.feature_extraction.text import TfidfVectorizer

import Data_Science.FeatureExtraction

# Defining the class to perform unit test
class TestFeatureExtraction(unittest.TestCase):
    # Setting up corpus and vectorizer to test post defined functions
    def setUp(self):
        # Creating a Corpus of 4 reviews
        self.corpus = ["Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis ","download game . Game play spotty . ball disappears lose points . spot ball hits court , ball ","low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game ","enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches"]
        # Initializing the TFIDF vectorizer along with its max_features
        self.vectorizer = TfidfVectorizer(max_features=200, min_df=2)
        # using tfidf vectorizer to transform corpus reviews
        tf_idf_vector = self.vectorizer.fit_transform(self.corpus)
        # Get the feature names
        self.features = self.vectorizer.get_feature_names()
        # tranform a partcular review
        self.tf_idf_vectors = self.vectorizer.transform(
            ["download game . Game play spotty . ball disappears lose points . spot ball hits court , ball"])
        # Creating MAtrix for the vectorized text
        self.sorted_features = Data_Science.FeatureExtraction.FeatureExtraction.sort_matrix(self.tf_idf_vectors.tocoo())
    # Testing to find keywords from a corpus
    def test_find_keywords(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords(self.corpus),[['pay', 'tennis', 'choice', 'depend', 'accuracy', 'levels', 'tactics', 'stats', 'difference', 'play', 'system', 'poor', 'matching', 'destroys'], ['download', 'play', 'spotty', 'spot', 'ball', 'disappears', 'lose', 'points', 'hits', 'court'], ['win', 'edit', 'pay', 'low', 'amounts', 'gold', 'given', 'not', 'progress', 'purchasing', 'items', 'makes', 'impossible', 'collect', 'rewards', 'unlocking', 'timers', 'boxes', 'extend', 'upto', 'hours', 'open', 'multiple', 'sucks', 'complete'], ['enjoyed', 'got', 'glitchy', 'work', 'not', 'giving', 'certain', 'attributes', 'power', 'frustrating', 'try', 'developers', 'bad', 'able', 'fix', 'glitches']],"Testing Successful to Find Keywords")
    # Testing to find keywords in a review compared amidst the copus
    def test_find_keywords_sentence(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis "),['play', 'pay', 'game'],"Successfully tested to find keywords in the review")
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"download game . Game play spotty . ball disappears lose points . spot ball hits court , ball "),['game', 'play'],"Successfully tested to find keywords in the review")
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game "),['not', 'game', 'pay'],"Successfully tested to find keywords in the review")
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.find_keywords_sentence(self.corpus,"enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches"),['not', 'game'],"Successfully tested to find keywords in the review")
    # Testing to extract features from the review amidst the corpus 
    def test_extract_topn_features_from_vector(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.extract_topn_features_from_vector(self.features,self.sorted_features,0), {'game': 0.798, 'play': 0.603},"Successfully tested to find features in the extracted review")
    # Testing to sort the matrix of the extracted features in a 2D Array
    def test_sort_matrix(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.sort_matrix(self.tf_idf_vectors.tocoo()), self.sorted_features,"Successfully tested sort matrix")
    # Testing to retrieve words from the corpus/review
    def test_retrieveWords(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.retrieveWords(self.vectorizer,"download game . Game play spotty . ball disappears lose points . spot ball hits court , ball",self.features), ['game', 'play'],"Successfully tested to retrieve words")
    # Testing function to convert to array
    def test_convertToArray(self):
        self.assertEqual(Data_Science.FeatureExtraction.FeatureExtraction.convertToArray(self.corpus), ['Pay Play . Poor choice . depend accuracy levels tactics . + stats . difference . Pay play system poor matching system destroys game Tennis ', 'download game . Game play spotty . ball disappears lose points . spot ball hits court , ball ', 'low amounts gold given . not progress purchasing items game . makes impossible collect rewards unlocking timers boxes extend upto hours not open multiple boxes ! sucks . Edit : complete PAY WIN game ', 'enjoyed game , got glitchy . Developers work not giving certain attributes power . frustrating . giving game try , developers bad , not able fix glitches'],"Successfully tested to Convert review of corpus to an Array")
# Run all unit test
if __name__ == '__main__':
    unittest.main()


