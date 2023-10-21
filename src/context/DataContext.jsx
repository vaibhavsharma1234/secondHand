// import { createContext } from 'react'

// export const LoginContext = createContext(null)

import { createContext, useContext, useState } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
  const [result, setResult] = useState([])
  const [input, setInput] = useState('')
  const [ads, setAds] = useState([])
  const [imageval, setImageVal] = useState('')
  const [comments, setComments] = useState([])
  const [signup,setSignUp]=useState(false)
  return (
    // pass those in datacontext which u want globally excess
    // component ko wrap arou
    <DataContext.Provider
      value={{
        result,
        setResult,
        input,
        setInput,
        ads,
        setAds,
        imageval,
        setImageVal,
        comments, setComments,
        signup,setSignUp
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider
