import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Sholz-Technologies: Your Gateway to Tech Success",
    description:
      "We provide professional training, printing, consulting and business services to help you grow.",
    image:
      "https://images.unsplash.com/photo-1728739529355-31dcaefd82b7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    showCTA: false,
  },
  {
    id: 2,
    title: "Start Your Tech Journey Today",
    description:
      "Learn Web Development, Data Analysis, and ICT skills with hands-on training.",
    image:
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    showCTA: true,
  },
  {
    id: 3,
    title: "Upgrade Your Skills & Income",
    description:
      "Join our mentorship programs and start earning with real-world skills.",
    image:
      "https://images.unsplash.com/photo-1760670399462-f5e479452c27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    showCTA: true,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="h-full w-full bg-black/60 flex items-center justify-center text-center px-6">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="mb-6 text-lg">{slide.description}</p>

                {/* CTA Buttons */}
                {slide.showCTA && (
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                      to="/register"
                      className="bg-[#415A77] px-6 py-3 rounded-lg font-semibold"
                    >
                      Register Now
                    </Link>
                    <Link
                      to="/AllCourses"
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
                    >
                      View Courses
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
