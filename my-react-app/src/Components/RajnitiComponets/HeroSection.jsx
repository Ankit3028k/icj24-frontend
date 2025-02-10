import React, { useEffect, useState } from 'react';
import axiosInstance from '../Admin/axiosConfig';

function Rajniti() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "राजनीति न्यूज़"
        );
        setNews(filteredNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-6">Loading Trending News...</div>;
  if (error) return <div className="text-center text-red-500 py-6">{error}</div>;
  if (news.length === 0) return <div className="text-center py-6">No Trending News Available</div>;

  const isEven = news.length % 2 === 0;
  let remainingNews = Math.floor(news.length - 1);
  const colSpanValue = isEven ? 3 : Math.floor(12 / remainingNews);

  return (
    <div className="m-2 px-4 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 pl-3">
        {news.length > 0 && news[0].category.name}
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((newsItem, index) => (
          <div
            className="bg-white p-4 shadow-lg border border-gray-300 rounded-lg"
            key={index}
          >
            <div className="relative w-full h-48 flex justify-center items-center">
              <img
                src={newsItem.image}
                alt={`News ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
              <a
                href={newsItem.url}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4"
              >
                <h3 className="text-lg font-semibold text-center truncate">
                  {newsItem.title}
                </h3>
              </a>
            </div>
            <p className="text-gray-600 mt-2 text-center text-sm">{newsItem.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rajniti;
