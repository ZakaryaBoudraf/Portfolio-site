import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zakaryaboudraf@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-nes-light flex flex-col justify-center items-center p-4 pt-20"
    >
      <div className="max-w-[800px] w-full text-center">
        {/* Header */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
            Let's Connect
          </h2>
        </div>

        {/* Description */}
        <p className="text-nes-dark text-lg mb-8 max-w-[600px] mx-auto">
                    Like what you see? Don't hesitate to reach out at:
        </p>

        {/* Email Section */}
        <div className="mb-8">
          <div 
            className="flex items-center justify-center gap-4 bg-nes-white border-2 border-nes-dark p-6 max-w-[500px] mx-auto cursor-pointer hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white transition-all duration-300 group"
            onClick={copyToClipboard}
          >
            <HiOutlineMail 
              size={30} 
              className="text-nes-dark group-hover:text-nes-white transition-colors duration-300" 
            />
            <span className="text-xl font-medium text-nes-dark group-hover:text-nes-white transition-colors duration-300">
              {email}
            </span>
            {copied ? (
              <FaCheck 
                size={20} 
                className="text-green-600 group-hover:text-nes-white transition-colors duration-300" 
              />
            ) : (
              <FaCopy 
                size={20} 
                className="text-nes-dark group-hover:text-nes-white transition-colors duration-300" 
              />
            )}
          </div>
          {copied && (
            <p className="text-green-600 font-medium mt-2 animate-pulse">
              Copied to clipboard!
            </p>
          )}
        </div>

        {/* Social Links */}
        <div className="mb-4">
          <p className="text-nes-dark text-lg mb-6">Or find me on:</p>
        </div>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="https://github.com/ZakaryaBoudraf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-nes-white border-2 border-nes-dark px-6 py-4 hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white transition-all duration-300 group"
          >
            <FaGithub 
              size={24} 
              className="text-nes-dark group-hover:text-nes-white transition-colors duration-300" 
            />
            <span className="font-medium uppercase tracking-wide text-nes-dark group-hover:text-nes-white transition-colors duration-300">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-nes-white border-2 border-nes-dark px-6 py-4 hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white transition-all duration-300 group"
          >
            <FaLinkedin 
              size={24} 
              className="text-nes-dark group-hover:text-nes-white transition-colors duration-300" 
            />
            <span className="font-medium uppercase tracking-wide text-nes-dark group-hover:text-nes-white transition-colors duration-300">
              LinkedIn
            </span>
          </a>

          <a
            href={ResumePDF}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-nes-white border-2 border-nes-dark px-6 py-4 hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white transition-all duration-300 group"
          >
            <BsFillPersonLinesFill 
              size={24} 
              className="text-nes-dark group-hover:text-nes-white transition-colors duration-300" 
            />
            <span className="font-medium uppercase tracking-wide text-nes-dark group-hover:text-nes-white transition-colors duration-300">
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
