import React from "react";
import img1 from "../assets/images/about1.jfif"; 
import img2 from "../assets/images/about2.jpg";
import img3 from "../assets/images/about1.jfif";

const AboutDetails = () => {
  const items = [
    {
      title: "Who we are",
      text: "Think of DEE PLUS as your lifelong guide to better mental health. We’re here for you whenever you need us, wherever you are, helping you get through tough times and find joy in every day.",
      img: img1,
    },
    {
      title: "What we do",
      text: "Through evidence-based meditation and mindfulness tools, mental health coaching, therapy, psychiatry, Headspace helps you create life-changing habits to support your mental health and find a healthier, happier you.",
      img: img2,
    },
    {
      title: "How we do it",
      text: "Our four values inform our decisions and how we operate day-to-day: put members first; bring a beginner's mind; seek truth, speak truth; embrace ownership.",
      img: img3,
    },
  ];

  return (
    <section className="bg-[#FDEFEF] py-12 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto space-y-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
          >
            {/* Left Text */}
            <div className="md:col-span-4 text-center md:text-left">
              <h3 className="text-xl justify-center text-center font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDetails;
