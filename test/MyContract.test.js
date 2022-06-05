const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Contract", () =>{
    let owner, ContractToDeploy, Contract;
    
    beforeEach(async() =>{
        [owner] = await ethers.getSigners();

        ContractToDeploy = await ethers.getContractFactory("MyContract");

        Contract = await ContractToDeploy.deploy();
 
    });

    describe("Checking getter and setter functions", () =>{

        it("Should set the value correctly", async () =>{

            await Contract.set('test_name');    
            
            const test = await Contract.get();
            
            expect(test).to.equal('test_name');
        })
    })
})