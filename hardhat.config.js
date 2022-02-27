require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.10",
  networks : {
    // rinkeby : {
    //   url : "https://eth-rinkeby.alchemyapi.io/v2/3eetaDL9EwcbAP5VtWGTX3De7HEU_I5G" ,
    //   accounts : [process.env.TEST_RINKEBY_ACCOUNT_PRIVATE_KEY]
    // },
    mumbai : {
      url : "https://polygon-mumbai.g.alchemy.com/v2/HJSV-NmkxCX7y4EbiSCr4Lul2DP3cBe9",
      accounts : [process.env.TEST_RINKEBY_ACCOUNT_PRIVATE_KEY]
    }
  }  
};

// Deployment of Dapp Name service starting...
// Dapp domain name service deployed at address ->  0x5e92175Dcc5cc023C33A1D721334d27386d8e050
// domain Prashant.dapp minted successfully
// Set record for Prashant.dapp
// Owner of domain ${domain}.${tld} ->  0xBf7504799c6ED34dbC7D3077e3198f1F5D2B1306