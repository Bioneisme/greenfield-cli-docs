---
sidebar_position: 1
---
# Getting Started

# Requirements

- Node.js version 16.14 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed.
- When installing Node.js, you are recommended to check all checkboxes related to dependencies.

# installation

To install GreenField CLI run the following command
```bash
npm i -g @bioneisme/greenfield-cli
```

# Start the CLI 
```bash
greenfield-cli
```
### the following should appear

![Docusaurus logo](/img/hellopng.png)



### Local build

```
git clone https://github.com/Bioneisme/bnb-greenfield-cli.git
cd bnb-greenfield-cli
npm install
npm start -h
```

## Basic Configuration

Command to configure environment variables
```
greenfield-cli system -h
```

!To use most of the commands, you need to set your account address with private key, configure the RPC URL endpoint and Chain ID!

Set account address with private key. The password is optional, if you don't set it, you will be prompted to enter it when you make a request.
Public key is your account address, private key is account private key.
```
greenfield-cli system set-key <public> <private> <password>
```

Private keys are encrypted using PBKDF2/SHA256 with a password and recorded in your local keystore.
```
macOS: ~/Library/Preferences/.greenfield/config.json
Windows: %APPDATA%\.greenfield\config.json
Linux: ~/.config/.greenfield/config.json (or $XDG_CONFIG_HOME/.greenfield/config.json)
```

Change RPC URL endpoint
```
greenfield-cli system rpc-url <url>
```

Change Chain ID
```
greenfield-cli system chain-id <id>
```

Change Storage Provider address
```
greenfield-cli system sp-address <address>
```

Display information about the current configuration
```
greenfield-cli system info
```
Now you are available to run commands


