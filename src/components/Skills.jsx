import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-nes-light">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen py-16 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
            Skills
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 text-center py-4 sm:py-8">
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={HTML} alt="HTML icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">HTML</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={CSS} alt="CSS icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">CSS</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={JavaScript} alt="JavaScript icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">JavaScript</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={ReactImg} alt="React icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">React</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={Tailwind} alt="Tailwind icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">Tailwind</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <img src={GitHub} alt="GitHub icon" className="w-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white">GitHub</p>
          </div>
          
          {/* Specific technology skills */}
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nes-white group-hover:text-nes-white transition-all duration-300">
              🐍
            </div>
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white text-xs">Python • Pandas • NumPy</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nes-white group-hover:text-nes-white transition-all duration-300">
              ☕
            </div>
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white text-xs">Java • Spring • CRUD</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nes-white group-hover:text-nes-white transition-all duration-300">
              🤖
            </div>
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white text-xs">TensorFlow • Keras • PyTorch</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nes-white group-hover:text-nes-white transition-all duration-300">
              🌐
            </div>
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white text-xs">Arduino • MQTT • Sensors</p>
          </div>
          <div className="bg-nes-dark border-2 border-nes-dark hover:border-nes-orange hover:bg-nes-orange hover:text-nes-white duration-300 transition-all pt-6 pb-4 px-4 group">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nes-white group-hover:text-nes-white transition-all duration-300">
              🔧
            </div>
            <p className="font-bold uppercase tracking-wide text-nes-white group-hover:text-nes-white text-xs">STM32 • Arduino • Raspberry Pi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
