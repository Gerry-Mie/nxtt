
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
import trilionReg from "@/assets/Projects/trilion-register.png"
import gwana1 from "@/assets/Projects/gwana-landing.png"
import farm1 from "@/assets/Projects/farm1.png"
import farm2 from "@/assets/Projects/farm2.png"
import farm3 from "@/assets/Projects/farm3.png"
import gwana2 from "@/assets/Projects/gwana2.png"
import gwana3 from "@/assets/Projects/gwana3.png"
import gwana4 from "@/assets/Projects/gwana4.png"
import gwana5 from "@/assets/Projects/gwana5.png"
import hvv1 from "@/assets/Projects/hvv1.png"
import hvv2 from "@/assets/Projects/hvv2.png"
import hvv3 from "@/assets/Projects/hvv3.png"
export const navLinks = [
    {
      id: "expertise",
      title: "Our Expertise"
    },
    {
        id: "industries",
        title: "Industries"
    },
    {
        id: "about",
        title: "About Us"
    },
    {
        id: "blog",
        title: "Blog"
    },
    {
        id: "contact",
        title: "Contact Us"
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
            image3: trilionReg,
        },
        des: "",
        status: "finished"
    },
    {
        name: "farmrich",
        title: "Farmrich International",
        images: {
            image1: farm1,
            image2: farm2,
            image3: farm3,
        },
        des: "",
        status: "finished"
    },
    {
        name: "gwana",
        title: "Gwana Toolbox",
        images: {
            image1: gwana1,
            image2: gwana5,
            image3: gwana4,
        },
        des: "",
        status: "Maintain"
    },
    {
        name: "hvv",
        title: "High Vision Ventures",
        images: {
            image1: hvv1,
            image2: hvv2,
            image3: hvv3,
        },
        des: "",
        status: "Done"
    },
  ]