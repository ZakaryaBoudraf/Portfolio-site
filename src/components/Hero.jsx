import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Hero = () => {
  return (
    <div name="hero" className="w-full min-h-screen bg-nes-light pt-[60px] sm:pt-[70px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center min-h-screen py-20">
        <p className="text-nes-dark text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 sm:mb-4">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-nes-dark mb-3 sm:mb-4">
          Zakarya Boudraf
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-nes-dark mb-4 sm:mb-6">
          I'm a Data Engineer based in Italy.
          </h2>
        <p className="text-nes-dark py-2 sm:py-4 max-w-[700px] text-base sm:text-lg leading-relaxed">
          If you'd like to learn more about my career and experience feel free to explore the "Work" section to see my projects, or check out my CV for a more detailed overview.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-nes-dark bg-nes-white border-2 border-nes-dark px-6 py-3 my-2 flex items-center hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white duration-300 transition-all font-medium uppercase tracking-wide">
              View work
              <span className="group-hover:ml-2 duration-300 transition-all">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </button>
          </Link>
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button className="group text-nes-dark bg-nes-white border-2 border-nes-dark px-6 py-3 my-2 flex items-center hover:bg-nes-orange hover:border-nes-orange hover:text-nes-white duration-300 transition-all font-medium uppercase tracking-wide">
              View CV
              <span className="group-hover:ml-2 duration-300 transition-all">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
