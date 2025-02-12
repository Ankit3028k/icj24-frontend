import React, { useState, useEffect } from 'react';
import axiosInstance from "./Admin/axiosConfig"; // Make sure axiosInstance is configured correctly

function NewsSection() {
  // State to store news data
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from backend API when component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news'); // Your backend URL endpoint for news
        // Filter news where category name is "मध्यप्रदेश न्यूज़"
        const filteredNews = response.data.filter(item => item.category?.name === "मध्यप्रदेश" && item.isFeatured===true);
        setNews(filteredNews);  // Set the filtered news data to state
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);  // Empty dependency array means this effect runs only once on mount

  if (loading) {
    return <div>Loading...</div>;  // Show a loading state while news is being fetched
  }

  return (
    <div id={news[0].category.name} className="m-4 px-4 py-8 bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-4">
      {news.length > 0 && news[0].category.name} न्यूज़
      </h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {/* Main Big News */}
          {news.length > 0 && (
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img src={news[0].image} alt={news[0].title} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <a href={`/full-news/${news[0]._id}`} className="text-2xl font-bold leading-tight hover:underline">{news[0].title}</a>
                <p className="text-sm mt-1">{news[0].author}</p>
              </div>
            </div>
          )}

          {/* Second News (Image and Text Side by Side) */}
          {news.length > 1 && (
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-1/3 relative">
                <img src={news[1].image} alt={news[1].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
                <a href={news[1]._id} className="text-lg font-semibold leading-tight hover:underline">{news[1].title}</a>
                <p className="text-sm mt-1">{news[1].author}</p>
              </div>
            </div>
          )}
        </div>

        {/* Three Small News on Right Side */}
        <div className="grid gap-4">
          {news.slice(2).map((item, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
              <div className="p-4 flex-1">
                <a href={item._id} className="text-sm font-semibold text-gray-800 hover:underline">{item.title}</a>
                <p className="text-xs text-gray-500 mt-2">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
