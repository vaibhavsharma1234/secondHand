import React from "react";
import {
    
    Button,
   
  } from "@material-tailwind/react";
function Otp() {
  return (
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
          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
        />
      </div>
      <Button className="mt-6">verify otp</Button>
    </div>
  );
}

export default Otp;
