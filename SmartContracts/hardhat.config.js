require("@nomiclabs/hardhat-waffle");

//This file holds all the requirements of the hardhat app
//The keys are fetched from alchemy.com then our private MetaMask key
//We declare the solidity version and network we're using

const alchemyAPI = ; //Replace With Personal Key
//Keep ropstenKey private *Always
const ropstenKey = ; //Replace With Personal Key

module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyAPI}`,
      accounts: [`${ropstenKey}`]
    }
  }
};
