# Author - Mohamed Aarthif Nawaz
# Purpose - Text preprocessing

from TextPreprocessing.TextPreProcessing import *
# convert a list to string
def listToString(s):
    # initialize an empty string
    str1 = ""
    # traverse in the string
    for ele in s:
        str1 += ele + " "
        # return string
    return str1

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
