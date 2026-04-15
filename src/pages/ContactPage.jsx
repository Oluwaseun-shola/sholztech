import React, { useState, useRef } from "react"; // Added useRef
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS

const ContactPage = () => {
  const form = useRef(); // 2. Create a reference to the form
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Data Analytics", // Defaulted to first option
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 3. Send the email
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY'
    emailjs
      .sendForm(
        "service_zzoc3y4",
        "template_jcigtih",
        form.current,
        "8uA8gcCq_8V3Q3wUN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our curriculum? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info (Keeping your existing UI) */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Our Location
                </h3>
                <p className="text-slate-600 mt-1">
                  Dei-Dei Abuja FCT, Nigeria
                </p>
              </div>
            </div>
            {/* ... other cards ... */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100">
            {/* 4. Add the ref and name attributes to inputs */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name" // Crucial: must match EmailJS template {{name}}
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John Doe"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email" // Crucial: must match EmailJS template {{email}}
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject" // Match {{subject}}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option>Data Analytics</option>
                  <option>Web Development</option>
                  <option>Cyber Security Fundamentals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message" // Match {{message}}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  placeholder="How can we help you?"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting
                    ? "bg-slate-500"
                    : "bg-slate-900 hover:bg-slate-800"
                } text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
