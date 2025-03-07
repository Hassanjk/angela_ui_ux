import React from 'react';
import { FaPlay } from 'react-icons/fa';

const PlayButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Play Showreel"
    >
      <FaPlay className="text-primary-700 ml-1 w-4 h-4" />
    </button>
  );
};

export default PlayButton;