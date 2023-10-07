import React, { useEffect, useRef } from "react";

type Props = {};

const PocketStationScreenCanvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const screenIntroHelloRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(imageRef.current, 0, 0);
      context.save();

      // Draw screens
      context.drawImage(screenIntroHelloRef.current, 460, 350);

      // Draw random stuff!
      //   context.fillStyle = "#000000";
      //   context.fillRect(560, 300, 20, 20);
    }
  }, [canvasRef, imageRef]);

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
