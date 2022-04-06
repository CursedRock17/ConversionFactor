import React, { useState, useContext } from 'react';
import TypeButton from '../SelectorTypes/TypeButton'
import WalletButton from '../SelectorTypes/WalletConnect'

import { InputContext, ContextWrapper } from '../../context/TotalContext'
//Going to use state function in order to check if user has wallet connected
//This is just our display, using ternary operators we can show a signed in button if they
//aren't signed in

//All in all dispays all the routes, just make sure the linkName = Link To
const Selector = () => {

  const [ connectState, setConnectState ] = useState(window.ethereum.selectedAddress);

  const controlConnect = () => {
    setConnectState(true);
  }

  return (
      <div className="flex justify-center w-full fillerCyan-gradient pt-5 pb-12 pl-5 pr-5">
        <ContextWrapper>
        <div className="flex justify-center grid grid-rows-3 grid-flow-col gap-10">
        {connectState != undefined ?
          <>
            <TypeButton typesName="Plane Ticket" linkName="PlaneTicket"/>
            <TypeButton typesName="Subway Pass" linkName="SubwayPass"/>
            <TypeButton typesName="Account Information" linkName="AccountInformation"/>
            <TypeButton typesName="Social Security" linkName="SocialSecurity"/>
            <TypeButton typesName="Credit/Debit Card" linkName="CreditCard" />
            <TypeButton typesName="Divorce Papers" linkName="DivorcePapers" />
            <TypeButton typesName="Birth Certificate" linkName="BirthCertificate" />
            <TypeButton typesName="Contact Info" linkName="ContactInfo" />
            <TypeButton typesName="License Plate" linkName="LicensePlate" />
            <TypeButton typesName="Bank Account" linkName="BankAccount" />
            <TypeButton typesName="Death Certificate" linkName="DeathCertificate" />
            <TypeButton typesName="Covid Vax Card" linkName="CovidVaccineCard" />
            <TypeButton typesName="Marriage Certificate" linkName="MarriageCertificate"/>
            <TypeButton typesName="Passport" linkName="Passport" />
          </>
          :
          <WalletButton controlConnect={() => controlConnect()} />
        }
        </div>
        </ContextWrapper>
      </div>
  )
}

export default Selector;
