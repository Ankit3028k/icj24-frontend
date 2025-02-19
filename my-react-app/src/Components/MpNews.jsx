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
        // Filter news where category name is "मध्यप्रदेश" and isFeatured is true
        const filteredNews = response.data.filter(item => item.category?.name === "मध्यप्रदेश" && item.isFeatured === true);
        // Sort the news by createdAt (most recent first)
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Take only the 5 most recent news items
        const latestNews = sortedNews.slice(0, 5);

        setNews(latestNews); // Set the latest 5 news items
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

  // Function to truncate text after 10 words
  const truncateText = (text, wordLimit = 10) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="m-4 px-4 py-8 bg-gray-100 rounded-2xl shadow-lg">
      {/* Category Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-4">
        {news.length > 0 && news[0].category.name}
      </h2>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {/* Main Big News */}
          {news.length > 0 && (
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <a
                  href={`/full-news/${news[0]._id}`}
                  className="text-2xl font-bold leading-tight hover:underline block truncate"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2, // Limit title to 2 lines
                    textOverflow: 'ellipsis',
                  }}
                >
                  {news[0].title}
                </a>
                <p className="text-sm mt-1">{news[0].author}</p>
              </div>
            </div>
          )}

          {/* Second News (Image and Text Side by Side) */}
          {news.length > 1 && (
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-1/3 relative">
                <img
                  src={news[1].image}
                  alt={news[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
                <a
                  href={`/full-news/${news[1]._id}`}
                  className="text-lg font-semibold leading-tight hover:underline block truncate"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2, // Limit title to 2 lines
                    textOverflow: 'ellipsis',
                  }}
                >
                  {news[1].title}
                </a>
                <p className="text-sm mt-1">{news[1].author}</p>
              </div>
            </div>
          )}
        </div>

        {/* Three Small News on Right Side */}
        <div className="grid gap-4">
          {news.slice(2).map((item, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
              style={{ height: '146px' }}  // Set fixed height for the small news section
            >
              {/* Image with full coverage */}
              <div className="w-32 h-32 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"  // Ensure image covers the full height and width
                />
              </div>
              <div className="p-4 flex-1">
                {/* Title with truncation */}
                <a
                  href={`/full-news/${item._id}`}
                  className="text-sm font-semibold text-gray-800 hover:underline block"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 4,  // Limit to 2 lines and truncate
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.title}
                </a>
                {/* Author text */}
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
