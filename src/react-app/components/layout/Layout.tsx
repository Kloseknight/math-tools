import React from 'react';
import Header from './Header';
import MainMenu from '../MainMenu';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <Header />
      <MainMenu />
      <main className="container mx-auto px-4 pb-8 max-w-4xl">
        {children}
      </main>
      <div className="container mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
