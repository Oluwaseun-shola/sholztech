import React from 'react';
import {Mail } from 'lucide-react';
import sholz from "../assets/team/image.png";
import daniel from "../assets/team/Daniel.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Oluwaseun Ogunbowale",
      role: "Lead Technical Instructor",
      specialty: "Full-Stack Development & Data Science",
      image: sholz
    },
    {
      name: "Chukwu Daniel",
      role: "Digital Marketing Head",
      specialty: "SEO & Content Strategy",
      image: daniel
    },

  ];

  return (
    <section className="py-20 bg-gray-50" id='team'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-[#1B263B] font-bold uppercase tracking-wider text-sm mb-2">Meet the Experts</h2>
            <h1 className="text-4xl font-extrabold text-blue-900">Guided by Industry Professionals</h1>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 max-w-sm text-center md:text-right">
            Our trainers are not just teachers; they are practitioners who bring years of industry experience to the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-[#1B263B] font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs uppercase tracking-tighter mb-4">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;