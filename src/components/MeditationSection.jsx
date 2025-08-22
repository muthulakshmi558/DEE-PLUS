import React from "react";
import { Link } from "react-router-dom";

import personImage from "../assets/images/meditation.jpg";

const MeditationSection = () => {
  return (
    <div className="bg-[#FDEFEF] font-roboto min-h-screen p-6 text-[#762B82]">
      <h1 className="text-3xl font-bold text-center mb-6">Meditation</h1>

      <div className="flex justify-center mb-10">
        <Link to = "/freetrial">
        <button className="bg-black text-white text-lg font-bold px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Start Your Free Trial
        </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2">Featured Meditation</p>
          <h2 className="text-2xl font-bold text-[#762B82]">Sleep Meditation</h2>
        </div>

        <div className="relative w-full max-w-sm mx-auto bg-white rounded-[40px] overflow-hidden shadow-lg">
          <img src={personImage} alt="Meditation" className="w-full h-auto" />

          <div className="absolute bottom-20 right-5">
            
            <button className="bg-white bg-opacity-50 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
              </svg>
            </button>
            
          </div>

          <div className="bg-white bg-opacity-70 p-4 backdrop-blur-md flex flex-col">
            <p className="text-lg font-bold mb-2">Soothe Anxiety to Sleep</p>
            <div className="flex items-center justify-between text-sm text-black">
              <span>0:00</span>
              <div className="flex-1 h-1 mx-2 bg-black rounded-full">
                <div className="h-full w-1/6 bg-[#762B82] rounded-full"></div>
              </div>
              <span>30:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to = "/freetrial">
        <button className="bg-black text-white text-lg font-bold px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Start Your Free Trial
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MeditationSection;
