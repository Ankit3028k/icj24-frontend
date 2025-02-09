import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


import {
  FaSearch,
  FaBars,
  FaTimes,
  FaHome,
  FaThList,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleSearchInput = () => {
    setIsSearchVisible((prev) => !prev);
    if (isSearchVisible) setSearchTerm(""); // Clear search term when hiding
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value); // Navigate using react-router
    }
    toggleMobileMenu(); // Close mobile menu after selection
  };
  return (
    <div className="m-0">
      <nav className="bg-red-500 py-5">
        <div className="grid grid-cols-12 gap-7 mx-0 text-white">
          <span className="col-span-1"></span>
          <span className="col-span-1">
            <Link to="/">होम</Link>
          </span>

          <div className="dropdown col-span-1 hidden sm:block">
            <span className="dropbtn hidden sm:block">
              <Link to="/mp-news">मध्यप्रदेश</Link>
            </span>
            <div className="dropdown-content bg-white text-black">
              <Link to="/indore">इंदौर</Link>
              <Link to="/bhopal">भोपाल</Link>
              <Link to="/ujjain">उज्जैन</Link>
              <Link to="/jabalpur">जबलपुर</Link>
            </div>
          </div>

          <span className="col-span-1 hidden sm:block">
            <Link to="/rajniti">राजनीति</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/crime">क्राइम</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/spritual">अध्यात्म</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/jara-hatke">Jara Hatke</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/technology">टेक्नोलॉजी</Link>
          </span>

          <span className="col-span-1 hidden sm:block"></span>

          {/* Mobile View */}
          <span className="sm:hidden col-span-6"></span>

          <button
            onClick={toggleSearchInput}
            className="text-white focus:outline-none"
            aria-label="Toggle search input"
          >
            <FaSearch className="w-6 h-6" />
          </button>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Input */}
        {isSearchVisible && (
          <div className="absolute right-2 top-44 flex items-center bg-white text-black rounded-full shadow-md px-2 py-2 max-w-xs w-50">
            <input
              type="text"
              placeholder="Search news"
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-grow border-none outline-none p-2 text-black"
              autoFocus
            />
            <button className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:bg-gray-700 focus:outline-none">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`relative inset-0 z-20 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute pt-1 text-center top-0 right-0 shadow-lg transform transition-transform duration-300 bg-white w-40 text-black ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 bg-white text-black">
            {/* <div className="dropdown  "> */}
             <div className="inline-flex">                <Link
                  to="/mp-news"
                  className="block p-2 text-gray-700 hover:text-blue-600"
                  
                >
                  मध्यप्रदेश  
                </Link>
             {/* Dropdown for selecting city */}
            <select
              name="locations"
              id="locations"
              onChange={handleLocationChange}
              className="w-full p-2 bg-white text-black border border-gray-300 rounded-md mt-2"
            >
              <option value="" ></option>
              <option value="/indore">इंदौर</option>
              <option value="/bhopal">भोपाल</option>
              <option value="/ujjain">उज्जैन</option>
              <option value="/jabalpur">जबलपुर</option>
            </select></div>
              
              {/* <div className="dropdown-content bg-white text-black right-15">
                <Link to="#">इंदौर</Link>
                <Link to="#">भोपाल</Link>
                <Link to="#">उज्जैन</Link>
                <Link to="#">जबलपुर</Link>
              </div>
            </div> */}

            <Link
              to="/rajniti"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              राजनीति
            </Link>
            <Link
              to="/spritual"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              अध्यात्म
            </Link>
            <Link
              to="/jara-hatke"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              Jara Hatke
            </Link>
            <Link
              to="technology"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              टेक्नोलॉजी
            </Link>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
