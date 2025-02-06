import React from 'react';

function NewsSection() {
  const news = [
    {
      title: "News 1",
      imageUrl: "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
      heading: "'केजरीवाल के कटआउट को AIIMS में भर्ती करना पड़ा,' ऐसा क्यों बोले शाह",
      date: "November 16, 2017",
      link: "#"
    },
    {
      title: "News 2",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      heading: "Budget को लेकर Rahul Gandhi का सरकार पर तंज",
      date: "November 16, 2017",
      link: "#"
    },
    {
      title: "News 3",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      heading: "'महाकुंभ में हिंदुओं की जान गई, सरकार को जागना चाहिए', बोले अखिलेश",
      date: "November 16, 2017",
      link: "#"
    },
    {
      title: "News 4",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "'हमने पहले ही आगाह किया था लेकिन सरकार नहीं जागी', बोले कांग्रेस सांसद",
      date: "November 16, 2017",
      link: "#"
    },
    {
      title: "News 5",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      heading: "क्या भारत में किंगमेकर बन रहा है मिडिल क्लास? बजट 2025 की घोषणाओं के राजनीतिक मायने",
      date: "November 16, 2017",
      link: "#"
    },
  ];

  return (
    <div className="m-4 px-4 py-8 bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-4">
        मध्यप्रदेश न्यूज़
      </h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {/* Main Big News */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img src={news[0].imageUrl} alt={news[0].title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-4 text-white">
              <a href={news[0].link} className="text-2xl font-bold leading-tight hover:underline">{news[0].heading}</a>
              <p className="text-sm mt-1">{news[0].date}</p>
            </div>
          </div>
          {/* Second News (Image and Text Side by Side) */}
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-1/3 relative">
              <img src={news[1].imageUrl} alt={news[1].title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
              <a href={news[1].link} className="text-lg font-semibold leading-tight hover:underline">{news[1].heading}</a>
              <p className="text-sm mt-1">{news[1].date}</p>
            </div>
          </div>
        </div>
        {/* Three Small News on Right Side */}
        <div className="grid gap-4">
          {news.slice(2).map((item, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
              <div className="p-4 flex-1">
                <a href={item.link} className="text-sm font-semibold text-gray-800 hover:underline">{item.heading}</a>
                <p className="text-xs text-gray-500 mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
