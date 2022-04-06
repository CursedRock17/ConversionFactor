import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col justify-center cyanNavbar-gradient shadow-xl">
     <div className="w-full flex flex-col justify-center items-center pb-8 pt-8 bg-blend-normal">
        <nav>
        <Link to="/">
        <h1 className="text-3xl font-semibold text-pink-900">
          Conversion Factor
        </h1>
        </Link>
      </nav>
      <Outlet />
      <p>
        Security only costs a few cents
      </p>
     </div>
    </div>
  )
}

export default Navbar;
