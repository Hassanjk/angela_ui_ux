import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with seamless user experience",
      image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80",
      category: "Web Design"
    },
    {
      title: "Mobile Banking App",
      description: "Innovative banking solution for the digital age",
      image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80",
      category: "Mobile App"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive analytics and management platform",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
      category: "Dashboard"
    },
    {
      title: "Fitness Tracking Platform",
      description: "Health and wellness monitoring system",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
      category: "Web App"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-[#fde3a7] text-8xl font-bold mb-16">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#fde3a7]/80 text-sm tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-[#fde3a7] text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#fde3a7]/90">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;