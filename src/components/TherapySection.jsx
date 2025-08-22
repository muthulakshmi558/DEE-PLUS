import React from "react";
import therapyImg from "../assets/images/therapy_banner.png"; 

const TherapySection = () => {
  return (
    <section className="bg-pink-50 py-12 px-6 sm:px-12 font-[Poppins]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
            DEE PLUS Therapy
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Therapy is a process where a person works with a trained professional
            to explore thoughts, feelings, and behaviors in order to improve
            mental health, cope with challenges, and promote personal growth. It
            can include talking, practicing new skills, or using specific
            techniques to heal, understand oneself better, or manage life more
            effectively.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={therapyImg}
            alt="Therapy Session"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
