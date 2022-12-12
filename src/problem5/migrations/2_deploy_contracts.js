const TokenBalances = artifacts.require(TokenBalances.sol);

module.exports = function (deployer) {
    deployer.deploy(TokenBalances);
};