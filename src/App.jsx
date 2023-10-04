import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Postad from './Components/Postad'
import DataProvider from './context/DataContext'
import Myads from './Components/Myads'
import Updatead from './Components/UpdateAd'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'
import Otp from './Components/Otp'
import DFooter from './Components/DFooter'
import Map from './Components/Map'
export default function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/map' element={<Map/>}/>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            {/* <Route path='/product/details' element={<ProductDetails/>}/> */}
            <Route path='/product/details/:id' element={<ProductDetails/>}/>
            {/* <Route path="/" element={<Home/>} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/otp" element={<Otp />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/postad" element={<Postad />} />
            <Route path="/getads/:id" element={<ProductDetails />} />
            <Route path="/myads" element={<Myads />} />
            <Route path="/update/:id" element={<Updatead />} />
          </Routes>
          <DFooter/>
        </Router>
      </DataProvider>
    </>
  )
}

// export default App
