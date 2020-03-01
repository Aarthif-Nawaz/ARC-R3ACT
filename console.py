import pandas as pd

def featureRequest():
    features = pd.read_csv(r'bug_fix_results.csv')
    df_reviews = pd.DataFrame(features, columns=['Reviews'])
    df_keywords = pd.DataFrame(features, columns=['KeyWords'])
    print(df_reviews, " ", df_keywords)
def bugFix():
    bugs = pd.read_csv(r'feature_reqs_result.csv')
    df_reviews = pd.DataFrame(bugs, columns=['Reviews'])
    df_keywords = pd.DataFrame(bugs, columns=['KeyWords'])
    print(df_reviews," ",df_keywords)

def main():
    print("Application Review Classifier")
    print("=============================")
    print("1 - View Feature Requests")
    print("2 - View Bug Fix")
    print("3 - View Sentiment")
    print("4 - Exit")
    choice = int(input("Enter Your Choice : "))
    while(choice != 4):
        if(choice==1):
            featureRequest()
        elif (choice==2):
            bugFix()
        elif(choice==3):
            print("Sentiment Code needed ")
            #sentiment()
        else:
            print("invalid Choice !")
        choice = int(input("Enter Your Choice : "))
main()

