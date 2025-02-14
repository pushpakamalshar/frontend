import React, { useState } from "react";

const faqs = {
  en: [
    {
      question: "How can I stay hydrated throughout the day?",
      answer:
        "Drinking water regularly is essential for maintaining good health. You should aim for at least 8 glasses of water per day. Carrying a water bottle and setting reminders can help. Additionally, consuming water-rich foods like fruits and vegetables contributes to hydration. Avoid excessive caffeine and alcohol as they can lead to dehydration.",
    },
    {
      question: "What is the best way to get quality sleep?",
      answer:
        "Quality sleep is crucial for overall well-being. Maintain a consistent sleep schedule by going to bed and waking up at the same time daily. Avoid screens and bright lights at least an hour before bedtime. Creating a relaxing bedtime routine, such as reading or meditating, helps your body wind down. Ensure your sleeping environment is quiet, dark, and comfortable for optimal rest.",
    },
    {
      question: "How can I naturally boost my energy levels?",
      answer:
        "Maintaining balanced energy levels is important for productivity and well-being. Eating a nutritious diet with a good mix of proteins, healthy fats, and complex carbohydrates provides sustained energy. Regular physical activity, even a short walk, can help combat fatigue. Proper hydration and good quality sleep also contribute to sustained energy. Managing stress through relaxation techniques ensures that your energy is not drained unnecessarily.",
    },
    {
      question: "How can I effectively manage stress?",
      answer:
        "Managing stress is key to both physical and mental health. Regular exercise, such as yoga or walking, helps release endorphins that reduce stress. Mindfulness practices like meditation or journaling can help calm the mind. Maintaining a healthy work-life balance and taking breaks when needed prevents burnout. Building a strong support system of friends and family provides emotional support during tough times.",
    },
    {
      question: "What are the best ways to improve digestion?",
      answer:
        "Good digestion is crucial for nutrient absorption and overall health. Eating fiber-rich foods like whole grains, fruits, and vegetables aids digestion. Drinking plenty of water helps prevent constipation and supports gut health. Regular physical activity, such as walking after meals, keeps digestion efficient. Avoiding processed foods and eating meals at consistent times further benefits digestion.",
    },
    {
      question: "How can I naturally improve my mental health?",
      answer:
        "Mental well-being is as important as physical health. Engaging in regular physical activity releases endorphins that improve mood. Practicing mindfulness and meditation can help manage negative thoughts and stress. Social connections and meaningful conversations with friends and family promote emotional health. Engaging in hobbies and activities that bring joy provides a sense of fulfillment.",
    },
    {
      question: "What habits contribute to healthy skin?",
      answer:
        "Healthy skin requires consistent care and protection. Staying hydrated and eating a nutrient-rich diet keeps the skin glowing. Using sunscreen daily prevents premature aging and skin damage. A proper skincare routine, including cleansing and moisturizing, maintains skin health. Avoiding excessive sugar and processed foods reduces breakouts and inflammation.",
    },
    {
      question: "How can I maintain strong bones as I age?",
      answer:
        "Bone health is essential for long-term mobility and strength. Consuming calcium-rich foods like dairy products, leafy greens, and almonds supports bone density. Regular weight-bearing exercises, such as walking or resistance training, strengthen bones. Getting enough vitamin D from sunlight or supplements enhances calcium absorption. Avoiding smoking and excessive alcohol intake further protects bone health.",
    },
  ],
  np: [
    {
      question: "दिनभर हाइड्रेटेड रहन के गर्न सकिन्छ?",
      answer:
        "नियमित रूपमा पानी पिउनु स्वास्थ्यका लागि अत्यन्त आवश्यक छ। तपाईंले दिनमा कम्तिमा ८ गिलास पानी पिउन लक्ष्य राख्नुपर्छ। पानीको बोतल बोक्ने र सम्झना गराउने अलार्म राख्नाले मद्दत गर्छ। साथै, फलफूल र तरकारी जस्ता पानीयुक्त खाद्य पदार्थहरूको सेवनले पनि शरीरलाई हाइड्रेटेड राख्छ। अत्यधिक कफी र रक्सीबाट बच्नुपर्छ, किनभने तिनीहरूले शरीरलाई डिहाइड्रेट गर्न सक्छन्।",
    },
    {
      question: "गुणस्तरीय निद्रा पाउने उत्तम उपाय के हो?",
      answer:
        "गुणस्तरीय निद्रा समग्र स्वास्थ्यका लागि महत्त्वपूर्ण छ। प्रत्येक दिन एकै समयमा सुत्ने र उठ्ने तालिका बनाउनु आवश्यक छ। निद्राको एक घण्टा अघि स्क्रिन प्रयोग नगर्ने बानी बसाल्नु राम्रो हुन्छ। आरामदायी निद्राको वातावरण बनाउन कोठा शान्त, अँध्यारो, र सहज राख्नु आवश्यक छ। मन शान्त गर्न ध्यान वा पढाइ जस्ता गतिविधिहरू उपयोगी हुन्छन्।",
    },
    {
      question: "शरीरलाई ऊर्जा दिइरहने प्राकृतिक उपायहरू के हुन्?",
      answer:
        "ऊर्जा सन्तुलित राख्न सही आहार अत्यन्त महत्वपूर्ण छ। प्रोटिन, स्वस्थ बोसो, र जटिल कार्बोहाइड्रेटयुक्त भोजनले लामो समयसम्म ऊर्जा दिन्छ। नियमित व्यायाम, जस्तै सानो हिँडाइ, थकान हटाउन मद्दत गर्छ। उचित निद्रा र प्रशस्त पानी पिउनाले पनि शरीरलाई ऊर्जावान राख्छ। तनाव व्यवस्थापन गर्दा अनावश्यक रूपमा ऊर्जा खेर जाँदैन।",
    },
    {
      question: "तनाव व्यवस्थापन गर्ने प्रभावकारी उपायहरू के हुन्?",
      answer:
        "तनाव कम गर्न व्यायाम, ध्यान, र सकारात्मक सोच आवश्यक छ। योग वा हिँडाइले शरीरलाई आराम दिन्छ। ध्यान वा डायरी लेख्नाले मन स्थिर राख्न मद्दत गर्छ। परिवार र साथीहरूसँग समय बिताउँदा मानसिक स्वास्थ्यमा सुधार आउँछ। समय व्यवस्थापन र उचित आराम लिनाले मानसिक शान्ति कायम रहन्छ।",
    },
    {
      question: "पाचन प्रणाली सुधार गर्ने उपायहरू के हुन्?",
      answer:
        "स्वस्थ पाचनका लागि उच्च फाइबरयुक्त भोजन खानु आवश्यक छ। प्रशस्त पानी पिउनाले कब्जियत हुनबाट बचाउँछ। प्रत्येक दिन निश्चित समयमा भोजन गर्नाले पाचन प्रक्रियालाई मद्दत गर्छ। प्रशोधन गरिएका खाना कम खानु पाचन सुधारको लागि राम्रो उपाय हो। खाना राम्रोसँग चपाउनु पनि पाचनलाई प्रभावकारी बनाउँछ।",
    },
  ],
};

const Blogs = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex-1 w-full flex-col items-center font-[Poppins] shadow-md ">
      {language == "en" ? (
        <h1 className="text-3xl font-bold mb-6">
          Frequently Asked Health Questions
        </h1>
      ) : (
        <h1 className="text-3xl font-bold mb-6">
          बारम्बार सोधिने स्वास्थ्य सम्बन्धी प्रश्नहरू
        </h1>
      )}
      <button
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => setLanguage(language === "en" ? "np" : "en")}
      >
        Change Language
      </button>
      <div className="w-full  space-y-4">
        {faqs[language].map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md border border-gray-300 max-h-40 overflow-y-auto"
          >
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
