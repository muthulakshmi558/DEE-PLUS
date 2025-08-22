import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApproachForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    therapyDays: "",
    familyCount: "",
    address: "",
    timeAvailability: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile No is required";
    if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = "Enter valid 10-digit Mobile No";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter valid Email";
    if (!form.therapyDays) newErrors.therapyDays = "Select Therapy Day";
    if (!form.familyCount.trim()) newErrors.familyCount = "Family count required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.timeAvailability.trim()) newErrors.timeAvailability = "Time availability required";
    if (!form.city.trim()) newErrors.city = "City is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowPopup(true);
      setForm({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        therapyDays: "",
        familyCount: "",
        address: "",
        timeAvailability: "",
        city: "",
      });
    }
  };

  const goToPayment = () => {
    setShowPopup(false);
    navigate("/payment");
  };

  return (
    <div className="bg-pink-100 min-h-screen py-10 px-4 font-roboto">
      <h2 className="text-center text-2xl font-bold text-black mb-8">Approach Form</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
            />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
            />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">Mobile No</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          />
          {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">E-Mail Id</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">No. Of Therapy Day</label>
          <select
            name="therapyDays"
            value={form.therapyDays}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          >
            <option value="">-- Select --</option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4+">4+ Days</option>
          </select>
          {errors.therapyDays && <p className="text-red-600 text-sm">{errors.therapyDays}</p>}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">Family Members Count</label>
          <input
            type="number"
            name="familyCount"
            value={form.familyCount}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          />
          {errors.familyCount && <p className="text-red-600 text-sm">{errors.familyCount}</p>}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          ></textarea>
          {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">Time Availability</label>
          <input
            type="text"
            name="timeAvailability"
            value={form.timeAvailability}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          />
          {errors.timeAvailability && (
            <p className="text-red-600 text-sm">{errors.timeAvailability}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-medium">Current City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#D9B8ED]"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-[#B285C0] text-white font-semibold px-8 py-2 rounded-full hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>

      {/* ✅ Modal / Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg relative">
            <img
              src="./src/assets/images/confirmation.png" // 👉 replace with your image file or hosted URL
              alt="Success"
              className="w-64 h-64 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-[#B285C0]">Your Approach Has Been Accepted</h3>
            <p className="text-gray-600 mb-6">For more Payment</p>
            <button
              onClick={goToPayment}
              className="bg-[#B285C0] hover:bg-purple-700 text-white px-6 py-2 rounded-full"
            >
              Click Here
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-4 text-gray-400 hover:text-black text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproachForm;
