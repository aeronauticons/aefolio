import React from "react";
import Reveal from "../plugins/Reveal";
import {
  FaCode,
  FaRegLightbulb,
  FaHandshake,
  FaCloudversify,
} from "react-icons/fa";

const KeyPoints = () => {
  return (
    <div className="flex justify-around mx-auto max-w-screen-2xl gap-3 lg:gap-16">

      <div className="group relative cursor-pointer overflow-hidden bg-ae_keypoints_bg_color px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 lg:hover:-translate-y-1 hover:scale-110 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <Reveal>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:bg-gray-50">
              <FaCode className="lg:text-3xl text-2xl text-gray-50 lg:group-hover:text-gray-500" />
            </span>
          </Reveal>
          <div className="space-y-2 pt-5 text-base trans-none text-gray-500 transition-all duration-0 lg:group-hover:text-gray-50">
            <Reveal>
              <b>Code Enthusiast</b>
              <p>
                Showcasing the style of easy-to-read code and maintainable code.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="group relative cursor-pointer overflow-hidden bg-ae_keypoints_bg_color px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 lg:hover:-translate-y-1 hover:scale-110 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <Reveal>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:bg-gray-50">
              <FaRegLightbulb className="lg:text-3xl text-2xl text-gray-50 lg:group-hover:text-gray-500" />
            </span>
          </Reveal>
          <div className="space-y-2 pt-5 text-base trans-none text-gray-500 transition-all duration-0 lg:group-hover:text-gray-50">
            <Reveal>
              <b>Problem Solver</b>

              <p>
                Dedicated on solving errors, bugs and obstacles through
                ingenuity.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="group relative cursor-pointer overflow-hidden bg-ae_keypoints_bg_color px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 lg:hover:-translate-y-1 hover:scale-110 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <Reveal>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:bg-gray-50">
              <FaHandshake className="lg:text-3xl text-2xl text-gray-50 lg:group-hover:text-gray-500" />
            </span>
          </Reveal>
          <div className="space-y-2 pt-5 text-base trans-none text-gray-500 transition-all duration-0 lg:group-hover:text-gray-50">
            <Reveal>
              <b>Collaborative Team Player</b>

              <p>Excels in team environments and contribute effectively.</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="group relative cursor-pointer overflow-hidden bg-ae_keypoints_bg_color px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 lg:hover:-translate-y-1 hover:scale-110 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <Reveal>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:bg-gray-50">
              <FaCloudversify className="lg:text-3xl text-2xl text-gray-50 lg:group-hover:text-gray-500" />
            </span>
          </Reveal>
          <div className="space-y-2 pt-5 text-base trans-none text-gray-500 transition-all duration-0 lg:group-hover:text-gray-50">
            <Reveal>
              <b>Continous Learner</b>
              <p>Consistently seeks opportunities to expand knowledge.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
