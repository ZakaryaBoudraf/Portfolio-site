import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      {/* Navbar */}
      <div className="z-10 fixed w-full h-[70px] flex justify-between items-center px-8 bg-nes-dark text-nes-white border-b-2 border-nes-light">
        <div>
          <h1 className="text-2xl font-bold text-nes-white">ZB</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
          <li>
            <Link to="hero" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all">
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all">
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="block px-3 py-2 border border-transparent hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-200 transition-all">
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
          <li className="w-full text-center border-b border-nes-light">
            <Link onClick={handleClick} to="hero" smooth={true} duration={500} className="block py-6 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors">
              Home
            </Link>
          </li>
          <li className="w-full text-center border-b border-nes-light">
            <Link onClick={handleClick} to="about" smooth={true} duration={500} className="block py-6 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors">
              About
            </Link>
          </li>
          <li className="w-full text-center border-b border-nes-light">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
              className="block py-6 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors"
            >
              Skills
            </Link>
          </li>
          <li className="w-full text-center border-b border-nes-light">
            <Link onClick={handleClick} to="work" smooth={true} duration={500} className="block py-6 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors">
              Work
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              className="block py-6 text-2xl text-nes-white uppercase tracking-wide hover:text-nes-orange transition-colors"
            >
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

