import { useAppStore } from "@store/app";
import React, { useEffect, useRef } from "react";
import { easings, useSpring } from "react-spring";

type Props = {};

const PocketStationScreenCanvas = (props: Props) => {
  const { pocketStationAnimation, setPSAnimation } = useAppStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const screenIntroHelloRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useSpring({
    config: { duration: 4200, easing: easings.easeInOutQuad },
    delay: 4200,
    loop: false,
    from: {
      x: 700,
      y: 0,
    },
    to: [
      {
        x: 460,
        y: 350,
      },
    ],
    onStart(result, ctrl, item) {
      console.log("screen animation started");
    },
    onChange(result, ctrl, item) {
      if (result.value) {
        console.log("animation value", result.value);
        drawIntro(result.value.x, 350);
      }
    },
  });

  // Grabs the canvas and fills with base UV texture, then returns context for use
  const getContextAndDrawBase = () => {
    const context = canvasRef.current.getContext("2d");
    // clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(imageRef.current, 0, 0);
    context.save();

    return context;
  };

  const drawIntro = (x: number, y: number) => {
    if (canvasRef.current) {
      console.log("drawing intro", x, y);
      const context = getContextAndDrawBase();

      // Draw screens
      context.drawImage(screenIntroHelloRef.current, x, y);
    }
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
  }, [canvasRef, imageRef, pocketStationAnimation]);

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
        src="/images/Body_Front_Base_001-textured1.png"
        style={{ position: "absolute", top: "-9999em", left: "-9999em" }}
      />
      <img
        ref={screenIntroHelloRef}
        src="/images/ps-screens/intro-hello.png"
        style={{ position: "absolute", top: "-9999em", left: "-9999em" }}
      />
    </>
  );
};

export default PocketStationScreenCanvas;
