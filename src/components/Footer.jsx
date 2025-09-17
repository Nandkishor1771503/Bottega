import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#d68b0c] py-10 px-6 mt-10 sm:px-12 lg:px-24">
   
<section class="w-full max-w-6xl mx-auto px-4 py-12">
 
  <h2 class="text-[#d68b0c] text-2xl sm:text-3xl md:text-4xl font-thin mb-6 text-center">
    Find Us Here
  </h2>


  <div class="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.9864011176529!2d78.412504767386!3d17.412467863548528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cf530c330d%3A0xebcd04e2020103d1!2sBOTTEGA%20Fine%20Food%20Cafe!5e0!3m2!1sen!2sin!4v1758091511735!5m2!1sen!2sin"
      class="w-full h-full border-0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="BOTTEGA Fine Food Cafe Location"
    ></iframe>
  </div>
</section>


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
          <a href="#menu" className="hover:text-white transition-colors">
            Menu
          </a>
          <a href="#reviews" className="hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base">Follow us:</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bottegacafe/"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
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
