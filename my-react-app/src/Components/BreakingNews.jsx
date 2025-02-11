import React, { useState, useEffect } from "react";
import axiosInstance from "./Admin/axiosConfig";
import { Link } from "react-router-dom";

// Replace this with your actual API URL
const API_URL = "/news";

const BreakingNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch breaking news items from the backend API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get(API_URL);
        const data = response.data;

        // Filter news items for 'breaking news' category
        const filteredNews = data.filter((newsItem) => newsItem.category.name === "breaking news");
        setNewsItems(filteredNews);
        setLoading(false); // Set loading to false after news is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news");
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchNews();
  }, []);

  // Change the news every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [newsItems.length]);

  if (loading) {
    return (
      <div className="flex justify-center my-2 px-6 responsive-mx3">
        <div className="p-0 bg-red-600 inline-flex py-3 px-4 text-white">
          <span className="font-bold text-lg">BREAKING NEWS</span>
        </div>
        <div className="bg-gray-600 text-white py-3 px-4 flex items-center space-x-4 inline-flex w-10/12">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center my-2 px-6 responsive-mx3">
        <div className="p-0 bg-red-600 inline-flex py-3 px-4 text-white">
          <span className="font-bold text-lg">BREAKING NEWS</span>
        </div>
        <div className="bg-gray-600 text-white py-3 px-4 flex items-center space-x-4 inline-flex w-10/12">
          <div>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-2 px-6 responsive-mx3">
      <div className="p-0 bg-red-600 inline-flex py-3 px-4 text-white">
        <span className="font-bold text-lg">BREAKING NEWS</span>
      </div>
      <div className="bg-gray-600 text-white py-3 px-4 flex items-center space-x-4 inline-flex w-10/12">
        {/* Display the current news item */}
        <Link to={`/news/${newsItems[currentIndex]?.id}`}>
  <div
    className="whitespace-nowrap overflow-hidden text-ellipsis animate-marquee"
    key={newsItems[currentIndex]?.id} // Key should be the unique ID
  >
    {newsItems[currentIndex]?.title || "Loading..."}
  </div>
</Link>
      </div>
    </div>
  );
};

export default BreakingNews;
