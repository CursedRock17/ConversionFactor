import React, { useState, useContext, useEffect } from 'react';
import { InputContext } from "../../context/TotalContext";
import { contractAddress, contractABI } from '../../middleware/contractDetails';

import { ethers, bigNumber } from 'ethers';
import { account } from '../SelectorTypes/WalletConnect'

export const SubmitButton = (props) => {
  const { undefinedCheck, setUndefinedCheck, nameArray, setNameArray, tokenList } = useContext(InputContext)
  const [ reseter, setReseter ] = useState(true)
  const [ putterName, setPutterName ] = useState("")
  const [ loading, setLoading ] = useState(false);

  const clearPage = () => {
    setLoading(false);
    window.location.reload();
    alert("You've purchased an NFT");
    return;
  }

  useEffect(() => {
    setPutterName(props.currentName)
  })

//submitData sets up the METAMASK provider and fetches the contracts requirements
//We use metamask to make a request with ETH in order to buy a Contract

  const submitData = async (props) => {
    if(nameArray.length < undefinedCheck){
      alert("Please Fill in all the forms")
//This if statement just checks if the user filled out all the forms
    }
    else {

      if(nameArray[0].id == null){
          nameArray.shift();
      }

      let currentAryLength = 0;
      const splitArray = [];
      const provider = await new ethers.providers.Web3Provider(window.ethereum)
      const signer = await provider.getSigner()
      const formsContract = await new ethers.Contract(contractAddress, contractABI, signer);

      const account = window.ethereum.selectedAddress;
//Above just grabs all the hardhat nd metamask info to mint a contract
//The request sends a request through METAMASK's API with cost, gas, etc

        await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: '0x660b6920eC72C92e531F270F03C2175D14916BB5',
            value: '0x1B31A2E0F800',
            gas: '0x5BCC',
          },
        ],
      })
//This sets up an array that lists out both the id and value for the size of the array
//In order to return data from the solidity contract. we'll need to create objects
//That skip every other to match up values and ids

      for(let g = 0; g < nameArray.length; g++){
        currentAryLength = g
        splitArray.push(nameArray[g].id)
        splitArray.push(nameArray[g].value)
        console.log(splitArray);
      }

      const curName = putterName

      const contractStuff = await formsContract.setForms(account, '0x660b6920eC72C92e531F270F03C2175D14916BB5', splitArray, curName)
      await setLoading(true);

      const waiting = await contractStuff.wait();
      const events = await waiting.events[0];
      const argumentos = await events.args;

      await clearPage();

      //setUndefinedCheck function, sign the transaction
      //It's about 20 cents per transaction
    }
  }

  return (
    <>
    { loading == false ?
      <button className="flex justify-center w-60 h-8 pt-1 rounded-2xl bg-blue-600 hover:bg-pink-700 shadow-xl"
        onClick={() => submitData()}
      >
      <p> Submit </p>
      </button>
      :
      <>
      <div className="flex justify-center pr-12">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-200" />
      </div>
      </>
    }
    <div className="pt-4"> </div>
    </>

  )
}


export function resetNums([ reseter, setReseter ]) {

  if(reseter){
    setReseter(false);
  }
  else if(!reseter){
    setReseter(true);
  }

  setTimeout(() => {
    setReseter(true)
  }, 250)

//This function does works as a trigger for the clear button, a component
//Takes in clearer and sets it to the reset value, we use the timer to set it to true anytime its clicked, but when it's clicked its always false
}

/*
async function setForms(to, value) {
  console.log("Sent", to);
  return value;
}
*/
export default { resetNums, SubmitButton };
