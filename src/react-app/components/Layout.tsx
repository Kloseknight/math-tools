import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {children}
        </div>
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <Link to="/about" className="text-gray-600 hover:text-gray-900 mx-2">About</Link>
          <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 mx-2">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default Layout;