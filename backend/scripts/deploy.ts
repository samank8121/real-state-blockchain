import { ethers } from "hardhat";

async function main() {
    const RealEstate = await ethers.getContractFactory("RealEstate");
    const realEstate = await RealEstate.deploy();
    const deployedContract = await realEstate.waitForDeployment();
    console.log(`RealEstate deployed to: ${deployedContract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
