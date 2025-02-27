import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./Admin/axiosConfig"; // Make sure axiosInstance is correctly imported

const NewsCategory = () => {
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch categories from the backend
  useEffect(() => {
    axiosInstance
      .get("/categories") // Replace with your backend endpoint for categories
      .then((response) => {
        setCategories(response.data); // Assuming your backend returns an array of categories
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories:", error);
        setError("Failed to fetch categories. Please try again later.");
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect only once

  if (loading) {
    return <div>Loading Categories...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  if (categories.length === 0) {
    return <div>No Categories Available</div>; // If no categories were found
  }

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
              to={`/newsCategoryNews/${category.id}`} // Use Link component to navigate
              className="block text-lg font-medium text-gray-700 py-3 px-6 border border-gray-300 rounded-md hover:border-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {category.name} {/* Display the category name */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
