import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [genderVal, setGenderVal] = useState(false);
  const [paramVal, setParamVal] = useState('');

  return <GlobalContext.Provider value={{genderVal, setGenderVal, paramVal, setParamVal}}>
     {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider;