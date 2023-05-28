"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1},i="Storage providers",o={unversionedId:"tutorial-basics/storageProviders",id:"tutorial-basics/storageProviders",title:"Storage providers",description:"---",source:"@site/docs/tutorial-basics/storageProviders.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/storageProviders",permalink:"/greenfield-cli-docs/docs/tutorial-basics/storageProviders",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/storageProviders.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/greenfield-cli-docs/docs/category/tutorial---basics"},next:{title:"Buckets",permalink:"/greenfield-cli-docs/docs/tutorial-basics/bucket"}},l={},d=[{value:"Abstract",id:"abstract",level:2},{value:"List storage providers",id:"list-storage-providers",level:2},{value:"Get SP informations",id:"get-sp-informations",level:2},{value:"Get a secondary storage price",id:"get-a-secondary-storage-price",level:2},{value:"Get a storage price",id:"get-a-storage-price",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage-providers"},"Storage providers"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"The storage providers (SP) are storage service infrastructures that organizations or individuals provide and the corresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and will respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for user rights and authentications."),(0,a.kt)("p",null,"The SP module is responsible for managing and keeping storage providers in the network. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata: Basic information, such as address, tokens, and status, about each SP."),(0,a.kt)("li",{parentName:"ul"},"Deposit: Aspiring SPs must stake tokens to guarantee their capacity to offer storage services."),(0,a.kt)("li",{parentName:"ul"},"Slash: Stored data on an SP is occasionally challenged. If the challenge succeeds, the SP is penalized by losing some of its staked tokens."),(0,a.kt)("li",{parentName:"ul"},"Reputation: We are implementing a reputation system to assess the quality of each SP's service. Users can select an SP based on its reputation score to store their data."),(0,a.kt)("li",{parentName:"ul"},"Exit: SPs can leave voluntarily as long as they adhere to specific rules and recover their staked tokens. Greenfield may also force an SP to exit if it lacks sufficient staked tokens or its reputation score falls below the minimum requirements for an SP.")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Options:\n  -h, --help       display help for command\n\nCommands:\n  ls               list all storage providers\n  secondary        secondary storage price, including update time and store\n                   price\n  info <address>   info with the sp chain address\n  price <address>  price with the sp chain address\n  help [command]   display help for command\n")),(0,a.kt)("h2",{id:"list-storage-providers"},"List storage providers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp ls\n")),(0,a.kt)("p",null,"Response example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  {\n    operatorAddress: '0x22804504786F44289D4156E7317142e25B92c00e',\n    fundingAddress: '0xd641C35f947Eb60676f0e0793691bB174256C651',\n    sealAddress: '0xE4F1Ac4B9312724D2819347c5c91252b650C4AEb',\n    approvalAddress: '0xaF07AdBb21029adf12FB6E4515Ed8dA0A7e252a2',\n    gcAddress: '0xfF755134416a0Ebc4A614f951163a2Ecf48C069b',\n    totalDeposit: '1000000000000000000000',\n    status: 0,\n    endpoint: 'https://gnfd-testnet-sp-2.bnbchain.org',\n    description: {\n      moniker: 'Zenon',\n      identity: '',\n      website: 'https://gnfd-testnet-sp-2.bnbchain.org',\n      securityContact: '',\n      details: 'Zenon'\n    }\n  },\n  {\n    operatorAddress: '0x3CFC8b2095DA8F0722412Dc16f8A067942d2c697',\n    fundingAddress: '0xE44c4e725598CCa7Da3c506869d658a84e599983',\n    sealAddress: '0x43416fd2Dd08Bc6F2004B9a5fA53686B7F541d58',\n    approvalAddress: '0x0DC08D602aaAAAA7e2fD604f9f96DdD2cD67FE51',\n    gcAddress: '0xD27faC13b0C38f57ce1840Fc55e7B8b66dEBB342',\n    totalDeposit: '1000000000000000000000',\n    status: 0,\n    endpoint: 'https://gnfd-testnet-sp-6.bnbchain.org',\n    description: {\n      moniker: 'Gadgetron',\n      identity: '',\n      website: 'https://gnfd-testnet-sp-6.bnbchain.org',\n      securityContact: '',\n      details: 'Gadgetron'\n    }\n  }\n]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"get-sp-informations"},"Get SP informations"),(0,a.kt)("p",null,"info with the sp chain address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp info <address>\n")),(0,a.kt)("p",null,"Response example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  operatorAddress: '0xB573F5c174f33aF0CA033c8A287061C1538fb130',\n  fundingAddress: '0x4B956d53E466a53d5FdE86781F1f547B44a19260',\n  sealAddress: '0x674d969927AbA4eE9Cd05e5079655BB099D83d85',\n  approvalAddress: '0x648848d33938Ab930Da70cC71eda2Bd0175f7150',\n  gcAddress: '0xc5f1910AF4771720395f33f2FBBe782233215b4B',\n  totalDeposit: '1000000000000000000000',\n  status: 0,\n  endpoint: 'https://gnfd-testnet-sp-7.bnbchain.org',\n  description:\n    {\n    moniker: 'Titan',\n    identity: '',\n    website: 'https://gnfd-testnet-sp-7.bnbchain.org',\n    securityContact: '',\n    details: 'Titan'\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"get-a-secondary-storage-price"},"Get a secondary storage price"),(0,a.kt)("p",null,"secondary storage price, including update time and store price"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp secondary\n")),(0,a.kt)("p",null,"Response example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  updateTimeSec: Long { low: 1685085151, high: 0, unsigned: false },\n  storePrice: '27690000000000000'\n}\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"get-a-storage-price"},"Get a storage price"),(0,a.kt)("p",null,"price with the sp chain address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp price <address>\n")),(0,a.kt)("p",null,"Response example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  spAddress: '0xbaEbB9A16b57919ba7240A72B848777732B16638',\n  updateTimeSec: Long { low: 1685003140, high: 0, unsigned: false },\n  readPrice: '87000000000000000',\n  freeReadQuota: Long { low: 1073741824, high: 0, unsigned: true },\n  storePrice: '48000000000000000'\n}\n")))}u.isMDXComponent=!0}}]);