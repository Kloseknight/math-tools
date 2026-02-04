import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SiteSearch from './search/SiteSearch';

const MainMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeClassName = "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-md";
  const inactiveClassName = "text-gray-700 hover:bg-gray-200";

  return (
    <nav className="bg-gray-100/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/80 mb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-baseline space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm ${isActive ? activeClassName : inactiveClassName}`}
              >
                Formula Calculator
              </NavLink>
              <NavLink
                to="/dictionary"
                className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm ${isActive ? activeClassName : inactiveClassName}`}
              >
                Dictionary
              </NavLink>
              <NavLink
                to="/videos"
                className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm ${isActive ? activeClassName : inactiveClassName}`}
              >
                Videos
              </NavLink>
              <NavLink
                to="/guides"
                className={({ isActive }) => `px-4 py-2 font-semibold rounded-lg transition-all duration-200 text-sm ${isActive ? activeClassName : inactiveClassName}`}
              >
                Guides
              </NavLink>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-none">
            <SiteSearch />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block py-2 px-3 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Formula Calculator
              </NavLink>
              <NavLink
                to="/dictionary"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block py-2 px-3 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Dictionary
              </NavLink>
              <NavLink
                to="/videos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block py-2 px-3 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Videos
              </NavLink>
              <NavLink
                to="/guides"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block py-2 px-3 rounded-md font-medium ${isActive ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Guides
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainMenu;