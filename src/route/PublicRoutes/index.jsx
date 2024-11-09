import { Container } from "./container";
import { LandingPage } from "../../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { MoreAboutMe } from "../../pages/MoreAboutMe";
import { pathURL } from "../../constants";

export const PublicRoutes = ({ isDarkMode, openModal }) => (
    <Routes>
      <Route element={<Container isDarkMode={isDarkMode} />}>
        <Route index element={<LandingPage isDarkMode={isDarkMode} openModal={openModal} />} />
        <Route path={pathURL[1]} element={<MoreAboutMe isDarkMode={isDarkMode} openModal={openModal}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
