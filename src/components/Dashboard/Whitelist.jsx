import React from "react";
import "./Whitelist.css"
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import ERA from "../../build/contracts/ERA.json";

const Whitelist = () => {

    const whitelistSwitch = async () => {
        const ERAaddress = "0x89443f8158ada10dee26fE0a5b7AF6d4D053B1aA";
        let provider = await detectEthereumProvider();
        if (provider) {
          // From now on, this should always be true:
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          // provider = window.ethereum;
    
          const signer = provider.getSigner();
          const transactionContract = new ethers.Contract(
            ERAaddress,
            ERA.abi,
            signer
          );
    
          const firstCall = await transactionContract.toggleWhiteListSale();
    
          const secondCall = await firstCall.wait();
    
          const thirdCall = await transactionContract.whiteListSale()

          alert("Whitelist minting is now " + thirdCall)
        }
      };


return (
    <div className="wtl">
        <button type="button" className="button" onClick={whitelistSwitch}>
            Whitelist Switch
        </button>
    </div>
)
}


export default Whitelist;