import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axiosInstance from "./Admin/axiosConfig"; // You can also use fetch if you prefer.

function CategoryFullNews() {
  const { categoryid } = useParams(); // Extract categoryid from the URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure categoryid is decoded if it has special characters
    console.log("Category ID:", categoryid); // Log categoryid to see what we are receiving

    axiosInstance
      .get("/news") // Assuming the API endpoint is correct
      .then((response) => {
        // Log response data to check if it's coming correctly
        console.log("Response data:", response.data);

        // Filter news to include only the categoryid and featured news
        const filteredNews = response.data.filter(
          (item) => item.category._id === categoryid && item.isFeatured === true
        );

        if (filteredNews.length === 0) {
          console.log("No featured news found for this category.");
        }

        // Sort the news by createdAt (most recent first)
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Set the filtered and sorted news
        setNews(sortedNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, [categoryid]); // Dependency on categoryid, will re-fetch on category change

  if (loading) {
    return <div>Loading Trending News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No News Available in this category</div>;
  }

  return (
    <div className="m-2 px-4 sm:px-6 py-8 border border-gray-300">
      <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
        {news.length > 0 && news[0].category.name} न्यूज़
      </h2>
      <div
        className={`grid gap-4 ${
          news.length === 1
            ? "grid-cols-1"
            : news.length === 2
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : news.length === 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : news.length === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : news.length >= 5
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : ""
        }`}
      >
        {news.map((newsItem, index) => (
          <div
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${
              news.length === 1
                ? "lg:col-span-3"
                : news.length === 2
                ? index === 0
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
                : news.length === 3
                ? "lg:col-span-1"
                : news.length === 4
                ? "lg:col-span-2"
                : news.length >= 5
                ? index === 0
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
                : ""
            } relative`}
            key={newsItem._id}
          >
            {/* Image */}
            <div className="relative w-full h-[250px] sm:h-[350px]">
              <img
                src={newsItem.image}
                alt={newsItem.title} // More descriptive alt text
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <a href={`/full-news/${newsItem._id}`} className="block">
                <h3 className="text-xl font-semibold text-white truncate">
                  {newsItem.title}
                </h3>
              </a>
              <p className="text-gray-200 mt-2">{newsItem.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFullNews;
