import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuickInput } from '../../context/InputForms'
import { TopPortionComp, BottomPortionComp } from './EndsTransportation'
import { resetNums, SubmitButton } from '../SubClearButtons/SubClearButtons'

import { InputContext, ContextWrapper } from '../../context/TotalContext'
//These are form based applications based on Transportation, just simple pages
//The user can put info into and it gives them the respective item


//When submitting we onl want it happen once, then sign off the transaction
//Create ternery for buttons and swap in a loader, when they submitted

export const PlaneTicket = () => {

  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Plane Ticket" unknowns="Departure Time, Date"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Flight Number" name="FlightNumber" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Departure Time" name="DepartureTime" placeNumber="time" checker={reseter} hash="2"/>
            <QuickInput placeText="Destination" name="Destination" placeNumber="text" checker={reseter} hash="3"/>
            <QuickInput placeText="Departure Gate" name="DepartureGate" placeNumber="text" checker={reseter} hash="4"/>
            <QuickInput placeText="Seat Number" name="SeatNumber" placeNumber="text" checker={reseter} hash="5"/>
            <QuickInput placeText="Date" name="Date" placeNumber="date" checker={reseter} hash="6"/>
            <QuickInput placeText="QR Code" name="QRCode" placeNumber="text" checker={reseter} hash="7"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Plane Ticket"/>
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

export const SubwayPass = () => {

  const [ reseter, setReseter ] = useState(true)

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Subway Pass" unknowns="Expiration Date, Start Date" />
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Train Number" name="TrainNumber" placeNumber="text" checker={reseter} hash="1" />
            <QuickInput placeText="Expires" name="Expires" placeNumber="date" checker={reseter} hash="2"/>
            <QuickInput placeText="Start Date" name="StartDate" placeNumber="date" checker={reseter} hash="3"/>
            <QuickInput placeText="QR Code" name="QRCode" placeNumber="text" checker={reseter} hash="4"/>
            <div className="pl-6 pt-1 flex flex-col">
              <SubmitButton currentName="Subway Pass"/>
              <div className="pt-4"> </div>
              <button className="flex justify-center w-60 h-8 pt-1 rounded-2xl bg-blue-600 hover:bg-yellow-200 shadow-xl"
                onClick={(val) => resetNums([ reseter, setReseter ])}
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

export const LicensePlate = () => {

  const [ reseter, setReseter ] = useState(true)

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Subway Pass" unknowns="None" />
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="State" name="State" placeNumber="text" checker={reseter} hash="1" />
            <QuickInput placeText="Plate Number" name="PlateNumber" placeNumber="text" checker={reseter} hash="2"/>
            <div className="pl-6 pt-1 flex flex-col">
              <SubmitButton currentName="License Plate"/>
              <div className="pt-4"> </div>
              <button className="flex justify-center w-60 h-8 pt-1 rounded-2xl bg-blue-600 hover:bg-yellow-200 shadow-xl"
                onClick={(val) => resetNums([ reseter, setReseter ])}
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

export const Passport = () => {

  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Passport" unknowns="Date of Birth, Date of Issue, Date of Expiration"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Surname" name="Surname" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Given Name" name="GivenName" placeNumber="text" checker={reseter} hash="2"/>
            <QuickInput placeText="Nationality" name="Nationality" placeNumber="text" checker={reseter} hash="3"/>
            <QuickInput placeText="Date of Birth" name="DateOfBirth" placeNumber="date" checker={reseter} hash="4"/>
            <QuickInput placeText="Place of Birth" name="PlaceOfBirth" placeNumber="text" checker={reseter} hash="5"/>
            <QuickInput placeText="Date of Issue" name="Date of Issue" placeNumber="date" checker={reseter} hash="6"/>
            <QuickInput placeText="Date of Expiration" name="Date of Expiration" placeNumber="date" checker={reseter} hash="7"/>
            <QuickInput placeText="Sex" name="Sex" placeNumber="text" checker={reseter} hash="8"/>
            <QuickInput placeText="Authority" name="Authority" placeNumber="text" checker={reseter} hash="9"/>
            <QuickInput placeText="Passport Number" name="Passport Number" placeNumber="number" checker={reseter} hash="10"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Passport"/>
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

export default { PlaneTicket, SubwayPass, LicensePlate , Passport}

//Might use a file type for QR Code image(placeNumber=file)
