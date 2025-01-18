import React from 'react';

function MpNews() {
  const news = [
    {
      title: "News 1",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
      heading: "The future of possible innovation for business company.",
      date: "November 16, 2017",
    },
    {
      title: "News 2",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      heading: "The future of possible innovation for it company.",
      date: "November 16, 2017",
    },
    {
      title: "News 3",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      heading: "The future of possible innovation for webdevlopment.",
      date: "November 16, 2017",
    },
    {
      title: "News 4",
      imageUrl:
        "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "The future of possible innovation for google.",
      date: "November 16, 2017",
    },
    // Add more news items as needed
  ];

  // Check if the number of news items is even or odd
  const isEven = news.length % 2 === 0;

  return (
    <div className="m-2 px-6 py-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6">मध्यप्रदेश न्यूज़</h2>
      <div className={`grid gap-4 ${isEven ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} max-md:grid-cols-1`}>
        {news.map((newsItem, index) => (
          <div className={`news-item bg-white p-4 shadow-lg border border-gray-300 ${!isEven && index === 0 ? 'col-span-2' : ''}`} key={index}>
            <img
              src={newsItem.imageUrl}
              alt={`News ${index + 1}`}
              className="h-40 w-full object-cover"
            />
            <a href="#">
              <h3 className="text-xl font-semibold mt-4">{newsItem.heading}</h3>
            </a>
            <p className="text-gray-600 mt-2">{newsItem.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MpNews;
