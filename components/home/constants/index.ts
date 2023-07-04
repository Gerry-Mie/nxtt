
import webAnim from "@/animation/code-dark.json"
import mobileAnim from "@/animation/mobile-app-development.json"
import solutionsAnim from "@/animation/web-skills.json"
import securityAnim from "@/animation/security.json"
import electronicsAnim from "@/animation/maintain.json"
import css from "@/assets/tech/css.png"
import docker from "@/assets/tech/docker.png"
import figma from "@/assets/tech/figma.png"
import git from "@/assets/tech/git.png"
import html from "@/assets/tech/html.png"
import javascript from "@/assets/tech/javascript.png"
import mongodb from "@/assets/tech/mongodb.png"
import nodejs from "@/assets/tech/nodejs.png"
import reactjs from "@/assets/tech/reactjs.png"
import redux from "@/assets/tech/redux.png"
import tailwind from "@/assets/tech/tailwind.png"
import threejs from "@/assets/tech/threejs.png"
import typescript from "@/assets/tech/typescript.png"
import trilion1 from "@/assets/Projects/trilion-landing.png"
import trilionMobile from "@/assets/Projects/trilion-mobile.png"
export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "services",
        title: "Services"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

export const services=[
    {
        title: "Web App Development",
        id: "webdev",
        icon: webAnim
    },
    {
        title: "Mobile App Development",
        id: "mobdev",
        icon: mobileAnim
    },
    {
        title: "IT Solutions",
        id: "solutions",
        icon: solutionsAnim
    }, 
    {
        title: "Security Installations",
        id: "security",
        icon: securityAnim
    },
    {
        title: "Electronics Repair",
        id: "electronics",
        icon: electronicsAnim
    }
]

export const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  export const works =[
    {
        name: "trilion",
        title: "Trilion Ventures",
        images: {
            image1: trilion1,
            image2: trilionMobile,
            image3: "",
        },
        des: "",
        status: "finished"
    },
    {
        name: "farmrich",
        title: "Farmrich International",
        images: {
            image1: "",
            image2: "",
            image3: "",
        },
        des: "",
        status: "finished"
    },
    {
        name: "gwana",
        title: "Gwana Toolbox",
        images: {
            image1: "",
            image2: "",
            image3: "",
        },
        des: "",
        status: "Maintain"
    },
    {
        name: "hvv",
        title: "High Vision Ventures",
        images: {
            image1: "",
            image2: "",
            image3: "",
        },
        des: "",
        status: "Done"
    },
  ]