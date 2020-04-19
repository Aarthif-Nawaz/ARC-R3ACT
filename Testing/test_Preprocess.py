# Authour - Aarthif Nawaz
# Purpose - Perform Unit tests for all the functions in preProcess.py file

#Imports
import unittest
import Data_Science.PreProcess

# Defining the class to perform unit test
class TestPreprocess(unittest.TestCase):
    # Perform unit testing to test all pre process functions along side with the review and the type of the review
    def test_pre_process_review(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "svr"), "no pasting why be such basic feature miss this completely ruin my first impression of the app uninstalled")
        self.assertEqual(Data_Science.PreProcess.PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "cluster"), "no paste basic feature miss completely ruin impression app uninstalle")
        self.assertEqual(Data_Science.PreProcess.PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.", "lexicon"), "No pasting basic feature missing ? completely ruined impression app uninstalled ")
        self.assertEqual(Data_Science.PreProcess.PreProcess.pre_process_review("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.","fe"), "No pasting . basic feature missing ? completely ruined impression app , uninstalled . ")
    #Perform unit testing to check if white space was removed
    def test_remove_whiteSpace(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.remove_whitespace("No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled."), "No pasting. Why is such a basic feature missing? This completely ruined my first impression of the app, uninstalled.")
    #Perform unit testing to check if emoji is getting demojized
    def test_de_emojize(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.de_emojize("The best part was reading the devs replies to some of the poor feedback, sweet/hilarious, and it's not even 10am. If you want a real uplifting giggle....YouTube ''Pogo - Nicey Nicey', you're welcome 😊❌"), "The best part was reading the devs replies to some of the poor feedback, sweet/hilarious, and it's not even 10am. If you want a real uplifting giggle....YouTube ''Pogo - Nicey Nicey', you're welcome :smiling_face_with_smiling_eyes::cross_mark:")
    #Perform unit testing to check if sentences are expanding contractions
    def test_expand_contractions(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.expand_contractions("i can't read the apps settings"), "i can not read the apps settings")
    #Perform unit testing to check if sentences are pre processed according to SVR/MLP
    def test_reg_preprocessing(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.reg_preprocessing("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"), "Very elegant user friendly interface Truly recommended thanks amazing experience devs :) ")
    # Perform unit testing to check if sentences are pre processed according to FeatureExtraction
    def test_preprocessing_fe(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.preprocessing_fe("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"),"elegant user friendly interface . Truly recommended , thanks amazing experience , devs :) ")
    # Perform unit testing to check if sentences are pre processed according to lexicon based approach
    def test_pre_processing_labelled_data(self):
        self.assertEqual(Data_Science.PreProcess.PreProcess.pre_processing_labelled_data("Very elegant and user friendly interface. Truly recommended, thanks for the amazing experience, devs :)"), "very elegant and user friendly interface truly recommend thank for the amazing experience devs")


# Run all unit tests
if __name__ == '__main__':
    unittest.main()


