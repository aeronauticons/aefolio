import React from "react";
import { Navbar } from "../components/Navbar";
import { FrontPage } from "../components/FrontPage/FrontPage";
import { QuotePage } from "../components/QuotePage/QuotePage";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { DateTime } from "../components/FrontPage/DateTime";
import { Experience } from "../components/ExperiencePage/Experience";
import { Projects } from "../components/Projects/Projects";
import { GetInTouch } from "../components/ContactPage/GetInTouch";

export const LandingPage = ({ isDarkMode, openModal }) => {

  return (
    <>
      <Navbar isDarkMode={isDarkMode} />
      <div className="overflow-y-auto overflow-x-hidden">
        <DateTime className="hidden text-gray-500 md:flex justify-start self-center fixed top-20 right-12 font-mono text-xs" />
        <FrontPage isDarkMode={isDarkMode} />
        <QuotePage isDarkMode={isDarkMode} />
        <AboutPage />
        <Experience />
        <Projects isDarkMode={isDarkMode} openModal={openModal} />
        <GetInTouch isDarkMode={isDarkMode} />
      </div>
    </>
  );
};
