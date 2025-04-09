import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    location: "San Francisco, CA",
    email: "hello@example.com",
    phone: "+1 (555) 123-4567"
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8">
        <h1 className="text-[#fde3a7] text-8xl font-bold mb-16">Let's Connect</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-[#fde3a7]/20 py-4 text-[#fde3a7] text-xl placeholder-[#fde3a7]/40 focus:outline-none focus:border-[#fde3a7]"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b-2 border-[#fde3a7]/20 py-4 text-[#fde3a7] text-xl placeholder-[#fde3a7]/40 focus:outline-none focus:border-[#fde3a7]"
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-[#fde3a7]/20 py-4 text-[#fde3a7] text-xl placeholder-[#fde3a7]/40 focus:outline-none focus:border-[#fde3a7] resize-none"
                />
              </div>
            </div>

            <button className="group relative overflow-hidden px-8 py-4 bg-[#1a1a1a] rounded-full">
              <span className="relative z-10 flex items-center text-[#fde3a7] text-lg font-medium">
                Send Message
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#fde3a7] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>

          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#fde3a7] text-2xl" />
                <div>
                  <h3 className="text-[#fde3a7] text-xl font-medium">Location</h3>
                  <p className="text-[#fde3a7]/60 text-lg">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#fde3a7] text-2xl" />
                <div>
                  <h3 className="text-[#fde3a7] text-xl font-medium">Email</h3>
                  <p className="text-[#fde3a7]/60 text-lg">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-[#fde3a7] text-2xl" />
                <div>
                  <h3 className="text-[#fde3a7] text-xl font-medium">Phone</h3>
                  <p className="text-[#fde3a7]/60 text-lg">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#fde3a7] text-2xl font-medium mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-[#fde3a7] hover:text-[#fde3a7]/80 transition-colors">
                  <FaGithub size={28} />
                </a>
                <a href="#" className="text-[#fde3a7] hover:text-[#fde3a7]/80 transition-colors">
                  <FaLinkedin size={28} />
                </a>
                <a href="#" className="text-[#fde3a7] hover:text-[#fde3a7]/80 transition-colors">
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;