import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DNavbar from "../Components/DNavbar";
import DefaultMap from "../Components/Map";
import DComments from "../Components/DComments";
import { setData } from '../redux/dataSlice';
import { baseUrl } from "../config/api";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.user);
  const singlePost = useSelector((state) => state.product.ads.find((ad) => ad._id === id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/delete/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  const handleUpdate = () => {
    navigate(`/update/${id}`);
  }

  return (
    <>
      <DNavbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 text-sm md:text-base py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={singlePost?.image1}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {singlePost?.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singlePost?.title}
              </h1>
              <div className="flex mb-4">
                {/* Add your review icons here */}
              </div>
              <p className="leading-relaxed">{singlePost?.description}</p>
              <p className="leading-relaxed font-bold">Location: {singlePost?.location}</p>
              <p className="leading-relaxed font-bold">Category: {singlePost?.category}</p>
              <div className="flex mt-2 md:mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  <i className="fa-solid fa-indian-rupee-sign mr-2"></i>{singlePost?.price}
                </span>
                {loggedUser?._id === singlePost?.user && (
                  <>
                    {" "}
                    <button className="flex ml-auto mr-6" onClick={handleDelete}>
                      <i className="fa-solid fa-trash text-2xl hover:text-red-500"></i>
                    </button>
                    <button className="flex" onClick={handleUpdate}>
                      <i className="fa-solid fa-pen-to-square text-2xl hover:text-blue-500"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <DefaultMap lat={singlePost?.lat} long={singlePost?.long} />
      <DComments />
    </>
  );
}

export default ProductDetails;
