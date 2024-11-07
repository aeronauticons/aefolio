import { Outlet } from "react-router-dom";
import { createContext, useContext } from "react";

export const DarkModeContext = createContext();

export const Container = ({ isDarkMode }) => {
  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <Outlet />
    </DarkModeContext.Provider>
  );
};
