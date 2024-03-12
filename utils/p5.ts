import { CanvasSize, useAppStore } from "@store/app";
import { GraphicsColors, colors } from "@theme/graphics";
import p5 from "p5";

interface P5SceneInfo {
  canvasSize: CanvasSize;
}

type P5SetupCallback = (p: p5, colors: GraphicsColors) => void;
type P5SketchCallback = (
  p: p5,
  colors: GraphicsColors,
  scene: P5SceneInfo
) => void;

export const createSketch = (
  setup: P5SetupCallback,
  draw: P5SketchCallback
) => {
  let time = 0;
  let defaultCanvasSize = {
    x: 480,
    y: 480,
  };
  return (p) => {
    let y = 100;
    p.setup = () => {
      console.log("setup canvas");
      // Create the canvas
      // We scale it to 100% width and a set height
      const { canvasSize } = useAppStore.getState();
      p.createCanvas(
        canvasSize?.width ?? defaultCanvasSize.x,
        defaultCanvasSize.y
      );

      p.frameRate(30);

      // Sensible defaults for the scene
      p.background(colors.background); // Set the background to black

      // Run user's setup function
      setup(p, colors);
    };
    p.draw = () => {
      // Bail if we aren't client-side
      if (typeof window === "undefined") return;

      const { canvasSize } = useAppStore.getState();

      //   console.log("canvas size", canvasSize);

      const scene = {
        canvasSize,
      };

      // Run user's draw function
      draw(p, colors, scene);
    };

    p.windowResized = () => {
      console.log("resized window");
      const { canvasSize } = useAppStore.getState();

      p.resizeCanvas(canvasSize.width, canvasSize.height);
    };
  };
};
