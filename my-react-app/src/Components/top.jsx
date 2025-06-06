import React from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

function Top() {
  // Get the current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between flex-wrap">
      {/* Contact information */}
      <div className="flex space-x-8 mb-4 sm:mb-0">
        {/* <span className="text-sm flex items-center">
          <MdOutlinePhoneIphone className="mr-2" /> 123-456-7890
        </span> */}
        <span className="text-sm flex items-center">
          <BiLogoGmail className="mr-2" /> aashu.sri@gmail.com
        </span>
      </div>

      {/* Social icons and current date */}
      <div className="flex space-x-6 items-center flex-wrap justify-center sm:justify-end">
        <span className="text-sm flex items-center">
          <a href="https://www.facebook.com/icjtv24" className="text-white hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
        </span>
        <span className="text-sm flex items-center">
          <a href="https://twitter.com/icjtv24" className="text-white hover:text-blue-400 transition">
            <RiTwitterXFill />
          </a>
        </span>
        <span className="text-sm flex items-center">
          <a href="https://www.youtube.com/@icj24/shorts" className="text-white hover:text-blue-400 transition">
            <SiYoutubeshorts />
          </a>
        </span>
        <span className="text-sm flex items-center">
          <SlCalender className="mr-2" />
          {currentDate}
        </span>
      </div>
    </div>
  );
}

export default Top;
