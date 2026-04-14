import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/sholztech Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "Web Development", path: "/courses/web-development" },
      { name: "Data Analysis", path: "/courses/data-analysis" },
      { name: "Digital Marketing", path: "/courses/digital-marketing" },
      { name: "Graphic Design", path: "/courses/graphics-design" },
      { name: "App Development", path: "/courses/app-development" },
    ],
    company: [
      { name: "About Us", path: "/about" },

      { name: "Tech Scholarship", path: "/scholarship" },
      {name: "Enroll Now", path: "/register"},
    ],
  };

  return (
    <footer className="bg-[#415A77] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="Bizmarrow Logo"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-blue-100 text-sm leading-relaxed">
                Sholz Technologies is a leading IT training company dedicated to empowering individuals with the skills and knowledge needed to thrive in the digital age. With a focus on practical, hands-on learning, we offer a wide range of courses in web development, data analysis, digital marketing, and more. Our mission is to bridge the gap between education and industry, providing our students with the tools they need to succeed in today's competitive job market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6  inline-block">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-[#778DA9] transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-lg font-bold mb-6 inline-block">
              Top Courses
            </h3>
            <ul className="space-y-4">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-[#778DA9] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6  inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <MapPin size={20} className="text-[#F8F9FA] shrink-0" />
                <span>
                  Shop B, Along Deeper Life Church Saburi 1, Dei Dei, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Phone size={18} className="text-[#F8F9FA]" />
                <span>09076129399, 09042368704</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Mail size={18} className="text-[#F8F9FA]" />
                <span>info@sholztech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>© {currentYear} Sholz Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
