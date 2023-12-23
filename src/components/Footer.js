import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-4 w-24 h-auto">Yum Eats</h2>
            <p className="text-center md:text-left mb-4">Delivering happiness with every bite.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Menu</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-lg font-semibold mb-4">Contact & Socials</h5>
            <p>123 Yum Eats Street,</p>
            <p>City, Country</p>
            <p>Email: info@yumeats.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p>&copy; 2023 Yum Eats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
