
import pandas as pd

from SentimentAnalysis.PredictOverallSentiment import predict_sentiment
# from Clustering.knnCluster import clusterReviews
# from FeatureExtraction.Finding_keywords import find_BugFixes,find_FeatureRequests

# def init():
#     clusterReviews()
#     find_BugFixes()
#     find_FeatureRequests()
#
#
# def featureRequest():
#     features = pd.read_csv('E:\\2nd Year\SDGP\ARC-R3ACT\CSVFiles\\feature_request_result.csv')
#     df_reviews = pd.DataFrame(features, columns=['Reviews', 'KeyWords'])
#     print(df_reviews)
#
#
# def bugFix():
#     bugs = pd.read_csv("E:\\2nd Year\SDGP\ARC-R3ACT\CSVFiles\\bug_fix_results.csv")
#     df_reviews = pd.DataFrame(bugs, columns=['Reviews', 'KeyWords'])
#     print(df_reviews)


def main():

    print("Application Review Classifier")
    print("=============================")
    print("1 - View Feature Requests")
    print("2 - View Bug Fix")
    print("3 - View Sentiment")
    print("4 - Exit")
    # # Initialize the system
    # init()
    choice = int(input("Enter Your Choice : "))
    while (choice != 4):
         if (choice == 1):
             featureRequest()
         elif (choice == 2):
             bugFix()
        if (choice == 3):
            predict_sentiment("CSVFiles\TestReviewsLabelled.csv")
        else:
            print("invalid Choice !")
        choice = int(input("Enter Your Choice : "))


main()

