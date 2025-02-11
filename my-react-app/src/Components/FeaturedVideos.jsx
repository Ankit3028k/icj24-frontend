import React, { useState, useEffect } from "react";
import axiosInstance from "./Admin/axiosConfig";

function FeaturedVideos() {
  // State to store fetched video data
  const [newsVideos, setNewsVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch video data from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosInstance.get("/video/FeaturedVideo");
        setNewsVideos(response.data);
        setLoading(false);
      } catch (err) {
        setError(`Error fetching video data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Determine grid columns and column span based on the number of videos
  let gridColumns = "grid-cols-1"; // Default to grid-cols-1
  let columnSpan = "col-span-1"; // Default to col-span-1 for individual items

  // Apply gridColumns logic based on the number of videos
  if (newsVideos.length === 2) {
    gridColumns = "lg:grid-cols-2 md:grid-cols-1 "; // For 2 videos, use 2 columns
  } else if (newsVideos.length === 3) {
    gridColumns = "lg:grid-cols-3 md:grid-cols-1"; // For 3 videos, use 3 columns
  } else if (newsVideos.length === 4) {
    gridColumns = "lg:grid-cols-2 md:grid-cols-1"; // For 4 videos, use 2 columns
  } else if (newsVideos.length === 5) {
    gridColumns = "lg:grid-cols-4 md:grid-cols-1";
  }

  return (
    <div className="m-4 px-6 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
      <div className={`grid ${gridColumns} gap-6`}>
        {newsVideos.map((newsVideoItem, index) => {
          // For the first video when there are 5 videos, apply col-span-2 and height 50%
          let itemClass = "bg-white p-4 shadow-lg border border-gray-300";
          if (newsVideos.length === 5 && index === 0) {
            itemClass += " lg:col-span-2 lg:row-span-2"; // Apply col-span-2 for the first video
          } else {
            itemClass += " col-span-1"; // Apply col-span-1 for other videos
          } 

          return (
            <div key={index} className={itemClass}>
              <div className={`relative w-full ${newsVideos.length === 5 && index === 0 ? 'h-[60%] mt-28 ' : 'h-64'}`}>
                <iframe
                  width="560"
                  height="315"
                  src={newsVideoItem.video}
                  title={newsVideoItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={`w-full h-full object-cover ${newsVideos.length === 5 && index === 0 ? "mx-auto" : ""}`}
                  allowFullScreen
                ></iframe>
              </div>
              <a href="#">
                <h3 className="text-lg font-semibold mt-2">{newsVideoItem.title}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedVideos;
