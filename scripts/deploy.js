const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying with address:', deployer.address);

  const ContractToDeploy = await ethers.getContractFactory("MyContract");

  const Contract = await ContractToDeploy.deploy();

  console.log(`The Contract has been deployed with address: ${Contract.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// 0xab011aC14f158f66A73d58B48f053b17aDdd925B