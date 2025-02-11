import React, { useEffect, useState } from 'react';
import axiosInstance from '../Admin/axiosConfig';

function Rajniti() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);  // Declare loading state
  const [error, setError] = useState(null);  // Declare error state

  // Fetch news from the backend (example URL)
  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "राजनीति न्यूज़"
        );
        setNews(filteredNews);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);  // Set loading to false if there’s an error
      });
  }, []);

  if (loading) {
    return <div>Loading Trending News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Trending News Available</div>;
  }

  const isEven = news.length % 2 === 0;
  let remainingNews = Math.floor( news.length-1);
  const colSpanValue = isEven ? 3 : Math.floor(12 / remainingNews);

  return (
    <div className="m-2 px-4 py-8 border border-gray-300">
  <h2 className="text-2xl font-bold mb-6 pl-3">
    {news.length > 0 && news[0].category.name}
  </h2>
  {/* Grid layout adjusted for mobile view */}
  <div className={`grid gap-4 ${isEven ? 'grid-cols-4' : 'grid-cols-12'} 
        max-md:grid-cols-1`}>
    {news.map((newsItem, index) => (
      <div
        className={`news-item bg-white p-4 shadow-lg border border-gray-300 
          ${news.length % 2 !== 0
            ? index === 0
              ? 'col-span-12' // Large news item takes full width
              : `lg:col-span-${colSpanValue} row-span-3` // Other items have dynamic span
            : `lg:col-span-2`} 
          max-md:col-span-1`} // Ensure each item spans 1 column on mobile
        key={index}
      >
        <div className="relative flex justify-center items-center">
          <img
            src={newsItem.image}
            alt={`News ${index + 1}`}
            className="w-full object-cover rounded-md"
          />
          <a
            href={newsItem.url}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-center truncate">
              {newsItem.title}
            </h3>
          </a>
        </div>
        <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">
          {newsItem.date}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}

export default Rajniti;
