import React from "react";

import teacher1 from "../assets/images/teacher1.png";
import teacher2 from "../assets/images/teacher2.png";
import teacher3 from "../assets/images/teacher3.png";
import teacher4 from "../assets/images/teacher4.png";

const teachers = [
  {
    name: "Kessonga",
    image: teacher1,
    desc: "Kessonga is a meditation teacher, therapist, and acupuncturist who has worked with populations of all ages and backgrounds.",
  },
  {
    name: "Andy",
    image: teacher2,
    desc: "A former Buddhist monk and co-founder of the DEE PLUS app, Andy has guided people in meditation for over 20 years.",
  },
  {
    name: "Eve",
    image: teacher3,
    desc: "Eve has been with DEE PLUS since the beginning, teaching mindfulness and overseeing our meditation curriculum.",
  },
  {
    name: "Dora",
    image: teacher4,
    desc: "Dora is a meditation teacher and former psychiatric nurse who is passionate about the healing powers of connection and community.",
  },
];

const TeachersSection = () => {
  return (
    <section className="bg-[#FDEFEF] py-12 px-6 font-[Poppins]">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Meet DEE PLUS Teachers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{teacher.name}</h3>
            <p className="text-md text-black-600">{teacher.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachersSection;
