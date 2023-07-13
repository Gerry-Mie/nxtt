import React from "react";
import {
  AboutWrapper,
  FirstSetComponent,
  SecondSetComponent,
} from "./AboutWrapper";
import { styles } from "../styles";
import About1a from "@/assets/about/about1-a.png";
import About1b from "@/assets/about/about1-b.png";
import About2a from "@/assets/about/about2-a.png";
import About2b from "@/assets/about/about2-b.png";
import About2c from "@/assets/about/about2-c.png";
import About3a from "@/assets/about/about3-a.png";
import About4a from "@/assets/about/about4-a.png";
import About4b from "@/assets/about/about4-b.png";

function AboutInfo() {
  return (
    <div className="w-full mt-40">
      <AboutWrapper>
        <FirstSetComponent>
          <div className="flex justify-center max-w-full">
            <img
              className="w-1/2 translate-y-[2rem]"
              src={About1a.src}
              alt="image"
            />
            <img
              className="w-1/2 translate-y-[-2rem]"
              src={About1b.src}
              alt="image"
            />
          </div>
        </FirstSetComponent>
        <SecondSetComponent>
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <p
              className={`text-[36px] font-semibold text-center lg:text-left w-full`}
            >
              Expertise and Services
            </p>
            <p className={`${styles.smallText} text-center lg:text-left`}>
              Drawing on our extensive expertise, we specialize in crafting
              high-performance mobile applications and dynamic websites. Using
              cutting-edge tools and technologies like <b>React Native</b>,{" "}
              <b>ReactJS, Angular, Node.Js</b>, we create immersive digital
              experiences that captivate audiences and drive tangible business
              growth.
            </p>
          </div>
        </SecondSetComponent>
      </AboutWrapper>
      <AboutWrapper>
        <FirstSetComponent>
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <p
              className={`text-[36px] font-semibold text-center lg:text-left w-full`}
            >
              Client-Centric Approach
            </p>
            <p className={`${styles.smallText} text-center lg:text-left`}>
              We firmly believe that understanding our clients' unique needs and
              aspirations is crucial to their success. By taking a
              client-centric approach, we establish deep partnerships, enabling
              us to provide personalized solutions that exceed expectations and
              deliver real value.
            </p>
          </div>
        </FirstSetComponent>
        <SecondSetComponent>
          <div className="flex justify-center max-w-full">
            <div className="flex flex-col w-1/2 translate-y-[2rem]">
              <img className="w-full" src={About2a.src} alt="image" />
              <img className="w-full" src={About2b.src} alt="image" />
            </div>

            <img
              className="w-1/2 translate-y-[-2rem]"
              src={About2c.src}
              alt="image"
            />
          </div>
        </SecondSetComponent>
      </AboutWrapper>
      <AboutWrapper>
        <FirstSetComponent>
          <div className="flex justify-center max-w-full">
            <img className="w-full" src={About3a.src} alt="image" />
          </div>
        </FirstSetComponent>
        <SecondSetComponent>
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <p
              className={`text-[36px] font-semibold text-center lg:text-left w-full`}
            >
              Exceptional Team
            </p>
            <p className={`${styles.smallText} text-center lg:text-left`}>
              Our highly skilled professionals, including talented designers,
              experienced developers, quality assurance specialists, and project
              managers work together seamlessly to bring ideas to life.
            </p>
          </div>
        </SecondSetComponent>
      </AboutWrapper>
      <AboutWrapper>
        <FirstSetComponent>
          <div className="h-full flex flex-col justify-center items-center gap-5">
            <p
              className={`text-[36px] font-semibold text-center lg:text-left w-full`}
            >
              Quality and Innovation
            </p>
            <p className={`${styles.smallText} text-center lg:text-left`}>
              Quality is at the heart of everything we do. We adhere to rigorous
              quality assurance processes to ensure that our projects meet the
              highest standards of performance, reliability, and user
              experience. We stay updated with the latest industry trends and
              leverage innovative approaches to provide cutting-edge solutions.
            </p>
          </div>
        </FirstSetComponent>
        <SecondSetComponent>
          <div className="flex justify-center max-w-full">
            <img
              className="w-1/2 translate-y-[2rem]"
              src={About4a.src}
              alt="image"
            />
            <img
              className="w-1/2 translate-y-[-2rem]"
              src={About4b.src}
              alt="image"
            />
          </div>
        </SecondSetComponent>
      </AboutWrapper>
    </div>
  );
}

export default AboutInfo;
