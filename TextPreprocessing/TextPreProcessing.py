''' Importing all modules needed for text pre processing'''
import string
import nltk
from bs4 import BeautifulSoup
import spacy
# from google_play_scraper import reviews, Sort
from nltk import word_tokenize
from word2number import w2n
import emoji
import re

from nltk.corpus import stopwords

alpha = list(string.ascii_lowercase)
''' Getting all the alphabets lowercase letters into a list'''
nlp = spacy.load('en_core_web_sm')
'''Load the spacy model to check all the words that do not come under english dictionary'''

def listToString(s):
    # initialize an empty string
    str1 = ""

    # traverse in the string
    for ele in s:
        str1 += ele

        # return string
    return str1
'''all possible contractions that could possibly be in any english sentence appended to a dictionary in order to be exapnded'''
stop_words_real = set(stopwords.words('english'))
deselect_stop_words = ['no', 'not']
for w in deselect_stop_words:
    nlp.vocab[w].is_stop = False
'''Removing all stop words except for no and not as they come into use for sentiment analysis'''
def removeStopWordsWithoutPOS(text):
    stop_words = set(stopwords.words('english'))
    word_tokens = word_tokenize(text)
    filtered_sentence = []
    for w in word_tokens:
        if w not in stop_words:
            filtered_sentence.append(w)
            filtered_sentence.append(" ")
    text = listToString(filtered_sentence)
    return text
def convertIntegerWordsToNumbers(text):
    return w2n.word_to_num(text)
'''Converting all integer words to numbers'''

def de_emojize(text):
    return emoji.demojize(text)
'''Demojize the emojis in a text for better sentiment scores'''

def nonEnglishWords(text):
    words = list(set(nltk.corpus.words.words()))
    words.append("app")
    return " ".join(w for w in nltk.wordpunct_tokenize(text)
                    if w.lower() in words or not w.isalpha())
'''using nltk to remove all non english words'''

def strip_html_tags(text):
    """remove html tags from text"""
    soup = BeautifulSoup(text, "html.parser")
    stripped_text = soup.get_text(separator=" ")
    return stripped_text


def remove_whitespace(text):
    """remove extra whitespaces from text"""
    text = text.strip()
    return " ".join(text.split())

def expand_contractions(phrase):
    """Expand contractions from text"""
    phrase = re.sub(r"won\'t", "will not", phrase)
    phrase = re.sub(r"can\'t", "can not", phrase)
    # general
    phrase = re.sub(r"n\'t", " not", phrase)
    phrase = re.sub(r"\'re", " are", phrase)
    phrase = re.sub(r"\'s", " is", phrase)
    phrase = re.sub(r"\'d", " would", phrase)
    phrase = re.sub(r"\'ll", " will", phrase)
    phrase = re.sub(r"\'t", " not", phrase)
    phrase = re.sub(r"\'ve", " have", phrase)
    phrase = re.sub(r"\'m", " am", phrase)
    return phrase


def text_preprocessing(notProcessedText):
    """ The text pre processing function that takes the non pre processed text and pre processes it"""
    if notProcessedText is not None:
        # expand contractions
        notProcessedText = expand_contractions(notProcessedText)
        notProcessedText = strip_html_tags(notProcessedText)
        notProcessedText = de_emojize(notProcessedText)
        notProcessedText = nonEnglishWords(notProcessedText)
        # convert all characters to lowercase
        notProcessedText = re.sub('[^a-zA-Z]', " ", notProcessedText)
        notProcessedText = re.sub(r'!+(?=.*!)', '', notProcessedText)
        notProcessedText = removeStopWordsWithoutPOS(notProcessedText)
        notProcessedText = remove_whitespace(notProcessedText)
        notProcessedText = notProcessedText.lower()
        cleanText= notProcessedText

        doc = nlp(notProcessedText)  # tokenise the text based on POS tagging and NER

        clean_text = []

        for token in doc:
            flag = True
            edit = token.text
            # remove stop words
            if token.is_stop and token.pos_ != 'NUM':
                flag = False
            # remove punctuations
            if token.pos_ == 'PUNCT' and flag:
                flag = False
            # remove special characters
            if token.pos_ == 'SYM' and flag:
                flag = False
            # remove numbers
            if token.pos_ == 'NUM' or token.text.isnumeric() and flag:
                flag = False
            # convert number words to numeric numbers
            if token.pos_ == 'NUM' and flag:
                edit = w2n.word_to_num(token.text)
            # convert tokens to base form
            elif token.lemma_ != "-PRON-" and flag:
                edit = token.lemma_
            # append tokens edited and not removed to list
            if edit != "" and flag:
                clean_text.append(edit)

            clean_text = list(dict.fromkeys(clean_text))
            for i in clean_text:
                i = str(i)
                if (i.lower() in alpha):
                    clean_text.remove(i)
        """Return the clean text in to a dictionary if there is tokenized words in the documents that need to be preprocessed"""
        return cleanText
    else:
        """Return an empty string into a dictionary if there is no any tokenized word"""
        return {'clean_text': "", 'cleanText': ""}

removeStopWordsWithoutPOS("service mess order arrive driver restaurant food finally going delivery minute far house Near place receive notice order cancel : hour waiting")