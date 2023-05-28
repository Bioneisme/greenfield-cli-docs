---
sidebar_position: 4
---

# Accounts
```bash
Options:                                     
  -h, --help         display help for command

Commands:
  my-info            get account info
  info <address>     get account info by address
  create             create web3 account
  my-balance         get my account balance
  balance <address>  get account balance
  mls [options]      module accounts
  help [command]     display help for command
```

## Abstract

The bank module is responsible for handling BNB transfers between accounts and module accounts.

In addition, the bank module tracks and provides query support for the total supply of BNB in the application


## Create Web3 account

Creates a web 3 account
---
```bash
greenfield-cli account create 
```
Response example
```bash
{                                                                                  
  address: '0x4110303407c4FD74a53baa2aF65E7c51564079c6',                           
  privateKey: '0xed4da9ee8567293922bc9d4b963eb96abc74da6d55c7c5cab0278f396bba93f1',
  signTransaction: [Function: signTransaction],                                    
  sign: [Function: sign],                                                          
  encrypt: [Function: encrypt]                                                     
}
```
## Get account info

Get account info
---
```bash
greenfield-cli account get-info
```
Response example
```bash
{                                                            
  address: '0xbaEbB9A16b57919ba7240A72B848777732B16638',     
  pubKey: {                                                  
    typeUrl: '/cosmos.crypto.eth.ethsecp256k1.PubKey',       
    value: 'CiECdmKfAyM+9sAoJZ/WVcDHM56kschR0okC1rvLjCNfH2g='
  },                                                         
  accountNumber: '1611',
  sequence: '7'
}
```

## Get account info by address

get account info by address
---
```bash
greenfield-cli account info <address>
```
Response example
```bash
{                                                            
  address: '0xbaEbB9A16b57919ba7240A72B848777732B16638',     
  pubKey: {                                                  
    typeUrl: '/cosmos.crypto.eth.ethsecp256k1.PubKey',       
    value: 'CiECdmKfAyM+9sAoJZ/WVcDHM56kschR0okC1rvLjCNfH2g='
  },                                                         
  accountNumber: '1611',
  sequence: '7'
}
```

## Get my account balance

get my account balance
---
```bash
greenfield-cli bucket update-quota <chargedQuota> <bucketName>
```
Response example
```bash
{ balance: { denom: 'BNB', amount: '9930473024127594' } }
```

