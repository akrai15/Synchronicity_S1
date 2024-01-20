
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg5 from '../assets/bg5.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
const images = [bg1, bg2, bg5];
const slideInterval = 1000; // Change slide every 3 seconds

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className='relative'>
      <Navbar/>
      <div
        className="full-screen-container"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center text-dark full-screen-content">
          <h2 className="text-4xl font-bold mb-4">Welcome to Hacker's World</h2>
          <Link to="/game">
            <button className="sexy-button">Play Now</button>
          </Link>
        </div>
      </div>
      <Footer />
      </div>
      
    
  );
}

export default Home;










