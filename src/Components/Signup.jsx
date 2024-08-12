import {
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CountdownTimer from "./Countdown";
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
  const [resendOtp, setResendOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
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
        console.log(res, "from otp")
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
          toast.error("error, please try again");
        }
      });
    } else {
        toast("fill all details")
    }
  };

  const handleOtpSection = () => {
    if (name && email && password) {
      // check whether the email exist or not
      axios.post(`${baseUrl}/api/auth/checkEmail`, { email }).then((res) => {
        console.log(res);
        if (res.data.exists) {
          toast.error("email already exist");
        } else {
          setOtpSection(true);
          setTimeLeft(30);
          setTimeout(() => {
            setResendOtp(true);
          }, 30000);
          axios.post(`${baseUrl}/api/otp/generate/?email=${email}&name=${name}`);
          toast("otp is sent");
          setSignUp(true);
        }
      });
    } else {
      return toast("fill all details");
    }
  };

  const handleResendOtp = () => {
    axios.post(`${baseUrl}/api/otp/generate/?email=${email}&name=${name}`);
    toast("otp is sent");
    setResendOtp(false);
    setTimeLeft(30);
    setTimeout(() => {
      setResendOtp(true);
    }, 30000);
  }
  return (
    <>
      <DNavbar />
      <div>
        <ToastContainer />
      </div>
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
          {
            !optSection && (
              <>
                <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name || " "}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              autocomplete="name"
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
              autoComplete="email"
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
              autocomplete="current-password"
            />
          </div>
              </>
            )
          }
        
          {optSection && (
            <div>
              <p className="italic text-sm">We have sent an OTP to your email; please check it</p>
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
                Verify Otp
              </Button>
              <Button onClick={handleResendOtp} disabled={!resendOtp} className="mt-6 ml-4">
                Resend Otp
                <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
              </Button>
            </div>
          )}
          {
            !optSection && (
              <Button
              className="mt-6"
              type="submit"
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                handleOtpSection();
              }}
            >
              Register
            </Button>
            )
          }

        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
         Already have an account?{" "}
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
