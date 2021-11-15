const BEP20Token = artifacts.require("BEP20Token");

module.exports = async function (deployer) {
  await deployer.deploy(BEP20Token);

  const BEP20TokenContract = await BEP20Token.deployed();
  await BEP20TokenContract._initialize([
    "travelBNB",
    "TBN",
    10 ** 8,
    10 ** 18,
    "0xb14f0C2e055F90F0b04c86eeB97Bd7DB6c8B0977",
  ]);
};
