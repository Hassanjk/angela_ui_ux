import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
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
};

export default About;