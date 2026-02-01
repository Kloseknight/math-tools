import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">CSEC Math Mastery</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/dictionary" className="text-gray-300 hover:text-white">Dictionary</Link>
          <Link to="/guides" className="text-gray-300 hover:text-white">Guides</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
