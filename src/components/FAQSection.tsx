'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What kind of travel content do you provide?",
    answer:
      "We share destination guides, must-visit places, travel tips, seasonal recommendations, cultural insights, and updated travel trends for 2025 and beyond.",
  },
  {
    question: "How do you choose the places you feature?",
    answer:
      "Our featured destinations are selected based on cultural value, uniqueness, popularity, traveler reviews, and emerging trends. We aim to highlight both popular and hidden gems around the world.",
  },
  {
    question: "Is your travel information up to date?",
    answer:
      "Yes, we regularly update our content to reflect the latest travel advisories, seasonal highlights, visa policies, and local regulations for each destination.",
  },
  {
    question: "Do you include travel safety tips?",
    answer:
      "Absolutely. Each destination guide includes essential safety tips, health advisories, local customs, and practical information to help you travel smart.",
  },
  {
    question: "Can I use your content to plan my trip?",
    answer:
      "Yes! While we don't offer booking services, our articles and guides are designed to help you research and plan your travels with confidence.",
  },
  {
    question: "Are the photos and images on your site original?",
    answer:
      "Many of our images are either original or licensed from professional sources. We aim to provide high-quality, inspiring visuals that reflect the true essence of each destination.",
  },
];


 
  


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="max-w-4xl md:max-w-7xl mx-auto p-6 shadow-2xl mt-7 md:mt-17">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;