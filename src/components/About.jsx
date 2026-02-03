import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-nes-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4">
          <div className="text-center pb-8">
            <h2 className="text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
              About
            </h2>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-8">
          <div className="bg-nes-light border-2 border-nes-dark p-8 rounded-sm">
            <p className="text-lg text-nes-dark leading-relaxed text-center">
              I'm a full-stack web developer, with a focus on front-end development.<br/><br/>
              I have worked with machine learning, especially exploring Self-Supervised learning methods in signal processing problems.<br/><br/>
              I am currently learning internet of things as a part of a master's program at the University of Salerno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
