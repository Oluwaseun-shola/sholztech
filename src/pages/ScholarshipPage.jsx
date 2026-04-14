import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, ArrowRight, BellRing, Search,CheckCircle2 } from 'lucide-react';

const ScholarshipPage = () => {
  // 1. DATA OBJECT: Add scholarship objects here to update the UI
  const [scholarships] = useState([
    
    // {
    //   id: 1,
    //   title: "Women in Tech 2024",
    //   description: "Full tuition coverage for female students enrolling in our Web Development bootcamp.",
    //   deadline: "October 15, 2024",
    //   amount: "100% Tuition",
    //   category: "Diversity"
    // } 
    
  ]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Header */}
      <div className="bg-[#1B263B] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="mx-auto text-blue-400 mb-6" size={60} />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Scholarship Opportunities
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            At Sholztech, we believe financial constraints shouldn't stop talent. 
            We regularly partner with organizations to provide funded tech training.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Conditional Rendering Logic */}
        {scholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase">
                  {item.category}
                </div>
                <Award className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-[#1B263B] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{item.description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} /> <span>Deadline: {item.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                    <CheckCircle2 size={16} /> <span>Value: {item.amount}</span>
                  </div>
                </div>

                <button className="w-full bg-[#1B263B] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-700 transition-colors">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE: Shows when the array is empty */
          <div className="max-w-2xl mx-auto text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="text-gray-300" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#1B263B] mb-4">No Active Scholarships</h2>
            <p className="text-gray-600 mb-8 px-6">
              There are currently no open scholarship applications. We refresh our 
              funding programs every cohort. Want to be the first to know?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                <BellRing size={20} /> Notify Me via Email
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                View Regular Courses
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Small Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1B263B] mb-4">How it Works</h3>
          <p className="text-gray-600 italic">
            "Our scholarships are merit-based and require an entrance assessment. 
            Shortlisted candidates are invited for an interview at our Abuja office."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;