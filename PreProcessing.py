# Author - Mohamed Aarthif Nawaz
# Purpose - Text preprocessing
import re
import string

import emoji
import nltk
import spacy
from nltk.corpus import stopwords
from word2number import w2n

alpha = list(string.ascii_lowercase)

nlp = spacy.load('en_core_web_sm')
# dictionary of contractions
contractions = {
    "ain't": "am not / are not / is not / has not / have not",
    "aren't": "are not / am not",
    "can't": "cannot",
    "can't've": "cannot have",
    "'cause": "because",
    "could've": "could have",
    "couldn't": "could not",
    "couldn't've": "could not have",
    "didn't": "did not",
    "doesn't": "does not",
    "don't": "do not",
    "hadn't": "had not",
    "hadn't've": "had not have",
    "hasn't": "has not",
    "haven't": "have not",
    "he'd": "he had / he would",
    "he'd've": "he would have",
    "he'll": "he shall / he will",
    "he'll've": "he shall have / he will have",
    "he's": "he has / he is",
    "how'd": "how did",
    "how'd'y": "how do you",
    "how'll": "how will",
    "how's": "how has / how is / how does",
    "I'd": "I had / I would",
    "I'd've": "I would have",
    "I'll": "I shall / I will",
    "I'll've": "I shall have / I will have",
    "I'm": "I am",
    "I've": "I have",
    "isn't": "is not",
    "it'd": "it had / it would",
    "it'd've": "it would have",
    "it'll": "it shall / it will",
    "it'll've": "it shall have / it will have",
    "it's": "it has / it is",
    "let's": "let us",
    "ma'am": "madam",
    "mayn't": "may not",
    "might've": "might have",
    "mightn't": "might not",
    "mightn't've": "might not have",
    "must've": "must have",
    "mustn't": "must not",
    "mustn't've": "must not have",
    "needn't": "need not",
    "needn't've": "need not have",
    "o'clock": "of the clock",
    "oughtn't": "ought not",
    "oughtn't've": "ought not have",
    "shan't": "shall not",
    "sha'n't": "shall not",
    "shan't've": "shall not have",
    "she'd": "she had / she would",
    "she'd've": "she would have",
    "she'll": "she shall / she will",
    "she'll've": "she shall have / she will have",
    "she's": "she has / she is",
    "should've": "should have",
    "shouldn't": "should not",
    "shouldn't've": "should not have",
    "so've": "so have",
    "so's": "so as / so is",
    "that'd": "that would / that had",
    "that'd've": "that would have",
    "that's": "that has / that is",
    "there'd": "there had / there would",
    "there'd've": "there would have",
    "there's": "there has / there is",
    "they'd": "they had / they would",
    "they'd've": "they would have",
    "they'll": "they shall / they will",
    "they'll've": "they shall have / they will have",
    "they're": "they are",
    "they've": "they have",
    "to've": "to have",
    "wasn't": "was not",
    "we'd": "we had / we would",
    "we'd've": "we would have",
    "we'll": "we will",
    "we'll've": "we will have",
    "we're": "we are",
    "we've": "we have",
    "weren't": "were not",
    "what'll": "what shall / what will",
    "what'll've": "what shall have / what will have",
    "what're": "what are",
    "what's": "what has / what is",
    "what've": "what have",
    "when's": "when has / when is",
    "when've": "when have",
    "where'd": "where did",
    "where's": "where has / where is",
    "where've": "where have",
    "who'll": "who shall / who will",
    "who'll've": "who shall have / who will have",
    "who's": "who has / who is",
    "who've": "who have",
    "why's": "why has / why is",
    "why've": "why have",
    "will've": "will have",
    "won't": "will not",
    "won't've": "will not have",
    "would've": "would have",
    "wouldn't": "would not",
    "wouldn't've": "would not have",
    "y'all": "you all",
    "y'all'd": "you all would",
    "y'all'd've": "you all would have",
    "y'all're": "you all are",
    "y'all've": "you all have",
    "you'd": "you had / you would",
    "you'd've": "you would have",
    "you'll": "you shall / you will",
    "you'll've": "you shall have / you will have",
    "you're": "you are",
    "you've": "you have"
}
# remove no and not from stop word
stop_words_real = set(stopwords.words('english'))
deselect_stop_words = ['no', 'not']
for w in deselect_stop_words:
    nlp.vocab[w].is_stop = False


# remove non English words
def nonEnglishWords(text):
    words = list(set(nltk.corpus.words.words()))
    words.append("app")
    return " ".join(w for w in nltk.wordpunct_tokenize(text)
                    if w.lower() in words or not w.isalpha())


# convert integers to words
def convertIntegerWordsToNumbers(text):
    return w2n.word_to_num(text)


# convert emojis to String
def de_emojize(text):
    return emoji.demojize(text)


# remove extra whitespace
def remove_whitespace(text):
    """remove extra whitespaces from text"""
    text = text.strip()
    return " ".join(text.split())


contractions_re = re.compile('(%s)' % '|'.join(contractions.keys()))


# convert a list to string
def listToString(s):
    # initialize an empty string
    str1 = ""

    # traverse in the string
    for ele in s:
        str1 += ele + " "

        # return string
    return str1


# expand contractions
def expand_contractions(s, contractions=contractions):
    def replace(match):
        return contractions[match.group(0)]

    return contractions_re.sub(replace, s)


# pre_processing required for the lexicon sentiment analysis
def reg_preprocessing(notProcessedText):
    if notProcessedText is not None:
        notProcessedText = de_emojize(notProcessedText)
        notProcessedText = expand_contractions(notProcessedText)
        notProcessedText = re.sub('[^a-zA-Z\-|&#;@!?()/:\\\{}]', " ", notProcessedText)
        notProcessedText = nonEnglishWords(notProcessedText)
        notProcessedText = remove_whitespace(notProcessedText)
        # tokenizing the string and removing the stop words
        doc = nlp(notProcessedText)
        clean_text = ""
        for token in doc:
            flag = True
            edit = token.text
            # remove stop words
            if token.is_stop and token.pos_ != 'NUM' and edit.lower() != "not" and edit.lower() != "no":
                flag = False
                # append tokens edited and not removed to list
            if edit != "" and flag:
                clean_text = clean_text + edit + " "
        return clean_text
    else:
        return ""


# pre-processing required by the Naive Bayes Classifier
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


def text_pre_processing(text):
    text = reg_preprocessing(text)
    return pre_processing_labelled_data(text)
