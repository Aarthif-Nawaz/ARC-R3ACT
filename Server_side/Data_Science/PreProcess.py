# Author - Mohamed Aarthif Nawaz
# Purpose - Text preprocessing
# install - emoji, spacy,re
import string
import emoji
import re
import spacy

# Creating a class
class PreProcess:
     #Load the spacy model to check all the words that do not come under english dictionary
    nlp = spacy.load('en_core_web_sm')
    #Getting all the alphabets lowercase letters into a list 
    alpha = list(string.ascii_lowercase)
   
    # function used to pre_process a review depending on which type of algorithm is going to use the corpus.
    @staticmethod
    def pre_process_review(review, level):
        #if the reviews is None then "" is returned else the preprocessing takes place
        if review is not None:
            # Assigning the review to pre_processed review
            pre_processed_review = review
            if level == "svr":
                # pre-processing required by the SVR/MLP
                pre_processed_review = PreProcess.pre_processing_labelled_data(review)
            elif level == "cluster":
                # preprocessing required by the MLP model used to cluster the reviews
                pre_processed_review = PreProcess.reg_preprocessing(review) # Calling the MLP model's Preprocess function for the unpreprocessed review
                pre_processed_review = PreProcess.pre_processing_labelled_data(pre_processed_review) # Calling the labelled data Preprocessing function for the unpreprocessed review
            elif level == "lexicon":
                # pre_processing required for the lexicon sentiment analysis
                # Preprocessing reviews to convert emojis to rextual format
                pre_processed_review = PreProcess.de_emojize(review)
                pre_processed_review = PreProcess.reg_preprocessing(pre_processed_review)
                # preprocessing that is performed before feature extraction is performed
            elif level == "fe":
                pre_processed_review = PreProcess.preprocessing_fe(review)
            # Returning the preprocessed reviews
            return pre_processed_review 
        else:
            # returning nothing if there was no review given
         return ""

    @staticmethod
    def remove_whitespace(text):
        """remove extra whitespaces from text"""
        text = text.strip()
        return " ".join(text.split())

    @staticmethod
    def de_emojize(text):
        '''Demojize the emojis in a text for better sentiment scores'''
        return emoji.demojize(text)    

    # convert a list to string
    @staticmethod
    def listToString(s):
        # using a built-in function to convert a array/list to String
        newSentence = " ".join(s)
        return newSentence

    @staticmethod
    def expand_contractions(phrase):
        """Expand contractions from text"""
        # phrase = re.sub(r"won\'t", "will not", phrase)
        # phrase = re.sub(r"can\'t", "can not", phrase)
        # general
        # remove words that have contractions of ending words 'not'
        phrase = re.sub(r"n\'t", " not", phrase)
        phrase = re.sub(r"\'t", " not", phrase)
        return phrase

    # pre_processing required for the lexicon sentiment analysis
    @staticmethod
    def reg_preprocessing(notProcessedText):
        if notProcessedText is not None:
            # for clustering deemojizing is not performed, this can be identified using the tode_emojize variable
            notProcessedText = PreProcess.expand_contractions(notProcessedText)
            # Removing all the punctuations except for the punctuations specified below
            notProcessedText = re.sub('[^a-zA-Z\-|&#;@!?()/:\\\{}]', " ", notProcessedText)
            # removing extra whitespaces from the text after the removing of punctuations
            notProcessedText = PreProcess.remove_whitespace(notProcessedText)
            # tokenizing the string and removing the stop words
            doc = PreProcess.nlp(notProcessedText)
            clean_text = ""
            for token in doc:
                flag = True
                edit = token.text
                # remove stop words and does not remove the words not no and very
                if token.is_stop and token.pos_ != 'NUM' and edit.lower() != "not" and edit.lower() != "no" and edit.lower() != "very":
                    flag = False
                    # append tokens edited and not removed to list
                if edit != "" and flag:
                    clean_text = clean_text + edit + " "
            return clean_text
        else:
            return ""

    # preprocessing that is performed before feature extraction is performed
    @staticmethod
    def preprocessing_fe(notProcessedText):
        # check if review was given then do the following functions
        if notProcessedText is not None: 
             # tokenizing the string and removing the stop words
            doc = PreProcess.nlp(notProcessedText)
            clean_text = ""
            for token in doc:
                flag = True
                edit = token.text
                # remove stop words and words like very, ok and words of type INTJ like psst, ouch, bravo, hello and NUM like 1, 2017, one, seventy-seven, IV, MMXIV
                if (
                        token.pos_ == "INTJ" or token.is_stop or token.pos_ == 'NUM' or edit.lower() == "very" or edit.lower() == "ok") and (
                        edit.lower() != "not" and edit.lower() != "no"):
                    flag = False
                    # append tokens edited and not removed to list
                if edit != "" and flag:
                    clean_text = clean_text + edit + " "
                    # return the cleaned text
            return clean_text 
        else:
             # otherwise return an empty string
            return ""

    # pre-processing required by the SVR/MLP
    @staticmethod
    def pre_processing_labelled_data(text):
        if text is not None:
            # converts the text to lower case
            text = text.lower()
            # tokenise text
            doc = PreProcess.nlp(text)
            clean_text = []
            # removes any word that is a number
            for token in doc:
                flag = True
                edit = token.text
                # remove punctuations
                if token.pos_ == 'PUNCT':
                    flag = False
                # remove special characters
                if token.pos_ == 'SYM':
                    flag = False
                # remove numbers
                if (token.pos_ == 'NUM' or token.text.isnumeric()):
                    flag = False
                # convert tokens to base form
                elif token.lemma_ != "-PRON-":
                    edit = token.lemma_
                # append tokens edited and not removed to list
                if edit != "" and flag == True:
                    clean_text.append(edit)
                clean_text = list(dict.fromkeys(clean_text))
                for i in clean_text:
                    i = str(i)
                    if i.lower() in PreProcess.alpha:
                        clean_text.remove(i)
                        
            return PreProcess.listToString(clean_text)
        # return the cleaned text after converting the list of words to string
        else:
            # otherwise return an empty string
            return ""
