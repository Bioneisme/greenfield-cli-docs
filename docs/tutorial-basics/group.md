---
sidebar_position: 6
---

# Groups
```bash
group operations                                                                                                    
                                                                                                                    
Options:                                                                                                            
  -h, --help                                 display help for command                                               

Commands:
  create <groupName>                         create group
  update-member <memberAddress> <groupName>  update group member
  head <memberAddress> <groupName>           heads member
  delete <groupName>                         delete group
  help [command]                             display help for command
```


## Create group
---

Creates a group
```bash
greenfield-cli group create <groupName>
```
---
example
```bash
greenfield-cli group create gnfd://groupname
```
## Update group member
---
update group member
```bash
greenfield-cli group update-member <memberAddress> <groupName>
```

## Head a member
---
heads member
```bash
greenfield-cli group head <memberAddress> <groupName>
```

## delete group
---
delete group
```bash
greenfield-cli group delete <groupName>
```
