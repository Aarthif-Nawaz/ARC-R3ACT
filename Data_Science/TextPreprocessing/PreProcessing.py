# Author - Mohamed Aarthif Nawaz
# Purpose - Text preprocessing
# install - emoji, spacy
import string

import emoji
import re
import spacy

nlp = spacy.load('en_core_web_sm')
'''Load the spacy model to check all the words that do not come under english dictionary'''
alpha = list(string.ascii_lowercase)
''' Getting all the alphabets lowercase letters into a list'''


def remove_whitespace(text):
    """remove extra whitespaces from text"""
    text = text.strip()
    return " ".join(text.split())


def de_emojize(text):
    return emoji.demojize(text)


'''Demojize the emojis in a text for better sentiment scores'''


# convert a list to string
def listToString(s):
    # using a built-in function to convert a array/list to String
    newSentence = " ".join(s)
    return newSentence


def expand_contractions(phrase):
    """Expand contractions from text"""
    phrase = re.sub(r"won\'t", "will not", phrase)
    phrase = re.sub(r"can\'t", "can not", phrase)
    # general
    phrase = re.sub(r"n\'t", " not", phrase)
    phrase = re.sub(r"\'t", " not", phrase)
    return phrase


# pre_processing required for the lexicon sentiment analysis
def reg_preprocessing(notProcessedText, tode_emojize):
    if notProcessedText is not None:
        #for clustering deemojizing is not performed, this can be identified using the tode_emojize variable
        if tode_emojize:
            notProcessedText = de_emojize(notProcessedText)
        notProcessedText = expand_contractions(notProcessedText)
        notProcessedText = re.sub('[^a-zA-Z\-|&#;@!?()/:\\\{}]', " ", notProcessedText)
        notProcessedText = remove_whitespace(notProcessedText)
        # tokenizing the string and removing the stop words
        doc = nlp(notProcessedText)
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
def preprocessing_fe(notProcessedText):
    if notProcessedText is not None:
        doc = nlp(notProcessedText)
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
        return clean_text
    else:
        return ""


# pre-processing required by the SVR/MLP
def pre_processing_labelled_data(text):
    if text is not None:
        # converts the text to lower case
        text = text.lower()
        # tokenise text
        doc = nlp(text)
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
                if i.lower() in alpha:
                    clean_text.remove(i)
        return listToString(clean_text)
    else:
        return ""

#preprocessing required by the MLP model used to cluster the reviews
def cluster_pre_processing(text):
    text = reg_preprocessing(text, False)
    return pre_processing_labelled_data(text)
