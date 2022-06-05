require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const API_URL = process.env.API_URL; //Your API_URL such as infura/alchemy etc.
const PRIVATE_KEY = process.env.PRIVATE_KEY //Your Metamask Private Key

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    mainnet:{
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
    ropsten:{
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
    kovan:{
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
    goerli:{
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
