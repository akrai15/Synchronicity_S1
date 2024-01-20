import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import imgo from '../assets/img1.jpg';
import imgt from '../assets/img2.jpg';

const About = () => {
  return (
    <div>
    <Navbar />  
    <div className='bg-blue-500 w-[100%] min-h-screen mb-10 overflow-hidden'>

      {/* Section 1: Introduction */}
      <div className='flex flex-row justify-center items-center  mb-10 font-bold text-[60px]'>
        About Sense Hacker
      </div>

      {/* Section 2: Project Story */}
      <div className='overflow-y-auto'>

        <div className='flex flex-row justify-between mb-10'>

          {/* Image */}
          <div>
            <img
              src={imgo}
              height="450px"
              width="450px"
              className='translate-x-12'
              alt="Project Image"
            />
          </div>

          {/* Text */}
          <div className='text-white font-medium text-[20px] -translate-x-16 pt-10'>
            The story of the project is fascinating. An anonymous hacker is targeting you 😱. Face his attacks with three options. Choose the correct one to make the hacker lose points 🙌, or become a victim otherwise.
          </div>
        </div>

        {/* Section 3: Project Functionality */}
        <div className='flex flex-row justify-between mb-10 pb-20'>

          {/* Text */}
          <div className='flex flex-col'>
            <div className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-[50px] font-semibold text-transparent mb-10'>
              What it does
            </div>
            <div className='text-white font-medium text-[20px] translate-x-8 -translate-y-10'>
              Our game simulates various ways a hacker can attempt to steal your data or hack your computer. Interact with the platform to learn techniques for staying safe. Hacker attacks are simulated through cards, and for each hacker card, the user receives three option cards. By choosing cards, users can learn good practices and measures for different situations.
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={imgt}
              height="450px"
              width="450px"
              className='-translate-x-12'
              alt="Project Image"
            />
          </div>
        </div>
      </div>

      {/* Footer with scrollable style */}
      <Footer className='overflow-y-auto' />

    </div>
    </div>
  );
};

export default About;
