import React from "react";
import { Link } from "react-router-dom";

// ✅ Image import as variable
import heroImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <img
        src={heroImage} // ✅ Variable used
        alt="Meditation"
        className="w-full h-full object-cover"
      />

      {/* Overlay + Button */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <Link to="/therapy">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
