import React from "react";
import { Link } from "react-router-dom";
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
import IntrusionDetectionPaper from "../assets/papers/Presentation - IoT Security IDS.pdf";
import PredictiveMaintenancePaper from "../assets/papers/Systematic Literature Review Data-Centric Approaches in Industrial Predictive Maintenance.pdf";
import PredictiveMaintenancePresentation from "../assets/papers/Presentation - Zakarya Boudraf - International School of IoT.pdf";
import JavaCRUDPaper from "../assets/papers/PFE_Licence_SI_DZ.pdf";

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300 animated-bg py-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full pb-20">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-main-light">
            Work
          </p>
          <p className="py-6">// Check out my projects from University of Salerno & more!</p>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* 1. Data-Centric Industrial Predictive Maintenance */}
          <div>
            <div
              style={{ backgroundImage: `url(${PredictiveMaintenanceImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-center text-white tracking-wider">
                Data-Centric Industrial Predictive Maintenance (Systematic Literature Review)
              </span>
              <p className="text-sm text-gray-300 text-center px-2 py-1">
                ML-driven predictive maintenance using industrial sensor data
              </p>
              <div className="pt-2 text-center">
                <a href={PredictiveMaintenancePaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Report
                  </button>
                </a>
                <a href={PredictiveMaintenancePresentation} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Presentation
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 2. IoT Intrusion Detection System with Embedded Neural Networks */}
          <div>
            <div
              style={{ backgroundImage: `url(${IntrusionDetectionImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-center text-white tracking-wider">
                IoT Intrusion Detection & NN Anomaly Detection
              </span>
              <p className="text-sm text-gray-300 text-center px-2 py-1">
                Real-time IoT security system with embedded neural networks on STM32 Nucleo-F401RE
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/ZakaryaBoudraf/Real-time-IDS-for-STM32" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Code
                  </button>
                </a>
                <a href={IntrusionDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Research
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Smart Traffic Control */}
          <div>
            <div
              style={{ backgroundImage: `url(${TrafficControlImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-center text-white tracking-wider">
                Smart Emergency Traffic Control
              </span>
              <p className="text-sm text-gray-300 text-center px-2 py-1">
                Deep RL for autonomous traffic signal optimization in multi-intersection networks
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/ZakaryaBoudraf/Emergency-Traffic-Control" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Code
                  </button>
                </a>
                <a href={TrafficControlPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Report
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* 4. AI-Generated Art Detection */}
          <div>
            <div
              style={{ backgroundImage: `url(${AIArtDetectionImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-center text-white tracking-wider">
                AI-Generated Art Detection
              </span>
              <p className="text-sm text-gray-300 text-center px-2 py-1">
                Deep learning model to detect AI-generated artwork using CNNs
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/your-username/ai-art-detection" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Code
                  </button>
                </a>
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Paper
                  </button>
                </a>
                <a href={AIArtDetectionPresentation} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Presentation
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 5. Fire Detection System */}
          <div>
            <div
              style={{ backgroundImage: `url(${FireDetectionImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-center text-white tracking-wider">
                Fire Detection with Automated Fan Control
              </span>
              <p className="text-sm text-gray-300 text-center px-2 py-1">
                IoT fire detection system with MQTT monitoring and automated response
              </p>
              <div className="pt-2 text-center">
                <a href="https://github.com/ZakaryaBoudraf/TempControlledFan" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Code
                  </button>
                </a>
                <a href="https://www.tinkercad.com/things/0wApEXWgAPd-temperature-controlled-dc-motor" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 6. Self-Supervised Learning */}
          <div>
            <div
              style={{ backgroundImage: `url(${SelfSupervisedLearningImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
            <span className="text-l font-bold text-center text-white tracking-wider">
                Self-Supervised Learning for Epileptic Seizure Detection
              </span>
              <div className="pt-2 text-center">
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Report
                  </button>
                </a>
                <a href={AIArtDetectionPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Publication
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 7. Java CRUD Application */}
          <div>
            <div
              style={{ backgroundImage: `url(${PFEImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-white tracking-wider">
              Java CRUD application
              </span>
              <div className="pt-2 text-center">
                <a href={JavaCRUDPaper} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Project report
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 8. Archi-Design Studio Site */}
          <div>
            <div
              style={{ backgroundImage: `url(${ArchiDesignImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* title / buttons */}
            <div className="flex flex-col bg-[#0a1328] justify-center items-center py-4 mt-[-20px] rounded-b-md">
              <span className="text-l font-bold text-white tracking-wider">
                Archi-Design studio site
              </span>
              <div className="pt-2 text-center">
                <a href="https://archi-design.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ZakaryaBoudraf/archi-design"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-l hover:text-white hover:bg-main-light duration-150">
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
