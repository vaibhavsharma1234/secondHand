import React from "react";

function DNavbar() {
  return (
    <div className="flex bg-blue-900 justify-between w-full items-center px-24 mx-auto py-2">
      <div className="font-semibold text-2xl text-white">SecondHand</div>
      <div className="flex gap-8 text-base font-medium text-white">
        <a className="cursor-pointer">My Ads</a>
        <a className="cursor-pointer">Sell</a>
        <a className="cursor-pointer">Login</a>
      </div>
    </div>
  );
}

export default DNavbar;
