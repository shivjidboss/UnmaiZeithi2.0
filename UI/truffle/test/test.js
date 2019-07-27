// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// const json = require('./CompiledContracts/Main.json');

// const Main = artifacts.require("Main");



// let accounts;
// let firstNode;
// const interface = json['abi'];
// const bytecode = json['bytecode'];

// describe('Main', accounts => {

//     before(async () => {
//         accounts = await web3.eth.getAccounts();
//         firstNode = accounts[0];
//         Main = await new web3.eth.Contract(interface)
//             .deploy({ data: bytecode, arguments: ['Owner','owner@uz.com'] })
//             .send({ from: firstNode, gas: '6000000' });
//         await Main.methods.newUser(accounts[1], "TestUsr", "test@uz.com");
//     });

//     it('new article', ()=>{ 
//         Main.deployed()
//             .then(instance => instance.getBalance.call(firstNode))
//             .then(balance => {
//                 assert.notEqual(balance.valueOf(), 0, "account balance is 0")
//             });
//     });


// });

