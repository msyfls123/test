# -*-coding: utf-8 -*-
dataSet=[]
import csv
csvfile=open("namelist2.csv","r")
reader = csv.DictReader(csvfile)
for line in reader:
    tempDict={
    "cname":line["cname"].decode("utf-8"),
    "ename":line["ename"],
    "sub":line["sub"],
    "zone":line["zone"]}
    dataSet.append(tempDict)
    # print line["zone"]


# 0-47,48-91,92-127,128-140,141-164

import json
output = open("output2.json","w")
output.write(json.dumps(dataSet))
