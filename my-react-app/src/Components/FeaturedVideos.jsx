import React from "react";

function FeaturedVideos() {
  const newsVideo = [
    {
     
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
     
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <div className="m-4 px-6 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Side Video */}
        <div className="md:col-span-1  md:col-span-1  w-2xs flex items-center justify-center bg-white p-4 shadow-lg border border-gray-300">
          <video controls className="w-full h-64 object-cover">
            <source src={newsVideo[0].videoUrl} type="video/mp4" />
           
          </video>
          <a href="#">
            <h3 className="text-xl font-semibold mt-4">{newsVideo[0].title}</h3>
          </a>
        </div>

        {/* Grid for Other Videos */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsVideo.slice(1).map((newsVideoItem, index) => (
            <div
              className="bg-white p-4 shadow-lg border border-gray-300"
              key={index}
            >
              <video controls className="h-40 w-full object-cover">
                <source src={newsVideoItem.videoUrl} type="video/mp4" />
                
              </video>
              <a href="#">
                <h3 className="text-lg font-semibold mt-2">{newsVideoItem.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedVideos;
