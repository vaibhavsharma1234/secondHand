import { FileUpload } from "./FileUpload";
import { useState, useContext } from "react";
import { FileUpload1 } from "./FileUpload1";
import { baseUrl } from "../config/api";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DNavbar from "../pages/DNavbar";
const Postad = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  let currentLatitude;
  let currentLongitude;
  // const loca=(e) => {
  //   // Check if the Geolocation API is available in the browser
  //   e.preventDefault()
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(async function (position) {
  //        currentLatitude = position.coords.latitude;
  //        currentLongitude = position.coords.longitude;
  //       console.log(currentLatitude, currentLongitude);

  //     });
  //   } else {
  //     console.error('Geolocation is not available in this browser.');
  //   }

  // };
  const getLocData = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          currentLatitude = position.coords.latitude;
          currentLongitude = position.coords.longitude;
          console.log(currentLatitude, currentLongitude);
          setLatitude(currentLatitude);
          setLongitude(currentLongitude);
          resolve();
        });
      } else {
        alert("Geolocation is not supported by this browser.");
        reject();
      }
    });
  };

  const [allValues, setAllValues] = useState({
    title: "",
    description: "",
    brand: "",
    location: "",
    category: "",
    price: null,
    images: [],
    image1: "",
    lat: "",
    long: "",
  });

  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });

    console.log(allValues);
  };

  const handleDropDown = (e) => {
    setAllValues({ ...allValues, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(allValues);
    console.log("lat", latitude);
    console.log("long", longitude);
    // setLatitude(currentLatitude)
    //     setLongitude(currentLongitude)
    const formData = new FormData();

    formData.append("title", allValues.title);
    formData.append("brand", allValues.brand);
    formData.append("category", allValues.category);

    formData.append("description", allValues.description);
    formData.append("location", allValues.location);
    formData.append("price", allValues.price);
    formData.append("image1", file);
    formData.append("lat", latitude);
    formData.append("long", longitude);
    // alert(formData)
    console.log(formData, "form");
    // make the api call
    const token = JSON.parse(sessionStorage.getItem("token"));
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(`${baseUrl}/api/postad`, formData, { headers })
      .then((res) => {
        console.log(res, "hello");
      })
      .then((res) => {
        setAllValues({
          title: "",
          description: "",
          brand: "",
          condition: "",
          category: "Mobile Phones",
          price: null,
          images: [],
          location: "",
          lat: "",
          long: "",
        });
        toast("product added");
        setTimeout(() => {
          navigate("/product");
        }, 5000);
      })
      .catch((error) => {
        toast("error", error);
      });

    // window.location.reload(false)
  };
  return (
  <>
  <DNavbar/>
    <div>
      <section className="bg-white dark:bg-gray-900">
        <ToastContainer />
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  onChange={handleChange}
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={handleDropDown}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected>Select category</option>
                  <option value="LAF">Lost and found</option>
                  <option value="ELE">Electronic</option>
                  <option value="STD">Study</option>
                  <option value="OT">others</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hostel Name and Room No
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={""}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={""}
                />
              </div>

              <FileUpload1
                allValues={allValues}
                setAllValues={setAllValues}
                file={file}
                setFile={setFile}
              />
              <div className="flex flex-col justify-end ml-auto">
                <span className="rounded-full w-fit px-4 py-2 text-center cursor-pointer bg-black text-white text-md" onClick={getLocData}>
                  <i class="fa-solid fa-location-crosshairs font-thin"></i> Get my
                  location{" "}
                </span>
                <span className="text-xs font-medium mx-auto">
                  Latitude:{latitude} & Longitude :{longitude}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  </>
  );
};
export default Postad;
