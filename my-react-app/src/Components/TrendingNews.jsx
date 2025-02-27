import React, { useState, useEffect } from "react";
import axiosInstance from "./Admin/axiosConfig"; // You can also use fetch if you prefer.

function TrendingNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        // Filter news to include only "ट्रेंडिंग" category and featured news
        const filteredNews = response.data.filter(
          (item) => item.category.name === "ट्रेंडिंग" && item.isFeatured === true
        );

        // Sort the news by createdAt (most recent first) and then reverse for LIFO
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Reverse the order to make it LIFO (most recent post appears first)
        const reversedNews = sortedNews.reverse();

        // Take only the 5 most recent news items
        const latestNews = reversedNews.slice(0, 5);

        setNews(latestNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
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

  return (
    <div className="m-2 px-4 sm:px-6 py-8 border border-gray-300">
    <a href={`/newsCategoryNews/${news[0].category.name}`} className="block">  <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
        { news[0].category.name} न्यूज़
      </h2></a>
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

export default TrendingNews;
