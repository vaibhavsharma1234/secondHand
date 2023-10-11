import React from "react";
import DComments from "../Components/DComments";
import { useParams } from "react-router-dom";
import { baseUrl } from "../config/api";
import { useNavigate } from "react-router-dom";


import { useState, useEffect } from "react";
import axios from "axios";
import DNavbar from "../Components/DNavbar";
import DefaultMap from "../Components/Map";
function ProductDetails() {
  const navigate = useNavigate()
  const params = useParams();
  console.log(params);
  const { id } = params;
  const loggedUser = JSON.parse(sessionStorage.getItem("user"));
  // console.log('hello')
  const [user, setUser] = useState("");
  // console.log(loggedUser.email)
  console.log("logged user", loggedUser);
  console.log("user", user);

  const [singlePost, setSinglePost] = useState({
    title: "",
    description: "",
    brand: "",
    location: "",
    category: "",
    price: null,
    images: [],
    image1: "",
    
  });
  const [lati,setLat]=useState("")
  const [longi,setLong]=useState("")
  const handleDelete = async (id) => {
    console.log(id)
    axios.delete(`${baseUrl}/api/delete/${id}`).then(() => {
      //  window.location.reload(false)
      navigate('/')
    })
  }
  const handleUpdate = async (id) => {
    navigate(`/update/${id}`)
  }

  // let user = ''
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);

    // Optionally, you can also scroll to the top when the component unmounts (page changes)
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${baseUrl}/api/getads/${id}`).then((res) => {
        // console.log(res.data.images)
        setSinglePost(res.data);
        console.log("h222",res.data);
        setUser(res.data.user);
        setLat(res.data.lat)
        setLong(res.data.long)
        // console.log('hello')
        // console.log(user.email)

        // setImages(res.data.images);
        console.log(res.data.images);
      });
    };
    fetchData();
  }, []);
  
  const {
    title,
    description,
    brand,
    location,
    category,
    price,
    images,
    image1,
    lat,
    long
  } = singlePost;
  return (
    <>
    <DNavbar/>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-4 text-sm md:text-base py-24 mx-auto">
          <div class="lg:w-full mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image1}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {brand}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">{description}</p>
              <p class="leading-relaxed font-bold">Location: {location}</p>

              <p class="leading-relaxed font-bold">Category: {category}</p>

              <div class="flex mt-2 md:mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                <i class="fa-solid fa-indian-rupee-sign mr-2"></i>{price}
                </span>
                { loggedUser&&loggedUser._id === user._id && (
                  <>
                    {" "}
                    <button class="flex ml-auto mr-6" onClick={()=>handleDelete(id)}>
                      <i class="fa-solid fa-trash text-2xl hover:text-red-500"></i>
                    </button>
                    <button class="flex" onClick={()=>handleUpdate(id)}>
                      <i class="fa-solid fa-pen-to-square text-2xl hover:text-blue-500"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <DefaultMap lat={lati} long={longi}/>
      
      <DComments />
    </>
  );
}

export default ProductDetails;
