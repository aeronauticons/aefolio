import React, { useEffect, useState } from "react";
import { DarkModeButton } from "./components/ButtonComponents/DarkModeButton";
import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes } from "./route/PublicRoutes";
import { DefaultModal } from "./components/Modal/DefaultModal";
import { Navbar } from "./components/Navbar"

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

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.dispatchEvent(new Event('app-loaded'));
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

  const openModal = (data, ContentComponent) => {
    setModalData(data);
    setModalContent(() => ContentComponent);
    setIsModalOpen(true);
  };

  const toggleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : "light"}>
      <Navbar isDarkMode={isDarkMode} />

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
        <PublicRoutes isDarkMode={isDarkMode} openModal={openModal} />
      </div>
    </Router>
  );
}

export default App;
