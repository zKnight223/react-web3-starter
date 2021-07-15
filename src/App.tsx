import { Component } from 'react';
import { getWeb3 } from "./utils/getWeb3";
import { getEthereum } from "./utils/getEthereum";
import Web3 from 'web3';

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    chainId: null
  }

  componentDidMount = async (): Promise<void> => {
    const web3 = await getWeb3() as Web3;

    try {
      const ethereum = await getEthereum();
      ethereum.enable();

      const accounts: string[] = await web3.eth.getAccounts();
      const chainId = await web3.eth.getChainId();
  
      this.setState({
        web3, accounts, chainId
      })

    } catch (err) {
      console.error(err);
    }
  }

  render(): JSX.Element {
    const { chainId, accounts } = this.state!;
    return (
      <>
        <p>Chain Id: {chainId}</p>
        <p>Accounts: {accounts}</p>
      </>
    );
  }
}

export default App;
