require("@nomiclabs/hardhat-waffle");

//This file holds all the requirements of the hardhat app
//The keys are fetched from alchemy.com then our private MetaMask key
//We declare the solidity version and network we're using

const alchemyAPI = "9GyeamN9IFL_ydmvbWXYd_4BDVUO6UVM";
//Keep ropstenKey private *Always
const ropstenKey = "e26cb82338b0e896c2a439c26b08e6c10c2eba015706bce601233e37765176b2";

module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyAPI}`,
      accounts: [`${ropstenKey}`]
    }
  }
};
