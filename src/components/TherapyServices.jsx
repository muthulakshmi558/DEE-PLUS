import React from "react";
import { useNavigate } from "react-router-dom";

import therapy1 from "../assets/images/individual_therapy.jpg";
import therapy2 from "../assets/images/couple_therapy.jpeg";
import therapy3 from "../assets/images/family_therapy.jpg";
import therapy4 from "../assets/images/group_therapy.jpg";
import therapy5 from "../assets/images/online_therapy.jpg";

const TherapyServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Individual Therapy",
      image: therapy1,
    },
    {
      title: "Couple Therapy",
      image: therapy2,
    },
    {
      title: "Family Therapy",
      image: therapy3,
      path: "/familytherapy", 
    },
    {
      title: "Group Therapy",
      image: therapy4,
    },
    {
      title: "Online Therapy",
      image: therapy5,
    },
  ];

  return (
    <section className="bg-[#FFEFEF] py-12 px-6 font-[Poppins]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6B1236] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)} 
            className="cursor-pointer bg-white rounded-tl-[40px] rounded-br-[40px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-tl-[40px] rounded-br-[40px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapyServices;
