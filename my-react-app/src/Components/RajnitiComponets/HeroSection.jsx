import React, { useEffect, useState } from 'react';
import axiosInstance from '../Admin/axiosConfig';
import { Link } from 'react-router-dom';

function Rajniti() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

  const fetchNews = () => {
    setLoading(true); // Reset loading state before new fetch
    axiosInstance
      .get("/news")
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.id === "67ac8383ef73b4d7026fe232" && item.isFeatured === true
        );
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const latestNews = sortedNews.slice(0, 5);
        setNews(latestNews);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader">Loading...</div> {/* You can add a spinner here */}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchNews} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Retry
        </button>
      </div>
    );
  }

  if (news.length === 0) {
    return <div>No Rajniti News Available</div>;
  }

  return (
    <div id={news[0].category.name} className="m-2 px-4 py-8 border border-gray-300">
      <a href={`/newsCategoryNews/${news[0].category.id}`} className="block">
        <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
          {news[0].category.name} न्यूज़
        </h2>
      </a>
      {/* Dynamic grid layout */}
      <div className={`grid gap-4 ${news.length % 2 === 0 ? 'grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
        {news.map((newsItem, index) => (
          <article
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${
              news.length % 2 !== 0 && index === 0 ? 'col-span-12' : 'lg:col-span-2'
            }`}
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
            <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">{newsItem.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Rajniti;
