import React from 'react';
import { IoMdSearch } from "react-icons/io";

function NavBar() {
  return (
    <div className="m-0">
      <nav className="bg-red-500 py-5">
        <div className="inline-grid grid-cols-12 gap-7 mx-0 text-white">
          <span className="col-span-1"></span>
          <span className="col-span-1"><a href="#">होम</a></span>
          
          <div className="dropdown col-span-1">
            <span className="dropbtn">
              <a href="#">मध्यप्रदेश</a>
            </span>
            <div className="dropdown-content bg-white text-black">
              <a href="#">इंदौर</a>
              <a href="#">भोपाल</a>
              <a href="#">उज्जैन</a>
              <a href="#">जबलपुर</a>
            </div>
          </div>
          
          <span className="col-span-1"><a href="#">राजनीति</a></span>
          <span className="col-span-1"><a href="#">क्राइम</a></span>
          <span className="col-span-1"><a href="#">अध्यात्म</a></span>
          <span className="col-span-1"><a href="#">Jara Hatke</a></span>
          <span className="col-span-1"><a href="#">टेक्नोलॉजी</a></span>
          
          <span className="col-span-1"></span>
          <div className="col-span-2 flex items-center border rounded bg-white text-black px-2">
            <input
              className="flex-grow focus:outline-none bg-red-500 text-white"
              type="text"
              placeholder="Search News..."
            />
            <IoMdSearch className="text-gray-500" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
