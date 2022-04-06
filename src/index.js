import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./routes/Home/Navbar";
import { PlaneTicket, SubwayPass, LicensePlate, Passport } from "./routes/ButtonForms/Transportation";
import { AccountDetails, SocialSecurity, ContactInfo } from "./routes/ButtonForms/InternetTools";
import { DivorcePapers, BirthCertificate, DeathCertificate, CovidVaccineCard, MarriageCertificate } from './routes/ButtonForms/Documents';
import { CreditCard, BankAccount } from './routes/ButtonForms/Money';
import BoughtTokens from './routes/Footer/BoughtTokens';

ReactDOM.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={ <App />} />
    <Route path="/Navbar" element={< Navbar />} />
    <Route path="/PlaneTicket" element={<PlaneTicket />} />
    <Route path="/SubwayPass" element={<SubwayPass />} />
    <Route path="/AccountInformation" element={<AccountDetails />} />
    <Route path="/SocialSecurity" element={<SocialSecurity />} />
    <Route path="/CreditCard" element={<CreditCard />} />
    <Route path="/DivorcePapers" element={<DivorcePapers />} />
    <Route path="/BirthCertificate" element={<BirthCertificate />} />
    <Route path="/ContactInfo" element={<ContactInfo />}/>
    <Route path="/ContactInfo" element={<ContactInfo />}/>
    <Route path="/LicensePlate" element={<LicensePlate />}/>
    <Route path="/BankAccount" element={<BankAccount />}/>
    <Route path="/DeathCertificate" element={<DeathCertificate />} />
    <Route path="/CovidVaccineCard" element={<CovidVaccineCard />} />
    <Route path="/MarriageCertificate" element={<MarriageCertificate />}/>
    <Route path="/Passport" element={<Passport />}/>
    <Route path="/BoughtTokens" element={<BoughtTokens />}/>
    <Route
      path="*"
      element={
        <h1> 404 Page Not Found </h1>
      }
    />
   </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
