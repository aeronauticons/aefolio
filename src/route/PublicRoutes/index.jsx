import { Container } from "./container";
import { LandingPage } from "../../pages/LandingPage";
import { Route, Routes } from "react-router-dom";

export const PublicRoutes = ({ isDarkMode, openModal }) => (
    <Routes>
      <Route element={<Container isDarkMode={isDarkMode} />}>
        <Route index element={<LandingPage isDarkMode={isDarkMode} openModal={openModal} />} />
        {/* <Route path="/more_about_me" element={<LandingPage isDarkMode={isDarkMode} />} /> */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
