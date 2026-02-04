import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineBackspace } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";

// Import your project papers from assets
import AIArtDetectionPaper from "../assets/papers/AI-Generated Art Detection Report.pdf";
import TrafficControlPaper from "../assets/papers/Final Project Report - Zakarya Boudraf - 0522501649 - Smart Emergency Traffic Control.pdf";
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import SoftwareDependabilityPaper from "../assets/papers/Software Dependability Project Report - Zakarya Boudraf - Apache Commons CLI.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import TemperatureControlPaper from "../assets/papers/Temperature controlled DC Motor (Final).pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";

const ProjectPapers = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const papers = [
    {
      title: "AI-Generated Art Detection",
      description: "Deep learning model to detect AI-generated artwork using CNNs",
      pdf: AIArtDetectionPaper,
      id: "ai-art"
    },
    {
      title: "Smart Emergency Traffic Control",
      description: "Deep RL for autonomous traffic signal optimization in multi-intersection networks",
      pdf: TrafficControlPaper,
      id: "traffic-control"
    },
    {
      title: "IoT Security - Intrusion Detection System",
      description: "Real-time IoT security system with intrusion detection capabilities",
      pdf: IntrusionDetectionPaper,
      id: "intrusion-detection"
    },
    {
      title: "Software Dependability - Apache Commons CLI",
      description: "Analysis and improvement of software reliability and dependability",
      pdf: SoftwareDependabilityPaper,
      id: "software-dependability"
    },
    {
      title: "Data-Centric Industrial Predictive Maintenance",
      description: "Systematic literature review on ML-driven predictive maintenance approaches",
      pdf: PredictiveMaintenancePaper,
      id: "predictive-maintenance"
    },
    {
      title: "Temperature Controlled DC Motor System",
      description: "IoT-based temperature control system with automated motor control",
      pdf: TemperatureControlPaper,
      id: "temperature-control"
    },
    {
      title: "Java CRUD Application - PFE Licence SI",
      description: "Database management system with full CRUD operations and user interface",
      pdf: JavaCRUDPaper,
      id: "java-crud"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-main-dark animated-bg z-10">
      {/* Back Button - Always Visible */}
      <div className="fixed top-4 left-4 z-50">
        <LinkRouter to="/Portfolio-site">
          <div className="bg-main-light bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-lg">
            <HiOutlineBackspace size={24} className="text-white" />
          </div>
        </LinkRouter>
      </div>

      {/* Collapsible Navbar */}
      <div className={`fixed w-full h-[80px] flex justify-end items-center px-4 animated-bg text-main-light z-40 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* social */}
        <div className="hidden lg:flex fixed flex-col top-1/3 left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://github.com/ZakaryaBoudraf"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white"
                href="mailto: zakaryaboudraf@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <LinkRouter
                className="flex justify-between items-center w-full text-white"
                to="/resume"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </LinkRouter>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-[80px] w-full min-h-screen">
        {!selectedPaper ? (
          // Papers List View
          <div className="max-w-[1000px] mx-auto p-4 py-20">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-main-light border-b-4 border-main-light inline">
                Research Papers
              </h2>
              <p className="py-6 text-gray-300">
                {/* Explore my research work from University of Salerno */}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-[#0a1328] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-main-light cursor-pointer"
                  onClick={() => setSelectedPaper(paper)}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-main-light hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-150">
                      View Paper →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // PDF Viewer
          <div className="flex flex-col h-screen">
            <div className="bg-[#0a1328] p-4 border-b border-gray-700">
              <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedPaper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {selectedPaper.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-150"
                >
                  ← Back to Papers
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center bg-gray-100">
              <iframe
                src={selectedPaper.pdf}
                className="w-full h-full max-w-[1200px]"
                title={selectedPaper.title}
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex h-32 bg-[#0b162e]">
        <div className="w-full flex px-8 pt-6 justify-center text-center items-center text-indigo-300">
          <p className="opacity-50">Made with 💜 by Zakarya</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPapers;