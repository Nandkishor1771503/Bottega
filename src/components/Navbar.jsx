import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // 👈 for hamburger icons
import logo from "../images/bottega_logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 text-[#d68b0c] shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 w-auto" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 text-xl font-light">
          <li className="cursor-pointer hover:text-white transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-[#7d5a0a] via-[#a87c1f] to-[#92720a] cursor-pointer text-black font-semibold shadow-xl hover:bg-[#b6730a] hover:scale-105 transition-all duration-300">
          <a
            href="https://wa.me/9642028266?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20a%20table%20at%20Bottega%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Table
          </a>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#d68b0c]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col gap-4 text-lg font-light">
          <a
            href="#"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button className="mt-2 px-6 py-3 rounded-full bg-[#d68b0c] text-black font-semibold shadow-lg hover:bg-[#b6730a] transition-all duration-300">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
