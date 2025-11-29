import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <div className="flex items-center gap-3 mb-6">
           <img src="logo_png.png" alt="Logo" className="h-8 w-auto opacity-80" />
           <span className="font-bold text-xl text-white">Sujan Timalsina</span>
        </div>
        
        <div className="flex gap-8 mb-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-[#007fff] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#007fff] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[#007fff] transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-[#007fff] transition-colors">Contact</a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sujan Timalsina. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 text-xs text-gray-700">
           <a href="#" className="hover:text-gray-500">Privacy Policy</a>
           <a href="#" className="hover:text-gray-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;