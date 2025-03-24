import React from "react";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const menuItems = [
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "Campus Life", path: "/campus-life" },
  ];
  const socialMedia = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "M12.315 2c2.43 0 2.784.013 3.808.06...",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "M19.812 5.418c.861.23 1.538.907 1.768...",
    },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaUniversity className="mr-2 text-yellow-500" />
              Krishna University
            </h3>
            <p className="text-gray-300">
              Empowering minds, shaping futures through excellence in education.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>123 University Avenue</p>
              <p>Karnataka, India 560001</p>
              <p className="mt-2">info@krishnauniversity.edu</p>
              <p>+91 80 1234 5678</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <button
                  key={social.name}
                  onClick={() => window.open(social.url, "_blank")}
                  className="text-gray-300 hover:text-white transition"
                  aria-label={social.name}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-sm text-gray-300 text-center">
          <p>&copy; 2025 Krishna University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
