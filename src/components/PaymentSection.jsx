import React, { useState } from "react";
import thankYouImage from "../assets/images/thankyou.png"; // 🔁 Use your image here

const PaymentSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirm = () => {
    setShowPopup(true);
  };

  return (
    <div className="bg-pink-100 min-h-screen font-roboto p-6">
      {/* Payment Details */}
      <div className="max-w-2xl mx-auto bg-[#D9B8ED] rounded-2xl p-6 mb-10">
        <h2 className="text-center text-xl font-bold text-[#762B82] mb-4">
          Payment Details
        </h2>
        <div className="flex justify-between py-1">
          <p>Therapist Fee Per Session</p>
          <p>Rs.2,500.00</p>
        </div>
        <div className="flex justify-between py-1">
          <p>No. of Session 25</p>
          <p>Rs.62,500.00</p>
        </div>
        <div className="flex justify-between py-1">
          <p>Vehicle Fees</p>
          <p>Rs.1,500.00</p>
        </div>
        <div className="flex justify-between py-1">
          <p>Counselling Fees</p>
          <p>Rs.4,500.00</p>
        </div>
        <div className="flex justify-between py-2 mt-2 font-bold text-black border-t pt-2">
          <p>Total</p>
          <p>Rs.68,500.00</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-[#D9B8ED] rounded-2xl p-6">
        <h2 className="text-center text-xl font-bold text-[#762B82] mb-4">
          Payment Method
        </h2>

        <div className="mb-4 flex justify-between items-center">
          <p>Debit/ Credit Card</p>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <p className="font-bold mb-2">UPI</p>

        {[
          { name: "Google Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" },
          { name: "Phone Pay", logo: "https://cdn.iconscout.com/icon/free/png-512/free-phonepe-2709167-2249158.png" },
          { name: "Patym", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png" },
          { name: "Amazon Pay", logo: "https://cdn.worldvectorlogo.com/logos/amazon-pay-1.svg" },
          { name: "Whats app", logo: "https://cdn-icons-png.flaticon.com/512/124/124034.png" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-3">
              <img src={item.logo} alt={item.name} className="w-6 h-6 rounded-full" />
              <span>{item.name}</span>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={handleConfirm}
            className="bg-[#B285C0] text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Confirm Payment
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" p-8 rounded-2xl max-w-sm w-full text-center shadow-lg">
            <img
              src={thankYouImage}
              alt="Thank you"
              className="mx-auto w-68 h-68 mb-4"
            />
    
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#B285C0] text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;
