import React from 'react';
import { useContract } from './utils/hooks/contract';

function App() {
  const { getContractRealState } = useContract();

  const mintNFT = async () => {
    // try {
    //   const contract = await getContractRealState();
    //   const tx = await contract.mint("your-token-uri");
    //   await tx.wait();
    //   console.log("NFT minted successfully");
    // } catch (error) {
    //   console.error("Error minting NFT:", error);
    // }
  };

  return (
    <div className="App">
      <h1>Real Estate NFT Minter</h1>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}

export default App;

