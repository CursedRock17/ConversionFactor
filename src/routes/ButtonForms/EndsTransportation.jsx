import React from 'react'
import { Link } from 'react-router-dom';

export const TopPortionComp = (props) => {
  return (
    <>
    <div className="w-screen justify-center lg:h-32 md:h-24 sm:h-16 flex yellowGreen-gradient">
    <Link to="/" >
      <h1 className="pt-4 pb-6 font-semibold text-3xl"> Home </h1>
    </Link>
    </div>
    <div className="flex flex-col pt-10 justify-center">
      <h1 className="flex justify-center pb-6 font-semibold text-3xl">
        {`${props.title}`}
      </h1>
      <div className="flex justify-center">
      <p>
        Unnamed: <br />
        {props.unknowns}
      </p>
      </div>
    </div>
    </>
  )
}

export const BottomPortionComp = () => {
  return (
    <div className="bluePurple-gradient h-24">
      <div className="flex justify-end redPink-gradient w-full h-screen"> </div>
    </div>
  )
}

export default { TopPortionComp, BottomPortionComp };
