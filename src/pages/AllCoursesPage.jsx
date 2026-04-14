import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  TrendingUp,
  BarChart3,
  Code2,
  Palette,
  Smartphone,
  Database,
  ShieldCheck,
  ChevronRight,
  Clock,
  Users,
} from "lucide-react";

const AllCoursesPage = () => {
  const allCourses = [
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      category: "Development",
      description:
        "Master the MERN stack (MongoDB, Express, React, Node.js) and build production-grade web applications.",
      icon: <Code2 size={24} />,
      duration: "6 Months",
      level: "Beginner to Pro",
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      category: "Data Science",
      description:
        "Learn to analyze complex datasets using Microsoft Excel, Power BI, SQL, and Python for business insights.",
      icon: <BarChart3 size={24} />,
      duration: "4 Months",
      level: "Intermediate",
    },
    {
      id: "digital-marketing",
      title: "Advanced Digital Marketing",
      category: "Marketing",
      description:
        "Comprehensive training in SEO, social media management, and paid advertising strategies.",
      icon: <TrendingUp size={24} />,
      duration: "3 Months",
      level: "Beginner",
    },
    {
      id: "graphics-design",
      title: "UI/UX & Graphics Design",
      category: "Design",
      description:
        "Master visual communication and user experience design using Adobe Creative Suite and Figma.",
      icon: <Palette size={24} />,
      duration: "3 Months",
      level: "Beginner",
    },
    {
      id: "app-development",
      title: "Mobile App Development",
      category: "Development",
      description:
        "Build cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      icon: <Smartphone size={24} />,
      duration: "5 Months",
      level: "Intermediate",
    },
    {
      id: "basic-ict",
      title: "Basic ICT & Office Productivity",
      category: "Foundation",
      description:
        "Master Microsoft Office tools and essential computer operations for the modern workspace.",
      icon: <Monitor size={24} />,
      duration: "2 Months",
      level: "Beginner",
    },
    {
      id: "cyber-security",
      title: "Cyber Security Fundamentals",
      category: "Security",
      description:
        "Protect systems and networks from digital attacks while learning ethical hacking basics.",
      icon: <ShieldCheck size={24} />,
      duration: "4 Months",
      level: "Intermediate",
    },
    {
      id: "database-management",
      title: "Database Management (SQL)",
      category: "Data Science",
      description:
        "Learn to design, implement, and manage robust database systems using SQL and NoSQL.",
      icon: <Database size={24} />,
      duration: "3 Months",
      level: "Beginner",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Explore All Courses
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Choose from our wide range of industry-standard tech programs
            designed to take you from beginner to professional.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter/Stats Summary (Optional) */}
        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
          <h2 className="text-2xl font-bold text-blue-900">
            Available Programs{" "}
            <span className="text-red-600">({allCourses.length})</span>
          </h2>

        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Top Branding */}
              <div className="h-2 bg-[#415A77]"></div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 text-blue-900 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-blue-900 mb-3 group-hover:text-red-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {course.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-4 py-4 border-t border-gray-50 mb-4 text-xs font-bold text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-red-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} className="text-red-600" />
                    {course.level}
                  </div>
                </div>

                <div className="flex items-center text-sm font-black text-blue-900">
                  View Course Syllabus
                  <ChevronRight
                    size={18}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
