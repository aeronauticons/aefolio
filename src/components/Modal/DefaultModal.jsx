import React from "react";
import { LuX } from "react-icons/lu";

export const DefaultModal = ({ isOpen, isClose, content: ContentComponent, data, isDarkMode }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="absolute top-6 right-6 lg:top-10 lg:right-10 cursor-pointer"
        onClick={isClose}
      >
        <LuX className="text-ae_titles_text_color text-xl lg:text-2xl xl:text-3xl" />
      </div>
      <div className="bg-ae_contact_label rounded-xl pb-5 md:max-w-xl xl:max-w-3xl w-96 md:w-full mt-28 sm:mt-16 md:mt-10 animate-bounceOnce drop-shadow-md">
        <div className="max-h-[90vh] overflow-y-auto">

          {ContentComponent && React.createElement(ContentComponent, { data })}

        </div>
      </div>
    </div>
  );
};
