import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full bg-black text-center ">
      <div className="  ">
        <h2 className="text-stone-100 text-xl md:text-2xl">
          Every Moment Deserves a Beautiful Soundtrack
        </h2>
        <p className="text-stone-400  mt-2">
          Thank you for being part of the experience. Until music brings us
          together again.
        </p>
        <hr className="border-0 h-px w-4/5 bg-amber-200 mx-auto mt-2"></hr>
        <div className="flex justify-center overflow-hidden py-4 mt-2">
          <ul className="text-stone-100  flex flex-col  md:flex-row text-sm">
            <a
              href="#Header"
              className="cursor-pointer  hover:text-amber-400 transition duration-700 px-3"
            >
              Home
            </a>
            <a
              href="#About"
              className="cursor-pointer px-3 hover:text-amber-400 transition duration-700"
            >
              About
            </a>

            <a
              href="#Services"
              className="cursor-pointer px-3 hover:text-amber-400 transition duration-700"
            >
              Services
            </a>

            <a
              href="#Gallery"
              className="cursor-pointer px-3 hover:text-amber-400 transition duration-700"
            >
              Gallery
            </a>
            <a
              href="#Contact"
              className="cursor-pointer px-3 hover:text-amber-400 transition duration-700"
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
        </div>
        <hr className="border-0 h-px w-4/5 bg-amber-200 mx-auto mt-2"></hr>
        <div className="text-white flex mt-2  py-4  md:justify-center  gap-5  px-6">
          <p>AY0EMMANUEL</p>
          <h3>
            &copy; {new Date().getFullYear()} ayoemmanuel. All rights reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
