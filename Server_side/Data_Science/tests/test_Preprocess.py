# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in preProcess.py file

#Imports
import unittest
from Server_side.Data_Science.PreProcess import PreProcess

# Defining the class to perform unit test
class TestPreprocess(unittest.TestCase):
    # Perform unit testing to test all pre process functions along side with the review and the type of the review
    def test_pre_process_review(self):
        self.assertEqual(PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "svr"), "no pasting why be such basic feature miss this completely ruin my first impression of the app uninstalled","Successfully tested pre processed review for SVR")
        self.assertEqual(PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "cluster"), "no paste basic feature miss completely ruin impression app uninstalle", "Successfully tested pre processed review for cluster")
        self.assertEqual(PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "lexicon"), "No pasting basic feature missing ? completely ruined impression app uninstalled ", "Successfully tested pre processed review for lexicon")
        self.assertEqual(PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.","fe"), "No pasting . basic feature missing ? completely ruined impression app , uninstalled . ", "Successfully tested pre processed review for feature extraction")
    #Perform unit testing to check if white space was removed from reviews
    def test_remove_whiteSpace(self):
        self.assertEqual(PreProcess.remove_whitespace("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled."), "No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.","Successfully removed whitespace") 
    # Perfomr unit testing to check if list elements was converted to string
    def test_listToString(self):
        self.assertEqual(PreProcess.listToString(["App was working wonderfully"]), "App was working wonderfully","Successfully Tested lisToString")
    #Perform unit testing to check if emoji is getting demojized
    def test_de_emojize(self):
        self.assertEqual(PreProcess.de_emojize("The best part was reading the devs replies to some of the poor feedback, sweet/hilarious, and it's not even 10am. If you want a real uplifting giggle....YouTube ''Pogo - Nicey Nicey', you're welcome 😊❌"), "The best part was reading the devs replies to some of the poor feedback, sweet/hilarious, and it's not even 10am. If you want a real uplifting giggle....YouTube ''Pogo - Nicey Nicey', you're welcome :smiling_face_with_smiling_eyes::cross_mark:","Successfully Deomijzed review")
    #Perform unit testing to check if reviews are expanding contractions
    def test_expand_contractions(self):
        self.assertEqual(PreProcess.expand_contractions("i can't read the apps settings"), "i can not read the apps settings","Successfully expanded contractions")
    #Perform unit testing to check if reviews are pre processed according to SVR/MLP
    def test_reg_preprocessing(self):
        self.assertEqual(PreProcess.reg_preprocessing("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"), "Very elegant user friendly interface Truly recommended thanks amazing experience devs :) ", "Successfully pre processed review for SVR/MLP Models")
    # Perform unit testing to check if reviews are pre processed according to FeatureExtraction
    def test_preprocessing_fe(self):
        self.assertEqual(PreProcess.preprocessing_fe("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"),"elegant user friendly interface . Truly recommended , thanks amazing experience , devs :) ", "Successfully pre processed review for feature extraction")
    # Perform unit testing to check if reviews are pre processed according to lexicon based approach
    def test_pre_processing_labelled_data(self):
        self.assertEqual(PreProcess.pre_processing_labelled_data("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"), "very elegant and user friendly interface truly recommend thank for the amazing experience devs","Successfully pre processed review for lexicon based approach")


# Run all unit tests
if __name__ == '__main__':
    unittest.main()


