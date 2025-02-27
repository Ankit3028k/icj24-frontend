import React, { useState, useEffect } from "react";
import axiosInstance from '../Admin/axiosConfig'; // Assuming you are importing axiosInstance
import { Link } from "react-router-dom";

const NewsGrid = () => {
  const [news, setNews] = useState([]); // State for news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axiosInstance for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "अध्यात्म" && item.isFeatured === true
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

  // Conditional rendering based on the state
  if (loading) {
    return <div>Loading spiritual News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Spiritual News Available</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options); // 'en-IN' ensures the correct format
  };

  return (
    <div id={news[0].category.name} className="m-7 p-4 border border-gray-300 rounded-lg shadow-md">
         <a href={`/newsCategoryNews/${news[0].category.id}`} className="block">  <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
        { news[0].category.name} न्यूज़
      </h2></a>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src={news[0].image}
            alt={news[0].title}
            className="w-full h-auto rounded-lg"
          />
          <Link to={`/full-news/${news[0].id}`} ><h2 className="text-2xl font-bold mt-2 border-b-2 border-gray-300 pb-2">
            {news[0].title}
          </h2></Link>
          <p className="text-gray-600">{news[0].content}</p>
          <p className="text-green-600 font-semibold">
            📅 {formatDate(news[0].datePosted)}
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1">
          {news.slice(1).map((article, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-gray-300 pb-2"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-16 rounded-lg"
              />
              <div>
              <Link to={`/full-news/${article.id}`} ><h3 className="font-bold text-lg border-b border-gray-200 pb-1">
                  {article.title}
                </h3></Link>
                <p className="text-green-600 font-semibold">
                   📅 {formatDate(news[0].datePosted)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
