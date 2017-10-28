var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "Your infura key";
var mnemonic = "Your 12 word metamask key";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      gas: 500000      
    }
  }
};
