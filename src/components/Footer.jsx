import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#d68b0c] py-10 px-6 mt-44 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">Bottega Cafe</h2>
          <p className="text-sm sm:text-base">
            Bringing you the finest coffee experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base">Follow us:</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-[#d68b0c]/40 pt-4 text-sm sm:text-base text-center">
        © 2025 Bottega Cafe. All rights reserved.
      </div>
    </footer>
  );
}
