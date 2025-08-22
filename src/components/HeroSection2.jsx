import React from "react";
import heroImage from "../assets/images/hero-section.jpg"; 

const HeroSection = () => {
  return (
    <section className="w-full bg-[#FFF8F0] ">
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-green-50 px-6 md:px-16 py-10 md:py-20">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={heroImage}
              alt="Team Collaboration"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <p className="text-lg mb-2">Welcome To</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#B285C0] mb-4">
              Private Psychiatry <br /> & Therapy Clinic
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-6">
              A specialized healthcare facility offering confidential, personalized mental health services, including psychiatric evaluations, medication management, and psychotherapy. Designed to provide discreet, compassionate care for individuals seeking support for emotional, behavioral, or psychological challenges.
            </p>
            <button className="px-6 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-[#B285C0] to-blue-600 hover:opacity-90 transition">
              Meet Our Team
            </button>
          </div>
        </div>

        <div className="bg-teal-600 text-black flex flex-col md:flex-row justify-around items-center py-8 md:py-12 text-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold">1586</h3>
            <p>Session Per Year</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold">20</h3>
            <p>Year Experience</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold">5000+</h3>
            <p>Successful Therapy</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">18</h3>
            <p>Specialist in Our team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
