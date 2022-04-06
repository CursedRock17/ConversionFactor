import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuickInput } from '../../context/InputForms'
import { TopPortionComp, BottomPortionComp } from './EndsTransportation'
import { resetNums, SubmitButton } from '../SubClearButtons/SubClearButtons'

import { InputContext, ContextWrapper } from '../../context/TotalContext'

export const CreditCard = () => {

  const [ reseter, setReseter ] = useState(true);
  //TODO: If Formated, break up Account number

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Credit/Debit Card" unknowns="Expiration Date"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Account Number" name="AccountNumber" placeNumber="number" checker={reseter} hash="1"/>
            <QuickInput placeText="Expiration Date" name="Expiration Date" placeNumber="date" checker={reseter} hash="2"/>
            <QuickInput placeText="Account Holder Name" name="AccountHolderName" placeNumber="text" checker={reseter} hash="3"/>
            <QuickInput placeText="Card Security Code" name="CardSecurityCode" placeNumber="number" checker={reseter} hash="4"/>
            <QuickInput placeText="Card Brand" name="CardBrand" placeNumber="text" checker={reseter} hash="5"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Credit Card"/>
                <button className="flex justify-center w-60 h-8 pt-1 rounded-2xl bg-blue-600 hover:bg-yellow-200 shadow-xl"
                  onClick={() => resetNums([ reseter, setReseter ])}
                >
                  <p> Clear </p>
                </button>
            </div>
          </ContextWrapper>
          </div>
        </div>
      </div>
     </div>
      <BottomPortionComp />
    </div>
   </div>
  )
}

export const BankAccount = () => {

  const [ reseter, setReseter ] = useState(true);
  //TODO: If Formated, break up Account number

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Bank Account" unknowns="None"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Account Name" name="AccountName" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Account Type" name="AccountType" placeNumber="text" checker={reseter} hash="2"/>
            <div className="pt-6"> </div>
            <QuickInput placeText="Account Number" name="AccountNumber" placeNumber="number" checker={reseter} hash="3"/>
            <QuickInput placeText="Routing Number" name="RoutingNumber" placeNumber="number" checker={reseter} hash="4"/>
            <div className="pt-6"> </div>
            <QuickInput placeText="Bank Name" name="BankName" placeNumber="text" checker={reseter} hash="5"/>
            <QuickInput placeText="Phone Number" name="PhoneNumber" placeNumber="number" checker={reseter} hash="6"/>
            <QuickInput placeText="Address" name="Address" placeNumber="text" checker={reseter} hash="7"/>
            <div className="pt-6"> </div>
            <QuickInput placeText="Bank URL" name="BankURL" placeNumber="url" checker={reseter} hash="8"/>
            <QuickInput placeText="Username" name="Username" placeNumber="text" checker={reseter} hash="9"/>
            <QuickInput placeText="Password" name="Password" placeNumber="text" checker={reseter} hash="10"/>
            <div className="pt-6"> </div>
            <QuickInput placeText="Card Number" name="CardNumber" placeNumber="number" checker={reseter} hash="11"/>
            <QuickInput placeText="Pin Code" name="PinCode" placeNumber="number" checker={reseter} hash="12"/>
            <QuickInput placeText="Credit Limit" name="CreditLimit" placeNumber="number" checker={reseter} hash="13"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Bank Account"/>
                <button className="flex justify-center w-60 h-8 pt-1 rounded-2xl bg-blue-600 hover:bg-yellow-200 shadow-xl"
                  onClick={() => resetNums([ reseter, setReseter ])}
                >
                  <p> Clear </p>
                </button>
            </div>
          </ContextWrapper>
          </div>
        </div>
      </div>
     </div>
      <BottomPortionComp />
    </div>
   </div>
  )
}

export default { CreditCard, BankAccount };
