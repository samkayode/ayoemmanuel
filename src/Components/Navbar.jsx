import { useState, useEffect } from "react";
import React from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const openMenu = () => {
    setisMenu(true);
  };
  const closeMenu = () => {
    setisMenu(false);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full ">
      <div>
        {/*
        <div className="container mx-auto flex justify-between px-6 py-4 md:px-25 w-full bg-transparent items-center text-center">
        */}
        <div className="mx-auto flex justify-between items-center  w-full  px-5 py-4 sm:px-8 md:px-12 lg:px-16">
          <div>
            <img
              src="/ayo2.png"
              alt="Ayoemmanuel"
              className="w-30 sm:w-32 md:w-32 h-auto"
            />
          </div>
          <ul className="hidden md:flex text-stone-100 ">
            <a
              href="#Header"
              className="cursor-pointer  hover:text-amber-400 px-6"
            >
              Home
            </a>
            <a
              href="#About"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              About
            </a>
            <a
              href="#Services"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              Services
            </a>
            <a
              href="#Gallery"
              className="cursor-pointer px-6 hover:text-amber-400"
            >
              Gallery
            </a>
            <a
              href="#Contact"
              className="cursor-pointer px-4 hover:text-amber-400"
            >
              Contact
            </a>
          </ul>
          <a
            href="#Contact"
            className="rounded-md  font-lg px-6 py-4 text-stone-950 bg-amber-400 hover:bg-amber-300 hover:-translate-y-1 transition-all duration-300 text-sm cursor-pointer"
          >
            Book The Date
          </a>

          <button
            onClick={openMenu}
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300 flex justify-end cursor-pointer md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {/*Mobile section*/}
      {isMenu && (
        <div className="fixed inset-0 z-50 bg-[#151515] items-center md:hidden">
          <div className="flex justify-between items-center px-6 py-4">
            <p className="text-stone-100">ayoemmanuel</p>
            <div
              onClick={closeMenu}
              className="cursor-pointer md:hidden flex justify-end top-0 left-0 right-0 text-amber-400 hover:text-amber-300 transition-colors duration-500"
            >
              <X size={24} />
            </div>
          </div>
          <div className="flex justify-center py-4 mt-6">
            <ul className="text-stone-100 flex flex-col  gap-6 text-xl">
              <a
                href="#Header"
                onClick={closeMenu}
                className="cursor-pointer  hover:text-amber-400 transition duration-700 px-6"
              >
                Home
              </a>
              <a
                href="#About"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                About
              </a>
              <a
                href="#Services"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                Services
              </a>
              <a
                href="#Gallery"
                onClick={closeMenu}
                className="cursor-pointer px-6 hover:text-amber-400 transition duration-700"
              >
                Gallery
              </a>
              <a
                href="#Contact"
                onClick={closeMenu}
                className="cursor-pointer px-4 hover:text-amber-400 transition duration-700"
              >
                Contact
              </a>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-7 mt-16 text-stone-100">
            <a
              href="https://www.facebook.com/share/19oF8sDqmR/?mibextid=wwXIfr"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </a>

            <a
              href="https://www.instagram.com/iamayoemmanuel?srtk=MWtiZzAwcXd0OGZobw%3D%3D&utm_source=qr"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://youtube.com/@iamayoemmanuel?feature=shared"
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaYoutube size={22} />
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-center items-center py-4">
            <a
              href="Contact"
              className="rounded-2xl bg-amber-300 px-8 py-3 w-80 hover:bg-amber-400 transition duration-700 "
            >
              Book The Date
            </a>
            <a
              href=""
              className="text-stone-100 bg-gray-700 rounded-2xl px-8 py-3 w-80 hover:bg-gray-800 transition duration-700"
            >
              Watch Perfomance
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
