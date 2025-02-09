import React, { useEffect, useState } from 'react';
import axiosInstance from '../Admin/axiosConfig';  // You can use axiosInstance or fetch

function Rajniti() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news from backend (example URL)
    axiosInstance.get('/news')
      .then(response => {
        // Filter news based on category 'राजनीति न्यूज़'
        const filteredNews = response.data.filter(item => item.category?.name === 'राजनीति न्यूज़');
        setNews(filteredNews);  // Set the filtered news data to state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError('Something went wrong while fetching the news.');
        setLoading(false);  // Stop loading even if there's an error
      });
  }, []);  // Empty dependency array to run only on mount

  const isEven = news.length % 2 === 0;

  if (loading) {
    return <div>Loading...</div>;  // You can add a spinner here for a better UX
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="m-2 px-4 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 pl-3">राजनीति न्यूज़</h2>
      <div className={`grid gap-4 ${isEven ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-12 '} max-md:grid-cols-1`}>
        {news.map((newsItem) => (
          <div
            className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${!isEven && newsItem.index === 0 ? 'col-span-1 md:col-span-12 row-span-3 md:pl-8 md:pr-8' : 'md:col-span-3 row-span-3'}`}
            key={newsItem.id}  // Use unique id if available
          >
            <div className="relative flex justify-center items-center">
              <img
                src={newsItem.imageUrl}
                alt={newsItem.heading}  // Descriptive alt text for accessibility
                className="w-full object-cover rounded-md"
              />
              <a href={newsItem.url} className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-center truncate">{newsItem.heading}</h3>
              </a>
            </div>
            <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">{newsItem.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rajniti;
