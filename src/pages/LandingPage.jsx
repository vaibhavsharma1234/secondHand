import React, { useState } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll';


function LandingPage() {
  const [tab, setTab] = useState(2);

  return (
    <>
      <section className="relative mb-32">
        <div
          className={`relative w-full h-[650px] flex bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/SYTO3xs06fU')]`}
        ></div>
        <div className="flex absolute bottom-12 w-full z-50">
          <div className="w-1/4 flex flex-col pl-28 gap-8 h-full text-white">
            <div className="text-sm">Always in Control</div>
            <div className="w-full">
              <button className="text-base font-semibold rounded-full text-black bg-white px-6 py-2">
                Explore products
              </button>
            </div>
          </div>
          <div className="w-1/2 text-white font-semibold text-5xl">
            Welcome to SecondHand - Your College Marketplace!
          </div>
          <div className="w-1/4 flex justify-end pr-32 items-center">
            <a
              
            >
              <i class="fa-solid fa-circle-chevron-down text-white text-4xl animate-bounce"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between absolute w-full px-24 mx-auto top-12 z-50">
          <div className="font-bold text-3xl text-white">SecondHand</div>
          <div className="flex gap-8 text-lg font-bold text-white items-center">
          <Link to="moto" smooth={true} duration={500} offset={-50} isDynamic={true} >
            <a className="cursor-pointer">Our Moto</a>
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-50} isDynamic={true} >
            <a className="cursor-pointer">About</a>
            </Link>

            <Link to="products" smooth={true} duration={500} offset={-50} isDynamic={true} >
            <a  className="cursor-pointer">Products</a>
            </Link>
            <Link to="questions" smooth={true} duration={500} offset={-50} isDynamic={true} >
            <a  className="cursor-pointer">Common Questions</a>
            </Link>
            <Link to="explore" smooth={true} duration={500} offset={-50} isDynamic={true} >
            <a  className="cursor-pointer">Explore</a>
            </Link>
          </div>
        </div>
        <div className="absolute z-20 h-full bg-gradient-to-r from-black/40 to-black/40 top-0 bottom-0 left-0 right-0"></div>
      </section>

      <section id="moto" className="w-11/12 my-32 mx-auto">
        <div className="w-3/5 text-black text-5xl font-semibold font-sans">
          Reduce waste, promote sustainability, and foster a sense of community.
        </div>
        <div className="flex my-12 w-full gap-8">
          <div
            className={`relative w-3/5 h-[500px] flex bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/_aXa21cf7rY')] rounded-3xl`}
          >
            <div className="absolute z-20 rounded-3xl h-full bg-gradient-to-r from-black/30 to-black/30 top-0 bottom-0 left-0 right-0"></div>
          </div>
          <div
            className={`relative w-2/5 h-[500px] flex bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/ip9R11FMbV8')] rounded-3xl`}
          >
            <div className="absolute z-20 rounded-3xl h-full bg-gradient-to-r from-black/30 to-black/30 top-0 bottom-0 left-0 right-0"></div>
          </div>
        </div>
        <div className="w-full flex justify-between border-t-[1px] border-gray-200 py-8 font-base">
          <div>
            <h1 className="font-semibold">01 - Buy Easily</h1>
            <p className="text-gray-700  py-2">
              Discover affordable, pre-loved items from fellow students.
            </p>
          </div>
          <div>
            <h1 className="font-semibold">02 - Sell Responsibly</h1>
            <p className="text-gray-700 py-2">
              List your items, set your price, and help the community.
            </p>
          </div>
          <div>
            <h1 className="font-semibold">03 - Connect & Share</h1>
            <p className="text-gray-700  py-2">
              Join a caring community and make sustainable choices together.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="w-11/12 my-32 mx-auto">
        <h2 className="text-5xl text-center font-semibold">
          Browse Categories.
        </h2>
        <div className="border-b-[2px] border-b-gray-200 flex justify-center mx-auto">
          <div className="flex font-semibold justify-between mt-8 mb-2 gap-12 mx-auto">
            <span
              onClick={(e) => {
                e.preventDefault();
                setTab(1);
              }}
              className={`cursor-pointer ${
                tab === 1 ? "border-b-2 border-b-black" : ""
              }`}
            >
              Our Reccomendations
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                setTab(2);
              }}
              className={`cursor-pointer ${
                tab === 2 ? "border-b-2 border-b-black" : ""
              }`}
            >
              Electronics
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                setTab(3);
              }}
              className={`cursor-pointer ${
                tab === 3 ? "border-b-2 border-b-black" : ""
              }`}
            >
              Study Materials
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                setTab(4);
              }}
              className={`cursor-pointer ${
                tab === 4 ? "border-b-2 border-b-black" : ""
              }`}
            >
              Others
            </span>
          </div>
        </div>

        {tab === 1 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/SqLyNHbsLKQ"}
              ></img>
            </div>
            <div className="row-span-1 bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/xsGxhtAsfSA"}
              ></img>
            </div>
            <div className="row-span-1 bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/h10-NImYZHs"}
              ></img>
            </div>
            <div className="row-span-1 bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/LUGuCtvlk1Q"}
              ></img>
            </div>
            <div className="row-span-1 bg-blue-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/M_dJ_ScwaLE"}
              ></img>
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-green-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/eF1XTtvDpYA"}
              ></img>
            </div>
            <div className="row-span-1 bg-green-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/_WdDaZM6VIM"}
              ></img>
            </div>
            <div className="row-span-1 bg-green-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/aiWjNA46Urc"}
              ></img>
            </div>
            <div className="row-span-1 bg-green-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/PXaQXThG1FY"}
              ></img>
            </div>
            <div className="row-span-1 bg-green-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/1SAnrIxw5OY"}
              ></img>
            </div>
          </div>
        )}
        {tab === 3 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-red-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/qYxIVsHpDDo"}
              ></img>
            </div>
            <div className="row-span-1 bg-red-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/OMXPrCAhxrE"}
              ></img>
            </div>
            <div className="row-span-1 bg-red-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/SwCMZwrhQm8"}
              ></img>
            </div>
            <div className="row-span-1 bg-red-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/OLvQEjwCSVI"}
              ></img>
            </div>
            <div className="row-span-1 bg-red-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/pakTZIspHO0"}
              ></img>
            </div>
          </div>
        )}
        {tab === 4 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-amber-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/2KZwt-Jtl8c"}
              ></img>
            </div>
            <div className="row-span-1 bg-amber-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/NOpsC3nWTzY"}
              ></img>
            </div>
            <div className="row-span-1 bg-amber-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/dGIEMeN2MV8"}
              ></img>
            </div>
            <div className="row-span-1 bg-amber-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/phS37wg8cQg"}
              ></img>
            </div>
            <div className="row-span-1 bg-amber-400">
              <img
                className="w-full h-full object-cover"
                src={"https://source.unsplash.com/Y6Hn79vRcXU"}
              ></img>
            </div>
          </div>
        )}
      </section>

      <section id="about" className="my-32 flex w-full mx-auto bg-teal-200/60">
        <div className="w-full mx-auto flex py-20 justify-center">
          <div className="w-2/4 font-medium text-2xl text-center">
            "At SecondHand, we believe in the power of sharing and caring within
            the college community. Our platform is dedicated to helping students
            make responsible choices by offering their pre-loved items at
            affordable prices or for free, all while assisting those in need.
            Our mission is to reduce waste, promote sustainability, and foster a
            sense of community among college students."
          </div>
        </div>
      </section>

      <section className="my-32 w-11/12 mx-auto" id="questions">
        <h1 className="font-bold text-5xl mb-12">Common Questions.</h1>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">How It Works</div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              <ul class="list-disc">
                <li>List your items at low cost or for free.</li>
                <li>
                  Browse and find what you need from generous fellow students.
                </li>
                <li>Enjoy a more sustainable and affordable college life.</li>
              </ul>
            </div>
            <div className="h-72 w-1/2 bg-amber-700"></div>
          </div>
        </div>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">Why Sell Here</div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              <ul class="list-disc">
                <li>Clear out clutter and help others.</li>
                <li>Contribute to a sustainable environment.</li>
                <li>Support students by offering affordable or free items. </li>
                <li>Easy listing process.</li>
              </ul>
            </div>
            <div className="h-72 w-1/2 bg-green-700"></div>
          </div>
        </div>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">Why Buy Here</div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              <ul class="list-disc">
                <li>Affordable prices, including free items.</li>
                <li>Wide variety of items.</li>
                <li>Support your peers.</li>
                <li>Easy listing process.</li>
              </ul>
            </div>
            <div className="h-72 w-1/2 bg-blue-700"></div>
          </div>
        </div>
      </section>

      <section className="flex w-11/12 mt-12 mb-32 mx-auto gap-12" id="explore">
        <div className="w-1/2 h-[500px] bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/X5BWooeO4Cw')] bg-gray-400 rounded-xl">
          <div className="text-center mx-auto w-3/5 text-4xl font-bold mt-24">
            Explore Our Exciting Listings
          </div>
          <div className="w-full flex my-32 justify-center">
            <button className="bg-white px-8 py-2 text-base mx-auto rounded-full font-bold">
              Browse Products
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[500px] bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/h8nxGssjQXs')] bg-black rounded-xl">
          <div className="text-center text-white mx-auto w-3/5 text-4xl font-bold mt-24">
            Join SecondHand Community Today
          </div>
          <div className="w-full flex my-32 justify-center">
            <button className="bg-white px-8 py-2 text-base mx-auto rounded-full font-bold">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>



    </>
  );
}

export default LandingPage;
