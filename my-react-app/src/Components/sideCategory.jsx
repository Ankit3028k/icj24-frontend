import React from "react";

const NewsCategory = () => {
  const categories = [
    "World",
    "Travel",
    "Foods",
    "Creative",
    "Sports",
    "Racing",
    "Technology",
  ];

  return (
    <div className="p-6 border border-gray-300 shadow-lg bg-white w-80 h-auto rounded-lg">
      {/* Heading */}
      <h2 className="text-xl font-bold uppercase text-gray-800 mb-4">
        News Category
      </h2>
      <div className="w-16 h-1 bg-red-500 mb-6"></div>

      {/* Categories as Buttons */}
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className="w-full text-left text-gray-600 font-medium py-3 px-4 border border-gray-300 hover:border-red-500 hover:text-white hover:bg-red-500 transition-colors rounded-md"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
