import React, { useState, useEffect } from "react";
import axiosInstance from "./Admin/axiosConfig";

const Slideshow = () => {
  const [slidesWorld, setSlidesWorld] = useState([]);
  const [slidesSports, setSlidesSports] = useState([]);
  const [slidesTech, setSlidesTech] = useState([]);
  const [slidesEntertainment, setSlidesEntertainment] = useState([]);

  const [currentIndexWorld, setCurrentIndexWorld] = useState(0);
  const [currentIndexSports, setCurrentIndexSports] = useState(0);
  const [currentIndexTech, setCurrentIndexTech] = useState(0);
  const [currentIndexEntertainment, setCurrentIndexEntertainment] = useState(0);

  useEffect(() => {
    axiosInstance
      .get("/news")
      .then((response) => {
        const featuredNews = response.data.filter(
          (item) => item.isFeatured === true
        );
        setSlidesWorld(
          featuredNews.filter((item) => item.category.name === "national")
        );
        setSlidesSports(
          featuredNews.filter((item) => item.category.name === "मध्यप्रदेश")
        );
        setSlidesTech(
          featuredNews.filter((item) => item.category.name === "खेल")
        );
        setSlidesEntertainment(
          featuredNews.filter((item) => item.category.name === "ajab gajab")
        );
      })
      .catch((error) => {
        console.error("There was an error fetching the news:", error);
      });
  }, []);
  
  useEffect(() => {
    const worldInterval = setInterval(() => {
      setCurrentIndexWorld((prevIndex) => (prevIndex + 1) % slidesWorld.length);
    }, 3000);

    const sportsInterval = setInterval(() => {
      setCurrentIndexSports((prevIndex) => (prevIndex + 1) % slidesSports.length);
    }, 4000);

    const techInterval = setInterval(() => {
      setCurrentIndexTech((prevIndex) => (prevIndex + 1) % slidesTech.length);
    }, 5000);

    const entertainmentInterval = setInterval(() => {
      setCurrentIndexEntertainment((prevIndex) => (prevIndex + 1) % slidesEntertainment.length);
    }, 6000);

    return () => {
      clearInterval(worldInterval);
      clearInterval(sportsInterval);
      clearInterval(techInterval);
      clearInterval(entertainmentInterval);
    };
  }, [slidesWorld, slidesSports, slidesTech, slidesEntertainment]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {/* World News */}
      <div className="relative">
        {slidesWorld.length > 0 && (
          <>
            <img
              src={slidesWorld[currentIndexWorld].image}
              alt={slidesWorld[currentIndexWorld].title}
              className="w-full h-96 object-cover shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4">
              <span className="bg-red-600 text-xs px-2 py-1 rounded">
                {slidesWorld[currentIndexWorld].category.name}
              </span>
              <a
                href={slidesWorld[currentIndexWorld].url}
                className="block mt-2 text-lg font-semibold"
              >
                {slidesWorld[currentIndexWorld].title}
              </a>
            </div>
          </>
        )}
      </div>

      {/* Sports News */}
      <div className="relative">
        {slidesSports.length > 0 && (
          <>
            <img
              src={slidesSports[currentIndexSports].image}
              alt={slidesSports[currentIndexSports].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4">
              <span className="bg-red-600 text-xs px-2 py-1 rounded">
                {slidesSports[currentIndexSports].category.name}
              </span>
              <a
                href={slidesSports[currentIndexSports].url}
                className="block mt-2 text-lg font-semibold"
              >
                {slidesSports[currentIndexSports].title}
              </a>
            </div>
          </>
        )}
      </div>

      {/* Tech & Entertainment News */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative">
          {slidesTech.length > 0 && (
            <>
              <img
                src={slidesTech[currentIndexTech].image}
                alt={slidesTech[currentIndexTech].title}
                className="w-full h-48 object-cover shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4">
                <span className="bg-blue-600 text-xs px-2 py-1 rounded">
                  {slidesTech[currentIndexTech].category.name}
                </span>
                <a
                  href={slidesTech[currentIndexTech].url}
                  className="block mt-2 text-sm font-semibold"
                >
                  {slidesTech[currentIndexTech].title}
                </a>
              </div>
            </>
          )}
        </div>

        <div className="relative">
          {slidesEntertainment.length > 0 && (
            <>
              <img
                src={slidesEntertainment[currentIndexEntertainment].image}
                alt={slidesEntertainment[currentIndexEntertainment].title}
                className="w-full h-48 object-cover shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4">
                <span className="bg-red-600 text-xs px-2 py-1 rounded">
                  {slidesEntertainment[currentIndexEntertainment].category.name}
                </span>
                <a
                  href={slidesEntertainment[currentIndexEntertainment].url}
                  className="block mt-2 text-sm font-semibold"
                >
                  {slidesEntertainment[currentIndexEntertainment].title}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
