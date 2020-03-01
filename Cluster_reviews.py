#Author - N.W.R.Amasha
#Last modified Date - 3/1/2019 10:49 A.M

import pandas as pd
import csv
from preprocessing import text_preprocessing

#get reviews of the cluster 'bug_fix' from results.csv
def clustered_bug_fixes():
    corpus=[]
    with open('results.csv',encoding='utf-8') as file:
       reader = csv.reader(file)
       for row in reader:
           for column in row:

               if column == "Bug_fix":
                   corpus.append(row[1])
    return corpus

#get reviews of the cluster 'bug_fix' from results.csv
def clustered_feature_reqs():
    corpus = []
    with open('results.csv', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            for column in row:
                if column == "Feature Request":
                    corpus.append(text_preprocessing(row[1]))
    return corpus

