import React from 'react';
import { FaInstagram, FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaBehance, url: '#', label: 'Behance' },
    { icon: FaDribbble, url: '#', label: 'Dribbble' },
    { icon: FaTwitter, url: '#', label: 'Twitter' }
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          className="text-white/80 hover:text-white transition-colors duration-300"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;