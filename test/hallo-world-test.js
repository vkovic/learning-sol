const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('HalloWorldContractTest', function () {
    it('should return hallo world message', async function () {
        const HalloWorld = await ethers.getContractFactory('HalloWorld');
        const halloWorld = await HalloWorld.deploy();

        expect(await halloWorld.greeting()).to.equal('Hallo World!!!');
    });
});
