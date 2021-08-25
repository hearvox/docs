---
id: working_with_hive
title: Working with Hive Database
---

**Only supported on Databricks compute**

Apache Hive is a data warehouse software project built on top of Apache Hadoop for providing data query and analysis. Hive gives an SQL-like interface to query data stored in various databases and file systems that integrate with Hadoop.

This article outlines how to use Hive as a source or target in Ingestion activity. Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. 

## Apache Hive as a Source

:::note: 
In the Datastore section we can choose to read four Data either as a Table or through SQL (in the form of a query).
:::

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.<br/> Also, when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source|||



## Apache Hive as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the content of source or reject data is expected to be -<br/>**append:** To append the existing data in the Hive Table.<br/>**overwrite:**This will do an overwrite of data for a subset of partitions that are present in the source. The Partition columns are detected based on the source.|Append|Yes|
|Auto create table|Guzzle provides the Auto Create Table feature in the Target Section. When selected it will automatically create a Target Table for us with the name as specified in the Table section above. In the schema section we have the Partition indicator. This indicator is used when guzzle auto creates a table for Hive to decide the partition column. The order of partition columns will be according to how it appears in the Schema Section.<br/> This can be seen in the figure below:|True|Yes|

## Interface for Hive database is

![image alt text](/img/docs/how-to-guides/ingest_data/hive.png)

:::note 
When Guzzle creates a Table using the Auto Create Table option it will use the Partition Column Setting to determine the Partition Columns to use. The sequence will be as per the order specified.
:::