import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import footerLogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#B285C0] text-white py-10 px-6 font-['Roboto']">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <img 
            src={footerLogo} 
            alt="Dee Plus Logo" 
            className="w-32 h-auto"
          />
        </div>

        <div>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Happiness Week</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Course</li>
            <li>Meditation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
            <li>Partnership</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">Opening Time</h3>
            <p>Monday - Sunday</p>
            <p>9.00 AM To 9.00 PM</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2">
            <FiMapPin /> 6, Hethendran Street, <br />
            Kongu Nagar, Karur - 26
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FiPhone /> +9532 32556
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FiMail /> deepluswell@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
