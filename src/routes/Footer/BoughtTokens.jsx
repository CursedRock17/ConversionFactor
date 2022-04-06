import React, { useContext, useState, useEffect, useCallback } from 'react';
import { InputContext } from '../../context/TotalContext'
import { Link, Outlet } from 'react-router-dom';
import { ethers } from 'ethers'
import { contractAddress, contractABI } from '../../middleware/contractDetails';

const BoughtTokens = () => {

  //Simple consts that grab our signer, provider, etc.
  //These all make the contracts run, then we have simple useStates
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  const formsContract = new ethers.Contract(contractAddress, contractABI, signer);
  let account = window.ethereum.selectedAddress;

  const [ tokenList, setTokenList ] = useState([]);
  const [ stateRefresh, setStateRefresh ] = useState(0);
  const [ valueCheck, setValueCheck ] = useState("")

//filterSearch will look through the titles and use onChange and Value to sort those\
//console.log(...filterValues[j])

  const filterSearch = (val) => {
    console.log(val)
    const filterValues = tokenList.map(mapDestructure)
    for(let j = 0; j < filterValues.length; j++){
      if(val == filterValues[j] || val == ""){
        setValueCheck((...prevStatement) => val)
        const bean = listHeaders
        console.log(bean)
      }
    }
  }

//grabTokens, is a call that filters through our contracts and grabTokens
//based on the l we provide and comparing that in Solidity, which we then push an array

  const grabTokens = async() => {
    const currentCount = await formsContract.tokenNumber();
    for(let l = 0; l <= currentCount; l++){
      const toks = await formsContract.getTokens(l);
      if(toks[3].toLowerCase() == account){
        tokenList.push(toks);
      }
    }

    setStateRefresh(1)
  }

  if(stateRefresh < 1){
    try {
      grabTokens();
    } catch (error) {
      console.warn(error);
    }
  }

  /*This function maps out first the headers, our names of declared blocks
  then maps out the actual data of those functions, by expanding a map, both
  of these use maps at certain points of the larger tokenList array
  Once mapped out, we have to put the headers above the listDetails and use
  certain divs stylings and p stylings to make the header text larget than the
  details, from there we will be able to filter by only looking at the headings
  mappings
  */
  function mapDestructure(n){
    const keyWord = n[0];
    return keyWord;
  }

  function isEven(n) {
    if(n % 2 == 0){
      return true;
    }
    else {
      return false;
    }
  }

  const listHeaders = tokenList.map((headerKey) =>
  <>
    <p className="flex justify-center text-white">
     <li key={headerKey[0]}>
      {headerKey[0]}
     </li>
      <br />
    </p>
  </>
  )

//Check the index values for values of an array??
//Components will dynamically chnage if we have a Class extends Component, so it'll onChange
//In response to us using filterChange

  const listItems = tokenList.map((certainKey, i) =>
  <>
  {
    valueCheck == tokenList[i][0] ?
  <div className="flex pl-2 justify-center m-2 card pt-3 pb-3">
    <div>
    <p className="flex flex-wrap justify-center h-min-content text-xl font-bold min-w-fit pt-1 pb-1 pl-2 pr-2 text-white">
    {listHeaders[i]}
    </p>
     <li key={tokenList[1]}>
      {certainKey[1].map((extraKey, i) =>
          <>
            {isEven(i)
              ?<p className="text-lg text-white pl-2"> {extraKey}: </p>
              :<p className="text-sm text-white pl-2"> {extraKey} </p>
            }
            <br />
          </>
      )}
     </li>
     </div>
    </div>
     : <>
     {
       valueCheck == "" ?
       <div className="flex pl-2 justify-center pt-3 m-2 card pb-3">
         <div>
         <p className="flex flex-wrap justify-center h-min-content text-xl font-bold min-w-fit pt-1 pb-1 pl-2 pr-2 text-white">
         {listHeaders[i]}
         </p>
          <li key={tokenList[1]}>
           {certainKey[1].map((extraKey, i) =>
               <>
                 {isEven(i)
                   ?<p className="text-lg text-white pl-2"> {extraKey}: </p>
                   :<p className="text-sm text-white pl-2"> {extraKey} </p>
                 }
                 <br />
               </>
           )}
          </li>
          </div>
         </div> :
        <> </>
     }
     </>
   }

   </>
  )

class TotalList extends React.Component {
  render() {
  return (
    <>
    <ul className="flex justify-center min-w-min pt-6 pb-6 flex-wrap"> {listItems} </ul>
    </>
    )
  }
} //TotalList Ending

  return (
  <div className="flex justify-center">
    <div className="flex-col min-h-content justify-center bluePurple-gradient">
    <div className="w-screen justify-center lg:h-32 md:h-24 sm:h-16 flex yellowGreen-gradient">
    <Link to="/" >
      <h1 className="pt-4 pb-6 font-semibold text-3xl"> Home </h1>
    </Link>
    </div>
      <div className="flex justify-center pt-5">
        <input
        className="flex justify-center rounded-2xl pl-3"
        placeholder={`${"Search"}`}
        onChange={(val) => filterSearch(val.target.value)}
        >

        </input>
      </div>
      <div className="h-min-content grid-rows-2 grid-cols-2">
        <div>
        <>
        {tokenList.length > 0 ?
          <TotalList />
        :  <>
        <p className="flex justify-center text-white text-3xl pb-8 pt-8">
            It seems you have no tokens yet
            <br />
            Connect your wallet and begin buying
            <br />
           </p>
           <div className="flex justify-center">
           </div>
           </>
       }
        </>
        </div>
      </div>
        <div className="justify-end reversePink-gradient w-full h-screen"> </div>
    </div>
    <Outlet />
  </div>
  )
}

export default BoughtTokens;

/*

*/
