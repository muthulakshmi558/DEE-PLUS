import React from "react";
import aboutBannerImg from "../assets/images/aboutbanner.png"; 

const AboutBanner = () => {
  return (
    <section className="bg-[#FDEFEF] py-12 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          About <span className="text-black">DEE PLUS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
          <div className="md:col-span-3 flex justify-center">
            <img
              src={aboutBannerImg}
              alt="About"
              className="rounded-lg shadow-md w-full h-auto object-contain"
            />
          </div>

          <div className="md:col-span-7">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-black-700">
              Our mission is to provide a valuable resource of information and
              downloads to people who want to evolve mentally, emotionally and
              spiritually, and to help people become healthier, happier and more
              peaceful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
