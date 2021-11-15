const BEP20Token = artifacts.require("BEP20Token");

module.exports = async function (deployer) {
  await deployer.deploy(BEP20Token);

  const BEP20TokenContract = await BEP20Token.deployed();
};
