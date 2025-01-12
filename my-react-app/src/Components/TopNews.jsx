import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const [currentIndexWorld, setCurrentIndexWorld] = useState(0);
  const [currentIndexSports, setCurrentIndexSports] = useState(0);
  const [currentIndexTech, setCurrentIndexTech] = useState(0);
  const [currentIndexEntertainment, setCurrentIndexEntertainment] = useState(0);

  // Slides for different categories
  const slidesWorld = [
    {
      category: "WORLD",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/7cc04bee-2fa7-4fd5-883d-d4c3ec7179a9.jpg",
      caption: "Michel Brown Talks About American People.",
    },
    {
      category: "WORLD",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/93d1c4c2-92fb-408f-b4ac-716b7bda09f9.jpg",
      caption: "An Army or Ground Force is a Fighting Force.",
    },
  ];

  const slidesSports = [
    {
      category: "SPORTS",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/b237ba9c-ca57-433b-a7d7-6746b2072a00.jpg",
      caption: "Improve Your Health And Stamina With Cycling.",
    },
    {
      category: "SPORTS",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/84326b9b-4bbd-456b-8b4f-626715e8f9a2.jpg",
      caption: "A Historic Match Between Two Rival Teams.",
    },
  ];

  const slidesTech = [
    {
      category: "TECH",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/1748d7f5-1499-4a33-8929-7eec1171b22d.jpg",
      caption: "The Latest Breakthroughs in AI Technology.",
    },
    {
      category: "TECH",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/031ce2f4-362a-4583-86c1-af7f0780eff6.jpg",
      caption: "Top 5 Gadgets You Should Buy in 2025.",
    },
  ];

  const slidesEntertainment = [
    {
      category: "ENTERTAINMENT",
      imgSrc:
        "https://icj24.com/wp-content/uploads/2025/01/6a1b26fb-f1d9-4408-af1c-5d47c095ec1e.jpg",
      caption: "Alex Helis Confirms Mystery Pop Singer On New Music Album.",
    },
    {
      category: "ENTERTAINMENT",
      imgSrc: "https://icj24.com/wp-content/uploads/2025/01/22109851-47e9-476d-bf79-c6171c8bf8a5.jpg",
      caption: "The Biggest Movie Awards of the Year.",
    },
  ];

  // Auto-slide functionality for each category
  useEffect(() => {
    const worldInterval = setInterval(() => {
      setCurrentIndexWorld((prevIndex) => (prevIndex + 1) % slidesWorld.length);
    }, 3000);

    const sportsInterval = setInterval(() => {
      setCurrentIndexSports(
        (prevIndex) => (prevIndex + 1) % slidesSports.length
      );
    }, 4000);

    const techInterval = setInterval(() => {
      setCurrentIndexTech((prevIndex) => (prevIndex + 1) % slidesTech.length);
    }, 5000);

    const entertainmentInterval = setInterval(() => {
      setCurrentIndexEntertainment(
        (prevIndex) => (prevIndex + 1) % slidesEntertainment.length
      );
    }, 6000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(worldInterval);
      clearInterval(sportsInterval);
      clearInterval(techInterval);
      clearInterval(entertainmentInterval);
    };
  }, []); // Empty dependency array to only run on mount and unmount

  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {/* World News */}
      <div className="relative">
        <img
          src={slidesWorld[currentIndexWorld].imgSrc}
          alt={slidesWorld[currentIndexWorld].caption}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 rounded-b-lg">
          <span className="bg-red-600 text-xs px-2 py-1 rounded">
            {slidesWorld[currentIndexWorld].category}
          </span>
          <p className="mt-2 text-lg font-semibold">
            {slidesWorld[currentIndexWorld].caption}
          </p>
        </div>
      </div>
      {/* sports News */}
      <div className="relative">
        <img
          src={slidesSports[currentIndexSports].imgSrc}
          alt={slidesSports[currentIndexSports].caption}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 rounded-b-lg">
          <span className="bg-red-600 text-xs px-2 py-1 rounded">
          {slidesSports[currentIndexSports].category}
          </span>
          <p className="mt-2 text-lg font-semibold">
          {slidesSports[currentIndexSports].caption}
          </p>
        </div>
      </div>

      {/* Tech News */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative">
          <img
            src={slidesTech[currentIndexTech].imgSrc}
            alt={slidesTech[currentIndexTech].caption}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 rounded-b-lg">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded">
            {slidesTech[currentIndexTech].category}
            </span>
            <p className="mt-2 text-sm font-semibold">
            {slidesTech[currentIndexTech].caption}
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={slidesEntertainment[currentIndexEntertainment].imgSrc}
            alt={slidesEntertainment[currentIndexEntertainment].caption}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 rounded-b-lg">
            <span className="bg-red-600 text-xs px-2 py-1 rounded">
            {slidesEntertainment[currentIndexEntertainment].category}
            </span>
            <p className="mt-2 text-sm font-semibold">
            {slidesEntertainment[currentIndexEntertainment].caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

// import React, { useState, useEffect } from "react";

// const Slideshow = () => {
//   const [currentIndexWorld, setCurrentIndexWorld] = useState(0);
//   const [currentIndexSports, setCurrentIndexSports] = useState(0);
//   const [currentIndexTech, setCurrentIndexTech] = useState(0);
//   const [currentIndexEntertainment, setCurrentIndexEntertainment] = useState(0);

//   // Slides for different categories
//   const slidesWorld = [
//     {
//       category: "WORLD",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/7cc04bee-2fa7-4fd5-883d-d4c3ec7179a9.jpg",
//       caption: "Michel Brown Talks About American People.",
//     },
//     {
//       category: "WORLD",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/93d1c4c2-92fb-408f-b4ac-716b7bda09f9.jpg",
//       caption: "An Army or Ground Force is a Fighting Force.",
//     },
//   ];

//   const slidesSports = [
//     {
//       category: "SPORTS",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/b237ba9c-ca57-433b-a7d7-6746b2072a00.jpg",
//       caption: "Improve Your Health And Stamina With Cycling.",
//     },
//     {
//       category: "SPORTS",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/84326b9b-4bbd-456b-8b4f-626715e8f9a2.jpg",
//       caption: "A Historic Match Between Two Rival Teams.",
//     },
//   ];

//   const slidesTech = [
//     {
//       category: "TECH",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/1748d7f5-1499-4a33-8929-7eec1171b22d.jpg",
//       caption: "The Latest Breakthroughs in AI Technology.",
//     },
//     {
//       category: "TECH",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/031ce2f4-362a-4583-86c1-af7f0780eff6.jpg",
//       caption: "Top 5 Gadgets You Should Buy in 2025.",
//     },
//   ];

//   const slidesEntertainment = [
//     {
//       category: "ENTERTAINMENT",
//       imgSrc:
//         "https://icj24.com/wp-content/uploads/2025/01/6a1b26fb-f1d9-4408-af1c-5d47c095ec1e.jpg",
//       caption: "Alex Helis Confirms Mystery Pop Singer On New Music Album.",
//     },
//     {
//       category: "ENTERTAINMENT",
//       imgSrc: "https://icj24.com/wp-content/uploads/2025/01/movie-awards.jpg",
//       caption: "The Biggest Movie Awards of the Year.",
//     },
//   ];

//   // Auto-slide functionality for each category
//   useEffect(() => {
//     const worldInterval = setInterval(() => {
//       setCurrentIndexWorld((prevIndex) => (prevIndex + 1) % slidesWorld.length);
//     }, 3000);

//     const sportsInterval = setInterval(() => {
//       setCurrentIndexSports(
//         (prevIndex) => (prevIndex + 1) % slidesSports.length
//       );
//     }, 4000);

//     const techInterval = setInterval(() => {
//       setCurrentIndexTech((prevIndex) => (prevIndex + 1) % slidesTech.length);
//     }, 5000);

//     const entertainmentInterval = setInterval(() => {
//       setCurrentIndexEntertainment(
//         (prevIndex) => (prevIndex + 1) % slidesEntertainment.length
//       );
//     }, 6000);

//     // Cleanup intervals on component unmount
//     return () => {
//       clearInterval(worldInterval);
//       clearInterval(sportsInterval);
//       clearInterval(techInterval);
//       clearInterval(entertainmentInterval);
//     };
//   }, []); // Empty dependency array to only run on mount and unmount

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {/* World News */}
//       <div className="relative col-span-2 h-[300px]">
//         <img
//           src={slidesWorld[currentIndexWorld].imgSrc}
//           alt={slidesWorld[currentIndexWorld].caption}
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
//           <span className="bg-red-600 px-3 py-1 text-xs uppercase">
//             {slidesWorld[currentIndexWorld].category}
//           </span>
//           <p className="mt-2">{slidesWorld[currentIndexWorld].caption}</p>
//         </div>
//       </div>

//       {/* Sports News */}
//       <div className="relative h-[300px]">
//         <img
//           src={slidesSports[currentIndexSports].imgSrc}
//           alt={slidesSports[currentIndexSports].caption}
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
//           <span className="bg-blue-600 px-3 py-1 text-xs uppercase">
//             {slidesSports[currentIndexSports].category}
//           </span>
//           <p className="mt-2">{slidesSports[currentIndexSports].caption}</p>
//         </div>
//       </div>

//       {/* Tech News */}
//       <div className="relative h-[140px]">
//         <img
//           src={slidesTech[currentIndexTech].imgSrc}
//           alt={slidesTech[currentIndexTech].caption}
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
//           <span className="bg-green-600 px-2 py-1 text-xs uppercase">
//             {slidesTech[currentIndexTech].category}
//           </span>
//           <p className="mt-1">{slidesTech[currentIndexTech].caption}</p>
//         </div>
//       </div>

//       {/* Entertainment News */}
//       <div className="relative h-[140px]">
//         <img
//           src={slidesEntertainment[currentIndexEntertainment].imgSrc}
//           alt={slidesEntertainment[currentIndexEntertainment].caption}
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
//           <span className="bg-purple-600 px-2 py-1 text-xs uppercase">
//             {slidesEntertainment[currentIndexEntertainment].category}
//           </span>
//           <p className="mt-1">
//             {slidesEntertainment[currentIndexEntertainment].caption}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
