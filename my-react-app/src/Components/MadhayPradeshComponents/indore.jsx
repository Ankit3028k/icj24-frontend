import React from 'react';

const Indore = () => {
  const articles = [
    {
      title: "MP News :Competitive Exams की तैयारी कर रहे युवाओं को एक बड़ी सौगात",
      description: "MP News :मुख्यमंत्री डॉ. मोहन यादव ने आज इंदौर में प्रतियोगी परीक्षाओं की तैयारी कर रहे युवाओं को एक बड़ी सौगात दी। उन्होंने इंदौर जिला प्रशासन की अभिनव पहल के तहत बनाई गई अत्याधुनिक सुविधाओं से युक्त लाइब्रेरी मुख्यमंत्री परीक्षार्थी सुविधा केंद्र का उद्घाटन किया। होलकर साइंस कॉलेज में स्थापित लाइब्रेरी मुख्यमंत्री परीक्षार्थी सुविधा केंद्र […]",
      imageUrl: "https://icj24.com/wp-content/uploads/2024/10/423c067f-45f3-4d76-add7-a52f236675a8-551x349.jpeg",
      link: "/ai-revolution",
    },
    {
      title: "Health of Indore campaign : CM यादव बोले, संत और महात्माओं ने हमें स्वस्थ जीवन शैली अपनाने का पाठ सिखाया",
      description: "Health of Indore campaign : मुख्यमंत्री डॉ. मोहन यादव ने कहा है कि भारतीय संस्कृति में ऋषि, मुनियों, संत और महात्माओं ने हमें स्वस्थ जीवन शैली अपनाने का पाठ सिखाया है। उनके बताये मार्गों और सिद्धांतों पर चलकर हम स्वस्थ जीवनशैली प्राप्त कर सकते हैं। आज के युग में आहार, विहार और संयमित दिनचर्या रखने की आवश्यकता है। […]",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/08e1e5c2-e35f-47b9-b176-d8ad01285dc9.jpg",
      link: "/5g-networks",
    },
    {
      title: "Indore Suicide case: पति से झगड़ा और छत से कूद गई महिला, दर्दनाक मौत",
      description: "Indore Suicide case: मध्य प्रदेश के इंदौर में एक दिल दहला देने वाली घटना सामने आई है। यहां 30 वर्षीय एक महिला ने अपने पति से झगड़े के बाद इमारत की तीसरी मंजिल से कूदकर खुद अपनी जान दे दी। घटना रविवार शाम को हुई जिसका एक व्यक्ति ने अपने मोबाइल में वीडियो रिकॉर्ड कर […]",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/e2ab42c2-09dc-4d59-ab06-f57a65c70bf5.jpg",
      link: "/quantum-computing",
    },
    {
      title: "MP Mandsaur News : मंदसौर में नवीन कलेक्टर श्रीमती अदिति गर्ग ने जिला अधिकारियों से किया परिचय इसी  दौरान बाढ़ एवं राहत के संबंध में विस्तार से की चर्चा",
      description: "सभी जिलाधिकारी मिलकर परस्पर संवाद के साथ बेहतर काम करें : कलेक्टर श्रीमती गर्ग MP Mandsaur News : मंदसौर में नवीन कलेक्टर श्रीमती अदिति गर्ग ने सुशासन भवन में स्थित सभा कक्ष में जिला अधिकारियों से परिचय प्राप्त किया। इस दौरान कलेक्टर ने सभी जिलाधिकारियों को अपने परिचय से अवगत कराया तथा सभी को कहा […]",
      imageUrl: "https://icj24.com/wp-content/uploads/2025/01/d72f55ce-7eb4-4b02-ba90-8f147cdf23a2.jpg",
      link: "/blockchain-tech",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      {articles.map((article, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black opacity-60 py-2 px-4 text-white">
              <h2 className="text-lg font-semibold">{article.title}</h2>
            </div>
          </div>
          <div className="p-4 md:w-2/3">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{article.description}</p>
            <a
              href={article.link}
              className="inline-block text-blue-600 font-semibold border-2 border-blue-600 py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indore;
