import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" relative backdrop-blur-md bg-[#bafac129] text-gray-800 px-6 py-10 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">FarmNest<span className="text-black">.</span></h2>
          <p className="text-sm">Your trusted partner for fresh and organic farm produce, delivered with care.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-amber-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/farms" className="hover:underline">Farms</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-amber-800 mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Dairy Products</a></li>
            <li><a href="#" className="hover:underline">Vegetables</a></li>
            <li><a href="#" className="hover:underline">Fruits</a></li>
            <li><a href="#" className="hover:underline">Grains & Pulses</a></li>
            <li><a href="#" className="hover:underline">Organic Spices</a></li>
          </ul>
        </div>

        {/* FAQs and Socials */}
        <div>
          
          <div className="flex space-x-4 ">
            <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors text-xl"><FaFacebookF /></a>
            <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors text-xl"><FaTwitter /></a>
            <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors text-xl"><FaInstagram /></a>
            <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-200 mt-10 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} FarmNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
