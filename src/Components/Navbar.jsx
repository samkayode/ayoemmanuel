import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = () => {
    setIsMenu(true);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <div>
        <div className="mx-auto flex justify-between items-center w-full px-3 sm:px-8 md:px-12 lg:px-16">
          {/* Logo */}
          <div className="hidden md:block">
            <Link to="/">
              <img
                src="/ayo2.png"
                alt="Ayoemmanuel"
                className="w-30 sm:w-32 md:w-32 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-stone-100">
            <a href="/" className="cursor-pointer hover:text-amber-400 px-6">
              Home
            </a>

            <a
              href="/#About"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              About
            </a>

            <a
              href="/#Services"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              Services
            </a>

            <a
              href="/#Gallery"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              Gallery
            </a>

            <a
              href="/#Contact"
              className="cursor-pointer px-4 hover:text-amber-400"
            >
              Contact
            </a>

            <Link
              to="/support"
              className="cursor-pointer px-4 hover:text-amber-400 transition duration-700"
            >
              Support
            </Link>
          </ul>

          {/* Desktop Booking Button */}
          <a
            href="/#Contact"
            className="font-lg px-6 py-4 text-white hover:underline underline-offset-4 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 text-xl cursor-pointer"
          >
            Book The Date
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            aria-label="Open navigation menu"
            className="text-amber-200 hover:text-amber-400 transition-colors duration-300 flex justify-end cursor-pointer md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenu && (
        <div className="fixed inset-0 z-50 bg-[#151515] items-center md:hidden">
          <div className="flex justify-between items-center px-6 py-4">
            <Link to="/" onClick={closeMenu} className="text-stone-100">
              ayoemmanuel
            </Link>

            <button
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="cursor-pointer text-amber-400 hover:text-amber-300 transition-colors duration-500"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex justify-center py-4 mt-6">
            <ul className="text-stone-100 flex flex-col gap-6 text-xl">
              <a
                href="/"
                onClick={closeMenu}
                className="cursor-pointer hover:text-amber-400 transition duration-700 px-6"
              >
                Home
              </a>

              <a
                href="/#About"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                About
              </a>

              <a
                href="/#Services"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                Services
              </a>

              <a
                href="/#Gallery"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                Gallery
              </a>

              <a
                href="/#Contact"
                onClick={closeMenu}
                className="cursor-pointer px-4 hover:text-amber-400 transition duration-700"
              >
                Contact
              </a>

              <Link
                to="/support"
                onClick={closeMenu}
                className="cursor-pointer px-4 hover:text-amber-400 transition duration-700"
              >
                Support
              </Link>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-center gap-7 mt-16 text-stone-100">
            <a
              href="https://www.facebook.com/share/19oF8sDqmR/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </a>

            <a
              href="https://www.instagram.com/iamayoemmanuel?srtk=MWtiZzAwcXd0OGZobw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://youtube.com/@iamayoemmanuel?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaYoutube size={22} />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-8 flex flex-col gap-4 text-center items-center py-4">
            <a
              href="/#Contact"
              onClick={closeMenu}
              className="rounded-2xl bg-amber-300 px-8 py-3 w-80 hover:bg-amber-400 transition duration-700"
            >
              Book The Date
            </a>

            <a
              href="/#Gallery"
              onClick={closeMenu}
              className="text-stone-100 bg-gray-700 rounded-2xl px-8 py-3 w-80 hover:bg-gray-800 transition duration-700"
            >
              Watch Performance
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
