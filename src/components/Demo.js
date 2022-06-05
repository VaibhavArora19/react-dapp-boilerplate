import { ethers } from "ethers";
import { useState } from "react";
import "./Demo.css";
import ABI from "../MyContract.json"; //Your Contract json file

const Demo = () => {
  const [account, setAccount] = useState({
    isConnected: false,
    accountAddress: null,
    signer: null,
    contract: null,
  });

  const [message, setMessage] = useState(null);

  const updateEthers = async () => {
    const contract_ABI = ABI.abi; //Your Contract ABI
    const contractAddress = "0xab011aC14f158f66A73d58B48f053b17aDdd925B"; //Your Contract Address
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contract_ABI, signer);

    setAccount((prevState) => {
      return { ...prevState, signer: signer, contract: contract };
    });
  };

  const connectWalletHandler = async () => {
    if (window.ethereum && !account.isConnected) {
      const result = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount((prevState) => {
        return { isConnected: true, accountAddress: result[0] };
      });

      updateEthers();
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    await account.contract.set(event.target.set.value);
  };

  const getMessageHandler = async () => {
    const msg = await account.contract.get();

    setMessage(msg);
  };

  return (
    <div className="demo">

      <h2>
        Your wallet address:
        {account.accountAddress
          ? account.accountAddress
          : "Connect Your metamask wallet"}
      </h2>

      <form onSubmit={formSubmitHandler}>
        <input type="text" id="set" />
        <button type="submit">Set</button>
      </form>

      <button onClick={getMessageHandler}>Get Message</button>
      
      <p>{message ? message : "You need to set message first"}</p>
      
      <button onClick={connectWalletHandler}>
        {!account.isConnected ? "Connect Your Wallet" : "Connected"}
      </button>
    </div>
  );
};

export default Demo;
