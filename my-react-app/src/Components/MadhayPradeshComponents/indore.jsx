import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios
import axiosInstance from '../Admin/axiosConfig';

const Indore = () => {
  const [news, setNews] = useState([]); // State for the news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axios for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "इंदौर" && item.isFeatured === true
        );
        setNews(filteredNews); // Set the filtered news data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []); // Empty dependency array to run this effect only once

  if (loading) {
    return <div>Loading Indore News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (news.length === 0) {
    return <div>No Indore News Available</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-4">
        Indore News
      </h2>
      {news.map((article, index) => (  // Use 'news' instead of 'articles'
        <div key={index} className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative w-full md:w-1/3">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 sm:h-64 md:h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black opacity-60 py-2 px-4 text-white">
              <h2 className="text-lg font-semibold">{article.title}</h2>
            </div>
          </div>
          <div className="p-4 md:w-2/3">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{article.content}</p>
            <a
              href={`/full-news/${article.id}`}
              className="inline-block text-blue-600 font-semibold border-2 border-blue-600 py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indore;
