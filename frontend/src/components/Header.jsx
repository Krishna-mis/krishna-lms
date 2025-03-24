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
import { useNavigate } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome className="mr-1" /> },
    {
      name: "About Us",
      path: "/about",
      icon: <FaInfoCircle className="mr-1" />,
    },
    {
      name: "Circulars",
      path: "/circulars",
      icon: <FaNewspaper className="mr-1" />,
    },
    {
      name: "Campus",
      path: "/campus",
      icon: <FaUniversity className="mr-1" />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <FaBriefcase className="mr-1" />,
    },
    {
      name: "Placements",
      path: "/placements",
      icon: <FaBriefcase className="mr-1" />,
    },
  ];

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

            {/* Desktop & Mobile Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex items-center hover:text-yellow-400 transition"
                >
                  {item.icon} {item.name}
                </button>
              ))}
              <button
                onClick={() => navigate("/login")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center transition"
              >
                <FaUserGraduate className="mr-1" /> Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-200 hover:text-white focus:outline-none pt-5"
              >
                {mobileMenuOpen ? (
                  <MdClose className="h-6 w-6" />
                ) : (
                  <MdMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:text-yellow-400 transition"
                >
                  {item.icon} {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center transition"
              >
                <FaUserGraduate className="mr-1" /> Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
