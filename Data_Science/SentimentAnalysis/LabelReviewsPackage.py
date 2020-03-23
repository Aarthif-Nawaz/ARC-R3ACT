# Author - Safiyyah Thur Rahman
# Purpose - Labelling the data using the vader lexicon
# pip install csv, pickle, vaderSentiment, nltk
import csv
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from Data_Science.TextPreprocessing.PreProcessing import *


def getReviews(packageName, size):
    import requests
    import sys
    #
    # # calls to the api from nodenpm package
    resp = requests.get("http://localhost:3000/api/apps/" + packageName + "/reviews/?num=" + size)
    #
    # # checks if the api works; returns 200
    print(resp.status_code)
    #
    # # UnicodeEncodeError: 'UCS-2' codec can't encode characters in position 2142-2142: Non-BMP character not supported in Tk
    # # This error doesnt come at python 3.8
    non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)
    # all the emojis has been converted into readable string
    decoded_json = str(resp.json()).translate(non_bmp_map)

    # converting String to json
    final_dict = eval(decoded_json)
    results = final_dict['results']
    review_list = []
    for d in results:
        review = d['text']
        review_list.append(review)
    # print(results)
    return review_list


def label_reviews(file_name, packageName, size):
    # get the list reviews using the getReviews method by sending the package name and the number of reviews
    review_list = getReviews(packageName, size)
    # train_data is a 2d array of a length equal to the number od reviews
    train_data = [[0] * 2] * len(review_list)
    reviews = []
    vaderSentimentAnalyzer = SentimentIntensityAnalyzer()
    for i in range(len(review_list)):
        print(i)
        # preprocess the review
        preProcessedText = reg_preprocessing(review_list[i])
        # get the polarity scores from the vader Sentiment Analyzer. This returns neu, neg and pos scores
        results = vaderSentimentAnalyzer.polarity_scores(preProcessedText)
        negScore = -1 * results["neg"]
        posScore = results["pos"]
        # add the pos and neg score to get an overall score for the sentiment
        sentiment = posScore + negScore
        # append the score and the preProcessedText to the train data array
        train_data[i][0] = preProcessedText
        train_data[i][1] = sentiment
        # save each element of the traindata to a file
        with open(file_name, 'a', newline='') as file:
            writer = csv.writer(file, delimiter=",")
            writer.writerow(train_data[i])
        file.close()


# label_reviews("LabelledData.csv", "com.instagram.android", "10000")
# label_reviews("LabelledData.csv", "com.snapchat.android", "10000")
# label_reviews("LabelledData.csv", "com.ubercab", "20000")
# label_reviews("LabelledData.csv", "com.viber.voip", "20000")
# label_reviews("LabelledData.csv", "com.zhiliaoapp.musically", "20000")
# label_reviews("LabelledData.csv", "com.imo.android.imoim", "10000")
# label_reviews("LabelledData.csv", "com.zhiliaoapp.musically", "20000")
# label_reviews("LabelledData.csv", "org.videolan.vlc", "20000")
# label_reviews("LabelledData.csv", "wp.wattpad", "20000")
# label_reviews("LabelledData.csv", "com.netmarble.btsw", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.powerpoint", "10000")
# label_reviews("LabelledData.csv", "com.sec.android.app.sbrowser", "10000")
# label_reviews("LabelledData.csv", "com.google.android.youtube", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.word", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.excel", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.officehubrow", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.launcher", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.emmx", "10000")
# label_reviews("LabelledData.csv", "com.microsoft.office.onenote", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.northpark.beautycamera", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.king.candycrushsaga", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.foreo.foreoapp", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "ch.threema.app", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.google.android.apps.subscriptions.red", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "sg.bigo.live", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.truecaller", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.marmalade.monopoly", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.supercell.clashofclans", "10000")
label_reviews("E:\\2nd Year\SDGP\ARC-R3ACT\Data_Science\CSVFiles\LabelledData.csv", "com.lenovo.anyshare.gps", "10000")