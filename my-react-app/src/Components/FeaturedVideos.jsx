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
        const response = await axiosInstance.get("/video/FeaturedVideo"); // Replace with your actual API endpoint
        setNewsVideos(response.data); // Assuming the backend returns an array of video data
        setLoading(false); // Stop loading when data is fetched
      } catch (err) {
        setError(`Error fetching video data: ${err.message}`); // Handle any errors with detailed message
        setLoading(false);
      }
    };

    fetchVideos(); // Fetch the data when the component mounts
  }, []); // Empty dependency array means this runs once when the component is mounted

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Determine the grid columns based on the number of videos
  const gridColumns = newsVideos.length === 1 ? "grid-cols-1" : newsVideos.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="m-4 px-6 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
      <div className={`grid ${gridColumns} gap-6`}>
        {/* Side Video */}
        <div className={`w-full bg-white p-4 shadow-lg border border-gray-300 ${newsVideos.length === 1 ? "col-span-1" : newsVideos.length === 2 ? "col-span-1" : "col-span-2"}`}>

          <iframe
            width="560"
            height="315"
            src={newsVideos[0].video}
            title={newsVideos[0].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-64 object-cover"
            allowFullScreen
          ></iframe>
          <a href="#">
            <h3 className="text-xl font-semibold mt-4">{newsVideos[0].title}</h3>
          </a>
        </div>

        {/* Grid for Other Videos */}
        {newsVideos.length > 1 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
            {newsVideos.slice(1).map((newsVideoItem, index) => (
              <div className="bg-white p-4 shadow-lg border border-gray-300" key={index}>
                <iframe
                  width="560"
                  height="315"
                  src={newsVideoItem.video}
                  title={newsVideoItem.title} // Title changed to reflect the actual video title
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-64 object-cover"
                ></iframe>
                <a href="#">
                  <h3 className="text-lg font-semibold mt-2">{newsVideoItem.title}</h3>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedVideos;
