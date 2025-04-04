import React, { useState, useEffect } from 'react';
import axiosInstance from "./Admin/axiosConfig"; // Ensure axiosInstance is correctly configured

const TruncateText = ({ text, limit = 10 }) => {
  const words = text.split(' ');
  return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
};

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news');
        const filteredNews = response.data.filter(
          item => item.category?.name === "मध्यप्रदेश" && item.isFeatured === true
        );
 // Sort the news by createdAt (most recent first) and then reverse for LIFO
 const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

 // Reverse the order to make it LIFO (most recent post appears first)
 const reversedNews = sortedNews.reverse();
const latestNews = sortedNews.slice(0, 5);

setNews(latestNews); // Set the latest news to state
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchNews(); // Initial fetch

    const intervalId = setInterval(fetchNews, 300000); // Fetch every 5 minutes (300000 ms)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  if (news.length === 0) {
    return <div>No news available at the moment.</div>;
  }

  return (
    <div className="m-4 px-4 py-8 bg-gray-100 rounded-2xl shadow-lg">
      <a href={`/newsCategoryNews/${news[0].category.id}`} className="block">
        <h2 id={news[0]?.category?.name} className="text-2xl sm:text-3xl font-bold mb-6">
          {news[0]?.category?.name || "Default Category"} न्यूज़
        </h2>
      </a>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {news.length > 0 && (
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={news[0].image || '/path/to/default/image.jpg'} // Fallback image
                alt={news[0].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <a
                  href={`/full-news/${news[0]._id}`}
                  className="text-2xl font-bold leading-tight hover:underline block truncate"
                  aria-label={`Read more about ${news[0].title}`}
                >
                  {news[0].title}
                </a>
                <p className="text-sm mt-1">{news[0].author}</p>
              </div>
            </div>
          )}

          {news.length > 1 && (
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-1/3 relative">
                <img
                  src={news[1].image || '/path/to/default/image.jpg'} // Fallback image
                  alt={news[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
                <a
                  href={`/full-news/${news[1]._id}`}
                  className="text-lg font-semibold leading-tight hover:underline block truncate"
                  aria-label={`Read more about ${news[1].title}`}
                >
                  {news[1].title}
                </a>
                <p className="text-sm mt-1">{news[1].author}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-4">
          {news.slice(2).map((item) => (
            <div
              key={item._id}
              className="flex bg-white rounded-lg shadow-md overflow-hidden"
              style={{ height: '146px' }}
            >
              <div className="w-32 h-32 relative">
                <img
                  src={item.image || '/path/to/default/image.jpg'} // Fallback image
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <a
                  href={`/full-news/${item._id}`}
                  className="text-sm font-semibold text-gray-800 hover:underline block"
                  aria-label={`Read more about ${item.title}`}
                >
                  <TruncateText text={item.title} limit={12} />
                </a>
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
