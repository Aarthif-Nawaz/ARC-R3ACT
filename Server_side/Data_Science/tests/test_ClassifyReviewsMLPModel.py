# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in classify.py file

#Imports
import csv
import unittest
from Server_side.Data_Science.MLPModel import MLPModel
from Server_side.Data_Science.PreProcess import PreProcess



# Defining the class to perform unit test
class TestClassify(unittest.TestCase):

    #setting up the file
    def setUp(self):
        # Calling the csv files of reviews
        file = open("../tests/TestingData.csv", 'r')
        # Converting the reviews to a 2D array
        data = list(csv.reader(file, delimiter=','))
        self.preprocessed = []
        for i in range (1,len(data)):
            # Pre processing the reviews
           self.preprocessed.append(PreProcess.pre_process_review(data[i][0],"cluster"))
        # Closing the file
        file.close()

    # Testing the clustered review
    def test_clusterReviews(self):
        # Getting the pre processed reults
        result = MLPModel.clusterReviews(self.preprocessed)
        self.assertEqual(result['cluster_Results'],['Common', 'FeatureRequests', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'FeatureRequests', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'Common', 'FeatureRequests', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'BugFixes', 'FeatureRequests', 'Common', 'BugFixes', 'FeatureRequests', 'FeatureRequests', 'BugFixes', 'FeatureRequests', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'Common', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'FeatureRequests', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'Common', 'Common', 'Common', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'Common', 'FeatureRequests', 'FeatureRequests', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'BugFixes', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'BugFixes', 'FeatureRequests', 'BugFixes', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'Common', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'BugFixes', 'Common', 'BugFixes', 'Common', 'FeatureRequests', 'BugFixes', 'Common', 'BugFixes', 'BugFixes', 'Common', 'Common', 'BugFixes', 'Common', 'BugFixes', 'Common', 'Common', 'FeatureRequests', 'BugFixes', 'FeatureRequests', 'Common', 'Common', 'Common'])

if __name__ == '__main__':
    unittest.main()
