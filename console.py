
import pandas as pd

from PredictOverallSentiment import predict_sentiment
from knnCluster import clusterReviews
from Finding_keywords import find_BugFixes,find_FeatureRequests

def init():
    clusterReviews()
    find_BugFixes()
    find_FeatureRequests()


def featureRequest():
    features = pd.read_csv(r'feature_reqs_result.csv')
    df_reviews = pd.DataFrame(features, columns=['Reviews', 'KeyWords'])
    print(df_reviews)


def bugFix():
    bugs = pd.read_csv(r'bug_fix_results.csv')
    df_reviews = pd.DataFrame(bugs, columns=['Reviews', 'KeyWords'])
    print(df_reviews)


def main():

    print("Application Review Classifier")
    print("=============================")
    print("1 - View Feature Requests")
    print("2 - View Bug Fix")
    print("3 - View Sentiment")
    print("4 - Exit")
    # Initialize the system
    init()
    choice = int(input("Enter Your Choice : "))
    while (choice != 4):
        if (choice == 1):
            featureRequest()
        elif (choice == 2):
            bugFix()
        elif (choice == 3):
            predict_sentiment("TestLabelledData.csv")
        else:
            print("invalid Choice !")
        choice = int(input("Enter Your Choice : "))


main()

