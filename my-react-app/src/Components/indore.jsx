import React from "react";

const Indore = () => {
  // Sample data - You can modify this with actual dynamic content
  const newsArticles = [
    {
      id: 1,
      title: "Indore News 1",
      description: "Details of Indore News 1",
      heading: "Indore: Major Development in Local Politics",
      image: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
    },
    {
      id: 2,
      title: "Indore News 2",
      description: "Details of Indore News 2",
      heading: "Indore: Festival Celebrations Going Big",
      image: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
    },
    {
      id: 3,
      title: "Indore News 3",
      description: "Details of Indore News 3",
      heading: "Indore: Breaking News on Economy",
      image: "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
    },
    {
      id: 4,
      title: "Indore News 4",
      description: "Details of Indore News 4",
      heading: "Indore: City’s New Infrastructure Updates",
      image: "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold mb-10">Indore News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsArticles.map((article, index) => {
          const isEven = index % 2 === 0;
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={article.id}
              className={`${
                isEven ? "bg-white shadow-lg border border-gray-200 rounded-lg" : "bg-gray-50 rounded-lg"
              } overflow-hidden transition-all duration-300`}
            >
              {/* Structure for Even Indexed Articles (isEven) */}
              {isEven && (
                <div className="flex flex-col">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{article.heading}</h2>
                    <p className="text-gray-700 text-lg mb-4">{article.description}</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more</a>
                  </div>
                </div>
              )}

              {/* Structure for Odd Indexed Articles (isOdd) */}
              {isOdd && (
                <div className="flex flex-row items-center p-6 space-x-8">
                  <div className="w-1/2 h-48 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{article.heading}</h2>
                    <p className="text-gray-700 text-lg mb-6">{article.description}</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more</a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Indore;
