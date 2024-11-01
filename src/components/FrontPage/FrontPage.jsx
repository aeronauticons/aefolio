import React, { useState } from "react";
import "../FrontPage/frontPage.css";
import { Typewriter } from "../plugins/Typewriter";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import lightBg from "./../../assets/ProfileImg/light_bg.jpg";
import darkBg from "./../../assets/ProfileImg/dark_bg.jpg";
import Reveal from "../plugins/Reveal";
import { motion } from "framer-motion";

export const FrontPage = ({ isDarkMode }) => {
  const [typeWriterClick, setTypeWriterClick] = useState(true);

  const handleClick = () => {
    setTypeWriterClick((prevClick) => !prevClick);
  };

  const frontPageDetails = () => {
    return (
      <>
        <Reveal>
          <span className="text-3xl text-gray-400 font-thin">
            Hello, I am Aeron Filoteo.
          </span>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            I am a software engineer based in Bulacan, Philippines, specializing
            in both <span className="text-gray-400">Backend</span> and{" "}
            <span className="text-gray-400">Frontend</span> development.
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-8 flex justify-start">
            <div className="relative rounded-full px-4 py-3 mt-4 md:text-sm text-xs text-gray-500 ring-1 ring-ae_ring_color/10 hover:ring-ae_ring_color/20">
              Do you want me on your team?
              <a href="#" className="font-semibold text-ae_logo_color ml-3">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <br className="block sm:hidden" />
                Get in touch <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </Reveal>
      </>
    );
  };

  return (
    <div className="bg-ae_background_color min-h-screen max-w-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-screen-2xl md:py-32 pt-16 md:pb-10 lg:py-50 ">
        <div className="md:flex md:justify-between md:gap-10 gap-5 grid justify-items-center mb-0 md:mb-16 xl:px-5 md:px-14">
          <div className="order-1 md:order-last md:w-1/2 w-100">
            <ProfilePage />
          </div>

          <div className="order-last md:order-1 md:w-1/2 w-100 text-center md:text-start">
            <Reveal>
              <p className="font-normal text-base mb-2 text-gray-600 hidden md:block">
                Your Aspiring
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p className="font-normal text-sm mb-2 text-gray-600 block md:hidden">
                Your Aspiring
              </p>
              <div
                style={{
                  backgroundImage: `url(${!isDarkMode ? lightBg : darkBg})`,
                  backgroundSize: "contain",
                  width: "100%",
                  height: "auto",
                }}
              >
                <h2 className="text-balance sm:text-6xl text-5xl font-bold tracking-tight text-gray-900  text-position mb-4 py-1 px-3">
                  FULL STACK <br />
                  <span onClick={handleClick} style={{ cursor: "pointer" }}>
                    D
                    <Typewriter
                      text={"EVELOPER"}
                      delay={500}
                      infinite
                      isClick={typeWriterClick}
                    />
                  </span>
                </h2>
              </div>
            </motion.div>

            <div className="hidden lg:block">{frontPageDetails()}</div>
          </div>
        </div>

        <div className="md:px-20 px-6 grid justify-items-center lg:hidden text-center">
          {frontPageDetails()}
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
};
