"use client";
import React from "react";
import { styles } from "../styles";
import ButtonPrimary from "../ButtonPrimary";

export default function About() {
  return (
    // todo remove padding bottom after footer fixed
    <section className="relative w-full h-fit mx-auto mt-20 min-h-[300px] flex flex-col items-center gap-10 pb-20">
      <div className="flex flex-col items-center gap-8 w-full lg:w-[70%] px-10">
        <h1 className={`${styles.sectionHeadText}`}>About Us</h1>
        <p className={`${styles.sectionSubText} text-center`}>
          We are a team of tech enthusiasts committed to helping businesses
          thrive in the digital world. With our expertise in <b>React Native</b>
          , <b>ReactJS, Angular, Node.Js</b>, and other advanced technologies,
          we create powerful <b>Mobile Apps</b> and dynamic <b>Web App</b> that
          engage audiences and boost business growth. We prioritize our clients'
          needs, ensuring personalized solutions that go beyond expectations.
          Our dedication to quality and innovation ensures your technology is
          secure and up-to-date.
        </p>
      </div>
      <div className="w-full flex justify-center flex-col lg:flex-row md:flex-row gap-11 px-10 items-stretch">
        <ButtonPrimary
          selector={true}
          classNames="text-lg font-semibold py-1 text-center flex items-center justify-center"
          isActive={false}
          type="link"
          href="/#about"
          title="Learn More"
        />
        <ButtonPrimary
          classNames="text-[30px] font-semibold py-1 h-fit text-center"
          type="link"
          href="/contact"
          title="Contact Us"
        />
      </div>
    </section>
  );
}
