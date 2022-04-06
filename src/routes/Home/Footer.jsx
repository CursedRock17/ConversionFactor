import React, { useState, useContext } from 'react';
import { InputContext, ContextWrapper } from '../../context/TotalContext'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className="w-full flex flex-row justify-center cyanFooter-gradient">
     <div className="w-full flex flex-row pt-6 pb-6 justify-center">
      <h1 className="text-3xl text-pink-900 font-sembold">
        <Link to="/BoughtTokens" > Bought NFTS </Link>
       </h1>
     </div>
    </div>
  );
}

export default Footer;
