import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
// import { ArrowUTurnIcon } from 'hero'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
// import {  } from '@material-tailwind/react'
import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Header from './Header'
import { baseUrl } from "../config/api";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState(0);
  const [optSection, setOtpSection] = useState(false);
  const { signup,setSignUp}=useContext(DataContext)
  const [otp,setOtp]=useState("")
  // const baseUrl = 'http://localhost:8000'
  const clearClickHandler = () => setKey((k) => k + 1);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // console.log('hello')
    
    if(signup){
      // alert("helloooo")
      console.log(name, email, password);
      const data = {
        fullname: name,
        email,
        password,
      };
      // sent the data to the backend now
      axios.post(`${baseUrl}/api/auth/signup?otp=${otp}`, data).then((res) => {
        // console.log(res)
        const { success } = res.data;
       
        console.log(success);
        // if(res)
        if (success) {
          let mailcont='welcome to the secondhand'
          // send mail to the user 
          const encodedEmail = (email);
          const encodedName = (name);
          const encodedMailCont = (mailcont);
          console.log(encodedEmail, encodedName, encodedMailCont);
          axios.post(`${baseUrl}/api/postmail/?email=${encodedEmail}&name=${encodedName}&content=${encodedMailCont}`).then((res) => {
              console.log(res);
          });
          setName("");
          setEmail("");
          setPassword("");
          clearClickHandler();
          toast("successfully registered")
          setTimeout(() => {
            navigate("/login");
          }, 5000);

          setSignUp(false)
          // navigate to  the login page
        } else {
          toast("error hai vapas try kro from signup");
        }
      });
    }else{
      // navigate('/otp')
      // call the send otp function 
      if(name && email && password){

        // alert("call the send otp function")
        axios.post(`${baseUrl}/api/otp/generate/?email=${email}&name=${name}`)
        toast("otp is sent")
        setSignUp(true)
      }else{
        toast("fill all details")
      }
    
    }

  };
  const handleClickBack = () => {
    navigate("/");
  };

  const handleOtpSection =()=>{
    if(name && email && password){
      setOtpSection(true)
      
      
    }else{
    
      // return  toast("fill all details")
    }
  }
  return (
    <>
      {/* <Header /> */}
      <div>
        {/* <Tooltip content="go-back">
          <span
            onClick={handleClickBack}
            className="cursor-pointer block w-12 rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"
          >

          </span>
        </Tooltip> */}
        <ToastContainer />

        <Button
          onClick={handleClickBack}
          className="p-4 m-4 hover:bg-black-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2" />
          <span>Go Back</span>
        </Button>
      </div>
      <div className="flex items-center justify-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            onSubmit={handleClick}
            key={key}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                size="lg"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  defaultChecked={false}
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {optSection && (
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  OTP
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                    className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                </div>
                <Button type="submit" disabled={!optSection} className="mt-6">Register</Button>
              </div>
            )}
            <Button className="mt-6" type="submit" fullWidth onClick={handleOtpSection}>
              Send Otp
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}
