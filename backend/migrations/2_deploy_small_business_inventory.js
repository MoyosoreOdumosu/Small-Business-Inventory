const SmallBusinessInventory = artifacts.require("SmallBusinessInventory");

module.exports = function(deployer) {
  // Deploy the  contract
  deployer.deploy(SmallBusinessInventory);
};
