import React from 'react';
import { BookOpen, Users, MousePointerClick, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Relevant Courses",
      description: "Our curriculum is constantly updated to align with the latest market trends and technological advancements, ensuring you learn skills that employers actually need.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Professional Trainers",
      description: "Learn from seasoned experts with years of field experience. Our instructors don't just teach theory; they share real-world insights and best practices.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Hands-on Training",
      description: "We believe in learning by doing. Our sessions are 90% practical, involving live projects and labs to build your confidence and technical proficiency.",
      icon: <MousePointerClick className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Job Placement Support",
      description: "Beyond the classroom, we provide career counseling, resume building, and connect our top-performing students with industry partners.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white" id='advantages'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#778DA9] font-bold text-sm uppercase tracking-widest mb-2">
            Our Advantage
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">
            Why Choose Us?
          </h1>
          <div className="mt-4 w-24 h-1 bg-[#778DA9] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center p-4 rounded-lg mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#778DA9] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;