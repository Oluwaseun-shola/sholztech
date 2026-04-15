import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/data.js";

const Course = () => {
  const { course } = useParams();

  const courseData = courses.find((c) => c.id === course);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Course not found
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT: IMAGE */}
        <div className="w-full">
          <img
            src={courseData.image}
            alt={courseData.title}
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {courseData.title}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {courseData.description}
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-semibold">{courseData.price}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{courseData.duration}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-semibold">{courseData.level}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="font-semibold">{courseData.instructor}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              <Link to="/register"> Register Now</Link>
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              <a href="https://wa.me/2349076129399">Contact Us</a>
            </button>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
          <li>✔ Practical hands-on training</li>
          <li>✔ Real-world projects</li>
          <li>✔ Industry-relevant skills</li>
          <li>✔ Certification upon completion</li>
        </ul>
      </div>
    </div>
  );
};

export default Course;
