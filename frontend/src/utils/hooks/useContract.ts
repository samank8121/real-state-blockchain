import RealEstateAbis from '../../../abis/RealEstate.json';
import { BrowserProvider, Contract } from "ethers";

const contractAddresses = {
  realState: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  contractB: '0xYourContractBAddress',
};

export const useContract = () => {
  const getProviderOrSigner = async () => {
    if (!window.ethereum) throw new Error('No wallet found');
    const provider = new BrowserProvider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    return provider.getSigner();
  };

  const getContractRealState = async () => {
    const signer = await getProviderOrSigner();
    return new Contract(
      contractAddresses.realState,
      RealEstateAbis.abi,
      signer
    );
  };

  return { getContractRealState };
};
