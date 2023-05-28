---
sidebar_position: 7
---

# Objects

```bash
  put <visibility> <filePath> <bucketNameAndPath>  The "object put" command is used to upload a file from local which is less than 2G.
  create-folder <bucketNameAndPath>                Creates a Folder.
  get <bucketNameAndPath> <filepath>               The "object get" command is used to download an object to local path. This command will return the local file path where the     
                                                   object will be downloaded and the file size after successful execution.
  help [command]                                   display help for command

``` 

## Abstract

- Mirror object from Greenfield to BSC
- Create an object on BSC
- Grant/revoke permissions of objects on BSC to accounts/groups
- Copy objects on BSC
- Kick off the execution of an object on BSC
- Associate buckets to payment accounts on BSC


## Put an object to bucket
---

The "object put" command is used to upload a file from local which is less than 2G.
```bash
greenfield-cli object put <visibility> <filePath> <bucketNameAndPath>
```
example
```bash
greenfield-cli object put private data.xml gnfd://gnfd-bucket/gnfdnew
```
## Create a folder
---
creates a folder inside a bucket
```bash
greenfield-cli object create-folder <bucketNameAndPath>
```
example
```bash
greenfield-cli object create-folder bucketName/fileName
```

## Get an object
---
The "object get" command is used to download an object to local path. This command will return the local file path where the object will be downloaded and the file size after successful execution.
heads member
```bash
greenfield-cli object get <bucketNameAndPath> <filepath>
```
filepath==where to download


