import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import ResumePDF from "../assets/BoudrafZakaryaCV.pdf";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-nes-light">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-nes-dark text-sm font-medium uppercase tracking-wider mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-nes-dark mb-4">
          Zakarya Boudraf
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text-nes-dark mb-6">
          I'm a Data Engineer based in Italy.
          </h2>
        <p className="text-nes-dark py-4 max-w-[700px] text-lg leading-relaxed">
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
