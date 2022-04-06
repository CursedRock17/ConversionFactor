import React, { useState, useContext, useEffect } from 'react';
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';

//The TypeButton assigns buttons to pages respective to the linkName
//Which is very similar to the typesName or the shown one on the button that redirects
export const TypeButton = (props) => {

  return (
    <div className=" flex shadow-xl bg-pink-300">
     <div className="flex lg:w-200 md:w-100 sm:w-50 lg:h-14 md:h-10 sm:h-8 pl-5 pr-5 hover:opacity-50">
        <nav>
        <NavLink to={`/${props.linkName}`}>
        <p className="flex justify-center lg:w-24 md:w-16 sm:w-8 lg:text-md md:text-xs sm:text-xs"> {props.typesName} </p>
        </NavLink>
       </nav>
       <Outlet />
     </div>
    </div>
  )
}

export default TypeButton;
