import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Home,
  User,
  FolderGit2,
  Code,
  Award,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", to: "/", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "About", to: "/about", icon: <User className="w-4 h-4 mr-1" /> },
    {
      name: "Projects",
      to: "/projects",
      icon: <FolderGit2 className="w-4 h-4 mr-1" />,
    },
    { name: "Skills", to: "/skills", icon: <Code className="w-4 h-4 mr-1" /> },
    {
      name: "Certificates",
      to: "/certificates",
      icon: <Award className="w-4 h-4 mr-1" />,
    },
    {
      name: "Contact",
      to: "/contact",
      icon: <Mail className="w-4 h-4 mr-1" />,
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 text-gray-800 dark:text-gray-100">
        <div className="flex justify-between items-center h-20 px-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />

          <div className="flex space-x-8 text-lg font-semibold">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="group relative flex items-center text-gray-800 dark:text-gray-200 hover:text-green-900 transition-all"
              >
                {/* Icon that vanishes on hover */}
                <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {link.icon}
                </span>

                {/* Text with underline animation */}
                <span className="relative">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>

          <div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`fixed top-7 right-16 p-2 rounded-full shadow-lg transition-all duration-300 ${
                darkMode
                  ? "ring-2 ring-yellow-400 ring-offset-2 animate-pulse"
                  : "ring-2 ring-blue-400 ring-offset-2 ring-offset-white animate-pulse"
              }`}
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
