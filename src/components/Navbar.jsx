import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import logo from "../assets/images/logo.png"; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white px-6 py-4 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="DEE PLUS Logo"
            className="h-20 w-auto object-contain"
          />
      </Link>

        <ul className="hidden md:flex space-x-8 text-2xl">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/therapy" className="hover:underline">Therapy</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/meditation" className="hover:underline">Meditation</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>

        <div className="hidden md:flex space-x-4 text-2xl">
          <HiOutlineSearch className="cursor-pointer hover:scale-110 transition-transform" />
          <HiOutlineUser className="cursor-pointer hover:scale-110 transition-transform" />
        </div>

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

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center font-medium">
          <li><Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/therapy" className="hover:underline" onClick={() => setIsOpen(false)}>Therapy</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/meditation" className="hover:underline" onClick={() => setIsOpen(false)}>Meditation</Link></li>
          <li><Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
