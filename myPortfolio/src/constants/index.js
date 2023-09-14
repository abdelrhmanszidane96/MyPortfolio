import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "NodeJS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Covid-19",
    date: "March 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using Html5 CSS3 bootstrap and and Javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AngularJS Developer",
    company_name: "Pocket Solutions",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using AngularJS and other related technologies.",
      "Worked cooperatively with client services, sales and design team in deadline- driven environment.",
      "Designed and updated layouts to meet usability and performance requirements.",
      "Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platform.",
    ],
  },
 
  
];



const projects = [
  {
    name: "Covid-19",
    description:
      "Web-based platform that allows users to search, book, and know more about the disese also how to help yourself from getting it .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abdelrhmanszidane96/Covid-19/tree/main/Covid-19",
  },
  {
    name: "MyReads App",
    description:
      "This project can be used to search for book titles and store them on different shelves depending on what you are currently reading, what you have read and what you would like to read.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abdelrhmanszidane96/MyReads-App1",
  },
  {
    name: "My Portfolio",
    description:
      "my Portfolio using threejs and react.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
