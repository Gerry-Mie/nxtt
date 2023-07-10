
import webAnim from "@/animation/code-dark.json";
import mobileAnim from "@/animation/mobile-app-development.json";
import solutionsAnim from "@/animation/web-skills.json";
import securityAnim from "@/animation/security.json";
import electronicsAnim from "@/animation/maintain.json";
import css from "@/assets/tech/css.png";
import docker from "@/assets/tech/docker.png";
import figma from "@/assets/tech/figma.png";
import git from "@/assets/tech/git.png";
import html from "@/assets/tech/html.png";
import javascript from "@/assets/tech/javascript.png";
import mongodb from "@/assets/tech/mongodb.png";
import nodejs from "@/assets/tech/nodejs.png";
import reactjs from "@/assets/tech/reactjs.png";
import redux from "@/assets/tech/redux.png";
import tailwind from "@/assets/tech/tailwind.png";
import threejs from "@/assets/tech/threejs.png";
import typescript from "@/assets/tech/typescript.png";
import trilion1 from "@/assets/Projects/trilion-landing.png";
import trilionMobile from "@/assets/Projects/trilion-mobile.png";
import trilionReg from "@/assets/Projects/trilion-register.png";
import gwana1 from "@/assets/Projects/gwana-landing.png";
import farm1 from "@/assets/Projects/farm1.png";
import farm2 from "@/assets/Projects/farm2.png";
import farm3 from "@/assets/Projects/farm3.png";
import gwana4 from "@/assets/Projects/gwana4.png";
import gwana5 from "@/assets/Projects/gwana5.png";
import hvv1 from "@/assets/Projects/hvv1.png";
import hvv2 from "@/assets/Projects/hvv2.png";
import hvv3 from "@/assets/Projects/hvv3.png";
import MobileSVG from "@/assets/MobileSVG";
import WebSVG from "@/assets/WebSVG";
import BackendSVG from "@/assets/BackendSVG";
import DevopsSVG from "@/assets/DevopsSVG";
import UiuxSVG from "@/assets/UiuxSVG";
import ReactNative from "@/assets/expertise/reactNativeIcon.png"
import Flutter from "@/assets/expertise/flutterIcon.png"
import Dart from "@/assets/expertise/dartIcon.png"
import Firebase from "@/assets/expertise/firebaseIcon.png"
import GraphQL from "@/assets/expertise/graphqlIcon.png"
import SQLite from "@/assets/expertise/sqlLiteIcon.png"
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

  export const expertise = [
    {
      title: "mobile dev.",
      id: "mobiledev",
      cardTitle: "mobile development",
      description: `Specializing in high-performance and user-friendly mobile
      applications, we leverage React Native, a powerful cross-platform
      framework, to create seamless and engaging experiences for iOS and
      Android. From development and testing to app store publishing, we
      guide clients through every step of the process.`,
      icon: MobileSVG,
      tech: [
        {
          id: "reactnative",
          icon: ReactNative
        },
        {
          id: "flutter",
          icon: Flutter
        },
        {
          id: "dart",
          icon: Dart
        },
        {
          id: "firebase",
          icon: Firebase
        },
        {
          id: "graphql",
          icon: GraphQL
        },
        {
          id: "sqllite",
          icon: SQLite
        },
      ]
    },
    {
      title: "web dev.",
      id: "webdev",
      cardTitle: "web development",
      description: `Experience tailor-made online solutions with our comprehensive web
      development service. Our team specializes in crafting dynamic,
      responsive websites, web applications, and innovative solutions that
      captivate your audience and drive business growth. With expertise
      spanning various technologies and frameworks, we deliver
      high-quality web experiences that align with your goals and elevate
      your online presence to new heights.`,
      icon: WebSVG,
      tech: [
        {
          id: "typescript",
          icon: ""
        },
        {
          id: "reactjs",
          icon: ""
        },
        {
          id: "angular",
          icon: ""
        },
        {
          id: "sass",
          icon: ""
        },
        {
          id: "tailwind",
          icon: ""
        },
        {
          id: "html",
          icon: ""
        },
        {
          id: "nextjs",
          icon: ""
        },
        {
          id: "bootstrap",
          icon: ""
        },
        {
          id: "jquery",
          icon: ""
        },
      ]
    },
    {
      title: "backend",
      id: "backend",
      cardTitle: "backend",
      description: `Experience seamless applications with our advanced backend
      development service. We build robust APIs, handle data storage,
      ensure security, and enable seamless integration across platforms.
      From efficient database design to scalable server deployment, our
      backend solutions optimize performance for exceptional user
      experiences.`,
      icon: BackendSVG,
      tech: [
        {
          id: "nestjs",
          icon: ""
        },
        {
          id: "nodejs",
          icon: ""
        },
        {
          id: "firebasebe",
          icon: ""
        },
        {
          id: "awslambda",
          icon: ""
        },
        {
          id: "typescriptbe",
          icon: ""
        },
      ]
    },
    {
      title: "devOps",
      id: "devops",
      cardTitle: "devOps",
      description: `Our DevOps practices streamline development, foster collaboration,
      and accelerate software delivery. By leveraging tools like Git,
      Docker, and Vercel app, we automate deployments,
      monitor systems, and ensure smooth operations. We specialize in
      infrastructure as code, enabling seamless cloud resource management,
      and implement CI/CD pipelines for continuous integration and
      delivery.`,
      icon: DevopsSVG,
      tech: [
        {
          id: "git",
          icon: ""
        },
        {
          id: "aws",
          icon: ""
        },
        {
          id: "docker",
          icon: ""
        },
        {
          id: "gcloud",
          icon: ""
        },
        {
          id: "githubact",
          icon: ""
        },
        {
          id: "azure",
          icon: ""
        },
      ]
    },
    {
      title: "UI/UX design",
      id: "design",
      cardTitle: "UI/UX design",
      description: `Our talented UI/UX designers create visually appealing and intuitive
      interfaces that enhance user experiences. By combining user
      research, wireframing, and prototyping, we ensure seamless
      navigation and engaging interactions. We work with design tools such
      as Figma, Sketch, and Adobe XD.`,
      icon: UiuxSVG,
      tech: [
        {
          id: "figma",
          icon: ""
        },
        {
          id: "figjam",
          icon: ""
        },
        {
          id: "sketch",
          icon: ""
        },
        {
          id: "zeplin",
          icon: ""
        },
        {
          id: "xd",
          icon: ""
        },
        {
          id: "photoshop",
          icon: ""
        },
        {
          id: "illustrator",
          icon: ""
        },
      ]
    },
  ]