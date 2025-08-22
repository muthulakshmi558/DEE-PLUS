import React from "react";
import contactBanner from "../assets/images/contact_banner.jpg"; 

const ContactBanner = () => {
  return (
    <section className="bg-[#FDEFEF] py-10 flex justify-center">
      <div className="w-[70%] relative">
        {/* Image */}
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="w-full  shadow-lg object-cover"
        />

        <div className="absolute inset-0 flex justify-start items-center">
          <p className="text-lg md:text-2xl font-semibold text-black text-center font-['Roboto'] px-6">
            “Reach out — we’re here to <br></br> help you find your inner peace.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
