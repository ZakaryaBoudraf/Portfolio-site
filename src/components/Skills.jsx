import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-nes-light">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
            Skills
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={HTML} alt="HTML icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">HTML</p>
          </div>
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={CSS} alt="CSS icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">CSS</p>
          </div>
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={JavaScript} alt="JavaScript icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">JavaScript</p>
          </div>
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={ReactImg} alt="React icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">React</p>
          </div>
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={GitHub} alt="GitHub icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">GitHub</p>
          </div>
          <div className="bg-nes-white border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={Tailwind} alt="Tailwind icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide">Tailwind</p>
          </div>
          {/*todo: ADD JAVA PYTHON AND MORE */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
