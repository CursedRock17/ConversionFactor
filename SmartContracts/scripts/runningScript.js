const hre = require("hardhat");

async function main() {
  const Forms = await hre.ethers.getContractFactory("Forms")
  const forms = await Forms.deploy();

  await forms.deployed();
  console.log("Forms deployed to: ", forms.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