## Module accounts
---
Get all module accounts:
```bash
greenfield-cli account mls -a 
```
Response example
```bash
[                                                                
  {                                                              
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',               
    value: Uint8Array(85) [                                      
       10,  46,  10,  42,  48, 120,  52, 102, 101,  65,  55,  54,
       52,  50,  55,  66,  56,  51,  52,  53,  56,  54,  49, 101,
       56,  48,  65,  51,  53,  52,  48,  97,  56,  97,  57,  68,
       57,  51,  54,  70,  68,  51,  57,  51,  57,  49,  24,  64,
       18,  18,  98, 111, 110, 100, 101, 100,  95, 116, 111, 107,
      101, 110, 115,  95, 112, 111, 111, 108,  26,   6,  98, 117,
      114, 110, 101, 114,  26,   7, 115, 116,  97, 107, 105, 110,
      103
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(57) [
       10,  47,  10,  42, 48, 120,  49, 55,  70,  50,  57,
       66,  48,  55,  51, 49,  52,  51, 68,  56,  99, 100,
       57,  55,  98,  53, 98,  66, 101, 52,  57,  50,  98,
       68,  69, 102, 102, 69,  67,  49, 67,  53, 102, 101,
       69,  53,  24, 210, 12,  18,   6, 98, 114, 105, 100,
      103, 101
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(68) [
      10,  46,  10,  42,  48, 120,  66,  55,  51, 67,  48,  65,
      97,  99,  52,  67,  49,  69,  54,  48,  54, 67,  54,  69,
      52,  57,  53, 100,  56,  52,  56,  49,  57, 54,  51,  53,
      53, 101,  54,  67,  66,  51,  48,  51,  56, 49,  24,  67,
      18,  10,  99, 114, 111, 115, 115,  99, 104, 97, 105, 110,
      26,   6, 109, 105, 110, 116, 101, 114
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(62) [
       10,  46,  10,  42,  48, 120,  57,  51, 51,  53,  52,  56,
       52,  53,  48,  51,  48,  50,  55,  52, 99,  68,  52,  98,
      102,  49,  54,  56,  54,  65,  98, 100, 54,  48,  65,  66,
       50,  56,  69,  67,  53,  50, 101,  49, 97,  55,  24,  63,
       18,  12, 100, 105, 115, 116, 114, 105, 98, 117, 116, 105,
      111, 110
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(63) [
       10,  46,  10,  42,  48, 120, 102,  49,  56,  50,  57, 54,
       55,  54,  68,  66,  53,  55,  55,  54,  56,  50,  69, 57,
       52,  52, 102,  99,  51,  52,  57,  51, 100,  52,  53, 49,
       66,  54,  55,  70, 102,  51,  69,  50,  57,  70,  24, 62,
       18,  13, 102, 101, 101,  95,  99, 111, 108, 108, 101, 99,
      116, 111, 114
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(61) [
       10, 46,  10,  42,  48, 120,  55,  98,  53,  70, 101,  50,
       50, 66,  53,  52,  52,  54, 102,  55,  67,  54,  50,  69,
       97, 50,  55,  66,  56,  66,  68,  55,  49,  67, 101,  70,
       57, 52, 101,  48,  51, 102,  51, 100,  70,  50,  24,  66,
       18,  3, 103, 111, 118,  26,   6,  98, 117, 114, 110, 101,
      114
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(89) [
      10,  46,  10,  42,  48, 120,  53,  57,  49,  49,  66,  56,
      52,  52, 100,  55,  66,  67,  50,  50,  52,  54,  53,  52,
      70,  69,  48,  68,  67, 100,  49,  54,  66,  65,  98,  68,
      50,  68,  50,  53,  51, 102,  50, 102, 100,  70,  24,  65,
      18,  22, 110, 111, 116,  95,  98, 111, 110, 100, 101, 100,
      95, 116, 111, 107, 101, 110, 115,  95, 112, 111, 111, 108,
      26,   6,  98, 117, 114, 110, 101, 114,  26,   7, 115, 116,
      97, 107, 105, 110, 103
    ]
  },
  {
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(83) [
       10,  47,  10,  42,  48, 120,  48,  52,  48, 102,  70,  68,
       53,  57,  50,  53,  68,  52,  48,  69,  49,  49,  99,  54,
       55,  98,  55,  50,  51,  56,  65,  55, 102,  99,  57,  57,
       53,  55,  56,  53,  48,  66,  56,  98,  57,  97,  24, 128,
        1,  18,   7, 112,  97, 121, 109, 101, 110, 116,  26,   6,
      109, 105, 110, 116, 101, 114,  26,   6,  98, 117, 114, 110,
      101, 114,  26,   7, 115, 116,  97, 107, 105, 110, 103
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(61) [
       10, 46,  10,  42,  48, 120,  98, 101, 49,  56,  98,  56,
       53, 70,  55,  55, 102,  99,  48,  50, 52,  68,  66,  51,
       55, 57,  65,  99,  70,  49,  57,  69, 56,  97,  49,  99,
       69, 54,  50,  51,  48,  55,  97,  98, 55,  98,  24,  68,
       18,  2, 115, 112,  26,   7, 115, 116, 97, 107, 105, 110,
      103
    ]
  }
]
```
Get module account by its name
```bash 
greenfield-cli account mls -n, --name <name>
```
Response example
```bash
{
    typeUrl: '/cosmos.auth.v1beta1.ModuleAccount',
    value: Uint8Array(89) [
      10,  46,  10,  42,  48, 120,  53,  57,  49,  49,  66,  56,
      52,  52, 100,  55,  66,  67,  50,  50,  52,  54,  53,  52,
      70,  69,  48,  68,  67, 100,  49,  54,  66,  65,  98,  68,
      50,  68,  50,  53,  51, 102,  50, 102, 100,  70,  24,  65,
      18,  22, 110, 111, 116,  95,  98, 111, 110, 100, 101, 100,
      95, 116, 111, 107, 101, 110, 115,  95, 112, 111, 111, 108,
      26,   6,  98, 117, 114, 110, 101, 114,  26,   7, 115, 116,
      97, 107, 105, 110, 103
    ]
  },
```


