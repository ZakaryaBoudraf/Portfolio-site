import React from "react";
import ArchiDesignImg from "../assets/archi-design-screen.png";
import PFEImg from "../assets/PFE-screen.png";
import SelfSupervisedLearningImg from "../assets/Self-supervised.png";
// University of Salerno IoT Master's Projects
import AIArtDetectionImg from "../assets/ai-art-detection.png";
import FireDetectionImg from "../assets/fire-detection.png";
import PredictiveMaintenanceImg from "../assets/predictive-maintenance.png";
import IntrusionDetectionImg from "../assets/intrusion-detection.png";
import TrafficControlImg from "../assets/traffic-control.png";
// PDF imports
import AIArtDetectionPaper from "../assets/papers/AI-Generated Art Detection Report.pdf";
import AIArtDetectionPresentation from "../assets/papers/presentation ai-generated art detection.pdf";
import TrafficControlPaper from "../assets/papers/Final Project Report - Zakarya Boudraf - 0522501649 - Smart Emergency Traffic Control.pdf";
import TrafficControlPresentation from "../assets/papers/Presentation for Smart Emergency Traffic Control.pdf";
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import PredictiveMaintenancePresentation from "../assets/papers/Presentation - Zakarya Boudraf - International School of IoT.pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen bg-nes-white py-20">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-start w-full h-full pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nes-dark border-b-4 border-nes-orange inline-block pb-2 uppercase tracking-wide">
            Work
          </h2>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* 1. Data-Centric Industrial Predictive Maintenance */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={PredictiveMaintenanceImg} 
                alt="Predictive Maintenance" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Data-Centric Industrial Predictive Maintenance (Systematic Literature Review)
              </h3>
              <p className="text-sm text-nes-dark text-center mb-4">
                ML-driven predictive maintenance using industrial sensor data
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href={PredictiveMaintenancePaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Report
                  </button>
                </a>
                <a href={PredictiveMaintenancePresentation} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Presentation
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 2. IoT Intrusion Detection System with Embedded Neural Networks */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={IntrusionDetectionImg} 
                alt="Intrusion Detection" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                IoT Intrusion Detection & NN Anomaly Detection
              </h3>
              <p className="text-sm text-nes-dark text-center mb-4">
                Real-time IoT security system with embedded neural networks on STM32 Nucleo-F401RE
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://github.com/ZakaryaBoudraf/Real-time-IDS-for-STM32" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Code
                  </button>
                </a>
                <a href={IntrusionDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Research
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Smart Traffic Control */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={TrafficControlImg} 
                alt="Traffic Control" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Smart Emergency Traffic Control
              </h3>
              <p className="text-sm text-nes-dark text-center mb-4">
                Deep RL for autonomous traffic signal optimization in multi-intersection networks
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://github.com/ZakaryaBoudraf/Emergency-Traffic-Control" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Code
                  </button>
                </a>
                <a href={TrafficControlPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Report
                  </button>
                </a>
                <a href={TrafficControlPresentation} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Presentation
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* 4. AI-Generated Art Detection */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={AIArtDetectionImg} 
                alt="AI Art Detection" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                AI-Generated Art Detection
              </h3>
              <p className="text-sm text-nes-dark text-center mb-4">
                Deep learning model to detect AI-generated artwork using CNNs
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://github.com/your-username/ai-art-detection" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Code
                  </button>
                </a>
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Paper
                  </button>
                </a>
                <a href={AIArtDetectionPresentation} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Presentation
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 5. Fire Detection System */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={FireDetectionImg} 
                alt="Fire Detection" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Fire Detection with Automated Fan Control
              </h3>
              <p className="text-sm text-nes-dark text-center mb-4">
                IoT fire detection system with MQTT monitoring and automated response
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://github.com/ZakaryaBoudraf/TempControlledFan" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Code
                  </button>
                </a>
                <a href="https://www.tinkercad.com/things/0wApEXWgAPd-temperature-controlled-dc-motor" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 6. Self-Supervised Learning */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={SelfSupervisedLearningImg} 
                alt="Self-Supervised Learning" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Self-Supervised Learning for Epileptic Seizure Detection
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Report
                  </button>
                </a>
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Publication
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 7. Java CRUD Application */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={PFEImg} 
                alt="Java CRUD Application" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Java CRUD Application
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <a href={JavaCRUDPaper} target="_blank" rel="noopener noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Project Report
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 8. Archi-Design Studio Site */}
          <div className="bg-nes-light border-2 border-nes-dark hover:border-nes-orange transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={ArchiDesignImg} 
                alt="Archi-Design Studio" 
                className="w-full h-full object-contain bg-nes-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-nes-dark mb-3 text-center uppercase tracking-wide">
                Archi-Design Studio Site
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://archi-design.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ZakaryaBoudraf/archi-design" target="_blank" rel="noreferrer">
                  <button className="bg-nes-white text-nes-dark border-2 border-nes-dark px-4 py-2 hover:bg-nes-orange hover:text-nes-white hover:border-nes-orange transition-all duration-300 font-medium uppercase text-sm">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
