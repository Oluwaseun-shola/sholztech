import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  TrendingUp,
  BarChart3,
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const OurCourses = () => {
  const courses = [
    {
      title: "Basic ICT & Office Productivity",
      description:
        "Master essential computer skills, Microsoft Office Suite, and internet fundamentals for the modern workplace.",
      icon: <Monitor size={32} />,
      path: "/courses/basic-ict",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn SEO, SEM, Content Marketing, and Social Media strategies to grow brands and drive online traffic.",
      icon: <TrendingUp size={32} />,
      path: "/courses/digital-marketing",
    },
    {
      title: "Data Analysis",
      description:
        "Turn data into insights using Excel, Power BI, SQL, and Python for informed business decision-making.",
      icon: <BarChart3 size={32} />,
      path: "/courses/data-analysis",
    },
    {
      title: "Web Development",
      description:
        "Build responsive websites and web apps using HTML, CSS, JavaScript, and modern frameworks like React.",
      icon: <Code2 size={32} />,
      path: "/courses/web-development",
    },
    {
      title: "Graphic Design",
      description:
        "Master visual communication using Adobe Photoshop, Illustrator, and Canva to create stunning brand assets.",
      icon: <Palette size={32} />,
      path: "/courses/graphics-design",
    },
    {
      title: "App Development",
      description:
        "Create high-performance mobile applications for Android and iOS using Flutter or React Native.",
      icon: <Smartphone size={32} />,
      path: "/courses/app-development",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Learn the basics of cybersecurity, including threat detection, risk management, and best practices to protect digital assets.",
      icon: <ShieldCheck size={32} />,
      path: "/courses/cybersecurity-fundamentals",
    },
    {
      title: "Google Productivity Suite",
      description:
        "Master Google Docs, Sheets, Slides, and Drive to enhance your productivity and collaboration skills.",
      icon: <Monitor size={32} />,
      path: "/courses/google-productivity-suite",
    },
    {
        title: "Advanced Excel & Data Visualization",
        description:
          "Unlock the power of Excel and Power BI to analyze and visualize complex datasets for informed decision-making.",
        icon: <BarChart3 size={32} />,
        path: "/courses/advanced-excel",
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#778DA9] font-bold text-sm uppercase tracking-widest mb-2">
              Explore Our Programs
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B263B]">
              Professional Courses to Kickstart Your Tech Career
            </h1>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center text-[#778DA9] font-bold hover:text-[#4b596a] transition-colors"
          >
            View All Courses <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-[#778DA9] group-hover:text-white transition-colors duration-300">
                {course.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-6 line-clamp-3">
                {course.description}
              </p>

              <Link
                to={course.path}
                className="inline-flex items-center text-sm font-bold text-blue-900 group-hover:text-[#3d4856] transition-colors"
              >
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
