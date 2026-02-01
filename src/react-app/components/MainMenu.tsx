import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { videoCategories } from '@/react-app/data/videoCategories';

const MainMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsVideosOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsVideosOpen(false);
      }
    };

    if (isVideosOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVideosOpen]);

  const desktopLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => `block md:inline-block text-gray-700 hover:text-[#FF4757] font-medium transition-colors py-2 md:py-0 px-4 md:px-0 ${isActive ? 'text-[#FF4757]' : ''}`}>Calculator</NavLink>
      <NavLink to="/dictionary" className={({ isActive }) => `block md:inline-block text-gray-700 hover:text-[#FF4757] font-medium transition-colors py-2 md:py-0 px-4 md:px-0 ${isActive ? 'text-[#FF4757]' : ''}`}>Dictionary</NavLink>
      <NavLink to="/guides" className={({ isActive }) => `block md:inline-block text-gray-700 hover:text-[#FF4757] font-medium transition-colors py-2 md:py-0 px-4 md:px-0 ${isActive ? 'text-[#FF4757]' : ''}`}>Guides</NavLink>
      
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsVideosOpen(prev => !prev)} 
          className="text-gray-700 hover:text-[#FF4757] font-medium transition-colors py-2 md:py-0 px-4 md:px-0 flex items-center"
        >
          Videos
          <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isVideosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        
        {isVideosOpen && (
          <div className="absolute z-50 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 w-64 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {videoCategories.map(link => (
              <NavLink
                key={link.id}
                to={`/videos/${link.id}`}
                onClick={closeMenu}
                className={({ isActive }) => `block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-[#FF4757] transition-colors ${isActive ? 'text-[#FF4757] font-bold bg-red-50' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const mobileLinks = (
    <div className="flex flex-col space-y-2 p-2">
      <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `block px-4 py-2 rounded-xl transition-colors ${isActive ? 'bg-red-50 text-[#FF4757] font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Calculator</NavLink>
      <NavLink to="/dictionary" onClick={closeMenu} className={({ isActive }) => `block px-4 py-2 rounded-xl transition-colors ${isActive ? 'bg-red-50 text-[#FF4757] font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Dictionary</NavLink>
      <NavLink to="/guides" onClick={closeMenu} className={({ isActive }) => `block px-4 py-2 rounded-xl transition-colors ${isActive ? 'bg-red-50 text-[#FF4757] font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Guides</NavLink>
      
      <div className="pt-2">
        <button 
          onClick={() => setIsVideosOpen(prev => !prev)} 
          className="w-full flex justify-between items-center px-4 py-2 text-gray-700 font-bold border-t border-gray-100 pt-4"
        >
          <span>Videos</span>
          <svg className={`w-4 h-4 transform transition-transform duration-200 ${isVideosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        
        {isVideosOpen && (
          <div className="mt-1 space-y-1 pl-4">
            {videoCategories.map(link => (
              <NavLink
                key={link.id}
                to={`/videos/${link.id}`}
                onClick={closeMenu}
                className={({ isActive }) => `block px-4 py-2 rounded-lg text-sm transition-colors ${isActive ? 'text-[#FF4757] font-bold' : 'text-gray-600 hover:text-[#FF4757]'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl mb-4 relative z-50">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex justify-between items-center p-3">
        <div className="hidden md:flex items-center space-x-6">
          {desktopLinks}
        </div>
        
        <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-gray-500 font-medium px-2">Menu</span>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 hover:text-[#FF4757] p-2 hover:bg-gray-50 rounded-xl transition-colors"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            {mobileLinks}
        </div>
      )}
    </div>
  );
};

export default MainMenu;
