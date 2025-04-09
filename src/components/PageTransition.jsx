import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};

const contactInfo = {
  location: "San Francisco, CA",
  email: "hello@example.com",
  phone: "+1 (555) 123-4567"
};

const skills = [
  "UI Design",
  "UX Design",
  "Prototyping",
  "User Research",
  "Figma",
  "React",
  "TypeScript",
  "Motion Design"
];

const experience = [
  {
    title: "Senior Product Designer",
    company: "Company Name",
    period: "2020 - Present",
  },
  {
    title: "UI/UX Designer",
    company: "Previous Company",
    period: "2018 - 2020",
  }
];

const PageTransition = ({ section }) => {
  const layersRef = useRef(null);
  const contentRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { opacity: 0 });
    
    const init = async () => {
      const layers = [...layersRef.current.querySelectorAll('.layers__item')];
      
      gsap.set(layers, {
        opacity: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      });
      
      await preloadImages('.layers__item-img');

      const allItems = layers;
      const lastItem = layers[layers.length - 1];
      const allInnerItems = layers.map(item => item.querySelector('.layers__item-img'));

      gsap.to(layers, {
        opacity: 1,
        duration: 0.1,
        stagger: 0
      });

      tlRef.current = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: 'power2.inOut',
        },
        onComplete: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      })
      .fromTo(allItems, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
      }, {
        stagger: {
          each: 0.1,
          onComplete: function() {
            const targetElement = this.targets()[0];
            const index = layers.indexOf(targetElement);
            if (index) {
              gsap.set(layers[index-1], {opacity: 0});
            }
          },
        },
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }, 0)
      .fromTo(allInnerItems, {
        scale: 1.2,
        filter: 'brightness(50%)'
      }, {
        scale: 1,
        filter: 'brightness(100%)',
        stagger: 0.1,
      }, 0);

      gsap.set(lastItem, {
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      });
    };

    init();

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [section]);

  const renderContent = () => {
    if (section === 'contact') {
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
    }

    if (section === 'about') {
      return (
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8">
            <h1 className="text-[#fde3a7] text-8xl font-bold mb-16">About Me</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <p className="text-[#fde3a7] text-xl leading-relaxed mb-12">
                  A passionate digital product designer focused on creating intuitive and impactful user experiences. 
                  With expertise in UI/UX design, interaction design, and front-end development.
                </p>

                <div className="mb-16">
                  <h2 className="text-[#fde3a7] text-3xl font-bold mb-8">Experience</h2>
                  <div className="space-y-8">
                    {experience.map((job, index) => (
                      <div key={index} className="border-l-2 border-[#fde3a7]/20 pl-6">
                        <h3 className="text-[#fde3a7] text-xl font-medium">{job.title}</h3>
                        <p className="text-[#fde3a7]/60">{job.company} • {job.period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-[#fde3a7] text-3xl font-bold mb-8">Connect</h2>
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

              <div>
                <h2 className="text-[#fde3a7] text-3xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-[#fde3a7]/5 rounded-lg px-6 py-4 text-[#fde3a7] text-lg hover:bg-[#fde3a7]/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <p className="text-[#fde3a7]/80 text-lg italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="content">
      <div className="layers" ref={layersRef}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="layers__item">
            <div className="layers__item-img" style={{backgroundImage: `url(/images/${num}.jpg)`}}></div>
          </div>
        ))}
      </div>
      <div 
        className="content__inner" 
        ref={contentRef}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          width: '100%'
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default PageTransition;