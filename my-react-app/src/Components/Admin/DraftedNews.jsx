import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosConfig';

const DraftedNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news'); // Your backend endpoint
        const data = response.data;

        // Filter out the drafts (news.isDrafted === false) and not featured
        const filteredNews = data.filter(news => news.isDrafted === false && news.isFeatured === false);
        setNewsList(filteredNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleApprove = async (newsId) => {
    try {
      // Update the isFeatured and isDrafted status of the specific news
      const updatedNewsList = newsList.map(news =>
        news.id === newsId ? { ...news, isFeatured: true, isDrafted: true } : news
      );
      setNewsList(updatedNewsList);
  
      // Send a PATCH request to update the isFeatured and isDrafted status
      const response = await axiosInstance.patch(`/news/${newsId}`, {
        isFeatured: true,
        isDrafted: true, // Update this as well
      });
  
      // Check for errors in the response
      if (response.status !== 200) {
        throw new Error('Failed to update news');
      }
  
      const updatedNews = response.data;
      console.log('News updated:', updatedNews);
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Drafted News</h1>
      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {newsList.map(news => (
            <li
              key={news.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img className='h-28' src={news.image} alt="news image" />
              <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-700 mb-4">{news.content}</p>
              <p className="text-gray-700 mb-4">{news.richDescription}</p>
              <p className="text-gray-700 mb-4">Category:{news.category.name}</p>
              <p className="text-gray-700 mb-4">Author:{news.author}</p>
              <button
                onClick={() => handleApprove(news.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
              >
                {news.isFeatured ? 'Approved' : 'Approve'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DraftedNews;
