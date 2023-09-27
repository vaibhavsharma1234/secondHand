import React from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function DNavbar() {
  const navigate =useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'))
  const logout = () => {
    sessionStorage.clear()

    navigate('/')
  }
  const notify = () => {
    toast("first login!");
  }
  const handleClick = () => {
    navigate('/')
  }
 
  
  return (
    <div className="flex bg-blue-900 justify-evenly md:justify-between w-full items-center px-24 mx-auto py-2">
      <div onClick={handleClick} className="font-semibold cursor-pointer text-xl md:text-2xl text-white">SecondHand</div>
      <div className="flex gap-8 text-base font-medium text-white">
      <ToastContainer />

        {!user && (
          <>
            
              <Link to="/login" className="flex items-center cursor-pointer">
                Login
              </Link>
            
              <Link to="/signup" className="flex items-center">
                Register
              </Link>
            
              <Link
                href="#"
                onClick={() => notify()}
                className="flex items-center"
              >
                Sell
              </Link>
            
              </>
        )}
               {user && (
          <>
            
              <Link to="/" onClick={logout} className="flex items-center cursor-pointer">
                Logout
              </Link>
            
              <Link to="/postad" className="flex items-center">
                Sell
              </Link>
            
              {/* <Link
                to="/myads"
                
                className="flex items-center"
              >
                MyAds
              </Link> */}
            
              </>
        )}
      </div>
    </div>
  );
}

export default DNavbar;
