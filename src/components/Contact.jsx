import React, { useState, useRef } from 'react'; // Added useRef
import { Send, MessageCircle, Mail, MapPin, PhoneCall } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const form = useRef(); // Reference for the form
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS logic using Vite environment variables
    emailjs.sendForm(
      import.meta.env.VITE_SERVICEID, 
      import.meta.env.VITE_TEMPLATEID, 
      form.current, 
      import.meta.env.VITE_PUBLICKEY
    )
      .then((result) => {
          console.log("Email Sent:", result.text);
          alert("Thank you! Your message has been sent.");
          setIsSubmitting(false);
          e.target.reset(); // Clears the form fields
      }, (error) => {
          console.log("Email Error:", error.text);
          alert("Oops! Something went wrong. Please try again.");
          setIsSubmitting(false);
      });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+2349076129399";
    const message = encodeURIComponent("Hello Sholztech, I would like to inquire about your courses.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar (Unchanged) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-[#778DA9] font-bold text-sm uppercase tracking-widest mb-2">Get In Touch</h2>
              <h1 className="text-3xl font-extrabold text-[#1B263B] mb-4">Let's Start Your Journey to Tech Mastery</h1>
              <p className="text-gray-600">Have questions about our training programs? Reach out to us today.</p>
            </div>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white rounded-lg shadow-sm text-[#778DA9]"><MapPin size={24} /></div>
                 <div><h4 className="font-bold text-blue-900">Our Location</h4><p className="text-sm text-gray-600">Dei-Dei, Abuja, Nigeria</p></div>
               </div>
               {/* ... other info cards ... */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              {/* Added 'ref' and 'name' attributes to inputs */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-blue-900">Full Name</label>
                    <input 
                      name="name" // Matches {{name}} in EmailJS template
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#778DA9] outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-blue-900">Email Address</label>
                    <input 
                      name="email" // Matches {{email}} in EmailJS template
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#778DA9] outline-none"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Subject</label>
                  <input 
                    name="subject" // Matches {{subject}} in EmailJS template
                    type="text" 
                    required
                    placeholder="Inquiry about Web Development Course"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#778DA9] outline-none"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Message</label>
                  <textarea 
                    name="message" // Matches {{message}} in EmailJS template
                    rows="4" 
                    required
                    placeholder="Tell us more about your career goals..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#778DA9] outline-none resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300`}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* WhatsApp UI stays the same */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-white px-4 text-gray-500 font-medium">Or Reach Us Instantly</span>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg"
              >
                <MessageCircle size={24} />
                Chat with us on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;