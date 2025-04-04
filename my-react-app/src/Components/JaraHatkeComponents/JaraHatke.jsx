import React, { useState, useEffect } from "react"; // Importing useEffect
import axiosInstance from "../Admin/axiosConfig"; // Make sure axiosInstance is correctly imported

function JaraHatke() {
  const [news, setNews] = useState([]); // State for the news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axiosInstance for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "जरा-हटके" && item.isFeatured === true
        );
         // Sort the news by createdAt (most recent first)
         const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

         // Take only the 5 most recent news items
         const latestNews = sortedNews.slice(0, 5);
 
         setNews(latestNews);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []); // Empty dependency array to run this effect only once

  if (loading) {
    return <div>Loading Jara Hatke News...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  if (news.length === 0) {
    return <div>No Jara Hatke News Available</div>; // If no news is available
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options); // 'en-IN' ensures the correct format
  };

  const isEven = news.length % 2 === 0; // Checks if the number of news items is even or odd

  return (
    <div className="m-2 px-4 sm:px-6 py-8 border border-gray-300">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Jara Hatke</h2>
      <div
        className={`grid gap-6 ${
          isEven
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"  // Even case: 1, 2, or 4 columns
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-6"  // Odd case: 1, 2, or 6 columns
        }`}
      >
        {news.map((newsItem, index) => (
          <div
            key={index}
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${
              !isEven && index === 3
                ? "lg:col-span-3"
                : !isEven && index === 4
                ? "lg:col-span-3"
                : "lg:col-span-2"
            } relative`}
          >
            {/* Image */}
            <div className="relative w-full h-[250px] sm:h-[350px]">
              <img
                src={newsItem.image}
                alt={`Image for news: ${newsItem.title}`}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <a href={`/full-news/${newsItem.id}`} className="block">
                <h3 className="text-xl font-semibold text-white truncate">
                  {newsItem.title}
                </h3>
              </a>
              <p className="text-gray-200 mt-2">📅
              {formatDate(news[0].datePosted)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JaraHatke;
