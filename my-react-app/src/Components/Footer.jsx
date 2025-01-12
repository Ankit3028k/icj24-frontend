import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  const trendingNews = [
    { date: "January 11, 2025", headline: "Breaking News: Example Headline 1" },
    { date: "January 10, 2025", headline: "Breaking News: Example Headline 2" },
    // Add more trending news items
  ];

  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="https://icj24.com/wp-content/uploads/2024/08/ICJ24-Logo-.png"
              alt="icj24 logo"
              className="h-12 mb-4"
            />

          </div>

          <section className="flex flex-col items-center sm:items-start">
            <h2 className="text-xl font-bold mb-4">ट्रेंडिंग न्यूज़</h2>
            <div className="space-y-2">
              {trendingNews.map((news, index) => (
                <div key={index}>
                  <h5 className="text-sm text-gray-400">{news.date}</h5>
                  <p className="text-base">{news.headline}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center sm:items-start pr-10">
            <h2 className="text-xl font-bold mb-4">Most Viewed</h2>
            <div className="grid grid-cols-2 gap-4">
              {["मध्यप्रदेश", "राजनीति", "क्राइम", "अध्यात्म", "Jara Hatke", "टेक्नोलॉजी"].map((buttonText, index) => (
                <button
                  key={index}
                  className="bg-transparent border-2 border-gray-600 hover:bg-red-600 hover:text-white text-white-600 px-4 py-2 rounded-md transition duration-200"
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          {/* Copyright text */}
          <p className="inline-flex">© 2025 ICJ24. All rights reserved.</p>
          
          {/* Social media icons */}
          <div className="flex space-x-6 pr-5">
            <a href="https://www.facebook.com/icjtv24" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-blue-500 transition duration-300 text-2xl" />
            </a>
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
