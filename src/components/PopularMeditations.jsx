import React from "react";
import img1 from "../assets/images/popularmeditation1.png"; 
import img2 from "../assets/images/popularmeditation2.png"; 
import img3 from "../assets/images/popularmeditation3.png"; 
import img4 from "../assets/images/popularmeditation4.png"; 
import img5 from "../assets/images/popularmeditation5.png"; 

const meditations = [
  {
    id: 1,
    author: "Pascal Auclair",
    title: "Rediscover the Familiar",
    description:
      "This is the first time you’ve ever been here, now. Pascal invites you to discover the vivid and mysterious experience of this new moment.",
    duration: "5:00",
    image: img1,
  },
  {
    id: 2,
    author: "Alexis Santos",
    title: "Natural mindful walking meditation",
    description:
      "Taking a relaxed walk mindfully will soothe the nervous system, get you outside, and can refresh you mentally when you’re feeling low or off.",
    duration: "12:00",
    image: img2,
  },

    {
    id: 3,
    author: "Sharon Salzberg",
    title: "Being with Big Emotions",
    description:
      "Bring an open minded curiosity to your big emotions and get to know yourself more fully, developing resilience to deal with all the feels.",
    duration: "12:00",
    image: img3,
  },

    {
    id: 4,
    author: "Joseph Goldstein",
    title: "Balanced Compassion",
    description:
      "We're living in challenging times. Try practicing balance, letting you open to the suffering of the world without becoming overwhelmed.",
    duration: "12:00",
    image: img4,
  },

    {
    id: 5,
    author: "Self-kindness for stress",
    title: "Natural mindful walking meditation",
    description:
      "Showing self compassion to ourselves in hard times bolsters our resilience, so we can learn from setbacks rather than getting stuck in rumination.",
    duration: "12:00",
    image: img5,
  },
];

const PopularMeditations = () => {
  return (
    <>
    <div className="bg-pink-100 font-roboto px-4 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#762B82] mb-10">
        Discover popular meditations.
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {meditations.map((med) => (
          <div
            key={med.id}
            className="bg-white rounded-[40px] p-6 flex flex-col md:flex-row gap-6 shadow"
          >
            <div className="relative w-full md:w-1/3">
              <img
                src={med.image}
                alt={med.title}
                className="w-[60%] h-auto object-cover rounded-[30px]"
              />

            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{med.author}</p>
              <h3 className="text-xl font-bold mt-1">{med.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{med.description}</p>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border-2 border-black rounded-full mr-1"></div>
                  <div className="flex-1 h-px bg-black"></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>0:00</span>
                  <span>{med.duration}</span>
                </div>
              </div>
            </div>
          </div>
         
        ))}
        
      </div>
             <div className="flex justify-center mt-10">
        <button className="bg-black text-white text-lg font-bold px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Get 14-Days Free Trial
        </button>
      </div>
    </div>
    </>
  );
};

export default PopularMeditations;
