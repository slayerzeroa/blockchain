import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { isNoEthereumObject } from "./lib/errors";
// import { useEffect, useState } from "react";

import "./styles.css";


const Web3 = require('web3');
const provider = 'https://sepolia.infura.io/v3/9041415e6a4c43d9a9475c8d19a57d0b';
const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const token = '0x81A0918aAb818cDaD7dA31A8cD99eF1D0BD2CDbf';
const wallet = '0x98c76c474b5748dbe024de0deb5d098b5c648c07';
const minABI = [
  {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
  },
];

const contract = new web3.eth.Contract(minABI, token);


export default function App() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const getBalance = async () => {
    const res = await contract.methods.balanceOf(wallet).call();
    const format = web3.utils.fromWei(res);
    var z = document.createElement('p');
    z.innerHTML = "Balance :" + format
    document.body.appendChild(z);
  }

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  };


  return (
    <div>
      <div className="user">
        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>

      </div>
      <div className="connect">
        <button type="button" onClick={ () => {
          handleConnect()
          getBalance()
        }}>
          {active ? "disconnect" : "connect"}
        </button>
      </div>
    </div>
  );

}