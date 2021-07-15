import Web3 from "web3";
import { provider } from "web3-core";
import { getEthereum } from "./getEthereum";

class Web3NotProvidedError extends Error {
    constructor() {
        super("Web3 is not injected, check your provider.");
        this.name = "Web3NotProvidedError";
    }
}

export const getWeb3 = async (): Promise<Web3 | Web3NotProvidedError> => {

    const ethereum: provider = await getEthereum();
    let web3!: Web3;
    
    if (ethereum) {
        web3 = new Web3(ethereum);
    } 
    
    else if ((window as any)?.web3) {
        const ethProvider: provider = new Web3.providers.HttpProvider("http://localhost:8545/");
        web3 = new Web3(ethProvider);
    } else {
        return new Web3NotProvidedError();
    }    
    return web3;

}
