import React, { useEffect, useState } from 'react';
import axiosInstance from '../Admin/axiosConfig';
import { Link } from 'react-router-dom';

function Rajniti() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);  // Declare loading state
  const [error, setError] = useState(null);  // Declare error state

  // Fetch news from the backend (example URL)
  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        // Filter news to include only "राजनीति" category and featured news
        const filteredNews = response.data.filter(
          (item) => item.category.id =="67a89113088bf369ab70cca8 " && item.isFeatured === true
        );

        // Sort the news by createdAt (most recent first)
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Take only the 5 most recent news items
        const latestNews = sortedNews.slice(0, 5);

        setNews(latestNews);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Rajniti News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Rajniti News Available</div>;
  }

  const isEven = news.length % 2 === 0;

  return (
    <div id={news[0].category.name} className="m-2 px-4 py-8 border border-gray-300">
      <a href={`/newsCategoryNews/${news[0].category.id}`} className="block">  
        <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
          { news[0].category.name} न्यूज़
        </h2>
      </a>
      {/* Grid layout adjusted for mobile view */}
      <div className={`grid gap-4 ${isEven ? 'grid-cols-4' : 'grid-cols-12'} max-md:grid-cols-1`}>
        {news.map((newsItem, index) => (
          <div
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 
              ${news.length % 2 !== 0
                ? index === 0
                  ? 'col-span-12' // Large news item takes full width
                  : 'lg:col-span-6' // Other items have dynamic span
                : 'lg:col-span-2'} 
              max-md:col-span-1`} // Ensure each item spans 1 column on mobile
            key={index}
          >
            <div className="relative flex justify-center items-center">
              <img
                src={newsItem.image}
                alt={`News ${index + 1}`}
                className="w-full object-cover rounded-md"
              />
              <Link to={`/full-news/${newsItem.id}`} className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-center truncate">
                  {newsItem.title}
                </h3>
              </Link>
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
