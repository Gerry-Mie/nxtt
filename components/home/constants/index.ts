
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
import Angular from "@/assets/expertise/angularIcon.png"
import Sass from "@/assets/expertise/sassIcon.png"
import Tailwindcss from "@/assets/expertise/tailwindcssIcon.png"
import HtmlIcon from "@/assets/expertise/htmlIcon.png"
import NextJS from "@/assets/expertise/nextjsIcon.png"
import ReactJS from "@/assets/expertise/reactjsIcon.png"
import Bootstrap from "@/assets/expertise/bootstrapIcon.png"
import Jquery from "@/assets/expertise/jqueryIcon.png"
import TypeScript from "@/assets/expertise/typescriptIcon.png"
import NestJS from "@/assets/expertise/nestjsIcon.png"
import NodeJS from "@/assets/expertise/nodejsIcon.png"
import Lambda from "@/assets/expertise/lambdaIcon.png"
import Git from "@/assets/expertise/gitIcon.png"
import Aws from "@/assets/expertise/awsIcon.png"
import Docker from "@/assets/expertise/dockerIcon.png"
import Gcloud from "@/assets/expertise/gcloudIcon.png"
import GithubAct from "@/assets/expertise/gitactIcon.png"
import Azure from "@/assets/expertise/azureIcon.png"
import Figma from "@/assets/expertise/figmaIcon.png"
import Figmajam from "@/assets/expertise/figmajamIcon.png"
import Sketch from "@/assets/expertise/sketchIcon.png"
import Zeplin from "@/assets/expertise/zeplinIcon.png"
import AdobeXD from "@/assets/expertise/adobeXDIcon.png"
import AdobePS from "@/assets/expertise/adobePSIcon.png"
import AdobeAI from "@/assets/expertise/adobeAIIcon.png"
import IOT from "@/assets/Industries/image-import.jpg";
import Health from "@/assets/Industries/health.jpg"
import Communication from "@/assets/Industries/communication.jpg"
import ITservices from "@/assets/Industries/itservices.jpg"
import Edtech from "@/assets/Industries/edtech.jpg"
import Retail from "@/assets/Industries/retail.jpg"



export const navLinks = [
    {
      id: "expertise",
      title: "Our Expertise",
      behavior: "scroll"
    },
    {
        id: "industries",
        title: "Industries",
        behavior: "scroll"
    },
    {
        id: "about",
        title: "About Us",
        behavior: "redirect"
    },
    {
        id: "blog",
        title: "Blog",
        behavior: "redirect"
    },
    {
        id: "contact",
        title: "Contact Us",
        behavior: "redirect"
    }
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
          icon: TypeScript
        },
        {
          id: "reactjs",
          icon: ReactJS
        },
        {
          id: "angular",
          icon: Angular
        },
        {
          id: "sass",
          icon: Sass
        },
        {
          id: "tailwind",
          icon: Tailwindcss
        },
        {
          id: "html",
          icon: HtmlIcon
        },
        {
          id: "nextjs",
          icon: NextJS
        },
        {
          id: "bootstrap",
          icon: Bootstrap
        },
        {
          id: "jquery",
          icon: Jquery
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
          icon: NestJS
        },
        {
          id: "nodejs",
          icon: NodeJS
        },
        {
          id: "firebasebe",
          icon: Firebase
        },
        {
          id: "awslambda",
          icon: Lambda
        },
        {
          id: "typescriptbe",
          icon: TypeScript
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
          icon: Git
        },
        {
          id: "aws",
          icon: Aws
        },
        {
          id: "docker",
          icon: Docker
        },
        {
          id: "gcloud",
          icon: Gcloud
        },
        {
          id: "githubact",
          icon: GithubAct
        },
        {
          id: "azure",
          icon: Azure
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
          icon: Figma
        },
        {
          id: "figjam",
          icon: Figmajam
        },
        {
          id: "sketch",
          icon: Sketch
        },
        {
          id: "zeplin",
          icon: Zeplin
        },
        {
          id: "xd",
          icon: AdobeXD
        },
        {
          id: "photoshop",
          icon: AdobePS
        },
        {
          id: "illustrator",
          icon: AdobeAI
        },
      ]
    },
  ]
  
  export const industries = [
    {
      id: "iot",
      title: "IoT",
      description: `We connect devices and systems, unlocking new possibilities in connectivity and automation.`,
      image: IOT,
    },
    {
      id: "health",
      title: "health care",
      description: `We leverage technology to enhance healthcare delivery and improve patient outcomes.`,
      image: Health,
    },
    {
      id: "communications",
      title: "communications",
      description: `We enable seamless and efficient communication for businesses, empowering collaboration and productivity.`,
      image: Communication,
    },
    {
      id: "business/it",
      title: "business / IT services",
      description: `We provide comprehensive IT solutions and services to streamline operations and drive business success.`,
      image: ITservices,
    },
    {
      id: "edtech",
      title: "EdTech",
      description: `We innovate education, empowering educators and students for revolutionary learning experiences.`,
      image: Edtech,
    },
    {
      id: "retail",
      title: "Retail",
      description: `We help retailers adapt to the digital landscape, optimize operations, and provide personalized experiences for customers.`,
      image: Retail,
    },
  ]