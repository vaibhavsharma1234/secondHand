import React from "react";
import ProductCard from "../Components/ProductCard";
import { Fragment, useState } from "react";

import { DataContext } from '../context/DataContext'
import { useContext,useEffect } from 'react'
import { baseUrl } from "../config/api";
import axios from "axios";

const initialNavigation = [
  { name: "ALL", key: "ALL", href: "#", current: true },
  { name: "LAF", key: "Lost and Found", href: "#", current: false },
  { name: "ELE", key: "Electronic", href: "#", current: false },
  { name: "STD", key: "Study", href: "#", current: false },
  { name: "OT", key: "Others", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductPage() {
  const [navigation, setNavigation] = useState(initialNavigation);
  const { ads, setAds } = useContext(DataContext)
  const [category, setCategory] = useState('ALL')
  const { result, setResult } = useContext(DataContext)
  let first
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/api/getads`)
        .then((adsData) => {
          // Handle the ads data
          const data = adsData.data
          // result = data
          setResult(data)
          first = ads
          setAds(data)
          console.log('Fetched ads:', adsData)
        })
        .catch((error) => {
          // Handle the error
          console.error('Error fetching ads:', error)
        })
    }
    fetchData()
  }, [])

  const filterItems = (id) => {
    console.log(id)
    if (id === 'ALL') {
      const newItems = ads.filter((item) => item.category !== id)
      setResult(() => {
        return newItems
      })
      console.log('hello from all')
      console.log(result)
      return
    }
    const newItems = ads.filter((item) => item.category === id)
    console.log('hello from here')
    
    // setAds(newItems)

    setResult(() => {
      return newItems
    })
    console.log(result)
    
    // console.log(ads)

    // setCategory(id)
  }
  const handleClick = (name) => {
    const updatedNavigation = navigation.map((item) => {
      return {
        ...item,
        current: item.name === name,
      };
    });
    setNavigation(updatedNavigation);
    filterItems(name);
  };

  // filter

 






  

  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Categories</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-medium md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-blue-500"
                    : "",
                  "mr-5 hover:text-gray-900 cursor-pointer"
                )}
                aria-current={item.current ? "page" : undefined}
                onClick={() => handleClick(item.name)}
              >
                {item.key}
              </a>
            ))}
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Chat with Us
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
          {
            result.map((item,index)=>{
              return  <ProductCard key={index} ad={item} />
            })
          }
           {
            result.length===0 && (
              <h1> no data available</h1>
            )
           }
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
