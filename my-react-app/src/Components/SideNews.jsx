import React, { useState, useEffect } from "react";
import axiosInstance from "./Admin/axiosConfig"; // Import your axiosInstance

function SideNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news from the backend
  useEffect(() => {
    axiosInstance
      .get("/news")  // Assuming you're using axiosInstance for API calls
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.category.name === "Side News"
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
    return <div>Loading side News...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (news.length === 0) {
    return <div>No side News Available</div>;
  }

  return (
    <div className="side-news w-full md:1/4 border border-gray-300 p-4">
      {/* Tab Buttons */}
      <div className="flex justify-between border-b-2 border-gray-200 mb-4">
        {/* Placeholder for tab buttons */}
        {/* {["Recent", "Popular", "Comments"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? "text-red-500 border-b-4 border-red-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))} */}
      </div>

      {/* News Content */}
      <div className="grid grid-cols-1 gap-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow p-3 rounded-lg"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
            )}
            <div>
              <h3 className="text-blue-600 font-medium text-sm">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNews;
