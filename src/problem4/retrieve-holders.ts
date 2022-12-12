import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/91163dc759cc41c186064d0251893a9b');

const tokenAddress: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const holderAddresses : string[] = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'];

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint256)",
];
    
async function getTokenBalance(holderAddress: string){
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

    const balance = await contract.balanceOf(holderAddress);

    console.log(`${holderAddress} ${ethers.utils.formatEther(balance)}\n`);
}

const main =  async () => {
    for (const add of holderAddresses) {
        getTokenBalance(add)
    }
}

main();

//call revert exception