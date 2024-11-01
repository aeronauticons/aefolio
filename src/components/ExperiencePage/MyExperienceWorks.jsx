import React from "react";
import NBLogo from "../../assets/Work/Nexbridge/nb_logo.png";
import NBCover from "../../assets/Work/Nexbridge/nb_cover.jpg";
import NBMiniLogo from "../../assets/Work/Nexbridge/nb_mini_logo.png";
import { FaCheck } from "react-icons/fa";
import Reveal from "../plugins/Reveal";

export const MyExperienceWorks = () => {
  const myWorkExperiences = [
    {
      id: 1,
      name: "Nexbridge Technologies Inc.",
      logo: NBLogo,
      miniLogo: NBMiniLogo,
      cover: NBCover,
      date: "October 2022 - Present",
      role: "Software Engineer",
      responsibilities: [
        { id: 1, text: "Engineered end-to-end full-stack solutions and APIs." },
        { id: 2, text: "Enhanced the frontend experience for a seamless UI." },
        {
          id: 3,
          text: "Designed and optimized relational databases to ensure data integrity.",
        },
        { id: 4, text: "Refactored and streamlined code structures." },
      ],
    },
  ];

  return (
    <div className="relative mx-auto trans-none max-w-screen-2xl bg-ae_background_color sm:py-8 px-12 sm:px-24 md:px-32 xl:px-44 lg:py-5 pt-7 pb-2 md:pt-10">
      <ul className="relative border-s border-ae_titles_text_color">
        {myWorkExperiences.map((item) => (
          <li className="mb-10 lg:mb-14 ms-9 lg:ms-10 xl:ms-12" key={item.id}>
            <span className="absolute flex items-center justify-center w-8 h-9 bg-ae_background_color rounded-full -start-4 ring-1 ring-ae_ring_color">
              <Reveal>
                <img
                  src={item.miniLogo}
                  alt="Logo"
                  className="h-full w-full p-1"
                />
              </Reveal>
            </span>

            <div className="xl:flex xl:justify-between">
              <div className="max-w-full max-h-fit xl:w-[70%] bg-ae_keypoints_bg_color border border-ae_quote_ring rounded-lg shadow-md overflow-hidden relative">
                <div className="relative">
                  <img className="w-full h-48 object-cover" src={NBCover} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ae_keypoints_bg_color to-transparent"></div>
                </div>

                <div className="p-5 md:flex md:justify-between">
                  <div className="w-100">
                    <Reveal>
                      <h5 className="mb-2 text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-ae_titles_text_color">
                        {item.name}
                      </h5>
                    </Reveal>

                    <Reveal>
                      <span className="block mb-2 text-sm md:text-base font-normal leading-none text-gray-500">
                        {item.date}
                      </span>
                    </Reveal>
                  </div>
                  <div className="w-100">
                    <Reveal>
                      <h5 className="mb-2 text-sm sm:text-lg md:text-xl font-light tracking-tight text-gray-500">
                        {item.role}
                      </h5>
                    </Reveal>
                  </div>
                </div>
              </div>

              <div className="w-100 mt-6 xl:mt-0 xl:w-[25%] relative">
                <Reveal>
                  <img
                    src={NBLogo}
                    alt="Logo"
                    className="h-auto xl:w-48 w-48 md:w-48 lg:w-52 p-1 mb-3"
                  />
                </Reveal>

                <div className="text-lg font-normal leading-8 text-gray-500">
                  <ul className="list-none p-0">
                    {item?.responsibilities.map((responsibility) => (
                      <Reveal key={`${item.id}-${responsibility.id}`}>
                        <li
                          className="flex items-start space-x-3 mb-4"
                        >
                          <FaCheck className="text-ae_logo_color w-4 h-4 mt-2 flex-shrink-0" />
                          <span className="text-gray-500 text-base md:text-lg">
                            {responsibility.text}
                          </span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
