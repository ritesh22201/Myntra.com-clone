import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [genderVal, setGenderVal] = useState(false);
  const [paramVal, setParamVal] = useState('');
  const [inputVal, setInputVal] = useState('');

  return <GlobalContext.Provider value={{inputVal, setInputVal, genderVal, setGenderVal, paramVal, setParamVal}}>
     {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider;