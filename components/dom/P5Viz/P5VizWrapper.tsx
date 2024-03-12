import React, { useEffect, useRef } from "react";
import P5Viz from "./P5Viz";
import { createSketch } from "@utils/p5";
import { useAppStore } from "@store/app";
import useResizeObserver from "@react-hook/resize-observer";

type Props = {
  setup: any;
  draw: any;
  title: string;
};

const P5VizWrapper = ({ setup, draw, title }: Props) => {
  const ref = useRef(null);
  const { canvasSize, setCanvasSize } = useAppStore();
  const sketch = createSketch(setup, draw);

  useResizeObserver(ref.current, (entry) => {
    console.log("resize observer", entry.contentRect.width);
    setCanvasSize({
      width: entry.contentRect.width,
      height: entry.contentRect.height,
    });
  });

  return <P5Viz ref={ref} title={title} sketch={sketch} height={480} />;
};

export default P5VizWrapper;
