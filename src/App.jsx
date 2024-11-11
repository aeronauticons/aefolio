import React, { useEffect, useState } from "react";
import { DarkModeButton } from "./components/ButtonComponents/DarkModeButton";
import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes } from "./route/PublicRoutes";
import { DefaultModal } from "./components/Modal/DefaultModal";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const storedDarkMode = localStorage.getItem("isDarkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
    } else {
      setIsDarkMode(mediaQuery.matches);
    }

    const handleMediaChange = (event) => {
      if (!storedDarkMode) {
        setIsDarkMode(event.matches);
      }
    };

    // Add the event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.dispatchEvent(new Event("app-loaded"));
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      document.body.classList.toggle("dark", isDarkMode);
      document.body.classList.toggle("light", !isDarkMode);
    }
  }, [isDarkMode]);

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
      <div>
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

        <div className="flex-grow"></div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;
