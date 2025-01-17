import React, { useState } from 'react';

function TrendingNews() {
  const [news, setNews] = useState([
    'News 1',
    'News 2',
    'News 3',
    'News 4',
    'News 5', // You can add/remove items to see even/odd effects
    'News 6' // Uncomment to test even count
  ]);

  // Check if the number of news items is even or odd
  const isEven = news.length % 2 === 0;

  return (
    <div className="trending-news px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Trending News</h2>
      <div className={`grid gap-4 ${isEven ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
        {news.map((newsItem, index) => (
          <div
            className={`news-item bg-white p-4 shadow-lg rounded-lg ${!isEven && index === 0 ? 'col-span-2' : ''}`}
            key={index}
          >
            <img
              src={`/path-to-image-${index + 1}.jpg`}
              alt={`News ${index + 1}`}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">The future of possible innovation for business company.</h3>
            <p className="text-gray-600 mt-2">November 16, 2017</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
