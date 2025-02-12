import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NewsCategory = () => {
  const categories = [
    { name: "मध्यप्रदेश", link: "/मध्यप्रदेश  " },
    { name: "राजनीति", link: "/राजनीति" },
    { name: "क्राइम", link: "/क्राइम" },
    { name: "अध्यात्म", link: "/अध्यात्म" },
    { name: "टेक्नोलॉजी", link: "/टेक्नोलॉजी" },
    { name: "Jara Hatke", link: "/jarahatke" },
  ];

  return (
    <div className="p-8 border border-gray-200 shadow-xl bg-white rounded-lg max-w-xs mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">
        News Categories
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mb-6 mx-auto"></div>

      {/* Categories as Links */}
      <ul className="space-y-5">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={category.link} // Use Link component to navigate
              className="block text-lg font-medium text-gray-700 py-3 px-6 border border-gray-300 rounded-md hover:border-red-500 hover:bg-red-600 hover:text-white  transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {category.name} {/* Access category.name to display the name */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
