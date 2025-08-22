// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";


const HeroBanner = () => {
  const heroImage = "../assets/images/banner.jpg"; 

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <img
        src={heroImage} 
        alt="Meditation"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <Link to = "/therapy" >
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform">
          Join Now
        </button>
      </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
