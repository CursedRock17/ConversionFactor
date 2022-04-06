import React, { useContext } from 'react'
import InputContext from '../../context/TotalContext'

const QuestionCard = (props) => {
  return (
  <div className="pb-3 min-w-min pt-2">
    <div className="pb-5 pt-5 bg-gray-400 rounded-2xl pl-5 border-slate-50">
     <h1 className="text-lg">
      {props.titleCard}
     </h1>
      <p className="text-sm text-orange-600 font-medium">
        {props.textLineOne} <br />
        {props.textLineTwo}
      </p>
    </div>
  </div>
  )
}

const Info = () => {

  return (
    <div className="flex w-full flex-col cyanTransition-gradient mt-15 mb-15 pt-50 pb-50">
     <div className="flex flex-col self-center justify-center mt-15 mb-15 pt-50 pb-50">
      <h1 className="text-xl flex justify-center font-sembold text-black-800">
          How to get started
      </h1>
        <p className="text-sm mt-15 mb-15 pb-5">
          <b>Step One:</b> Simply use MetaMask to connect your very own crypto wallet, <br />
          simply download the MetaMask app or download the chrome extension. From there <br />
          follow the guidelines they have set out, creating a new wallet with a password <br />
          and write down the secret recovery key. <br /> <br />

          <b>Step Two:</b> Add real Ethereum into your wallet. Simply click the buy button and <br />
          continue to either Transak or Wyre to purchase some currency. <br /> <br />

          <b>Step Three:</b> Click onto the document you want to keep secure on the blockchain <br />
          and fill out the necessary information relating to that document, submit the info <br />
          and pay the gas fee and a 10 cent fee for using the site. For less than 25 cents, <br />
          your document is now completely secure and accessible to only you from anywhere. <br />
        </p>
      <h2 className="text-xl flex justify-center font-sembold text-black-800">
        FAQs
      </h2>
    <QuestionCard
      titleCard="What do you do?"
      textLineOne="This application is meant to store important documents in the blockchain "
      textLineTwo="so that they stay private and secure, while maintaining easy accessibility."
    />
    <QuestionCard
    titleCard="Can't you just take it?"
    textLineOne="One of the best features of the blockchain is that data is only accessed by"
    textLineTwo="those with your wallet, making the wallet difficult to hack due to a unique ID."
    />
    <QuestionCard
    titleCard="Why do I have to Pay?"
    textLineOne="In order to keep the website running you must pay for the service. With"
    textLineTwo="blockchain usage, gas fees must be payed. These fees are info-size based."
    />
    <QuestionCard
    titleCard="Where are my Documents?"
    textLineOne="To find your documents, scroll to the bottom and click Bought NFTS."
    textLineTwo="Then scroll or search for the type of document you want to find."
    />
     </div>
    </div>
  );
}

//When creating sections spread out the paragraphs, it may push the titles to the left
//Remember to make these into some form of card, with real CSS, make the boxes rounded
export default Info;
