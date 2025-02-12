import React, { useState, useEffect } from "react";
import axiosInstance from '../Admin/axiosConfig'; // Assuming axiosInstance is imported

function CrimeSection() {
  const [news, setNews] = useState([]); // State for the news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axios for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "c" && item.isFeatured === true
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
    return <div>Loading Crime News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Crime News Available</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options); // 'en-IN' ensures the correct format
  };
  // Define isEven based on the length of the news items
  const isEven = news.length % 2 === 0;

  return (
    <div className="m-2 px-4 sm:px-6 py-8 border border-gray-300">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">  क्राइम न्यूज़</h2>
      <div
        className={`grid gap-4 ${
          isEven
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {news.map((newsItem, index) => (
          <div
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${
              !isEven && index === 1
                ? "lg:col-span-2 lg:row-span-2"
                : "lg:col-span-1 lg:row-span-1"
            } relative`}
            key={index}
          >
            {/* Image */}
            <div
              className={`relative w-full ${
                !isEven && index === 1 ? "sm:h-[500px]" : "h-[250px]"
              } sm:h-[250px]`}
            >
              <img
                src={newsItem.image || "fallback-image-url.jpg"} // Provide a fallback image URL in case imageUrl is missing
                alt={`News ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <a href={newsItem.url} className="block">
                <h3 className="text-xl font-semibold text-white truncate">
                  {newsItem.title}
                </h3>
              </a>
              <p className="text-gray-200 mt-2">
                {/* {newsItem.date} */}📅
              {formatDate(news[0].datePosted)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrimeSection;
