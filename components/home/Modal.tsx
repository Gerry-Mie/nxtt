"use client";
import Close from "@/assets/Close";
import React, { useEffect, useRef, ReactNode } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { AnimatePresence, motion } from "framer-motion";

interface modalProps {
  children?: ReactNode;
  type: "message" | "wrapper";
  className?: string;
  success?: boolean;
  icon?: any;
  iconType?: "normal" | "animation";
  title?: string;
  message?: string;
  show: boolean;
  onHide: () => void;
}

function Modal({
  children,
  className,
  type,
  icon,
  iconType,
  success = true,
  title,
  message,
  show,
  onHide,
}: modalProps) {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: success
        ? require("@/assets/lottie/Check.json")
        : require("@/assets/lottie/Failed.json"),
    });

    return () => {
      animation.destroy();
    };
  }, [success]);

  return (
    <AnimatePresence>
      <motion.div
        className={`${
          !show && "hidden"
        } z-[20] fixed top-0 left-0 w-full h-full bg-[#0000001b] flex items-center justify-center p-5`}
      >
        {show && (
          <motion.div
            className={`${className} ${
              type === "wrapper" ? "w-fit h-fit" : "w-[752px] h-[334px]"
            } z-[21] bg-white relative max-w-full flex flex-col items-center py-5 px-5 lg:px-20 rounded-[20px]`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button className="absolute top-3 right-3" onClick={onHide}>
              <Close />
            </button>
            {type === "wrapper" && children}
            {type === "message" && (
              <>
                {iconType === "animation" ? (
                  <div
                    className="w-[180px] h-[180px]"
                    ref={animationContainer}
                  />
                ) : (
                  <div className="">{icon}</div>
                )}
                <p
                  className={`${
                    success ? "text-success" : "text-danger"
                  } text-[28px] font-semibold text-center`}
                >
                  {title}
                </p>
                <p className="text-[15px] text-center">{message}</p>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
