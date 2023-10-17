import React, { useRef } from "react";
import { easings, useSpring } from "react-spring";
import { createScreenClipMask } from "../animation";
import { useAppStore } from "@store/app";

type Props = {
  getContextAndDrawBase: () => CanvasRenderingContext2D;
};

const PSIntroScreen = ({ getContextAndDrawBase }: Props) => {
  const screenIntroHelloRef = useRef<HTMLCanvasElement>(null);
  const { pocketStationAnimation, setPocketStationAnimating } = useAppStore();

  useSpring({
    config: { duration: 4200, easing: easings.easeInOutQuad },
    delay: 4200,
    loop: false,
    from: {
      x: 0,
      y: 0,
    },
    to: [
      {
        x: 350,
        y: 460,
      },
    ],
    onStart(result, ctrl, item) {
      console.log("screen animation started");
      setPocketStationAnimating(true);
    },
    onChange(result, ctrl, item) {
      if (result.value) {
        drawIntro(350, result.value.y);
      }
    },
    onRest(result, ctrl, item) {
      console.log("screen animation ended");
      //   setPocketStationAnimating(false);
    },
  });

  const drawIntro = (x: number, y: number) => {
    // console.log("drawing intro", x, y);
    const ctx = getContextAndDrawBase();

    createScreenClipMask(ctx);

    // Draw screens
    ctx.drawImage(screenIntroHelloRef.current, x, y);
  };

  return (
    <img
      ref={screenIntroHelloRef}
      src="/images/ps-screens/intro-hello-rotated.png"
      style={{ position: "absolute", top: "-9999em", left: "-9999em" }}
    />
  );
};

export default PSIntroScreen;
