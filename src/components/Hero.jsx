import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SocialIcons from './SocialIcons';
import PlayButton from './PlayButton';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-primary-700 flex items-center p-12 relative"
      >
        <div className="max-w-xl text-white">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 mb-4"
          >
            HELLO
          </motion.h2>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-7xl font-bold mb-6 leading-tight"
          >
            I'm Angela
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-8"
          >
            A Freelance UI/UX Designer
            <br />
            From Los Angeles.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button variant="outline">HIRE ME</Button>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-12"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen bg-gray-100"
      >
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" 
            alt="Angela" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <PlayButton onClick={() => setIsVideoModalOpen(true)} />
            </motion.div>
            <p className="max-w-md text-center text-sm mt-12 text-gray-800 bg-white/80 p-6 rounded-lg">
              I work to create innovative solutions that inspire, and foster memorable relationships between brands and their clients. With a focus on branding and UI / Web, I strive to create usable and polished products through passionate and deliberate design.
            </p>
            <Button variant="dark" className="mt-8">
              VIEW RESUME
            </Button>
          </div>
        </div>
      </motion.div>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;