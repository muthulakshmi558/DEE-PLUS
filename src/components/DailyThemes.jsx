import React from "react";

const dailyThemes = [
  {
    day: "Day 1 – Gratitude",
    description:
      "Focus on 3 things you’re thankful for. Feel the warmth they bring.",
  },
  {
    day: "Day 2 – Loving-Kindness",
    description:
      "Silently repeat: “May I be happy. May others be happy.”",
  },
  {
    day: "Day 3 – Present Moment Joy",
    description:
      "Mindfully notice small joys—breath, light, sound—with full attention.",
  },
  {
    day: "Day 4 – Smile Meditation",
    description:
      "Gently smile while breathing slowly. Let the feeling of ease spread.",
  },
  {
    day: "Day 5 – Positive Memories",
    description:
      "Recall a joyful moment. Re-experience it with all your senses.",
  },
  {
    day: "Day 6 – Self-Compassion",
    description:
      "Send kindness to yourself. Affirm: “I am enough. I deserve joy.”",
  },
  {
    day: "Day 7 – Intentional Joy",
    description:
      "Visualize a joyful life. Imagine waking up smiling, living freely.",
  },
];

const DailyThemes = () => {
  return (
    <section className="bg-[#FDEFEF] py-10 px-4 text-center font-serif">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Daily Themes (5–10 minutes each)
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-800">
        {dailyThemes.map((item, index) => (
          <div key={index}>
            <p className="font-semibold">{item.day}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyThemes;
