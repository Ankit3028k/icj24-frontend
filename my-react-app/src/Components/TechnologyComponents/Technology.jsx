// src/components/Technology.js
import React from "react";

const Technology = () => {
  const articles = [
    {
      title: "AI Revolutionizing the Future of Work",
      description: "Artificial Intelligence is changing the landscape of various industries, including healthcare, finance, and technology.",
      imageUrl: "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
      link: "/ai-revolution",
    },
    {
      title: "The Rise of 5G Networks: What You Need to Know",
      description: "With the introduction of 5G, mobile networks are experiencing a revolution that will transform connectivity.",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      link: "/5g-networks",
    },
    {
      title: "Quantum Computing: A New Era of Processing Power",
      description: "Explore the world of quantum computing and how it could be the key to solving complex problems beyond classical computing.",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      link: "/quantum-computing",
    },
    {
      title: "Blockchain: The Backbone of Digital Transactions",
      description: "Blockchain technology is the foundation of digital currencies and promises to revolutionize online transactions and data storage.",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      link: "/blockchain-tech",
    },
    {
      title: "Blockchain: The Backbone of Digital Transactions",
      description: "Blockchain technology is the foundation of digital currencies and promises to revolutionize online transactions and data storage.",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      link: "/blockchain-tech",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto  mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-4 pl-4">
          टेक्नोलॉजी न्यूज़
        </h2>
      </div>

      <div className="space-y-12">
        {articles.map((article, index) => {
          // Checking if the index is even or odd
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`${
                isOdd ? "flex-row-reverse" : "flex-row"
              } flex items-center justify-between gap-8 px-4`}
            >
              <div className="flex-1">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-auto object-cover rounded-xl shadow-md"
                  style={{ maxHeight: "400px" }} // Added to control the image height
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href={article.link}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition duration-200"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technology;
