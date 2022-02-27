# React Starter Project 👋 

### **Welcome!**
To get started with this course, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm run start` to start the project
3. Start coding!

To Install Solidity and Hardhat
1. npm install --save-dev hardhat
2. npx hardhat and say yes to everything
3. npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
4. npm install @openzeppelin/contracts
5. npx hardhat run scripts/sample-script.js

### **Questions?**
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/courses/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b) and link your Discord account so you can get access to helpful channels and your instructor!

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

