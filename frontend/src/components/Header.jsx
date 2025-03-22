import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaUniversity,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <FaUniversity className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-xl font-bold">
                  Krishna University
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaHome className="mr-1" /> Home
              </a>
              <a
                href="/about"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaInfoCircle className="mr-1" /> About Us
              </a>
              <a
                href="#circulars"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaNewspaper className="mr-1" /> Circulars
              </a>
              <a
                href="#campus"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaUniversity className="mr-1" /> Campus
              </a>
              <a
                href="/courses"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaBriefcase className="mr-1" /> Courses
              </a>
              <a
                href="#placements"
                className="flex items-center hover:text-yellow-400 transition"
              >
                <FaBriefcase className="mr-1" /> Placements
              </a>
              <a href="/login">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center transition">
                  <FaUserGraduate className="mr-1" /> Login
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-200 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <MdClose className="h-6 w-6" />
                ) : (
                  <MdMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <FaHome className="mr-2" /> Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <FaInfoCircle className="mr-2" /> About Us
              </a>
              <a
                href="#circulars"
                className="block px-3 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <FaNewspaper className="mr-2" /> Circulars
              </a>
              <a
                href="#campus"
                className="block px-3 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <FaUniversity className="mr-2" /> Campus
              </a>
              <a
                href="#placements"
                className="block px-3 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <FaBriefcase className="mr-2" /> Placements
              </a>
              <button className="w-full text-left bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded flex items-center mt-4">
                <FaUserGraduate className="mr-2" /> Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
