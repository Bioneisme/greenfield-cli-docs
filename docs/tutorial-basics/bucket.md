---
sidebar_position: 2
---

# Buckets

```bash
Options:                                                               
  -h, --help                                   display help for command

Commands:
  create <bucketName>                          creates a bucket
  delete <bucketName>                          delete a bucket
  get-id <bucketId>                            get a bucket by id
  get-name <bucketName>                        get a bucket by name
  update-quota <chargedQuota> <bucketName>     update charged quota or payment address
  update-visibility <visibility> <bucketName>  update bucket visibility (public-read, unspecified, private)
  help [command]                               display help for command
```

## Abstract

Bucket
In Greenfield, a bucket is a virtual container for storing objects. Users must assign each bucket a unique name that complies with DNS naming conventions, consisting of one or more labels separated by periods. It's crucial that the bucket name be globally unique within the Greenfield namespace to prevent two buckets from sharing the same name.

Once a bucket has been created, objects can be uploaded to it using various methods such as the gnfd command line or the SDKs. Objects within a bucket can be organized and managed like folders (also called "prefixes"). Additionally, it's possible to assign a unique key (a string value) to each object within the bucket to distinguish it from other objects.

Every user account can create several buckets. The account will become the "owner" of the bucket.

Each bucket should be associated with its own Primary SP, and the payment accounts for Read and Store functions. The owner's address will be the default payment account.


## Create your bucket

Create a bucket
---
```bash
greenfield-cli bucket create <bucketName>
```
Response example
```bash
{               
  code: 0,      
  height: 97082,
  txIndex: 0,   
  events: [     
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
  ],
  rawLog: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/greenfield.storage.MsgCreateBucket"},{"key":"sender","value":"0xbaEbB9A16b57919ba7240
A72B848777732B16638"},{"key":"module","value":"storage"}]},{"type":"greenfield.storage.EventCreateBucket","attributes":[{"key":"bucket_id","value":"\\"458\\""},{"key":"bucket_name"
,"value":"\\"newbu\\""},{"key":"charged_read_quota","value":"\\"0\\""},{"key":"create_at","value":"\\"1685264567\\""},{"key":"owner","value":"\\"0xbaEbB9A16b57919ba7240A72B84877773
2B16638\\""},{"key":"payment_address","value":"\\"0xbaEbB9A16b57919ba7240A72B848777732B16638\\""},{"key":"primary_sp_address","value":"\\"0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11
\\""},{"key":"source_type","value":"\\"SOURCE_TYPE_ORIGIN\\""},{"key":"status","value":"\\"BUCKET_STATUS_CREATED\\""},{"key":"visibility","value":"\\"VISIBILITY_TYPE_PUBLIC_READ\\"
"}]}]}]',
  transactionHash: '5CA009735D70E83475B20F789FCC858B640A4D65999111EFF6B4060174A7865B',
  gasUsed: 2400,
  gasWanted: 2400
}

```
## Delete bucket

---
```bash
greenfield-cli delete <bucketName>
```
Response example
```bash
{               
  {         
  code: 0,
  height: 97229,
  txIndex: 0,
  events: [
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
  rawLog: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/greenfield.storage.MsgDeleteBucket"},{"key":"sender","value":"0xbaEbB9A16b57919ba7240
A72B848777732B16638"},{"key":"module","value":"storage"}]},{"type":"greenfield.storage.EventDeleteBucket","attributes":[{"key":"bucket_id","value":"\\"458\\""},{"key":"bucket_name"
,"value":"\\"newbu\\""},{"key":"operator","value":"\\"0xbaEbB9A16b57919ba7240A72B848777732B16638\\""},{"key":"owner","value":"\\"0xbaEbB9A16b57919ba7240A72B848777732B16638\\""},{"k
ey":"primary_sp_address","value":"\\"0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11\\""}]}]}]',
  transactionHash: 'B79D250A0A76B052B93BA9DEA8EF265CD3399818767D2622B02487167E9137DB',
  gasUsed: 1200,
  gasWanted: 1200
}
```

## Update bucket visibiity

---
```bash
greenfield-cli bucket update-visibility <visibility> <bucketName>
```

## Update bucket quota

---
```bash
greenfield-cli bucket update-quota <chargedQuota> <bucketName>
```


## get Bucket info

---
```bash
greenfield-cli bucket get-name <bucketName>
```
Response example
```bash
{                                                       
  bucketInfo: 
  {                                         
    owner: '0xbaEbB9A16b57919ba7240A72B848777732B16638',
    bucketName: 'nurland',                              
    visibility: 1,                                      
    id: '459',                                          
    sourceType: 0,
    createAt: Long { low: 1685264942, high: 0, unsigned: false },
    paymentAddress: '0xbaEbB9A16b57919ba7240A72B848777732B16638',
    primarySpAddress: '0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11',
    chargedReadQuota: Long { low: 0, high: 0, unsigned: true },
    billingInfo: {
      priceTime: [Long],
      totalChargeSize: [Long],
      secondarySpObjectsSize: []
    },
    bucketStatus: 0
  }
}
```

