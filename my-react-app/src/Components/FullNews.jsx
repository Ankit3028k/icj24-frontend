// src/News.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import axiosInstance from './Admin/axiosConfig';

const FullNews = () => {
  // State to store news data
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the news ID from the URL parameters
  const { id } = useParams();

  // Fetch news by ID from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get(`/news/${id}`);
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching the news');
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  // If loading, display a loading message
  if (loading) return <div>Loading...</div>;

  // If there's an error, display an error message
  if (error) return <div>{error}</div>;

  // Display the news data
  return (
    <div>
      {news ? (
        <div>
          <h1>{news.title}</h1>
          <p>{news.content}</p>
          <p><strong>Date:</strong> {new Date(news.date).toLocaleDateString()}</p>
        </div>
      ) : (
        <div>News not found</div>
      )}
    </div>
  );
};

export default FullNews;
