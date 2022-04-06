import React, { useState, useContext, useEffect } from 'react'
import { InputContext} from './TotalContext'

export const QuickInput = ({ placeText, placeNumber, val, name, checker, id, hash }) => {
  const [ valHolder, setValHolder ] = useState();
  const [ submitCount, setSubmitCount ] = useState(0);

  const { undefinedCheck, setUndefinedCheck, nameArray, setNameArray } = useContext(InputContext)

  //TODO:
  //Give Names an ID, we have to make sure all field are filed out

  /*This folder is all about setting up the data for the eth transaction
  When the user types it checks for the i.d that we're typing at
  because we have seperate InputForms, if it shares an id in the
  formdata already, we remove that index and push this new one inspect

  TODO: Input doesn't immediatly update, check React18 notes
*/
  useEffect(() => {
    createVal();
    if(hash > undefinedCheck){
      setUndefinedCheck(hash)
    }
  }, [valHolder])

  const createVal = () => {
      pushData();
      return;
  }

   const pushData = async() => {

    for(let i = 0; i <= nameArray.length; ++i){

      if(nameArray[i] != null){

          if(name == nameArray[i].id){
/* Here is we find an element we want to fill the value, but we need an id First
So we we need to chop off the element at this spot and replace it with the updated value */
              nameArray.splice(i, 1)

              setNameArray([...nameArray, {
                id: name,
                value: valHolder
               }])
               //At id of i set the the value to the most recent value entered
              break;
          }
      }

      else if(i == nameArray.length) {
        setNameArray([...nameArray, {
          id: name,
          value: valHolder
         }])
      }
//This prevents us from looping over elements and sets the array when an object is undefined
    }
  }

  return (
    <>
      <div className="py-3">
        <input className="flex justify-center flex-col w-72 pl-12 pr-12 h-12 rounded-3xl"
          placeholder= {`${placeText}`}
          type= {`${placeNumber}`}
          name={`${name}`}
          onChange={(val) => setValHolder(val.target.value)}
          value={checker ? val : (val) =>0}
          >

        </input>
      </div>
      <div>
      </div>
    </>
  )
}



export default QuickInput;

/*

*/
