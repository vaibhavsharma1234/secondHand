import { useState } from 'react'
// import { Button } from '@material-tailwind/react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Postad from './Components/Postad'
import Item from './Components/Item'
import DataProvider from './context/DataContext'
import Myads from './Components/Myads'
import Updatead from './Components/UpdateAd'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'
export default function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/landing' element={<LandingPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/product/details' element={<ProductDetails/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/postad" element={<Postad />} />
            <Route path="/getads/:id" element={<Item />} />
            <Route path="/myads" element={<Myads />} />
            <Route path="/update/:id" element={<Updatead />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  )
}

// export default App
