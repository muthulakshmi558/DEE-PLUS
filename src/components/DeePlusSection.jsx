import React from "react";
import meditationImg from "../assets/images/yoga.jpg"; 

const DeePlusSection = () => {
  const values = [
    { letter: "M", title: "Mindfulness", desc: "Being aware of the present" },
    { letter: "E", title: "Equanimity", desc: "Calm and balanced emotions" },
    { letter: "D", title: "Discipline", desc: "Consistency in practice" },
    { letter: "I", title: "Inner Peace", desc: "A state of deep tranquility" },
    { letter: "T", title: "Tranquility", desc: "Soothing the restless mind" },
    { letter: "A", title: "Awareness", desc: "Conscious observation without reaction" },
    { letter: "T", title: "Transformation", desc: "Gradual personal growth" },
    { letter: "I", title: "Intention", desc: "Clarity of purpose" },
    { letter: "O", title: "Observation", desc: "Watching thoughts without control" },
    { letter: "N", title: "Now", desc: "Anchoring yourself in the present moment" },
  ];

  const therapyBenefits = [
    "Reducing stress and anxiety",
    "Enhancing focus and clarity",
    "Improving emotional regulation",
    "Promoting self-awareness",
  ];

  return (
    <section className="px-4 py-12 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#B285C0] mb-8">
            What <span className="text-white bg-[#B285C0] px-1">DEE PLUS</span> Stands For
          </h2>
          <div className="space-y-4">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                <span className="text-purple-700 font-bold w-8">{val.letter}</span>
                <div>
                  <h3 className="text-purple-700 font-semibold">{val.title}</h3>
                  <p className="text-gray-800">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <img
            src={meditationImg}
            alt="Meditation"
            className="w-full max-w-sm mb-6 md:mb-8 object-contain"
          />
          <h3 className="text-purple-700 font-bold text-xl mb-2">In Therapy Helps With</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {therapyBenefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeePlusSection;
