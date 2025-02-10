import React, { useState } from "react";
import JaraHatkePage from "../../pages/JaraHatkePage";

function JaraHatke() {
  const [news, setNews] = useState([
    {
      title: "News 1",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/c670f414-e347-44cd-bf96-d8016cffeb4b.jpg",
      heading: "The future of possible innovation for business company.",
      date: "November 16, 2017",
      url: "#",
    },
    {
      title: "News 2",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      heading: "The future of possible innovation for IT company.",
      date: "November 16, 2017",
      url: "#",
    },
    {
      title: "News 3",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      heading: "The future of possible innovation for web development.",
      date: "November 16, 2017",
      url: "#",
    },
    {
      title: "News 4",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "The future of possible innovation for Google.",
      date: "November 16, 2017",
      url: "#",
    },
    {
      title: "News 5",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "The future of possible innovation for AI.",
      date: "November 16, 2017",
      url: "#",
    },
  ]);

  return (
    <div className="m-2 px-4 sm:px-6 py-8 border border-gray-300">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Jara Hatke</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((newsItem, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg border border-gray-300 rounded-lg relative"
          >
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px]">
              <img
                src={newsItem.imageUrl}
                alt={`Image for news: ${newsItem.heading}`}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <a href={newsItem.url} className="block">
                <h3 className="text-lg sm:text-xl font-semibold text-white truncate">
                  {newsItem.heading}
                </h3>
              </a>
              <p className="text-gray-200 mt-2 text-sm sm:text-base">{newsItem.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JaraHatke;
