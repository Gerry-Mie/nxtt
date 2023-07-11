"use client";
import React, { useEffect, useRef } from "react";
import { Html, useProgress } from "@react-three/drei";
import loading from "@/animation/loading.json";
import Lottie from "lottie-web";

interface CanvasLoaderProps {
  setProgress?: any;
}

const CanvasLoader = (props: CanvasLoaderProps) => {
  const { progress } = useProgress();
  const { setProgress } = props;
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animationContainer.current) {
      Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loading,
      });
    }
  }, []);
  return (
    <Html>
      <div
        ref={animationContainer}
        className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-primary-foreground"
      >
        {/* <p>{progress.toFixed(2)}%</p> */}
      </div>
    </Html>
  );
};

export default CanvasLoader;
