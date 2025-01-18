import React, { useState } from "react";

function SideNews() {
  const [activeTab, setActiveTab] = useState("Comments");

  const newsItems = [
    {
      id: 1,
      image: "https://icj24.com/wp-content/uploads/2025/01/3a645d0d-d841-4afc-9bf7-0a861d3779bf.jpg", // Replace with actual image URL
      title: "William Braynt went to visit the grabl",
      date: "National October 2017",
    },
    {
      id: 2,
      image: "https://icj24.com/wp-content/uploads/2025/01/b7d2d78e-9b70-4a7e-989d-58195bdfc2a2-200x200.jpg",
      title: "William Braynt went to visit the grabl",
      date: "National October 2017",
    },
    {
      id: 3,
      image: "https://icj24.com/wp-content/uploads/2025/01/1f2fd9a7-eed7-49a7-840f-896f9b5d9145-200x200.jpg",
      title: "William Braynt went to visit the grabl",
      date: "National October 2017",
    },
    {
      id: 4,
      image: "https://icj24.com/wp-content/uploads/2025/01/94c37645-1bc7-4c5e-91e2-01a8cd5995c9-200x200.jpg",
      title: "William Braynt went to visit the grabl",
      date: "National October 2017",
    },
  ];

  return (
    <div className="side-news m-4 w-full md:1/4 border border-gray-300 p-4 rounded-md">
      {/* Tab Buttons */}
      <div className="flex justify-between border-b-2 border-gray-200 mb-4">
        {["Recent", "Popular", "Comments"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? "text-red-500 border-b-4 border-red-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* News Content */}
      <div className="grid grid-cols-1 gap-4">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow p-3 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-md object-cover mr-4"
            />
            <div>
              <h3 className="text-blue-600 font-medium text-sm">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNews;
