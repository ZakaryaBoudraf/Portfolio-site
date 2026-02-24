import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div name="about" className="w-full min-h-screen bg-nes-white" ref={sectionRef}>
      <div className="flex flex-col justify-center items-center w-full min-h-screen py-16 sm:py-20">
        <div className="max-w-[1000px] w-full px-4">
          <div className={`text-center pb-6 sm:pb-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
              About
            </h2>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 sm:px-8">
          <div className={`bg-nes-light border-2 border-nes-dark p-4 sm:p-6 md:p-8 rounded-sm transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-base sm:text-lg text-nes-dark leading-relaxed text-center">
              I'm a data engineer and machine learning practitioner, specializing in building data pipelines and intelligent systems.<br/><br/>
              I have extensive experience with machine learning, particularly exploring Self-Supervised learning methods in signal processing problems.<br/><br/>
              I am currently expanding my expertise in Internet of Things as part of a master's program at the University of Salerno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
