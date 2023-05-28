---
sidebar_position: 5
---

# Payment

```bash
Usage: index payment [options] [command]                                                                            
                                                                                                                    
payment                                                                                                             
                                                                                                                    
Options:                                                                                                            
  -h, --help              display help for command                                                                  
                                                                                                                    
Commands:                                                                                                           
  create-payment          create payment account                                                                    
  get-payment <address>   get payment account                                                                       
  get-payments            get payment accounts by owner
  transfer <to> <amount>  transfer
  help [command]          display help for command
```
## Abstract

The payment module is responsible for the payment of the greenfield network. It is mainly used to manage the payment account of the user, and the payment account is used to pay the storage fee. The payment module also provides the function of automatic settlement of the user's payment account.

## Create payment account

---
```bash
greenfield-cli payment create-payment
```

## Get payment account

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
---
```bash
greenfield-cli account info <address>
```
Response example
```bash
{
  "payment_account": [
    {
      "addr": "0x1C893441AB6c1A75E01887087ea508bE8e07AAae",
      "owner": "0xbaEbB9A16b57919ba7240A72B848777732B16638",
      "refundable": true
    }
  ],
  "pagination": {
    "next_key": "string",
    "total": "string"
  }
}
```

## get payment accounts by owner
---
```bash
greenfield-cli payment get-payments
```
Response example
```bash
{
  "payment_account": [
    {
      "addr": "string",
      "owner": "string",
      "refundable": true
    }
  ],
}
```

## Transfer
---
transer amount to address
```bash
 greenfield-cli payment transfer <toAddress> <amount>
```
Response example
```bash
{
  code: 0,
  height: 97964,
  txIndex: 2,
  events: [
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
e":"100000BNB"}]},{"type":"message","attributes":[{"key":"sender","value":"0xbaEbB9A16b57919ba7240A72B848777732B16638"}]}]}]',
  transactionHash: 'F88ABEBA8D6460C1977470E5D40D1B67EA422914D96162CB362DCAF9C06390EC',
  gasUsed: 1200,
  gasWanted: 1200
}
]
```
