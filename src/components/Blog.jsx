import React from "react";

import blogImg1 from "../assets/images/blog1.png";
import blogImg2 from "../assets/images/blog2.png";
import blogImg3 from "../assets/images/blog3.png";

const blogPosts = [
  {
    date: "April 21 2025",
    title: "Therapy Isn’t Just for Crisis—Here’s Why It Matters Every Day",
    image: blogImg1,
  },
  {
    date: "April 14 2025",
    title: "Can Online Therapy Be as Effective? Here’s What Research Says",
    image: blogImg2,
  },
  {
    date: "April 02 2025",
    title: "Breaking the Stigma: Why Seeing a Therapist Is a Strength",
    image: blogImg3,
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-gray-700">From the Blog</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#B285C0] mb-12">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-700 text-md mb-2">
                  News | {post.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  "{post.title}"
                </h3>
                <a
                  href="#"
                  className="text-black font-medium hover:underline mt-auto"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
