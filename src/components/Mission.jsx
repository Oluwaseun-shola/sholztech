import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      title: "Our Mission",
      description: "To empower individuals with practical, demand-driven ICT skills through personalized, hands-on training that bridges the gap between education and employment.",
      icon: <Target className="w-8 h-8 text-[#1B263B]" />,
    },
    {
      title: "Our Vision",
      description: "To be the leading hub for digital excellence in Africa, fostering a generation of tech-savvy professionals who drive global innovation.",
      icon: <Eye className="w-8 h-8 text-[#1B263B]" />,
    },
    {
      title: "Our Core Values",
      description: "Integrity, excellence, and a commitment to practical results. We don't just teach; we ensure our students can deliver value.",
      icon: <Heart className="w-8 h-8 text-[#1B263B]" />,
    }
  ];

  return (
    <section className="py-20 bg-white" id='mission'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B263B] mb-4">Empowering the Future</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At Sholz-Technologies, we believe in practical education that creates real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;