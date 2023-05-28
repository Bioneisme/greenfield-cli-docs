---
sidebar_position: 1
---

# Storage providers
---
## Abstract

The storage providers (SP) are storage service infrastructures that organizations or individuals provide and the corresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and will respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for user rights and authentications.

The SP module is responsible for managing and keeping storage providers in the network. This includes:

- Metadata: Basic information, such as address, tokens, and status, about each SP.
- Deposit: Aspiring SPs must stake tokens to guarantee their capacity to offer storage services.
- Slash: Stored data on an SP is occasionally challenged. If the challenge succeeds, the SP is penalized by losing some of its staked tokens.
- Reputation: We are implementing a reputation system to assess the quality of each SP's service. Users can select an SP based on its reputation score to store their data.
- Exit: SPs can leave voluntarily as long as they adhere to specific rules and recover their staked tokens. Greenfield may also force an SP to exit if it lacks sufficient staked tokens or its reputation score falls below the minimum requirements for an SP.

---
```bash
greenfield-cli sp
```


```
Options:
  -h, --help       display help for command

Commands:
  ls               list all storage providers
  secondary        secondary storage price, including update time and store
                   price
  info <address>   info with the sp chain address
  price <address>  price with the sp chain address
  help [command]   display help for command
```

## List storage providers
```bash
greenfield-cli sp ls
```
Response example
```bash
[
  {
    operatorAddress: '0x22804504786F44289D4156E7317142e25B92c00e',
    fundingAddress: '0xd641C35f947Eb60676f0e0793691bB174256C651',
    sealAddress: '0xE4F1Ac4B9312724D2819347c5c91252b650C4AEb',
    approvalAddress: '0xaF07AdBb21029adf12FB6E4515Ed8dA0A7e252a2',
    gcAddress: '0xfF755134416a0Ebc4A614f951163a2Ecf48C069b',
    totalDeposit: '1000000000000000000000',
    status: 0,
    endpoint: 'https://gnfd-testnet-sp-2.bnbchain.org',
    description: {
      moniker: 'Zenon',
      identity: '',
      website: 'https://gnfd-testnet-sp-2.bnbchain.org',
      securityContact: '',
      details: 'Zenon'
    }
  },
  {
    operatorAddress: '0x3CFC8b2095DA8F0722412Dc16f8A067942d2c697',
    fundingAddress: '0xE44c4e725598CCa7Da3c506869d658a84e599983',
    sealAddress: '0x43416fd2Dd08Bc6F2004B9a5fA53686B7F541d58',
    approvalAddress: '0x0DC08D602aaAAAA7e2fD604f9f96DdD2cD67FE51',
    gcAddress: '0xD27faC13b0C38f57ce1840Fc55e7B8b66dEBB342',
    totalDeposit: '1000000000000000000000',
    status: 0,
    endpoint: 'https://gnfd-testnet-sp-6.bnbchain.org',
    description: {
      moniker: 'Gadgetron',
      identity: '',
      website: 'https://gnfd-testnet-sp-6.bnbchain.org',
      securityContact: '',
      details: 'Gadgetron'
    }
  }
]
```
---



## Get SP informations
info with the sp chain address
```bash
greenfield-cli sp info <address>
```
Response example
```bash
{
  operatorAddress: '0xB573F5c174f33aF0CA033c8A287061C1538fb130',
  fundingAddress: '0x4B956d53E466a53d5FdE86781F1f547B44a19260',
  sealAddress: '0x674d969927AbA4eE9Cd05e5079655BB099D83d85',
  approvalAddress: '0x648848d33938Ab930Da70cC71eda2Bd0175f7150',
  gcAddress: '0xc5f1910AF4771720395f33f2FBBe782233215b4B',
  totalDeposit: '1000000000000000000000',
  status: 0,
  endpoint: 'https://gnfd-testnet-sp-7.bnbchain.org',
  description:
    {
    moniker: 'Titan',
    identity: '',
    website: 'https://gnfd-testnet-sp-7.bnbchain.org',
    securityContact: '',
    details: 'Titan'
  }
}
```
---


## Get a secondary storage price
secondary storage price, including update time and store price
```bash
greenfield-cli sp secondary
```
Response example
```bash
{
  updateTimeSec: Long { low: 1685085151, high: 0, unsigned: false },
  storePrice: '27690000000000000'
}

```
---


## Get a storage price
price with the sp chain address
```bash
greenfield-cli sp price <address>
```

Response example
```bash
{
  spAddress: '0xbaEbB9A16b57919ba7240A72B848777732B16638',
  updateTimeSec: Long { low: 1685003140, high: 0, unsigned: false },
  readPrice: '87000000000000000',
  freeReadQuota: Long { low: 1073741824, high: 0, unsigned: true },
  storePrice: '48000000000000000'
}
```
