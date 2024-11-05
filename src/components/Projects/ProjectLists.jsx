import React, { useState } from "react";
import QubeAppLogoLight from "../../assets/Projects/QubeApp/QLogoLight.png";
import QubeAppLogoDark from "../../assets/Projects/QubeApp/QLogoDark.png";
import QubeAppImage from "../../assets/Projects/QubeApp/QubeAppIamge.png";
import { FaHtml5, FaGithub } from "react-icons/fa";
import { RiCss3Fill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import Reveal from "../plugins/Reveal";
import { ProjectModalContent } from "../Modal/ProjectModalContent";

export const ProjectLists = ({ isDarkMode, openModal }) => {
  const handleProjectClick = (projectData) => {
    openModal(projectData, ProjectModalContent);
  };

  const myProjects = [
    {
      id: 1,
      name: "QuBE App",
      acronym: "Quality Board for Educators",
      desc: "Quality Board for Educators: A progressive web whiteboard application for BS Mathematics programs.",
      logo: isDarkMode ? QubeAppLogoLight : QubeAppLogoDark,
      image: QubeAppImage,
      githubLink: "https://github.com/aeronauticons/QuBE-App",
      projectLink: "https://qube-app.github.io/index.html",
      description:
        "This web-based whiteboard enhances the virtual classroom experience, offering intuitive tools for mathematics educators to deliver engaging and accessible lessons.",
      long_desc: `
        The QuBE app was developed in response to the challenges of asynchronous learning during the pandemic from 2020 to 2022. Acknowledging the difficulties of teaching mathematics online, this project aims to simplify the process for educators, particularly those at the college level. Created by a team of two developers, QuBE encompasses a variety of functionalities designed to enhance the teaching experience.<br/><br/>
        The main purpose of the app is the interactive whiteboard area, which includes essential tools such as adjustable pen sizes, color selections, shapes, and erasers. These features helps educators to present mathematical concepts clearly and creatively. Additionally, QuBE allows for the instant plotting of formulas, planes, and graphs, providing a visualization tool.<br/><br/>
        Following that, the app also includes different sections for generating various mathematical tables, which are exclusively for college-level math topics. These table generation tools help streamline lesson preparation, allowing educators to focus more on engaging with their students.<br/><br/>
        The QuBE app has been recognized as the best thesis project among all computer science presentations in our batch, highlighting its significance in transforming mathematics education in an online learning environment.`,
      languages: [
        {
          id: 1,
          name: "HTML",
          logo: (
            <FaHtml5 className="h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9 text-ae_logo_tech_stack_color group-hover:text-ae_logo_color trans-none" />
          ),
        },
        {
          id: 2,
          name: "CSS",
          logo: (
            <RiCss3Fill className="h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9 text-ae_logo_tech_stack_color group-hover:text-ae_logo_color trans-none" />
          ),
        },
        {
          id: 3,
          name: "JavaScript",
          logo: (
            <SiJavascript className="h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9 text-ae_logo_tech_stack_color group-hover:text-ae_logo_color trans-none" />
          ),
        },
      ],
    },
  ];

  const gridColumns =
    myProjects.length > 1 ? "lg:grid-cols-2 grid-cols-1" : "grid-cols-1";

  const cardSize = myProjects.length > 1 ? "max-w-full" : "max-w-3xl";

  return (
    <div className="relative mx-auto max-w-screen-2xl bg-ae_background_color sm:py-8 px-8 sm:px-24 md:px-32 lg:py-5 pt-7 pb-2 md:pt-10">
      <div className={`grid gap-12 lg:gap-10 xl:gap-14 ${gridColumns}`}>
        {myProjects.map((item) => (
          <div className="place-self-center" key={item.id}>
            <Reveal>
              <div
                className={`group cursor-pointer ${cardSize} bg-ae_keypoints_bg_color border border-ae_quote_ring rounded-lg shadow-md hover:shadow-lg overflow-hidden relative pt-10 px-7 md:pt-16 md:px-10`}
                onClick={() => handleProjectClick(item)}
              >
                <div className="absolute top-3 start-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="trans-none w-12 md:w-20 opacity-60"
                  />
                </div>
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="translate-y-1 rounded-ss-xl rounded-se-xl h-auto max-w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
                  />
                </div>
              </div>
            </Reveal>

            <div className="flex justify-stretch mt-7">
              <div className="text-ae_titles_text_color font-extrabold font-spartan text-2xl xl:text-3xl trans-none">
                <Reveal>
                  {item.name} <span className="text-ae_logo_color">.</span>
                </Reveal>
              </div>
              <div className="flex-grow mx-3 self-center">
                <hr className="border-t border-ae_titles_text_color dark:border-ae_titles_text_color" />
              </div>
              <div className="flex justify-evenly">
                {item?.languages.map((language) => (
                  <Reveal key={`${language.id}-${item.id}`}>
                    <div className="px-1 relative group">
                      {language.logo}

                      <div className="font-mono absolute z-10 invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-opacity duration-300 px-3 py-2 -mt-20 text-sm font-medium text-ae_titles_text_color bg-ae_quote_bg_color rounded-lg shadow-sm">
                        {language.name}
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div
              className={`w-full ${cardSize} text-base font-medium leading-8 text-ae_titles_text_color mt-4 flex justify-between trans-none`}
            >
              <div className="flex-grow pr-12">
                <Reveal>{item.desc}</Reveal>
              </div>

              <div className="flex flex-col gap-2">
                <Reveal>
                  <a
                    href={item.projectLink}
                    className="cursor-pointer"
                    target="_blank"
                  >
                    <TbExternalLink className="h-8 w-8 lg:h-9 lg:w-9 text-ae_logo_tech_stack_color hover:text-ae_logo_color trans-none" />
                  </a>
                </Reveal>
                <Reveal>
                  {" "}
                  <a
                    href={item.githubLink}
                    className="cursor-pointer"
                    target="_blank"
                  >
                    <FaGithub className="h-8 w-8 lg:h-9 lg:w-9 text-ae_logo_tech_stack_color hover:text-ae_logo_color trans-none" />
                  </a>
                </Reveal>
              </div>
            </div>

            <div
              className={`w-full ${cardSize} text-base font-normal leading-8 text-gray-500 mt-4`}
            >
              <Reveal>
                {item.description}
                <span
                  className="text-ae_logo_color cursor-pointer hover:underline hover:underline-offset-2 ml-2"
                  onClick={() => handleProjectClick(item)}
                >
                  Learn More
                </span>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
