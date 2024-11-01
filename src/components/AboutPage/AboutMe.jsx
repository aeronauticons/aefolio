import React from "react";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import coder from "../../assets/Animations/coder.json";
import { AutoPlay } from "../plugins/AutoPlay";
import { FaFacebook, FaInstagram, FaLongArrowAltRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const AboutMe = () => {
  const mySocials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/aeronauticons/",
      icon: (
        <FaFacebook className="h-6 w-6 text-gray-600 hover:text-ae_logo_color" />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aeronauticons/",
      icon: (
        <FaInstagram className="h-6 w-6 text-gray-600 hover:text-ae_logo_color" />
      ),
    },
    {
      name: "XTwitter",
      href: "https://x.com/aeronauticssss",
      icon: (
        <FaXTwitter className="h-6 w-6 text-gray-600 hover:text-ae_logo_color" />
      ),
    },
  ];

  return (
    <div className="relative isolate px-6 pt-8 lg:px-8 bg-ae_background_color">
      <div className="flex justify-center md:hidden">
        <AutoPlay src={coder} className={"w-56"} />
      </div>

      <TitleComponent title="About Me" id="about_page" />

      <div className="relative flex mx-auto max-w-screen-2xl bg-ae_background_color sm:px-16 px-5 py-5 justify-center overflow-hidden">
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2 flex justify-center">
            <AutoPlay src={coder} className={"hidden md:block w-72"} />
          </div>
          <div className="text-left text-lg leading-8 font-normal text-gray-500 md:w-2/3">
            <div className="mb-2 leading-relaxed">
              Hello! I’m Aeron, an aspiring full stack developer. By profession,
              I am a mathematician, as that is my field of study. I truly love
              coding; in fact, I enjoy solving problems, organizing complex
              logic, and analyzing system structures.
            </div>

            <div className="mb-2 leading-relaxed">
              Currently, I work as a software engineer here in the Bulacan, Philippines,
              and I am expanding my skill set as I pursue full stack
              development.
            </div>

            <div>
              Outside of work, I am a painter. I love painting nature, which
              helps me relieve stress and unwind.
            </div>

            <div className="mb-4 leading-relaxed">
              I am actively looking for a new job where I can merge my coding
              skills with my creativity. If you know of any openings that might
              suit me, let's connect! 🔗
            </div>

            <div className="mb-2 flex justify-between">
              <div className="flex w-100">

                <span className="hidden md:flex  text-ae_logo_color font-semibold text-xl items-center mr-4">
                  Social Media <FaLongArrowAltRight className="ml-2" />
                </span>

                <div className="flex space-x-1 inset-x-0 justify-center items-center">
                  {mySocials &&
                    mySocials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center trans-none"
                      >
                        {item.icon}
                      </a>
                    ))}
                </div>
              </div>
              <div className="flex w-100 items-center">
                    <a href="#" className="text-ae_logo_color font-thin hover:underline hover:underline-offset-2">
                      More about me
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
