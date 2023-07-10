"use client";
import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "@/hoc";
import ButtonPrimary from "../ButtonPrimary";
import { expertise } from "./constants";
import ExpertCard from "./Expertise/ExpertCard";

function Expertise() {
  const [active, setActive] = useState("mobiledev");
  return (
    <section className="relative w-full h-fit mx-auto mt-20 overflow-hidden min-h-[300px]">
      <div className="bg-line2 z-0 rotate-[12deg] relative flex items-center justify-center opacity-30 ">
        <p className="sliding-text2 uppercase w-screen h-fit text-[64px] font-extrabold text-primary">
          mobile / web / backend / system design / devops / ui / ux / mobile /
          web / backend / system design / devops / ui / ux / mobile / web /
          backend / system design / devops / ui / ux / mobile / web / backend /
          system design / devops / ui / ux /
        </p>
      </div>
      <div className="bg-line z-[2] rotate-[-12deg] relative flex items-center justify-center bg-[#BDF6BF] backdrop-blur-md">
        <p className="sliding-text uppercase w-screen h-fit text-4xl font-extrabold text-secondary">
          mobile / web / backend / system design / devops / ui / ux / mobile /
          web / backend / system design / devops / ui / ux / mobile / web /
          backend / system design / devops / ui / ux / mobile / web / backend /
          system design / devops / ui / ux /
        </p>
      </div>

      <div className="flex flex-col items-center z-[3] relative gap-12">
        <h1 className={`${styles.sectionHeadText}`}>Our Expertise</h1>

        <div className="flex items-center justify-center gap-10 flex-wrap">
          {expertise.map((ex) => (
            <ButtonPrimary
              key={ex.id}
              title={ex.title}
              href={`#`}
              px="8"
              py="2"
              selector={true}
              isActive={active === ex.id}
              type={active === ex.id ? "link" : "button"}
              classNames="text-lg font-semibold"
              onClick={() => setActive(ex.id)}
            />
          ))}
        </div>
        <ExpertCard active={active} />
      </div>
    </section>
  );
}

export default SectionWrapper(Expertise, "expertise");
