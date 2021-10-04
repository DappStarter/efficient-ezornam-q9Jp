require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn protect kidney knee oppose search'; 
let testAccounts = [
"0xb6c4e3f5e6dd3751a00dd6d5e68c121df31b14e058ff1d2a65bb43ea43d7acfc",
"0x5b2e33a24a76146a3ae3ec6bf08beacff9b37d75fe9e346790a5571736515d09",
"0xad3185c826f1e9058575ed483937d9b0da8609b909f3a74546da95ed88003090",
"0x2483b4bb2be019a3797d5cd7ec241a74bc47dc32145cf80c5099724741562455",
"0x223fa17fd5f33560da68e3f62a060d6247162f1ce231e354ad11b6315a0ac25c",
"0xd90ea348882c2b24edb0b7c6e400b793349a26a1f41e128c2733c99f4f10e1bb",
"0x90cb421c4581c57a42367d0ad5add097063fbd610724d04b9f94b1f401734643",
"0x55202ea42179a89262fcf8636a6ccb90cfdb6129bd937c528055a1de17b14f7b",
"0xb7a5c1b20ff09d174605a8477a4aa061ebdd5017b6b0a9ebcb1c9d7b0ddf39f5",
"0xfd3905c1ab3dbfbe8e671c21e16237dfe00874628eab0ba8b18991a996ceae01"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


