import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    mode: "In-Person",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullname: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      training: formData.mode,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICEIDII, // replace
        import.meta.env.VITE_TEMPLATEIDII, // replace
        templateParams,
        import.meta.env.VITE_PublicKey // replace
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "Application submitted successfully! Our team will contact you shortly."
          );

          // reset form
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            course: "",
            mode: "In-Person",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const openWhatsApp = () => {
    const phoneNumber = "2349076129399"; // Sholztech's WhatsApp number
    const text = encodeURIComponent(
      `Hi Sholztech, I'm interested in registering for the ${
        formData.course || "tech"
      } course. Can I get more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Join the Next Cohort
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Take the first step toward your new career. Fill the form below or
            reach out via our direct channels.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Contact & Visit Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Visit Our Office
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-red-100 p-3 rounded-xl text-red-600 h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Head Office</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Shop B, Along Deeper Life Church Saburi 1, Dei Dei, Abuja
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-900 h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Training Hours</p>
                    <p className="text-gray-600 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 text-sm">
                      Sat: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Embed Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-inner bg-gray-200 h-64">
                <iframe
                  title="Sholztech Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.386152316348!2d7.27427340962882!3d9.119550190907669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd98122756f8b%3A0xb53dfe00a849de9b!2sSholz%20Technologies!5e0!3m2!1sen!2sng!4v1776091564877!5m2!1sen!2sng"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <button
              onClick={openWhatsApp}
              className="w-full group bg-[#25D366] p-6 rounded-3xl flex items-center justify-between text-white hover:bg-[#20ba5a] transition-all"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={32} />
                <div className="text-left">
                  <p className="font-bold">Chat with an Advisor</p>
                  <p className="text-sm opacity-90">
                    Instant response via WhatsApp
                  </p>
                </div>
              </div>
              <CheckCircle2
                size={24}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>

          {/* Right Column: Enrollment Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-50">
              <h2 className="text-3xl font-black text-blue-900 mb-8">
                Enrollment Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <User size={16} className="text-red-600" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      value={formData.fullName}
                      placeholder="e.g. Oluwaseun Ogunbowale"
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Mail size={16} className="text-red-600" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Phone size={16} className="text-red-600" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      placeholder="0808 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <BookOpen size={16} className="text-red-600" /> Select
                      Course
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      value={formData.course}
                    >
                      <option value="">Choose a program...</option>
                      <option value="Web Development">
                        Full-Stack Web Development
                      </option>
                      <option value="Data Analysis">
                        Data Analysis & Visualization
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Graphics Design">
                        UI/UX & Graphics Design
                      </option>
                      <option value="Basic ICT">Basic ICT</option>
                    </select>
                  </div>
                </div>

                {/* Training Mode */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700">
                    Preferred Training Mode
                  </label>
                  <div className="flex gap-4">
                    {["In-Person", "Online", "Weekend"].map((mode) => (
                      <label
                        key={mode}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={mode}
                          checked={formData.mode === mode}
                          onChange={(e) =>
                            setFormData({ ...formData, mode: e.target.value })
                          }
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        />
                        <span className="text-sm text-gray-600">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-200"
                >
                  <Send size={20} />
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
