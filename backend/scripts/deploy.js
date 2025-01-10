import { ethers } from 'hardhat';
import { parseEther } from 'ethers';

const tokens = (n) => {
  return parseEther(n.toString());
};

async function main() {
  const [buyer, seller] = await ethers.getSigners();
  const RealEstate = await ethers.getContractFactory('RealEstate');
  const realEstate = await RealEstate.deploy();
  const deployedContract = await realEstate.waitForDeployment();
  console.log(`RealEstate deployed to: ${deployedContract.target}`);

  for (let i = 0; i < 3; i++) {
    const transaction = await realEstate
      .connect(seller)
      .mint(
        `https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${
          i + 1
        }.json`
      );
    await transaction.wait();
  }

  const Deal = await ethers.getContractFactory('Deal');
  const deal = await Deal.deploy(realEstate.address, seller.address);
  await deal.deployed();

  console.log(`Deployed Deal Contract at: ${deal.address}`);
  let transaction;
  for (let i = 0; i < 3; i++) {
    let transaction = await realEstate
      .connect(seller)
      .approve(deal.address, i + 1);
    await transaction.wait();
  }

  transaction = await deal
    .connect(seller)
    .list(1, buyer.address, tokens(20), tokens(10));
  await transaction.wait();

  transaction = await deal
    .connect(seller)
    .list(2, buyer.address, tokens(15), tokens(5));
  await transaction.wait();

  transaction = await deal
    .connect(seller)
    .list(3, buyer.address, tokens(10), tokens(5));
  await transaction.wait();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
