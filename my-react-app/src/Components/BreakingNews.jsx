import React, { useState, useEffect } from "react";

const BreakingNews = () => {
  const newsItems = [
    "Alex Helis Confirms Mystery Pop Singer On New Music Album.",
    "Michel Brown Talks About American People.",
    "Improve Your Health And Stamina With Cycling.",
    "4 Bodies of Trapped Miners Recovered."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [newsItems.length]);

  return (
    <div className="flex justify-center my-2 px-6">
      <div className="p-0 bg-red-600 inline-flex py-3 px-4 text-white">
        <span className="font-bold text-lg ">BREAKING NEWS</span>
      </div>
      <div className="bg-gray-600 text-white py-3 px-4 flex items-center space-x-4 inline-flex w-10/12">
        <div
          className="whitespace-nowrap overflow-hidden text-ellipsis animate-marquee"
          key={currentIndex} // Key to trigger animation on change
        >
          {newsItems[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
