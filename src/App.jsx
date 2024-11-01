import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { FrontPage } from "./components/FrontPage/FrontPage";
import { QuotePage } from "./components/QuotePage/QuotePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { DateTime } from "./components/FrontPage/DateTime";

import { DarkModeButton } from "./components/ButtonComponents/DarkModeButton";
import { Experience } from "./components/ExperiencePage/Experience";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);

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



  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Navbar isDarkMode={isDarkMode}/>

      <div className="overflow-y-auto">
        <DateTime className="hidden text-gray-500 z-30 md:flex justify-start self-center fixed top-20 right-12 font-mono text-xs"/>

        <FrontPage isDarkMode={isDarkMode}/>

        <QuotePage isDarkMode={isDarkMode}/>

        <AboutPage />

        <Experience/>

        <DarkModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      </div>
    </div>
  );
}

export default App;
