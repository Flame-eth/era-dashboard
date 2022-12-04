import React, {useState} from 'react';

import './BaseURI.css';
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import ERA from "../../build/contracts/ERA.json";

export default function App() {
    const [input, setInput] = useState({
        baseUri: ""

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData((prevState) => ({ ...prevState, [name]: value }));
        setInput((prevState) => ({ ...prevState, [name]: value }))
        
      };

      const handleSubmit = async () => {

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
    
          const firstCall = await transactionContract.setTokenUri(input.baseUri);
    
          const secondCall = await firstCall.wait();
    
          const thirdCall = await transactionContract._baseURI()

          alert("Base token URI is" , + thirdCall)
        // console.log(input.baseUri)
        setInput({
            baseUri: ""
        })
       }
    } 
    
  return (
      <div className= "base">
        <input name='baseUri' value={input.baseUri} type="text" placeholder='BaseURI' onChange={handleChange} className="input"/>
        <button type='button' onClick={handleSubmit} className= "buttonBU"> Submit</button>

      </div>
    // <MDBInput label='BaseURI' id='form1' type='text' />

  );
}