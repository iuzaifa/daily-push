
## First Create Database 
``` CREATE DATABASE test```
-  test is databse name it could be any this acording requirement.. huzaifaDB, doctorappDB.... 

## this query to see entire (how much ) databases exits  
```select datname from pg_database```
- Example 
```
postgres=# select datname from pg_database;
  datname
-----------
 postgres
 huzaifaDB
 template1
 template0
 testdb
 test
(6 rows) 
```

---
### To Select particular db or change use 
```\c database_name``` 
 ```\c test```
You are now connected to database "test" as user "postgres".
---
## To Drop database command 

``` drop database name_database;```
---
 
