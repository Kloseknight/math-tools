import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-4 mb-8 text-gray-500 text-sm">
      <Link to="/" className="text-gray-600 hover:text-gray-900 mx-2">Calculator</Link>
      <Link to="/about" className="text-gray-600 hover:text-gray-900 mx-2">About</Link>
      <Link to="/feedback" className="text-gray-600 hover:text-gray-900 mx-2">Feedback</Link>
      <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 mx-2">Privacy Policy</Link>
      <a href="https://physicsican.blogspot.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 mx-2">Physics I Can Blog</a>
      <a href="http://www.youtube.com/@lwallace758" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 mx-2">Youtube</a>
    </footer>
  );
};

export default Footer;