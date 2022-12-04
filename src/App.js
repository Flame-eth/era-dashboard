import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import "./App.css";
import { setContract } from "./redux/modeSlice";

import { ethers } from "ethers";
import ERA from "./build/contracts/ERA.json";
import detectEthereumProvider from "@metamask/detect-provider";

import Whitelist from "./components/Dashboard/Whitelist";
import PublicMint from "./components/Dashboard/PublicMint";
import BaseURI from "./components/Dashboard/BaseURI";
import TeamMint from "./components/Dashboard/TeamMint";
import Withdraw from "./components/Dashboard/Withdraw";

const App = () => {
  const { mode, contract } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  // const getEraContract = async () => {
  //   const ERAaddress = "0x88c036Fa195265c897Da04aff81008AC4616dcaa";
  //   let provider = await detectEthereumProvider();
  //   if (provider) {
  //     // From now on, this should always be true:
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     // provider = window.ethereum;

  //     const signer = provider.getSigner();
  //     const transactionContract = new ethers.Contract(
  //       ERAaddress,
  //       ERA.abi,
  //       signer
  //     );

  //     console.log(transactionContract);
  //     return transactionContract;

  //     // startApp(provider); // Initialize your app
  //   } else {
  //     alert("Please install MetaMask!");
  //   }
  // };

  // const whitelistSale = async (quantity, amount) => {

  //   const firstCall = await transactionContract.whitelistMint(quantiity, {
  //     value: ethers.utils.parseEther(amount.toString())
  //   });

  //   const secondCall = await firstCall.wait();
  //   }

  // const publicSale = async (quantity, amount) => {

  //   const firstCall = await transactionContract.mint(quantiity, {
  //     value: ethers.utils.parseEther(amount.toString())
  //   });

  //   const secondCall = await firstCall.wait();
  //   }

  // useEffect(() => {
  //   const tractionContract = getEraContract();
  //   dispatch(setContract(tractionContract));
  // }, []);

  // console.log(contract);

  return (
    <div style={{ backgroundColor: mode && "#f0e1e1" }}>
    <div className="app">
      <div>
      <Header />
      </div>
      <div className="controls">
      <Whitelist />
      <PublicMint />
      <BaseURI />
      <TeamMint />
      <Withdraw />

      </div>
      </div>
    </div>
  );
};
export default App;
