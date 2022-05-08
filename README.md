# Test Dapp develop by hardhat

## Setup

smart contract の制作キットみたいなやつを作成

```
mkdir smart_contract && cd $_
npx hardhat
```

contract のデプロイ

### localhost の場合

server を起動する

```
npx hardhat node
```

```
npx hardhat run scripts/sample-script.js
```

### ropsten の場合

```
npx hardhat run scripts/sample-script.js --network ropsten
```

### client

デプロイ時の address を使用する

```
yarn add ethers
```

## Reference

https://zenn.dev/ktechb/articles/66a80c3640a3e3
