import React, { createContext, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./routes/Home/Navbar";
import Footer from './routes/Home/Footer';
import Selector from './routes/Home/Selector';
import Info from './routes/Home/Info';

import QuickInput from './context/InputForms'
import { InputContext, ContextWrapper } from "./context/TotalContext";

 export const App = () => {

  return (
    <ContextWrapper>
        <div>
      <Navbar />
        <Info />
        <Selector />
      <Footer />
        </div>
    </ContextWrapper>
  );
}

export default App;
