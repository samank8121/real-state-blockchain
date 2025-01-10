import React, { useEffect, useState } from 'react';
import { useContract } from './utils/hooks/contract';

function App() {
  const [homes, setHomes] = useState<any[]>([])
  const { getContractRealState } = useContract();

  
  useEffect(() => {
    getContractRealState().then(async (contract) => {
      const totalSupply = await contract.totalSupply();
      const tmpHomes = []
      for (let i = 1; i <= totalSupply; i++) {
        const uri = await contract.tokenURI(i)
        const response = await fetch(uri)
        const metadata = await response.json()
        tmpHomes.push(metadata);
      }
      setHomes([...tmpHomes]);
      console.log('getContractRealState', totalSupply);
    });
  }, []);
  console.log('getContractRealState', homes);
  return (
    <div className='App'>
      <h1>Real Estate NFT Minter</h1>
    </div>
  );
}

export default App;
