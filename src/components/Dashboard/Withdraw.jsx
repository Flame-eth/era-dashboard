import React from "react";
import "./Withdraw.css"
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import ERA from "../../build/contracts/ERA.json";


const Withdraw = () => {

    const withdraw = async () => {
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
    
          const firstCall = await transactionContract.withdraw();
    
          const secondCall = await firstCall.wait();
    
          alert("Withdrawal Successful")
        }
      };

return (
    <div className="wtl">
        <button type="button" className="buttonPM" onClick={withdraw}>
            Withdraw
        </button>
    </div>
)
}


export default Withdraw;