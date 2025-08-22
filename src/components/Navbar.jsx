import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:underline  text-2xl ${
      isActive ? "text-purple-600 font-bold" : "text-white"
    }`;

  return (
    <nav className="bg-primary text-white px-6 py-4 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="DEE PLUS Logo"
            className="h-20 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/therapy" className={linkClasses}>Therapy</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>About Us</NavLink></li>
          <li><NavLink to="/meditation" className={linkClasses}>Meditation</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact Us</NavLink></li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <HiOutlineSearch className="cursor-pointer hover:scale-110 transition-transform" />
          <HiOutlineUser className="cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center text-xl font-medium">
          <li><NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/therapy" className={linkClasses} onClick={() => setIsOpen(false)}>Therapy</NavLink></li>
          <li><NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/meditation" className={linkClasses} onClick={() => setIsOpen(false)}>Meditation</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
