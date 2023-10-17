import { useAppStore } from "@store/app";
import React, { useEffect, useRef } from "react";
import { easings, useSpring } from "react-spring";
import PSIntroScreen from "./screens/PSIntroScreen";

type Props = {};

const PocketStationScreenCanvas = (props: Props) => {
  const { pocketStationAnimation, setPSAnimation } = useAppStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Grabs the canvas and fills with base UV texture, then returns context for use
  const getContextAndDrawBase = () => {
    const ctx = canvasRef.current.getContext("2d");
    // clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // context.fillStyle = "#FFFFFF";
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    ctx.filter = "saturate(150%)";
    ctx.drawImage(imageRef.current, 0, 0);
    ctx.save();

    return ctx;
  };

  useEffect(() => {
    if (canvasRef.current) {
      const context = getContextAndDrawBase();

      // Draw screens
      // context.drawImage(screenIntroHelloRef.current, 460, 350);

      // Draw random stuff!
      //   context.fillStyle = "#000000";
      //   context.fillRect(560, 300, 20, 20);
    }
  }, []);

  //   const loadImage = () => {
  //     const context = canvasRef.current.getContext("2d");
  //     context.fillStyle = "#FFFFFF";
  //     context.fillRect(0, 0, 128, 128);
  //     // context.drawImage(imageRef.current, 0, 0);
  //   };

  return (
    <>
      <canvas
        ref={canvasRef}
        id="pocketstation-screen"
        width={1024}
        height={1024}
        style={{ position: "absolute", top: "-9999em", left: "-9999em" }}
        // style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}
      />
      <img
        ref={imageRef}
        src="/images/Body.Front.Screen.Rotated-textured1.png"
        style={{ position: "absolute", top: "-9999em", left: "-9999em" }}
      />

      <PSIntroScreen getContextAndDrawBase={getContextAndDrawBase} />
    </>
  );
};

export default PocketStationScreenCanvas;
