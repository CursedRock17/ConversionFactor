import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuickInput } from '../../context/InputForms'
import { TopPortionComp, BottomPortionComp } from './EndsTransportation'
import { resetNums, SubmitButton } from '../SubClearButtons/SubClearButtons'

import { InputContext, ContextWrapper } from '../../context/TotalContext'

//Explantory Internet Section of numbers, has all the functions and keywords
export const AccountDetails = () => {

  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Account Information" unknowns="None"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Website" name="Website" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Username" name="Username" placeNumber="text" checker={reseter} hash="2"/>
            <QuickInput placeText="Password" name="Password" placeNumber="text" checker={reseter} hash="3"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Account Details"/>
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

export const SocialSecurity = () => {

  const [ reseter, setReseter ] = useState(true);
  //TODO: If Formated, break up Social Security number

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Social Security Card" unknowns="None"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Social Security Number" name="SocialSecurity" placeNumber="number" checker={reseter} hash="1"/>
            <QuickInput placeText="Full Name" name="FullName" placeNumber="text" checker={reseter} hash="2"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Social Security"/>
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


export const ContactInfo = () => {

  const [ reseter, setReseter ] = useState(true);
  //TODO: If Formated, break up Account number

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="ContactInfo" unknowns="None"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Name" name="Name" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Phone Number" name="PhoneNumber" placeNumber="number" checker={reseter} hash="2"/>
            <QuickInput placeText="Email" name="Email" placeNumber="email" checker={reseter} hash="3"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Contact Info"/>
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

export default { AccountDetails, SocialSecurity, ContactInfo }
