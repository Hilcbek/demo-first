import React from 'react';
import { FaArrowRight, FaClock, FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
const Header = () => {
  return (
    <div className="w-full bg-headerPrimary sm:after:flex after:hidden relative after:absolute after:right-[190px] after:transform after:rotate-[20deg] after:top-0 after:content-[''] after:w-[2px] after:h-full after:bg-white text-white text-sm">
      <div className="px-6 sm:flex-row flex-col flex items-center py-2 justify-between w-full">
        <div className="flex group cursor-pointer sm:text-left text-center items-center justify-start gap-2">
          <h1>Are you ready to grow up your business? Contact Us</h1>
          <FaArrowRight className="group-hover:translate-x-1 transition duration-150 ease-linear cursor-pointer" />
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-start gap-6">
          <div className="flex items-center justify-start gap-2">
            <FaClock />
            <h1>Working 8:00am - 5:00pm</h1>
          </div>
          <div className="flex items-center justify-start gap-3">
            <h1>Visit Us:</h1>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
