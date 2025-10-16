import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for open/close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center mx-6 py-6 text-[#ccc8e6] font-bold relative">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-[#483AA0]">Luminet.</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-4">
        <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform transition duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform transition duration-300">
          <Link to="/Explore">Explore</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#483AA0] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 right-6 bg-[#0F0E0E] text-[#ccc8e6] rounded-2xl shadow-lg flex flex-col items-start space-y-4 p-6 w-48 z-50">
          <li
            className="text-xl hover:text-[#483AA0] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="text-xl hover:text-[#483AA0] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li
            className="text-xl hover:text-[#483AA0] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/Explore">Explore</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
