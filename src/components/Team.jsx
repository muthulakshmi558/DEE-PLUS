import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";

const teamMembers = [
  {
    name: "JansiMerry",
    role: "Clinical Director / Psychologist",
    image: team1,
  },
  {
    name: "Rizza",
    role: "Psychologist",
    image: team2,
  },
  {
    name: "John Smith",
    role: "Clinical Director / Psychologist",
    image: team3,
  },
  {
    name: "Brady John",
    role: "Psychologist",
    image: team4,
  },
  {
    name: "Emily Rose",
    role: "Therapist",
    image: team1,
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg text-gray-700">Meet Our Therapist</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#B285C0] mb-10">
          Our Team
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-100 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-gray-700 text-sm">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
