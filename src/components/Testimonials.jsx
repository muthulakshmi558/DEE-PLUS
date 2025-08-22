import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import client1 from "../assets/images/client.png";
import client2 from "../assets/images/client.png";
import client3 from "../assets/images/client.png";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#C2F0FF] to-[#BFFFBF]">
      <div className="text-center mb-10">
        <h4 className="text-lg font-medium text-black">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B2B6C]">
          What Our Clients Says
        </h2>
      </div>

      <div className="w-[90%] md:w-3/4 mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src={client1}
                alt="Client 1"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 max-w-xl mx-auto italic">
                "This therapy session completely changed my life. The care and
                attention given was outstanding!"
              </p>
              <h4 className="mt-4 font-semibold text-[#6B2B6C]">
                – Karthick
              </h4>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src={client2}
                alt="Client 2"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 max-w-xl mx-auto italic">
                "Professional and compassionate. Highly recommend for couples
                therapy!"
              </p>
              <h4 className="mt-4 font-semibold text-[#6B2B6C]">
                – Arun
              </h4>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src={client3}
                alt="Client 3"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 max-w-xl mx-auto italic">
                "Group therapy sessions helped me feel supported and understood."
              </p>
              <h4 className="mt-4 font-semibold text-[#6B2B6C]">
                – Ramesh
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
