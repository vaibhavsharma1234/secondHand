// import { createContext } from 'react'

// export const LoginContext = createContext(null)

import { createContext, useContext, useState } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
  const [result, setResult] = useState([])
  const [input, setInput] = useState('')
  const [ads, setAds] = useState([])
  return (
    // pass those in datacontext which u want globally excess
    // component ko wrap around
    <DataContext.Provider
      value={{
        result,
        setResult,
        input,
        setInput,
        ads,
        setAds,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider
