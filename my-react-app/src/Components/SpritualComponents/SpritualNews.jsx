import React from "react";

const articles = [
  {
    title: "From Champions League breakout star to Saudi - Duran's unexpected journey",
    description: "Jhon Duran's rapid rise has taken him from Colombia to the MLS to the Premier League and now on to Saudi Arabia.",
    image: "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
    category: "Aston Villa",
    comments: 527,
    url: "#",
  },
  {
    title: "McIlroy six off Pebble Beach pace after erratic 70",
    image: "",
    category: "Golf",
    time: "15h",
    url: "#",
  },
  {
    title: "Man Utd sign teenager Heaven from Arsenal",
    image: "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
    category: "Premier League",
    time: "3h",
    url: "#",
  },
  {
    title: "Knight still the right captain for England - Hartley",
    image: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
    category: "England Women",
    time: "2h",
    comments: 129,
    url: "#",
  },
  {
    title: "Dupont inspires France to win against woeful Wales",
    image: "https://icj24.com/wp-content/uploads/2025/01/7cc04bee-2fa7-4fd5-883d-d4c3ec7179a9.jpg",
    category: "Wales",
    time: "16h",
    comments: 2196,
    url: "#",
  },
  {
    title: "GB face Davis Cup relegation play-off after loss to Japan",
    image: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
    category: "Tennis",
    time: "4h",
    url: "#",
  },
  {
    title: "'Makes no sense' - England & Cook question India concussion sub",
    image: "https://icj24.com/wp-content/uploads/2025/01/93d1c4c2-92fb-408f-b4ac-716b7bda09f9.jpg",
    category: "Cricket",
    time: "19h",
    comments: 1042,
    url: "#",
  },
];

const NewsGrid = () => {
  return (
    <div className=" m-7 p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2 mb-4">
        अध्यात्म न्यूज़
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-auto rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-2 border-b-2 border-gray-300 pb-2">
            {articles[0].title}
          </h2>
          <p className="text-gray-600">{articles[0].description}</p>
          <p className="text-green-600 font-semibold">
            {articles[0].category} • 💬 {articles[0].comments}
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-gray-300 pb-2"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-16 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg border-b border-gray-200 pb-1">
                  {article.title}
                </h3>
                <p className="text-green-600 font-semibold">
                  {article.category} • {article.time}{" "}
                  {article.comments && `• 💬 ${article.comments}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
