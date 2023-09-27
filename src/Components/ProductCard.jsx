import React from "react";
import {
  Tooltip,

} from '@material-tailwind/react'
import {
 
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import axios from "axios";
import { baseUrl } from "../config/api";
import { useNavigate } from 'react-router-dom'
function ProductCard({ ad }) {
  const loggedUser = JSON.parse(sessionStorage.getItem("user"));
  // console.log(loggedUser._id);
  // console.log(ad.user)
  const id = ad._id;
  const navigate = useNavigate()
  // console.log(loggedUser._id)
  const handleDelete = async (id,e) => {
    e.preventDefault()
    console.log(id);
    axios.delete(`${baseUrl}/api/delete/${id}`).then(() => {
      window.location.reload(false);
      // navigate("/");
    });
  };
  const handleUpdate = (id,e) => {
    navigate(`/update/${id}`);
  };
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src={ad.image1}
          alt="blog"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY: {ad.category}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-1">
            {ad.title}
          </h1>
          <h2 class="tracking-widest text-xs mb-3 title-font font-medium text-gray-400">
            BRAND: {ad.brand}
          </h2>
          <p class="leading-relaxed mb-1 text-blue-500 font-semibold">
            <i class="fa-solid fa-indian-rupee-sign text-blue-500 mr-1"></i>
            {ad.price}
          </p>
          <p class="leading-relaxed mb-3 font-semibold text-red-500">
            <i class="fa-solid fa-location-dot text-red-500 mr-1"></i>
            {ad.location}
          </p>
          <div class="flex items-center flex-wrap ">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>

            {!loggedUser && (
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
            )}
            {!loggedUser && (
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            )}
            {
              loggedUser && loggedUser._id===ad.user && (
                <div className="flex flex-row gap-4">
                <Tooltip content="deleteAd">
                  <span className="cursor-pointer  border border-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <TrashIcon
                      onClick={(e) => handleDelete(id,e)}
                      className="h-5 w-5"
                    />
                  </span>
                </Tooltip>
                <Tooltip content="UpdateAd">
                  <span className="cursor-pointer  border border-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                    <PencilSquareIcon
                      onClick={(e) => handleUpdate(id,e)}
                      className="h-5 w-5"
                    />
                  </span>
                </Tooltip>
              </div>

              )
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
