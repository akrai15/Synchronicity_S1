import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Game Title */}
        <span className="text-white text-lg font-bold">Your Game</span>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-4">
        <Link to='/'>
    <a>Home</a>
  </Link>
  <Link to='/about'>
    <a>About</a>
  </Link>
  <Link to='/future'>
    <a>Future Goals</a>
  </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl text-gray-600" />
            ) : (
              <FaBars className="text-3xl text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gray-800 p-4">
  <Link to='/'>
    <a>Home</a>
  </Link>
  <Link to='/about'>
    <a>About</a>
  </Link>
  <Link to='/future'>
    <a>Future Goals</a>
  </Link>
</div>

        )}
      </div>
    </nav>
  );
};

export default Navbar;

