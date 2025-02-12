import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./Admin/axiosConfig"; // Assuming you're using axios

function FullNewsPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/news/${id}`)
      .then((response) => {
        setNewsItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!newsItem) {
    return <div className="text-center text-xl text-gray-600">No news found.</div>;
  }

  return (
    <div className="container mx-auto p-8 max-w-full bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-900">{newsItem.title}</h1>
      <div className="border-t pt-4  text-sm text-gray-500">
        <span>Published By: ICJ24 {new Date(newsItem.datePosted).toLocaleDateString()}</span><span className="text-sm text-gray-600 my-2"> By {newsItem.author}</span>
      </div>
      
      
      <div className="my-6 w-2xs">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-2xs h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="text-lg text-gray-800 leading-relaxed space-y-6">
        <p className="text-gray-600">{newsItem.title}</p>
        <p className="text-gray-600">{newsItem.content}</p>
        <p className="text-gray-600">{newsItem.richDescription}</p>
      </div>

      
    </div>
  );
}

export default FullNewsPage;
