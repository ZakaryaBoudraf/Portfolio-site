import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-nes-light flex flex-col justify-center items-center p-4 pt-20"
    >
      <form
        action="https://getform.io/f/f660f5c7-3619-4e85-8454-6db77e24ff7e"
        method="POST"
        className="flex flex-col max-w-[800px] w-full"
      >
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
            Contact
          </h2>
        </div>
        <input
          className="bg-nes-white border-2 border-nes-dark p-4 text-nes-dark placeholder-nes-dark focus:border-nes-orange focus:outline-none transition-all duration-300 font-medium"
          type="text"
          placeholder="NAME"
          name="name"
        />
        <input
          className="my-4 p-4 bg-nes-white border-2 border-nes-dark text-nes-dark placeholder-nes-dark focus:border-nes-orange focus:outline-none transition-all duration-300 font-medium"
          type="text"
          placeholder="EMAIL"
          name="email"
        />
        <textarea
          className="bg-nes-white border-2 border-nes-dark p-4 text-nes-dark placeholder-nes-dark focus:border-nes-orange focus:outline-none transition-all duration-300 font-medium resize-none"
          placeholder="MESSAGE"
          name="message"
          rows="6"
        ></textarea>
        <button className="text-nes-dark bg-nes-white border-2 border-nes-dark hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white duration-300 transition-all px-8 py-4 mx-auto my-8 flex items-center font-bold uppercase tracking-wide">
          Let's Collaborate
        </button>
      </form>
      {/* Social icons on small screens */}
      <div className="flex lg:hidden">
        <ul className="flex pt-4 gap-8">
          <li className="flex justify-between items-center duration-300 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-nes-dark hover:text-nes-orange transition-colors duration-300"
              href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="mb-2" />
              <span className="font-medium uppercase text-sm">LinkedIn</span>
            </a>
          </li>
          <li className="flex justify-between items-center duration-300 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-nes-dark hover:text-nes-orange transition-colors duration-300"
              href="https://github.com/ZakaryaBoudraf"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} className="mb-2" />
              <span className="font-medium uppercase text-sm">GitHub</span>
            </a>
          </li>
          <li className="flex justify-between items-center duration-300 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-nes-dark hover:text-nes-orange transition-colors duration-300"
              href="mailto: zakaryaboudraf@gmail.com"
            >
              <HiOutlineMail size={40} className="mb-2" />
              <span className="font-medium uppercase text-sm">Email</span>
            </a>
          </li>
          <li className="flex justify-between items-center duration-300 hover:scale-110">
            <a
              className="flex flex-col justify-between items-center w-full text-nes-dark hover:text-nes-orange transition-colors duration-300"
              href={ResumePDF}
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPersonLinesFill size={40} className="mb-2" />
              <span className="font-medium uppercase text-sm">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
