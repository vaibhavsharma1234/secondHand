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
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from './Header'
import { baseUrl } from "../config/api";
import DNavbar from "./DNavbar";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState(0);
  const [optSection, setOtpSection] = useState(false);
  const { signup, setSignUp } = useContext(DataContext);
  const [otp, setOtp] = useState("");
  // const baseUrl = 'http://localhost:8000'
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts (page changes)
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  const clearClickHandler = () => setKey((k) => k + 1);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // console.log('hello')

    if (signup) {
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
          let mailcont = "welcome to the secondhand";
          // send mail to the user
          const encodedEmail = email;
          const encodedName = name;
          const encodedMailCont = mailcont;
          console.log(encodedEmail, encodedName, encodedMailCont);
          axios
            .post(
              `${baseUrl}/api/postmail/?email=${encodedEmail}&name=${encodedName}&content=${encodedMailCont}`
            )
            .then((res) => {
              console.log(res);
            });
          setName("");
          setEmail("");
          setPassword("");
          clearClickHandler();
          toast("successfully registered");
          setTimeout(() => {
            navigate("/login");
          }, 5000);

          setSignUp(false);
          // navigate to  the login page
        } else {
          toast("error hai vapas try kro from signup");
        }
      });
    } else {
      // navigate('/otp')
      // call the send otp function
      // if(name && email && password){
      //   // alert("call the send otp function")
      //   axios.post(`${baseUrl}/api/otp/generate/?email=${email}&name=${name}`)
      //   toast("otp is sent")
      //   setSignUp(true)
      // }else{
        toast("fill all details")
      // }
    }
  };

  const handleOtpSection = () => {
    if (name && email && password) {
      setOtpSection(true);
      // alert("call the send otp function")
      axios.post(`${baseUrl}/api/otp/generate/?email=${email}&name=${name}`);
      toast("otp is sent");
      setSignUp(true);
    } else {
      return toast("fill all details");
    }
  };
  return (
    <>
      {/* <Header /> */}
      <DNavbar />
      <div>
        {/* <Tooltip content="go-back">
          <span
            onClick={handleClickBack}
            className="cursor-pointer block w-12 rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"
          >

          </span>
        </Tooltip> */}
        <ToastContainer />
      </div>
      {/* <div className="flex items-center justify-center  w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl">
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
      </div> */}
      <div className="w-full p-6 mt-28 mx-auto rounded-md h-screen  lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-600 uppercase">
          Sign Up
        </h1>
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleClick(e);
          }}
        >
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name || " "}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              value={email || " "}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
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
                  onChange={(e) => {
                    e.preventDefault();
                    setOtp(e.target.value);
                  }}
                  className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
              </div>
              <Button type="submit" disabled={!optSection} className="mt-6">
                Register
              </Button>
            </div>
          )}
          <Button
            className="mt-6"
            type="submit"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              handleOtpSection();
            }}
          >
            Send Otp
          </Button>
        </form>
        {/* <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div> */}
        {/* <div className="flex mt-4 gap-x-2">
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div> */}

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
