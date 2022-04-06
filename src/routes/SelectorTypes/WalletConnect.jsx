import React, { useContext } from 'react'
import { ethers } from "ethers"
import { InputContext, ContextWrapper } from '../../context/TotalContext'

const provider = new ethers.providers.Web3Provider(window.ethereum)

const signer = provider.getSigner()

export const WalletButton = (props) => {
  const { accountHolder, setAccountHolder } = useContext(InputContext)

  const connectWallet = async() => {
    if (typeof window.ethereum === 'undefined') {
      alert("Please Install MetaMask, Use The Tutorial")
    }

    const quickHit = await provider.send("eth_requestAccounts", []);

    setAccountHolder(quickHit);

    props.controlConnect()
    return;
  }

  return (
      <div className="flex justify-center">
      <button
      className="flex bg-blue-600 lg:w-48 md:w-36 sm:w-24 lg:h-12 md:h-10 sm:h-8 rounded-full justify-center align-center pt-3"
      title="Connector"
      onClick={() => connectWallet()}
      >
            <h1> Connect Wallet </h1>
      </button>
      </div>
  )
}

export default WalletButton
