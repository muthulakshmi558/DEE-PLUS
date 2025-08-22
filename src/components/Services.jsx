import React from "react";

import individualImg from "../assets/images/single.jpg";
import therapyImg from "../assets/images/family.jpg";
import groupImg from "../assets/images/group_hands.jpg";

import individualIcon from "../assets/images/individual.png";
import couplesIcon from "../assets/images/couples.jpg";
import groupIcon from "../assets/images/group.jpg";
import familyIcon from "../assets/images/family.png";
import onlineIcon from "../assets/images/online.png";

const Services = () => {
  return (
    <section className="py-16 bg-[#FFECEC]">
      <div className="w-[90%] mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6B2B6C]">Our Services</h2>
      </div>

      <div className="w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
      <div className="w-50 h-60 flex flex-col justify-between p-6 border rounded-lg bg-white border-purple-600">
        <h3 className="text-lg font-semibold mb-4 text-center">Individual Therapy</h3>
        <div className="flex items-center justify-between mt-auto">
          <a href="#" className="text-[#557E7E] text-md hover:underline">Read more</a>
          <img src={individualIcon} alt="Individual Therapy" className="w-20 h-20" />
        </div>
      </div>

        <div>
          <img
            src={individualImg}
            alt="Therapy Session"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col justify-between p-6 rounded-lg bg-[#8A84C2] text-white ">
          <h3 className="text-lg font-semibold mb-4 text-center">Couples Therapy</h3>
          <div className="flex items-center justify-between mt-auto">
            <a href="#" className="text-md hover:underline">Read more</a>
            <img src={couplesIcon} alt="Couples Therapy" className="w-20 h-20" />
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 border rounded-lg bg-white border-purple-600">
          <h3 className="text-lg font-semibold mb-4 text-center">Group Therapy</h3>
          <div className="flex items-center justify-between mt-auto">
            <a href="#" className="text-[#557E7E] text-md hover:underline">Read more</a>
            <img src={groupIcon} alt="Group Therapy" className="w-20 h-20" />
          </div>
        </div>

        <div>
          <img
            src={therapyImg}
            alt="Family Therapy"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
        <a href="/familytherapy">
        <div className="w-50 h-60 flex flex-col justify-between p-6 border rounded-lg bg-white border-purple-600">
          <h3 className="text-lg font-semibold mb-4 text-center">Family Therapy</h3>
          <div className="flex items-center justify-between mt-auto">
            <div className="text-[#557E7E] text-md hover:underline">Read more</div>
            <img src={familyIcon} alt="Family Therapy" className="w-20 h-20" />
          </div>
        </div>
        </a>
        <div>
          <img
            src={groupImg}
            alt="Group Session"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col justify-between p-6 border rounded-lg bg-white border-purple-600">
          <h3 className="text-lg font-semibold mb-4 text-center">Online Therapy</h3>
          <div className="flex items-center justify-between mt-auto">
            <a href="#" className="text-[#557E7E] text-md hover:underline">Read more</a>
            <img src={onlineIcon} alt="Online Therapy" className="w-20 h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
