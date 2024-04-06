import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen animated-bg text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-main-light">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full h-[50vh] grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-xl font-bold flex items-center">
            {/* <p>Hi, I'm Zakarya, nice to meet you. Feel free to look around.</p> */}
            <p>
            I'm a full-stack web developer, with a focus on front-end development.<br/>
            I have worked with machine learning, especially exploring Self-Supervised learning methods in signal processing problems.<br/>
            I am currently learning internet of things as a part of a master's program at the University of Salerno.
            </p> 
          </div>
          <div>
            {/* <p>
            I'm a full-stack web developer, with a focus on front-end development.<br/>
            I have worked with machine learning, especially exploring Self-Supervised learning methods in signal processing problems.<br/>
            I am currently learning internet of things as a part of a master's program at the University of Salerno.
            </p> */}
            <iframe src='https://my.spline.design/macbookprocopy-734163396e0514f93692d739f4fb4b23/' frameborder='1' width='100%' height='100%'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
