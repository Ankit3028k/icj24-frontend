import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the news from the backend
    fetch("https://icj24-backend.onrender.com/api/news")
      .then(response => response.json())
      .then(data => {
        // Filter news by category name "ट्रेंडिंग न्यूज़"
        const filteredNews = data.filter(news => news.category.name === "ट्रेंडिंग");
        
        // Sort the news by createdAt (most recent first)
        const sortedNews = filteredNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        // Take only the 5 most recent news items
        const latestNews = sortedNews.slice(0, 5);
        
        // Update the trendingNews state
        setTrendingNews(latestNews);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  // Function to format the date as "11 Feb 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options); // 'en-IN' ensures the correct format
  };

  // Function to truncate text after 10 words
  const truncateText = (text, wordLimit = 10) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/icj24/wqhqwlwn6lezj5imqbvf"
              alt="icj24 logo"
              className="h-12 mb-4"
            />
          </div>

          <section className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-bold mb-4">ट्रेंडिंग न्यूज़</h2>
            <div className="space-y-2">
              {loading ? (
                <p className="text-gray-400">Loading...</p>
              ) : trendingNews.length > 0 ? (
                trendingNews.map((news, index) => (
                  <div key={index}>
                    <h5 className="text-sm text-gray-400">{formatDate(news.datePosted)}</h5>
                    <p className="text-base">{truncateText(news.title)}</p> {/* Truncating text */}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No trending news available.</p>
              )}
            </div>
          </section>

          <section className="flex flex-col items-center sm:items-start pr-10">
            <h2 className="text-2xl font-bold mb-4">Most Viewed</h2>
            <div className="grid grid-cols-2 gap-4">
              {["मध्यप्रदेश", "राजनीति", "क्राइम", "अध्यात्म", "जरा-हटके", "टेक्नोलॉजी"].map((buttonText, index) => (
                <Link to={`/${buttonText}`} key={index}>
                  <button className="bg-transparent border-2 border-gray-600 hover:bg-red-600 hover:text-white text-white-600 px-4 py-2 rounded-md transition duration-200">
                    {buttonText}
                  </button>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          {/* Copyright text */}
          <p className="inline-flex">© 2025 Ankit Gangrade. All rights reserved.</p>

          {/* Social media icons */}
          <div className="flex space-x-6 pr-5">
            <a href="https://twitter.com/icjtv24" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-400 transition duration-300 text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-500 transition duration-300 text-2xl" />
            </a>
            <a href="https://www.youtube.com/@icj24" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-red-500 transition duration-300 text-2xl" />
            </a>
            <a href="mailto:example@mail.com" aria-label="Email">
              <FaEnvelope className="text-white hover:text-gray-400 transition duration-300 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
