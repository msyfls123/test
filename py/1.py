# -*-coding: utf-8 -*-
dataSet={}
dataOut=[]
nameArr=[]
import csv
csvfile=open("data2.csv","r")
reader = csv.DictReader(csvfile)
for line in reader:
    dataSet[line["name"].decode("utf-8")]=[line["sub"],line["ename"]]
# for k in dataSet:
    # print "dict[%s] =" % k,dataSet[k]

index=open("index.txt","r")
for lin in index:
    tempArr=lin.decode("utf-8").split(",")
    nameArr=nameArr+tempArr
for i in nameArr:
    try:
        dataOut.append({"name":i,"sub":dataSet[i][0],"eng":dataSet[i][1]})
        # print "%s =" % i,dataSet[i]
        pass
    except KeyError as e:
        dataOut.append({"name":i,"sub":"Not Found","eng":"Not Found"})
        # print "Not found"
import json
output = open("output.json","w")
output.write(json.dumps(dataOut))
abc="老妈"
efg="老妈,老大妈"
print efg.count(abc)
