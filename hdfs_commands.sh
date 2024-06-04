# mkdir
hdfs dfs -mkdir /geeks

# ls
hadoop fs -ls /

# put
hdfs dfs -put ../Desktop/AI.txt /geeks

# copyFromLocal
hdfs dfs -put ../Desktop/AI.txt /geeks

# get
hdfs dfs -get /abc/WC.txt /home/hduser/Downloads/WWC.txt

# getmerge
hdfs dfs -getmerge /abc/WC.txt /abc/WC2.txt /home/hduser/Desktop/Merge.txt

# copyToLocal
hdfs dfs -copyToLocal /abc/WC.txt /home/hduser/Desktop

# cat
hdfs dfs -cat /abc/WC.txt

# mv
hdfs dfs -cat /abc/WC.txt

# cp
hadoop dfs -cp /geeks /geeks_copied