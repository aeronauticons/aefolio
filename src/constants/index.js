import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi";
import {
  FaBootstrap,
  FaCloudversify,
  FaCode,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHandshake,
  FaHtml5,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaReact,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaMobileScreen, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { SiApachecordova, SiJavascript, SiMysql } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import NBLogo from "../assets/Work/Nexbridge/nb_logo.png";
import NBCover from "../assets/Work/Nexbridge/nb_cover.jpg";
import NBMiniLogo from "../assets/Work/Nexbridge/nb_mini_logo.png";
import { RiCss3Fill } from "react-icons/ri";
import QubeAppLogoLight from "../assets/Projects/QubeApp/QLogoLight.png";
import QubeAppLogoDark from "../assets/Projects/QubeApp/QLogoDark.png";
import QubeAppImage from "../assets/Projects/QubeApp/QubeAppIamge.png";

const isFindingJob = true;
const myResumeLink =
  "https://drive.google.com/file/d/1_jJlc65KigjYqWdDjCa7XhtN3l4mNUyg/view?usp=sharing";

// nav
const myContacts = [
  {
    name: "Mobile Number",
    value: "(+639)76 191 8238",
    href: "tel:+639761918238",
    icon: FaMobileScreen,
  },
  {
    name: "Email",
    value: "filoteoaeron27@gmail.com",
    href: "mailto:filoteoaeron27@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/aeronfiloteo",
    href: "https://www.linkedin.com/in/aeronfiloteo/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    value: "github.com/aeronauticons",
    href: "https://github.com/aeronauticons",
    icon: FaGithub,
  },
];

// keypoints
const keyPoints = [
  {
    title: "Code Enthusiast",
    desc: "Showcasing the style of easy-to-read code and maintainable code.",
    icon: FaCode,
  },
  {
    title: "Problem Solver",
    desc: "Dedicated on solving errors, bugs and obstacles through ingenuity.",
    icon: FaRegLightbulb,
  },
  {
    title: "Continous Learner",
    desc: "Consistently seeks opportunities to expand knowledge.",
    icon: FaCloudversify,
  },
  {
    title: "Team Player",
    desc: "Excels in team environments and contribute effectively.",
    icon: FaHandshake,
  },
];

// socials
const mySocials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/aeronauticons/",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aeronauticons/",
    icon: FaInstagram,
  },
  {
    name: "XTwitter",
    href: "https://x.com/aeronauticssss",
    icon: FaXTwitter,
  },
];

const aboutMe = [
  {
    id: 1,
    text: `Hello! I’m Aeron, an aspiring full stack developer. By
          profession, I am a mathematician, as that is my field of study.
          I truly love coding; in fact, I enjoy solving problems,
          organizing complex logic, and analyzing system structures.`,
  },
  {
    id: 2,
    text: `Currently, I work as a software engineer here in the Bulacan,
          Philippines, and I am expanding my skill set as I pursue full
          stack development.`,
  },
  {
    id: 3,
    text: `Outside of work, I am a painter. I love painting nature, which
          helps me relieve stress and unwind.`,
  },
  {
    id: 4,
    text: `I am actively looking for a new job where I can merge my coding
          skills with my creativity. If you know of any openings that
          might suit me, let's connect! 🔗`,
  },
];

// capabilites
const myTechStack = [
  {
    name: "Laravel",
    icon: FaLaravel,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Vite",
    icon: TbBrandVite,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "Tailwind",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Firebase",
    icon: BiLogoFirebase,
  },
  {
    name: "Cordova",
    icon: SiApachecordova,
  },
];

const yearExp = 2;

const techStackDetails = `
  I have a strong knowledge of popular programming languages, tech
  stacks, and development tools essential to modern software
  development. Below, are the technologies I rely on to deliver
  quality systems.
`;

// my experience
const myWorkExperiences = [
  {
    id: 1,
    name: "Nexbridge Technologies Inc.",
    logo: NBLogo,
    miniLogo: NBMiniLogo,
    cover: NBCover,
    date: "October 2022 - Present",
    role: "Software Engineer",
    link: "https://nexbridgetech.com/",
    responsibilities: [
      { id: 1, text: "Engineered end-to-end full-stack solutions and APIs." },
      { id: 2, text: "Enhanced the frontend experience for a seamless UI." },
      {
        id: 3,
        text: "Designed and optimized relational databases to ensure data integrity.",
      },
      { id: 4, text: "Refactored and streamlined code structures." },
    ],
  },
];

// projects
const myProjects = [
  {
    id: 1,
    name: "QuBE App",
    acronym: "Quality Board for Educators",
    desc: "Quality Board for Educators: A progressive web whiteboard application for BS Mathematics programs.",
    logo: {
      dark: QubeAppLogoLight,
      light: QubeAppLogoDark,
    },
    image: QubeAppImage,
    githubLink: "https://github.com/aeronauticons/QuBE-App",
    projectLink: "https://qube-app.github.io/index.html",
    description:
      "This web-based whiteboard enhances the virtual classroom experience, offering intuitive tools for mathematics educators to deliver engaging and accessible lessons.",
    long_desc: `
      The QuBE app was developed in response to the challenges of asynchronous learning during the pandemic from 2020 to 2022. Acknowledging the difficulties of teaching mathematics online, this project aims to simplify the process for educators, particularly those at the college level. Created by a team of two developers, QuBE encompasses a variety of functionalities designed to enhance the teaching experience.<br/><br/>
      The main purpose of the app is the interactive whiteboard area, which includes essential tools such as adjustable pen sizes, color selections, shapes, and erasers. These features helps educators to present mathematical concepts clearly and creatively. Additionally, QuBE allows for the instant plotting of formulas, planes, and graphs, providing a visualization tool.<br/><br/>
      Following that, the app also includes different sections for generating various mathematical tables, which are exclusively for college-level math topics. These table generation tools help streamline lesson preparation, allowing educators to focus more on engaging with their students.<br/><br/>
      The QuBE app has been recognized as the best thesis project among all computer science presentations in our batch, highlighting its significance in transforming mathematics education in an online learning environment.`,
    languages: [
      {
        id: 1,
        name: "HTML",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        icon: RiCss3Fill,
      },
      {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },
];

// get in touch
const yearUpdate = '2024';

export {
  myContacts,
  myResumeLink,
  isFindingJob,
  keyPoints,
  mySocials,
  aboutMe,
  myTechStack,
  yearExp,
  techStackDetails,
  myWorkExperiences,
  myProjects,
  yearUpdate
};
