import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully ✅");
    reset();
  };

  return (
    <section className="bg-[#FDEFEF] py-12 px-6 font-['Roboto']">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact DEE PLUS</h2>

          <p className="mb-2 font-semibold">Address:</p>
          <p>
            6, Hethendran Street, <br />
            Kongu Nagar, <br />
            Karur - 26
          </p>

          <p className="mt-4 font-semibold">Mobile No:</p>
          <p>+9532 32556</p>

          <p className="mt-4 font-semibold">E-Mail Id:</p>
          <p>deepluswell@gmail.com</p>

          <p className="mt-6 font-semibold">General Enquirers</p>
          <p>
            Got a general question? Please use this Contact Form to reach out to
            us.
          </p>

          <p className="mt-6 font-semibold">Feedback</p>
          <p>
            Do you have something to say about The Guided Meditation Site? Feel
            free to give us your feedback via this Contact Form.
          </p>

          <p className="mt-6 font-semibold">Opening Time</p>
          <p>Monday - Sunday</p>
          <p>9.00 AM To 9.00 PM</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-[#B285C0]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Mobile No"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10 digit number",
                },
              })}
              className="w-full border border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-[#B285C0]"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="E-Mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full border border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-[#B285C0]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <textarea
              rows="4"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-[#B285C0]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("notRobot", { required: "Please confirm you are not a robot" })}
              className="w-5 h-5"
            />
            <label className="text-gray-700">I am not a robot</label>
          </div>
          {errors.notRobot && (
            <p className="text-red-500 text-sm">{errors.notRobot.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#6A1B9A] text-white font-semibold py-3 rounded-md hover:bg-[#501474] transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
