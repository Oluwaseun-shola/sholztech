import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import logo from "../assets/sholztech Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Training Courses", path: "/#courses" },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "Our Mission", path: "/about" },
        { name: "Our Team", path: "/about" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-sm font-sans">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:flex justify-end items-center px-8 py-2 ">
        <div className="flex items-center space-x-6 text-[#415A77] hover:text-red-600 transition-colors duration-200 cursor-pointer font-bold text-md tracking-wider">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>09076129399</span>
          </div>
          <span className="text-gray-300">|</span>
          <span>09042368704</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <a href="/">
              <img
                className="h-30 w-auto"
                src={logo}
                alt="Sholztech IT Solutions Logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center px-3 py-2 text-[18px]  font-bold text-[#08294f] transition-colors duration-200">
                    {link.name}
                    <ChevronDown size={20} className="ml-1" />
                  </button>
                ) : (link.name === "About Us" ? (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-[18px] text-red-600 font-bold transition-all duration-200`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.path}
                    className={`px-4 py-2 text-[18px] text-[#08294f] font-bold transition-all duration-200`}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-bold text-blue-900"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transform transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-6 bg-gray-50 py-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.path}
                            className="block py-2 text-sm text-gray-600 hover:text-red-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.path}
                    className={`block px-3 py-3 text-base font-bold ${
                      link.highlight ? "text-red-600" : "text-blue-900"
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
