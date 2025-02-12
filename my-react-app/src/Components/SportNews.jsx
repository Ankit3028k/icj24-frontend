import React, { useState, useEffect } from "react";
import axiosInstance from '../Components/Admin/axiosConfig'
import { Link, useNavigate } from "react-router-dom";

function SportsNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "खेल" && item.isFeatured === true
        );
        setNews(filteredNews);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []);

  if (loading) {
    return <div>Loading Sports News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No Sports News Available</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options); // 'en-IN' ensures the correct format
  };

  const handleClick = (id) => {
    navigate(`/full-news/${id}`);
  };

  return (
    <div id={news[0].category.name} className="m-6 p-6 border border-gray-300 max-w-full rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{news[0].category.name} न्यूज़</h2>
      <div className="h-1 w-16 bg-red-500 mb-6"></div>

      {/* Main News */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <img
            src={news[0].image} // Assuming you get the image URL from your data
            alt="Main Sports News"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <Link to={`/full-news/${news[0]._id}`}>
            <h3 className="text-xl font-bold">{news[0].title}</h3>
          </Link>
          <p className="text-gray-600 mt-2">{news[0].content}</p>
          <p className="text-gray-500 text-sm flex items-center mt-4">
            <span className="mr-2">📅</span>
            {formatDate(news[0].datePosted)}
          </p>
        </div>
      </div>

      {/* Sub News */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {news.slice(1).map((item, index) => (
          <img
            key={index}
            src={item.image} // Replace with the dynamic image URL
            alt={`Sub News ${index + 1}`}
            onClick={() => handleClick(item._id)} // Handle click with the correct ID
            className="rounded-lg cursor-pointer" // Add a pointer cursor for better UX
          />
        ))}
      </div>
    </div>
  );
}

export default SportsNews;
