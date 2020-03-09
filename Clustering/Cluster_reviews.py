import pandas as pd
import csv

def clustered_bug_fixes():
    corpus=[]
    original = []
    with open('../CSVFiles/results.csv', encoding='utf-8') as file:
       reader = csv.reader(file)
       for row in reader:
           for column in row:
               if column == "Bug_fix":
                   corpus.append(row[2])
                   original.append(row[1])

    return corpus,original

def clustered_feature_reqs():
    corpus = []
    original = []
    with open('../CSVFiles/results.csv', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            for column in row:
                if column == "Feature Request":
                    corpus.append(row[2])
                    original.append(row[1])

    return corpus,original

