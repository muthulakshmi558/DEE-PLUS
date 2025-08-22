import React from "react";
import { Link } from "react-router-dom";
import family1 from "../assets/images/family_therapy.jpg"; 
import family2 from "../assets/images/family_therapy2.jpg";
import family3 from "../assets/images/stress.jpg";
import family4 from "../assets/images/child.jpg";
import family5 from "../assets/images/filial-therapy.jpg";
import family6 from "../assets/images/mother_hood.png";

const FamilyCard = () => {
  return (
    <div className="min-h-screen bg-[#FDEFEF] font-roboto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#B285C0]">
          Family Therapy
        </h1>
        <p className="text-gray-800 mt-4 max-w-2xl mx-auto text-lg">
          Family issues can be one of the biggest mental health stressors in a
          person's life. Seeking help through family therapy can be an important
          step toward healing for you and your loved ones.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family1}
            alt="Family Origin Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
              Understanding ‘ Family Of Origin ‘ Work in Therapy
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Rotary- LCP</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family2}
            alt="Structural Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
              How structural Family Therapy Works
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Carno- MD</span>
            </p>
          </div>
        </div>

        
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family3}
            alt="Family Origin Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
             What to Know About Internal Family <br></br>System (IFS) Therapy
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Rotary- MD</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family4}
            alt="Structural Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
              What Is Filial Therapy?
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Carno- MD</span>
            </p>
          </div>
        </div>

        
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family5}
            alt="Family Origin Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
              Parent - Child Interaction Therapy 
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Rotary- LCP</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-red-400 max-w-md w-full">
          <img
            src={family6}
            alt="Structural Therapy"
            className="w-full h-64 object-cover rounded-tl-2xl rounded-br-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-[#B285C0] font-semibold text-md md:text-lg mb-4">
              How to Mentally Prepare For Motherhood, According to Parenting Coach
            </h2>
            <Link to="/approachform" className="inline-block">
            <button className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full mb-3">
                I Get This
            </button>
            </Link>
            <p className="text-md text-black-700 mt-2">
              Medically reviewed By <span className="font-medium">Carno- LCP</span>
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FamilyCard;
