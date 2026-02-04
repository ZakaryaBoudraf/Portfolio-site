import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPalette } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";
import CatLogo from "../assets/catlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const { cycleTheme, setTheme, themes, currentTheme } = useTheme();
  const paletteRef = useRef(null);
  const handleClick = () => setNav(!nav);

  const handleLogoClick = () => {
    cycleTheme();
  };

  const handlePaletteToggle = () => {
    setShowPalette(!showPalette);
  };

  const handleThemeSelect = (themeName) => {
    setTheme(themeName);
    setShowPalette(false);
  };

  // Close palette when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target)) {
        setShowPalette(false);
      }
    };

    if (showPalette) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPalette]);

  return (
    <div>
      {/* Navbar */}
      <div className="z-10 fixed w-full h-[70px] flex justify-between items-center px-8 bg-nes-dark text-nes-white border-b-2 border-nes-light">
        <div>
          <img 
            src={CatLogo} 
            alt="Zakarya's Logo" 
            className="h-10 w-10 object-contain cursor-pointer hover:scale-110 transition-transform duration-200" 
            onClick={handleLogoClick}
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
          <li>
            <Link to="hero" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all cursor-pointer">
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 text-nes-white">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-nes-dark border-r-4 border-nes-orange flex flex-col justify-center items-center z-10"
          }
        >
          <li className="border-b border-nes-light">
            <Link onClick={handleClick} to="hero" smooth={true} duration={500} className="block py-6 px-8 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors cursor-pointer">
              Home
            </Link>
          </li>
          <li className="border-b border-nes-light">
            <Link onClick={handleClick} to="about" smooth={true} duration={500} className="block py-6 px-8 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors cursor-pointer">
              About
            </Link>
          </li>
          <li className="border-b border-nes-light">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} className="block py-6 px-8 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors cursor-pointer">
              Skills
            </Link>
          </li>
          <li className="border-b border-nes-light">
            <Link onClick={handleClick} to="work" smooth={true} duration={500} className="block py-6 px-8 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors cursor-pointer">
              Work
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} className="block py-6 px-8 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
        {/* social */}
        <div className="hidden lg:flex fixed flex-col top-1/3 left-0 scale-100">
          <ul>
            <li className="bg-nes-dark border-2 border-nes-light w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:border-nes-orange hover:bg-nes-orange duration-300 transition-all">
              <a
                className="flex justify-between items-center w-full text-nes-white px-4 text-sm font-medium"
                href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <FaLinkedin size={24} />
              </a>
            </li>
            <li className="bg-nes-dark border-2 border-nes-light w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:border-nes-orange hover:bg-nes-orange duration-300 transition-all">
              <a
                className="flex justify-between items-center w-full text-nes-white px-4 text-sm font-medium"
                href="https://github.com/ZakaryaBoudraf"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <FaGithub size={24} />
              </a>
            </li>
            <li className="bg-nes-dark border-2 border-nes-light w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:border-nes-orange hover:bg-nes-orange duration-300 transition-all">
              <a
                className="flex justify-between items-center w-full text-nes-white px-4 text-sm font-medium"
                href="mailto: zakaryaboudraf@gmail.com"
              >
                Email <HiOutlineMail size={24} />
              </a>
            </li>
            <li className="bg-nes-dark border-2 border-nes-light w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:border-nes-orange hover:bg-nes-orange duration-300 transition-all">
              <a
                className="flex justify-between items-center w-full text-nes-white px-4 text-sm font-medium"
                href={ResumePDF}
                target="_blank"
                rel="noreferrer"
              >
                Resume <BsFillPersonLinesFill size={24} />
              </a>
            </li>
            <li className="bg-nes-dark border-2 border-nes-light w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:border-nes-orange hover:bg-nes-orange duration-300 transition-all relative" ref={paletteRef}>
              <button
                onClick={handlePaletteToggle}
                className="flex justify-between items-center w-full text-nes-white px-4 text-sm font-medium"
              >
                Themes <FaPalette size={24} />
              </button>
              
              {/* Palette Grid */}
              {showPalette && (
                <div className="absolute left-[160px] top-0 bg-nes-dark border-2 border-nes-light p-4 grid grid-cols-4 gap-2 w-[200px] z-50">
                  {Object.entries(themes).map(([themeName, theme]) => (
                    <div key={themeName} className="relative group">
                      <button
                        onClick={() => handleThemeSelect(themeName)}
                        className={`w-8 h-8 border-2 ${currentTheme === themeName ? 'border-nes-orange scale-110' : 'border-nes-white hover:border-nes-orange'} transition-all duration-200 grid grid-cols-2 grid-rows-2 overflow-hidden`}
                        title={theme.name}
                      >
                        <div style={{ backgroundColor: theme.colors.dark }} className="w-full h-full"></div>
                        <div style={{ backgroundColor: theme.colors.orange }} className="w-full h-full"></div>
                        <div style={{ backgroundColor: theme.colors.light }} className="w-full h-full"></div>
                        <div style={{ backgroundColor: theme.colors.white }} className="w-full h-full"></div>
                      </button>
                      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-nes-dark text-nes-white text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {theme.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;