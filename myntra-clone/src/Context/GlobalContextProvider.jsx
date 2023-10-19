import React, { createContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [genderVal, setGenderVal] = useState(false);
  const [paramVal, setParamVal] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [searchVal,setSearchVal] = useState("");
  

  return <GlobalContext.Provider value={{inputVal, setInputVal, genderVal, setGenderVal, paramVal, setParamVal, searchVal, setSearchVal}}>
     {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider;