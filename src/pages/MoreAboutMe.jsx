import React from "react";
import { MyArtsPage } from "../components/MoreAboutMePage/MyArtsPage/MyArtsPage";
import { MyHobbiesPage } from "../components/MoreAboutMePage/MyArtsPage/MyHobbies";
import { MySocialLists } from "../components/MoreAboutMePage/MySocials/MySocialLists";

export const MoreAboutMe = ({ isDarkMode, openModal }) => {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
        <MyArtsPage isDarkMode={isDarkMode} openModal={openModal}/>
        <MyHobbiesPage isDarkMode={isDarkMode} openModal={openModal}/>
        <MySocialLists isDarkMode={isDarkMode} openModal={openModal}/>

    </div>
  );
};
