---
sidebar_position: 8
---

# Crosschain

```bash
 Usage: index crosschain [options] [command]                                                                         
                                                                                                                    
crosschain                                                                                                          
                                                                                                                    
Options:                                                                                                            
  -h, --help      display help for command                                                                          

Commands:
  get-params      get crosschain params
  help [command]  display help for command


``` 



## Get crosschain params
---

get crosschain params
```bash
greenfield-cli crosschain get-params
```
Response example
```bash
{                                            
  params: 
  {                                  
    transferOutRelayerFee: '250000000000000',
    transferOutAckRelayerFee: '0'            
  }                                          
}      
```


