import RealEstateAbis from '../../../abis/RealEstate.json';
import { BrowserProvider, Contract } from "ethers";

const contractAddresses = {
  realState: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  deal: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
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
