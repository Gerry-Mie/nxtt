"use client";
import { motion, AnimatePresence } from "framer-motion";
import MobileSVG from "@/assets/MobileSVG";
import React, { useEffect, useState } from "react";
import { expertise } from "../constants";
import { StaticImageData } from "next/image";

interface cardProps {
  active?: string;
}

function ExpertCard(props: cardProps) {
  const { active } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  const [techs, setTechs] = useState<{ id: string; icon: any }[]>([]);

  useEffect(() => {
    const current = expertise.filter((val) => val.id === active);
    setTitle(current[0].cardTitle);
    setDescription(current[0].description);
    setIcon(current[0].icon);
    setTechs(current[0].tech);
  }, [active]);

  return (
    <motion.div
      layout
      className="mt-5 lg:mt-11 w-full flex flex-col-reverse lg:flex-row gap-10 justify-center items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          className="w-auto lg:w-1/2 flex justify-center items-center lg:justify-end max-w-full px-10 lg:p-0"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {icon}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-10 w-auto lg:w-1/2 lg:items-start items-center lg:text-start text-center">
        <AnimatePresence>
          <motion.div className="flex flex-col gap-10 w-[80%]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={title}
                className="capitalize text-4xl font-semibold"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={description}
                className="text-base"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col gap-10 w-[80%]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              className="capitalize text-2xl font-semibold"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              technologies and tools
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={description}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-[19px] w-full lg:justify-start justify-center"
            >
              {techs.map((val) => (
                <div key={val.id}>
                  <img src={val.icon ? val.icon.src : ""} alt={val.id} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default ExpertCard;
