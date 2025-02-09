import React from 'react';

function Rajniti() {
  const news = [
    {
      title: "News 1",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
      heading: "The future of possible innovation for business company.",
      date: "November 16, 2017",
       url: "#"
    },
    {
      title: "News 2",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      heading: "The future of possible innovation for it company.",
      date: "November 16, 2017",
       url: "#"
    },
    {
      title: "News 3",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      heading: "The future of possible innovation for webdevelopment.",
      date: "November 16, 2017",
       url: "#"
    },
    {
      title: "News 4",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "The future of possible innovation for google.",
      date: "November 16, 2017",
       url: "#"
    },
    {
      title: "News 5",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "The future of possible innovation for google.",
      date: "November 16, 2017",
       url: "#"
    },
  ];

  const isEven = news.length % 2 === 0;

  return (
    <div className="m-2 px-4 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 pl-3 "> राजनीति न्यूज़</h2>
      <div className={`grid gap-4  ${isEven ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-12 '} max-md:grid-cols-1 `}>
        {news.map((newsItem, index) => (
          <div
          className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${!isEven && index === 0 ? 'col-span-1 md:col-span-12 row-span-3 md:pl-8 md:pr-8' : 'md:col-span-3 row-span-3'}`}
          key={index}
        >
        
            <div className="relative flex justify-center items-center">
              <img
                src={newsItem.imageUrl}
                alt={`News ${index + 1}`}
                className="w-full object-cover rounded-md"
              />
              <a href="#" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-center truncate">{newsItem.heading}</h3>
              </a>
            </div>
            <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">{newsItem.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rajniti;