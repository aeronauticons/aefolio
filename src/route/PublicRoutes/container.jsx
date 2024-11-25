import { Outlet } from "react-router-dom";
import { createContext, useContext } from "react";

export const DarkModeContext = createContext();

export const Container = () => {
  return (
    <DarkModeContext.Provider>
      <Outlet />
    </DarkModeContext.Provider>
  );
};
