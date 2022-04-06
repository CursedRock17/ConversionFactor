import React, {useState, createContext} from 'react';
import QuickInput from './InputForms'

export const InputContext = createContext();

export const ContextWrapper = (props, name) => {
    const [ undefinedCheck, setUndefinedCheck ] = useState(0);
    const [ nameArray, setNameArray ] = useState([{ id: null, value: null}]);
    const [ accountHolder, setAccountHolder ] = useState("");

  return (
    <>
      <InputContext.Provider value={{ undefinedCheck, setUndefinedCheck, nameArray, setNameArray, accountHolder, setAccountHolder }}>
        {props.children}
      </InputContext.Provider>
    </>
    )
}

/*
This file is a context will which allows us to flow undefinedCheck throughout the application
We have to create a context file which we can use by call useContext(InputContext)
We just pass the undefinedCheck state stuff through the file in order to use it in other places

*/
