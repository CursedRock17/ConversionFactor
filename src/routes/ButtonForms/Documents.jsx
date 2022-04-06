import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuickInput } from '../../context/InputForms'
import { TopPortionComp, BottomPortionComp } from './EndsTransportation'
import { resetNums, SubmitButton } from '../SubClearButtons/SubClearButtons'

import { InputContext, ContextWrapper } from '../../context/TotalContext'

export const DivorcePapers = () => {
  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Divorce Papers" unknowns="Filed On"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="File Number" name="FileNumber" placeNumber="number" checker={reseter} hash="1"/>
            <QuickInput placeText="Filed At" name="FiledAt" placeNumber="text" checker={reseter} hash="2" />
            <QuickInput placeText="Date Filed On" name="DateFiledOn" placeNumber="date" checker={reseter} hash="3"/>
              <div className="pt-12"> </div>
            <QuickInput placeText="Husband Full Name" name="HusbandFullName" placeNumber="text" checker={reseter} hash="4" />
            <QuickInput placeText="Husband Address" name="HusbandAddress" placeNumber="text" checker={reseter} hash="5" />
            <QuickInput placeText="Husband Phone Number" name="HusbandPhoneNumber" placeNumber="number" checker={reseter} hash="6"/>
            <QuickInput placeText="Husband Occupation" name="HusbandOccupation" placeNumber="text" checker={reseter} hash="7"/>
              <div className="pt-12"> </div>
            <QuickInput placeText="Wife Full Name" name="WifeFullName" placeNumber="text" checker={reseter} hash="8" />
            <QuickInput placeText="Wife Address" name="WifeAddress" placeNumber="text" checker={reseter} hash="9"/>
            <QuickInput placeText="Wife Phone Number" name="WifePhoneNumber" placeNumber="number" checker={reseter} hash="10"/>
            <QuickInput placeText="Wife Occupation" name="WifeOccupation" placeNumber="text" checker={reseter} hash="11"/>

              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Divorce Papers"/>
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

export const BirthCertificate = () => {
  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Birth Certificate" unknowns="Date of Birth, Time of Birth, Date Filled"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="State File Number" name="StateFileNumber" placeNumber="number" checker={reseter} hash="1"/>
            <QuickInput placeText="Name Of Child" name="NameOfChild" placeNumber="text" checker={reseter} hash="2"/>
            <QuickInput placeText="Date of Birth" name="DateOfBirth" placeNumber="date" checker={reseter} hash="3"/>
            <QuickInput placeText="Time of Birth" name="TimeOfBirth" placeNumber="time" checker={reseter} hash="4"/>
            <QuickInput placeText="City of Birth" name="CityOfBirth" placeNumber="text" checker={reseter} hash="5"/>
            <QuickInput placeText="Date Filled" name="DateFilled" placeNumber="date" checker={reseter} hash="6"/>
            <QuickInput placeText="Sex" name="Sex" placeNumber="text" checker={reseter} hash="7" />
            <QuickInput placeText="County Of Birth" name="CountyOfBirth" placeNumber="text" checker={reseter} hash="8" />
              <div className="pt-12"> </div>
            <QuickInput placeText="Mother's Maiden Name" name="MaidenName" placeNumber="text" checker={reseter} hash="9"/>
            <QuickInput placeText="Mother's Place of Birth" name="MomPOB" placeNumber="text" checker={reseter} hash="10"/>
            <QuickInput placeText="Mother's Age" name="MothersAge" placeNumber="number" checker={reseter} hash="11"/>
              <div className="pt-12"> </div>
            <QuickInput placeText="Father's Name" name="FatherName" placeNumber="text" checker={reseter} hash="12"/>
            <QuickInput placeText="Father's Place of Birth" name="DadPOB" placeNumber="text" checker={reseter} hash="13"/>
            <QuickInput placeText="Father's Age" name="FathersAge" placeNumber="number" checker={reseter} hash="14"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="BirthCertificate"/>
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

export const DeathCertificate = () => {
  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Death Certificate" unknowns="Died At (time), Date of Death"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Name of Deceased" name="Name" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Died At" name="DiedAt" placeNumber="time" checker={reseter} hash="2"/>
            <QuickInput placeText="Date of Death" name="DateOfDeath" placeNumber="date" checker={reseter} hash="3"/>
            <QuickInput placeText="Sex" name="Sex" placeNumber="text" checker={reseter} hash="4"/>
            <QuickInput placeText="Age" name="Age" placeNumber="number" checker={reseter} hash="5"/>
            <div className="pt-6"></div>
            <QuickInput placeText="Cause of Death" name="Cause" placeNumber="text" checker={reseter} hash="6"/>
            <QuickInput placeText="Occupation" name="Occupation" placeNumber="text" checker={reseter} hash="7"/>
            <QuickInput placeText="Relationship Status" name="RelationshipStatus" placeNumber="text" checker={reseter} hash="8"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Death Certificate"/>
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

export const MarriageCertificate = () => {
  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Marriage Certificate" unknowns="Date of Marriage, Time of Marriage"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
            <QuickInput placeText="Person One" name="OneName" placeNumber="text" checker={reseter} hash="1"/>
            <QuickInput placeText="Person Two" name="TwoName" placeNumber="text" checker={reseter} hash="2"/>
            <QuickInput placeText="Date of Marriage" name="DateOfMarriage" placeNumber="date" checker={reseter} hash="3"/>
            <QuickInput placeText="Pastor" name="Pastor" placeNumber="text" checker={reseter} hash="4"/>
            <QuickInput placeText="Time of Marriage" name="TimeOfMarriage" placeNumber="time" checker={reseter} hash="5"/>
            <QuickInput placeText="Bride" name="Bride" placeNumber="text" checker={reseter} hash="6"/>
            <QuickInput placeText="Groom" name="Groom" placeNumber="text" checker={reseter} hash="7"/>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Marriage Certificate"/>
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

export const CovidVaccineCard = () => {
  const [ reseter, setReseter ] = useState(true);

  return (
   <div className="flex justify-center">
    <div className="flex-col min-h-full justify-center bluePurple-gradient">
      <TopPortionComp title="Covid Vaccine Card" unknowns="Date of Birth, 1st dose date, 2nd dose date"/>
     <div className="flex-col pr-12 pl-12 py-12 pb-12">
      <div className="w-full justify-center flex">
        <div className="flex max-h-max pb-6 pt-6 w-96 card rounded-2xl shadow-xl">
          <div className="pl-12 space-y-4">
          <ContextWrapper>
          <QuickInput placeText="Last Name" name="LastName" placeNumber="text" checker={reseter} hash="1"/>
          <QuickInput placeText="First Name" name="FirstName" placeNumber="text" checker={reseter} hash="2"/>
          <QuickInput placeText="MI" name="MiddleInital" placeNumber="text" checker={reseter} hash="3"/>
            <div className="pt-6"></div>
          <QuickInput placeText="Date of Birth" name="DateOfBirth" placeNumber="date" checker={reseter} hash="4"/>
          <QuickInput placeText="Patient Number" name="PatientNumber" placeNumber="number" checker={reseter} hash="5"/>
            <div className="pt-6"></div>
          <QuickInput placeText="First Dose Manufacturer" name="FirstDoseManufacturer" placeNumber="text" checker={reseter} hash="6"/>
          <QuickInput placeText="First Dose Date" name="FirstDoseDate" placeNumber="date" checker={reseter} hash="7"/>
          <QuickInput placeText="First Dose Site" name="FirstDoseSite" placeNumber="text" checker={reseter} hash="8"/>
            <div className="pt-6"></div>
          <QuickInput placeText="Second Dose Manufacturer" name="SecondDoseManufacturer" placeNumber="text" checker={reseter} hash="9"/>
          <QuickInput placeText="Second Dose Date" name="SecondDoseDate" placeNumber="date" checker={reseter} hash="10"/>
          <QuickInput placeText="Second Dose Site" name="SecondDoseSite" placeNumber="text" checker={reseter} hash="11"/>
            <div className="pt-6"></div>
          <QuickInput placeText="Other Dose Manufacturer" name="OtherDoseManufacturer" placeNumber="text" checker={reseter} hash="12"/>
          <QuickInput placeText="Other Dose Date" name="OtherDoseDate" placeNumber="date" checker={reseter} hash="13"/>
          <QuickInput placeText="Other Dose Site" name="OtherDoseSite" placeNumber="text" checker={reseter} hash="14"/>
            <div className="pt-6"></div>
          <QuickInput placeText="Other Dose Manufacturer" name="OtherDoseManufacturer" placeNumber="text" checker={reseter} hash="15"/>
          <QuickInput placeText="Other Dose Date" name="OtherDoseDate" placeNumber="date" checker={reseter} hash="16"/>
          <QuickInput placeText="Other Dose Site" name="OtherDoseSite" placeNumber="text" checker={reseter} hash="17"/>
            <div className="pt-6"></div>
              <div className="pl-6 pt-1 flex flex-col">
            <SubmitButton currentName="Covid Vaccine Card"/>
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

export default { DivorcePapers, BirthCertificate, DeathCertificate, MarriageCertificate }
