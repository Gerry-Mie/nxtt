"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { fadeIn, textVariant } from "./utils/motion";
import { services } from "./constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "@/app/hoc";
import webIcon from "@/app/assets/3d-web-1.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import lottie from "lottie-web";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  const animationContainer = useRef<(HTMLDivElement | null)[]>([]);
  console.log("icon", icon);
  useEffect(() => {
    services.forEach((service, index) => {
      if (service.icon) {
        lottie.loadAnimation({
          container: animationContainer.current[index]!,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: icon,
        });
      }
    });
  }, []);
  return (
    <Tilt
      className="lg:w-[45%] md:w-[45%] w-[90%]"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card border border-solid border-4 border-green-pink-gradient"
      >
        <div className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {icon && (
            // <Image src={icon} alt="asd" className="w-20 h-20 object-contain" />
            <div
              className="w-52"
              ref={(el) => (animationContainer.current[index] = el)}
            ></div>
          )}

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

function About() {
  return (
    <>
      <motion.div variants={textVariant(0)} className="mt-32">
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
      >
        At our core, we are driven by a shared vision to revolutionize how
        businesses worldwide harness the power of technology. With a strategic
        and tailored approach to IT solutions, we help businesses gain a
        competitive edge and achieve sustainable growth. We stay ahead of the
        curve by exploring emerging trends and leveraging cutting-edge tools.
        Our innovative solutions propel businesses forward, addressing their
        unique needs and goals. As a team, we are passionate about unlocking the
        full potential of businesses through technology. With a commitment to
        excellence and customer satisfaction, we provide trusted guidance and
        reliable IT solutions. In today's dynamic business landscape, we support
        organizations in their digital transformation journey. By optimizing
        processes and embracing technology, we help businesses thrive and
        contribute to global growth. Join us as we navigate the ever-changing
        digital world, driving success and sustainable growth for businesses
        worldwide.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
