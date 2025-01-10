import RealEstateAbis from '../../../abis/RealEstate.json';
import { BrowserProvider, Contract } from "ethers";
import config from '../../config.json';

interface Config {
  [key: string]: {
    realEstate: {
      address: string;
    };
    deal: {
      address: string;
    };
  };
}

const typedConfig: Config = config;

export const useContract = () => {
  const getProvider= async () => {
    if (!window.ethereum) throw new Error('No wallet found');
    const provider = new BrowserProvider(window.ethereum);
    return provider;
  }
      
  const getSigner = async () => {
    const provider = await getProvider();
    await provider.send('eth_requestAccounts', []);
    
    return provider.getSigner();
  };

  const getContractRealState = async () => {
    const signer = await getSigner();
    const provider = await getProvider();
    const network = await provider.getNetwork();
    console.log('getContractRealState', network.chainId.toString());
    return new Contract(
      typedConfig[network.chainId.toString()].realEstate.address,
      RealEstateAbis.abi,
      signer
    );
  };

  return { getContractRealState };
};
