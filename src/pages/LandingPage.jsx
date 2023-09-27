import React, { useState } from "react";

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
            One simple ecosystem for smart living solutions
          </div>
          <div className="w-1/4">
            <a
              href="https://www.flaticon.com/free-icons/scroll-down"
              title="scroll down icons"
            >
              Scroll down
            </a>
          </div>
        </div>
        <div className="flex justify-between absolute w-full px-24 mx-auto top-12 z-50">
            <div className="font-bold text-3xl text-white">SecondHand</div>
          <div className="flex gap-8 text-lg font-bold text-white">
            <a>Home</a>
            <a>About</a>
            <a>Support</a>
            <a>Product</a>
            <a>Solutions</a>
            <a>Services</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className="absolute z-20 h-full bg-gradient-to-r from-black/40 to-black/40 top-0 bottom-0 left-0 right-0"></div>
      </section>

      <section className="w-11/12 my-32 mx-auto">
        <div className="w-3/5 text-black text-5xl font-semibold font-sans">
          Build a smart home to uplift your everyday living and meaningful
          moments.
        </div>
        <div className="flex my-12 w-full gap-8">
          <div
            className={`relative w-3/5 h-[500px] flex bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/SYTO3xs06fU')] rounded-3xl`}
          >
            <div className="absolute z-20 rounded-3xl h-full bg-gradient-to-r from-black/30 to-black/30 top-0 bottom-0 left-0 right-0"></div>
          </div>
          <div
            className={`relative w-2/5 h-[500px] flex bg-no-repeat bg-cover bg-[url('https://source.unsplash.com/SYTO3xs06fU')] rounded-3xl`}
          >
            <div className="absolute z-20 rounded-3xl h-full bg-gradient-to-r from-black/30 to-black/30 top-0 bottom-0 left-0 right-0"></div>
          </div>
        </div>
        <div className="w-full flex justify-between border-t-[1px] border-gray-200 py-8 font-base">
          <div>
            <h1 className="font-semibold">01 - Memorable Care</h1>
            <p className="text-gray-700  py-2">
              We're here to help when you need it, with human support that
              exceeds expectations
            </p>
          </div>
          <div>
            <h1 className="font-semibold">02 - Seamless Experiences</h1>
            <p className="text-gray-700 py-2">
              We're here to help when you need it, with human support that
              exceeds expectations
            </p>
          </div>
          <div>
            <h1 className="font-semibold">03 - Welcome Guest</h1>
            <p className="text-gray-700  py-2">
              We're here to help when you need it, with human support that
              exceeds expectations
            </p>
          </div>
        </div>
      </section>

      <section className="w-11/12 my-32 mx-auto">
        <h2 className="text-5xl text-center font-semibold">
          Start your system.
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
              Smart Home
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
              Home Security
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
              Industrial Appliances
            </span>
          </div>
        </div>

        {tab === 1 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-blue-400"></div>
            <div className="row-span-1 bg-blue-400"></div>
            <div className="row-span-1 bg-blue-400"></div>
            <div className="row-span-1 bg-blue-400"></div>
            <div className="row-span-1 bg-blue-400"></div>
          </div>
        )}
        {tab === 2 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-green-400"></div>
            <div className="row-span-1 bg-green-400"></div>
            <div className="row-span-1 bg-green-400"></div>
            <div className="row-span-1 bg-green-400"></div>
            <div className="row-span-1 bg-green-400"></div>
          </div>
        )}
        {tab === 3 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-red-400"></div>
            <div className="row-span-1 bg-red-400"></div>
            <div className="row-span-1 bg-red-400"></div>
            <div className="row-span-1 bg-red-400"></div>
            <div className="row-span-1 bg-red-400"></div>
          </div>
        )}
        {tab === 4 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8 h-[600px]">
            <div className="row-span-2 col-span-2 bg-amber-400"></div>
            <div className="row-span-1 bg-amber-400"></div>
            <div className="row-span-1 bg-amber-400"></div>
            <div className="row-span-1 bg-amber-400"></div>
            <div className="row-span-1 bg-amber-400"></div>
          </div>
        )}
      </section>

      <section className="my-32 flex w-full mx-auto bg-teal-200/60">
        <div className="w-3/4 mx-auto flex py-20">
          <div className="w-1/4 h-fit items-center flex justify-start gap-4">
            <div className="bg-red-400 rounded-full h-14 w-14"></div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">Deepak</div>
              <div className="text-sm">Student of IIIT Una</div>
            </div>
          </div>
          <div className="w-2/4 font-medium text-2xl">
            "I have always purchased my smart home devices from Bardi official
            website. Their online support are always there! And they have all
            kind of information. In terms of devices, I have never complained
            about them since the purchase date. Great customer service, great
            products. Thanks Bardi! For making things easy and simple!"
          </div>
          <div className="w-1/4 flex justify-end">Arrow left Arrow Right</div>
        </div>
      </section>

      <section className="my-32 w-11/12 mx-auto">
        <h1 className="font-bold text-5xl mb-12">Bardi in Media.</h1>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">
              How Bardi Devices Can Give You a Helping Hand at Home
            </div>
            <div className="flex flex-row gap-12 place-items-baseline">
              <div>Deepak Sharma</div>
              <div>27 September 2023</div>
            </div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesettingm.
            </div>
            <div className="h-72 w-1/2 bg-blue-700"></div>
          </div>
        </div>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">
              How Bardi Devices Can Give You a Helping Hand at Home
            </div>
            <div className="flex flex-row gap-12 place-items-baseline">
              <div>Deepak Sharma</div>
              <div>27 September 2023</div>
            </div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesettingm.
            </div>
            <div className="h-72 w-1/2 bg-blue-700"></div>
          </div>
        </div>
        <div className="flex flex-row py-8 border-t-2">
          <div className="flex flex-col items-between gap-12 font-semibold w-3/5">
            <div className="text-3xl w-1/2">
              How Bardi Devices Can Give You a Helping Hand at Home
            </div>
            <div className="flex flex-row gap-12 place-items-baseline">
              <div>Deepak Sharma</div>
              <div>27 September 2023</div>
            </div>
          </div>

          <div className="flex flex-row w-2/5 gap-12">
            <div className="w-1/2 pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesettingm.
            </div>
            <div className="h-72 w-1/2 bg-blue-700"></div>
          </div>
        </div>
      </section>

      <section className="flex w-11/12 mx-auto gap-12">
        <div className="w-1/2 bg-no-repeat h-[500px] bg-gray-400 rounded-xl">
          <div className="text-center mx-auto w-3/5 text-4xl font-bold mt-24">
            Grow your business with Bardi
          </div>
          <div className="w-full flex my-32 justify-center">
            <button className="bg-white px-8 py-2 text-base mx-auto rounded-full font-bold">
              Become a Partner
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-no-repeat bg-cover h-[500px]  bg-black rounded-xl">
          <div className="text-center text-white mx-auto w-3/5 text-4xl font-bold mt-24">
            Let's build something smart together
          </div>
          <div className="w-full flex my-32 justify-center">
            <button className="bg-white px-8 py-2 text-base mx-auto rounded-full font-bold">
              Developer Portal
            </button>
          </div>
        </div>
      </section>

      <section className="my-32 border-t-2 justify-between py-8 mx-auto flex w-11/12">
        <div className="font-bold text-2xl w-2/5">Bardi Compatibility</div>
        <div className="font-bold text-5xl flex w-3/5 justify-between">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
