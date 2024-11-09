import React from "react";
import { MyArtsPage } from "../components/MyArtsPage/MyArtsPage";

export const MoreAboutMe = ({ isDarkMode, openModal }) => {

    console.log(isDarkMode)
  return (
    <div className="overflow-y-auto overflow-x-hidden ">
        <MyArtsPage isDarkMode={isDarkMode} openModal={openModal}/>
    </div>
  );
};
