import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setData, setCategory, setSearchInput } from '../redux/dataSlice';
import { baseUrl } from "../config/api";
import ProductCard from '../Components/ProductCard'
import axios from "axios";
import DNavbar from "../Components/DNavbar";

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
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.product.ads);
  const category = useSelector((state) => state.product.category);
  const input = useSelector((state) => state.product.searchInput);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/getads`);
        dispatch(setData(response.data));
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    }
    fetchData();
  }, [dispatch]);

  const filterItems = (category) => {
    return ads.filter((ad) => {
      // Filter by category
      if (category !== 'ALL' && ad.category !== category) {
        return false;
      }
      
      // Filter by search input
      if (input && !ad.title.toLowerCase().includes(input.toLowerCase())) {
        return false;
      }

      return true;
    });
  }
  const handleClick = (name) => {
    dispatch(setCategory(name));
  };
  const handleInputChange = (e) => {
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <>
      <DNavbar />
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Categories</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-medium md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            {initialNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.name === category ? "text-blue-500" : "",
                  "mr-5 hover:text-gray-900 cursor-pointer"
                )}
                aria-current={item.current ? "page" : undefined}
                onClick={() => handleClick(item.name)}
              >
                {item.key}
              </a>
            ))}
          </nav>
          <input
      value={input || ''}
      onChange={handleInputChange}
      className="px-2 py-1 w-full md:w-[25vw] border-[1px] rounded-lg mr-2"
      placeholder="Search..."
    />
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filterItems(category).map((item, index) => (
              <ProductCard key={index} ad={item} />
            ))}
            {ads.length === 0 && (
              <div className="h-screen text-center text-4xl">
                <h1> No data available</h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
