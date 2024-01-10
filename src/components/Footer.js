import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="dark-bg-footer relative bottom-0 left-0 z-10 w-full bg-gray-950 text-white">
        <div className="glass-effect absolute inset-0 bg-white opacity-10 rounded-md"></div>
        <div className="footer-info p-4 text-center">
          <p>&copy; {currentYear} Swiggy. All rights reserved.</p>
          <p className="mt-2">Generated on {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    );
  };
  

export default Footer;

