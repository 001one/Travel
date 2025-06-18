'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of floral arrangements do you offer?",
    answer:
      "We provide a variety of floral arrangements, including bouquets, centerpieces, wedding florals, sympathy flowers, and custom designs for any occasion.",
  },
  {
    question: "Do you offer same-day flower delivery?",
    answer:
      "Yes, we offer same-day flower delivery for select arrangements. Please place your order early to ensure availability.",
  },
  {
    question: "Can I request a custom floral arrangement?",
    answer:
      "Absolutely! We specialize in custom floral designs tailored to your preferences, event theme, and budget. Contact us to discuss your vision.",
  },
  {
    question: "How do I take care of my flowers to make them last longer?",
    answer:
      "To extend the life of your flowers, keep them in fresh water, trim the stems at an angle every few days, and place them away from direct sunlight and heat sources.",
  },
  {
    question: "Do you provide floral arrangements for weddings and events?",
    answer:
      "Yes! We create stunning floral arrangements for weddings, corporate events, birthdays, and other special occasions. Reach out to us to plan your floral decor.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can place an order through our website, give us a call, or visit our shop to select your perfect arrangement.",
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