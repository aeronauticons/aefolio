import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { FrontPage } from "./components/FrontPage/FrontPage";
import { QuotePage } from "./components/QuotePage/QuotePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { DateTime } from "./components/FrontPage/DateTime";
import { DarkModeButton } from "./components/ButtonComponents/DarkModeButton";
import { Experience } from "./components/ExperiencePage/Experience";
import { Projects } from "./components/Projects/Projects";
import { GetInTouch } from "./components/ContactPage/GetInTouch";
import { DefaultModal } from "./components/Modal/DefaultModal";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    setIsDarkMode(mediaQuery.matches);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const openModal = (data, ContentComponent) => {
    setModalData(data);
    setModalContent(() => ContentComponent);
    setIsModalOpen(true);
  };

  const toggleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Navbar isDarkMode={isDarkMode} />

      <div className="overflow-y-auto overflow-x-hidden">
        <DateTime className="hidden text-gray-500 md:flex justify-start self-center fixed top-20 right-12 font-mono text-xs" />
        <FrontPage isDarkMode={isDarkMode} />
        <QuotePage isDarkMode={isDarkMode} />
        <AboutPage />
        <Experience />
        <Projects isDarkMode={isDarkMode} openModal={openModal} />
        <GetInTouch isDarkMode={isDarkMode} />

        <DarkModeButton
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />

        <DefaultModal
          isOpen={isModalOpen}
          isClose={() => toggleClose()}
          content={modalContent}
          data={modalData}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default App;
