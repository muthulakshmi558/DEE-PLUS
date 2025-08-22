// FAQ.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // icons

const faqs = [
  {
    question: "How do I know if I need therapy?",
    answer:
      "If you're feeling overwhelmed, anxious, low, or stuck—or simply want to better understand yourself—therapy can help. You don’t need a crisis to benefit from mental health support.",
  },
  {
    question: "What is mental wellness?",
    answer:
      "Mental wellness means being able to handle daily stress, maintain healthy relationships, and feel balanced emotionally, physically, and socially.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "We offer individual therapy, couples counseling, group therapy, and online sessions depending on your needs.",
  },
  {
    question: "What can I expect in a therapy session?",
    answer:
      "In a session, you’ll talk with your therapist in a safe, supportive environment. Together, you’ll work on goals, coping strategies, and tools to support your well-being.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B285C0] mb-12">
          FAQs
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold text-lg ${
                    openIndex === index ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {index + 1}. {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
