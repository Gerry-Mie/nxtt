import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
