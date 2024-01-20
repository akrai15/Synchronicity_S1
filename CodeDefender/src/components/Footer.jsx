import React from 'react';
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#001f3f] text-white absolute bottom-0 w-full flex flex-row justify-between items-center p-4">
      
      <div className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] 
        bg-clip-text text-4xl font-medium flex items-center text-transparent' >
        Contact Us
      </div>
      
      <div className='flex flex-row gap-x-5 items-center text-[24px]'>
        <div className='hover:text-red-600'>
          <FaPinterest />
        </div>

        <div className='hover:text-blue-600'>
          <FaTwitter />
        </div>

        <div className='hover:text-[#f2a60c]'>
          <BiLogoGmail />
        </div>

        <div className='hover:text-blue-500'>
          <FaFacebook />
        </div>
      </div>

      <div className="text-[#555]">
        <p>2024 Sense Hacker. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
