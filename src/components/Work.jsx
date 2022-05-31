import React from "react";
import RealEstate from "../assets/realestate.jpg";
import WorkImg from "../assets/workImg.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-main-dark">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-main-light">
            Work
          </p>
          <p className="py-6">// Check out my projects!</p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {/* card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Java CRUD application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Archi-Design studio site
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
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
