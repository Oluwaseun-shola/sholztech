import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";
import daniel from "../assets/testimonial/Daniel.jpeg";
import Doris from "../assets/testimonial/Doris.jpeg";
import Emmanuel from "../assets/testimonial/Emmanuel.jpeg";
import Eze from "../assets/testimonial/Eze.jpeg";
import Kevin from "../assets/testimonial/Kevin.jpeg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Chukwu Daniel",
      course: "Full Stack Web Development Graduate",
      image: daniel,
      text: "Sholztech Technologies transformed my career! The hands-on project-based learning gave me the confidence I needed to land my dream job. The mentors were available to guide me through complex concepts. Highly recommend!",
      stars: 5,
    },
    {
      name: "Doris",
      course: "Digital Marketing Specialist",
      image: Doris,
      text: "The practical approach here is unmatched. I went from knowing nothing about SEO to managing full-scale campaigns for clients. The environment is very supportive for beginners.",
      stars: 4,
    },
    {
      name: "Emmanuel",
      course: "Data Analysis Student",
      image: Emmanuel,
      text: "I loved how the complex data concepts were broken down into simple, digestible modules. Using real-world datasets made all the difference in my learning journey.",
      stars: 5,
    },
    {
      name: "Eze",
      course: "Graphic Designer",
      image: Eze,
      text: "The instructors were knowledgeable and supportive. The interactive learning environment allowed me to apply what I learned in real-world projects.",
      stars: 4,
    },
    {
      name: "Kevin",
      course: "UI/UX Design Graduate",
      image: Kevin,
      text: "The curriculum was comprehensive and up-to-date with industry trends. The mentorship and community support were invaluable in helping me build a strong portfolio.",
      stars: 4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#415A77] font-bold text-sm uppercase tracking-[0.2em] mb-2">
            What Our Students Say
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1B263B]">
            Testimonials & Success Stories
          </h1>
        </div>

        <div className="relative">
          {/* Main Carousel Container */}
          <div className="relative h-[450px] md:h-[300px] flex items-center justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-full scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 md:p-10 mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-8">
                  {/* Student Image */}
                  <div className="relative shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-900 text-white p-2 rounded-lg">
                      <Quote size={20} fill="currentColor" />
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                      "{review.text}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-blue-900">
                          {review.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{review.course}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        <BadgeCheck size={14} />
                        Verified Student
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-200 text-blue-900 hover:bg-[#778DA9] hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-[#778DA9]" : "w-2 bg-blue-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-200 text-blue-900 hover:bg-[#778DA9] hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
