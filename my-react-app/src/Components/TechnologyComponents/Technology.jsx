import React, { useState, useEffect } from "react"; // Importing the necessary hooks
import axiosInstance from '../Admin/axiosConfig'; // Assuming you have axiosInstance imported

const Technology = () => {
  const [news, setNews] = useState([]); // State for news
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axiosInstance for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "टेक्नोलॉजी" && item.isFeatured === true
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
    return <div>Loading Technology News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Technology News Available</div>;
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto mb-12">
      <a href={`/newsCategoryNews/${news[0].category.id}`} className="block">  <h2 id={news[0].category.name} className="text-2xl sm:text-3xl font-bold mb-6">
        { news[0].category.name} न्यूज़
      </h2></a>
      </div>

      <div className="space-y-12">
        {news.map((article, index) => {  // Use 'news.map' instead of 'articles.map'
          // Checking if the index is even or odd
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-8 px-4 ${
                isOdd ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1">
                <img
                  src={article.image}  // Ensure the field name matches your API response
                  alt={article.title}
                  className="w-full h-auto object-cover rounded-xl shadow-md"
                  style={{ maxHeight: "400px" }} // Added to control the image height
                />
              </div>
              <div className="flex-1">
                 <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <a
                  href={`/full-news/${article.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technology;
