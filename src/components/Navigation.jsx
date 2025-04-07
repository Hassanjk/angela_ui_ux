import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1
      }
    }
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <nav className="fixed right-0 top-0 h-screen flex items-center z-50">
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 h-full w-20 flex items-center"
      >
        <motion.ul 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {navItems.map(({ id, label }) => (
            <motion.li
              key={id}
              variants={item}
              className="relative py-6"
            >
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="flex flex-col items-center text-white hover:text-primary-200 transition-colors duration-300 text-xs tracking-wider cursor-pointer"
              >
                <span className="writing-mode-vertical transform rotate-180">{label}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;