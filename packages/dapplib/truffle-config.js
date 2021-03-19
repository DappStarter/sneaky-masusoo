require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name repeat magic huge inflict kiwi slot gather'; 
let testAccounts = [
"0xb9e0809e677f49cff12183392bdaa31eb13d4de67481ba982b043a04e0205d3f",
"0x907e71dd385e175a37bcd796354258016651427008a0dbcd9813405af29dd8c2",
"0xa941d71a81c7a55fcb36fb3cedda3cba76a7cb1275c4247148e98485a2cc1a73",
"0x37213998b0fa8c91864b813ebac68b0939171988d28e9d75f6bbbf9ae58c7baf",
"0xf726258a816f15cf56333a5382f87215e7ceeb91d6dc1007534516012ad2574f",
"0x9365ba5161b7fbe95066800eddcb5c8586db7c3039513bfdfb8e5a36d8832cd4",
"0x1a1325292b88ee292544da3157da14768bfbdf9478f21aa512869f3b1fd3ac3e",
"0x79e672f3602803c5ef245b96aabd067c4baec8b2007f30e8012a82774f237167",
"0xc2a84cde10f7d0ef179c0825c4096e366cbf28490498077e5c1998f6f8e0e853",
"0x70f32053362696d7d235843bb897df5f3cf85f3f5fc88d1cae6cc69635b9aa66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
