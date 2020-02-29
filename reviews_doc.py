# Step one for every Python app that talks over the web
#$ pip install requests
#Connecting with nodenpm package to extract app reviews
import json
import requests
import sys
import string

#calls to the api from nodenpm package
resp =  requests.get("http://localhost:3000/api/apps/com.pickme.passenger/reviews/?num=10")

#checks if the api works; returns 200
print(resp.status_code)

#UnicodeEncodeError: 'UCS-2' codec can't encode characters in position 2142-2142: Non-BMP character not supported in Tk
#This error doesnt come at python 3.8
non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)

#all the emojis has been converted into readble string
decoded_json =str(resp.json()).translate(non_bmp_map)

#converting String to json
final_dict = eval(decoded_json)

results = final_dict['results']
review_list =[]
for d in results:
   review = d['text']
   review_list.append(review)
###print(results)
##line =0 
##for review in review_list:
##   line+=1
##   print(line,review)

def getReviewList():
   return review_list
