import React from "react";
import { myLogo } from "../../constants";

export const MyArtModal = ({ data, isDarkMode }) => {
  return (
    <div className={`lg:flex justify-between lg:space-x-10 space-y-5 relative`}>
      <div className="lg:w-8/12">
        <img
          src={data.image}
          className={`${
            data.orientation == "landscape" ? " w-[600px]" : " w-[500px]"
          } rounded-ss-xl rounded-se-xl lg:rounded-se-none lg:rounded-es-xl object-cover`}
        />
      </div>
      <div className="lg:w-2/5 lg:px-0 lg:pe-7 px-10">
        <div className="text-ae_titles_text_color font-spartan font-bold text-2xl">
          {data.name}
        </div>
        <div className="text-ae_titles_text_color font-thin text-base">
          {data.date}
        </div>

        <div className="text-gray-500 my-5">{data.description}</div>

        <div className="text-gray-500 my-5 font-light">
          Made in <span className="text-ae_logo_color">{data.medium}</span>
        </div>

        <div className="absolute -bottom-1 lg:bottom-4 right-6 flex items-center">
          <span className="mr-1 text-gray-500 text-sm">Created by </span>
          <div className="w-16 h-8 overflow-hidden rounded-full mx-auto md:mx-0">
            <img
              alt="My Logo"
              src={isDarkMode ? myLogo.dark : myLogo.light}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
