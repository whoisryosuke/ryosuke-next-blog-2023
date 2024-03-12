import { CanvasSize, useAppStore } from "@store/app";
import { GraphicsColors, colors } from "@theme/graphics";
import p5 from "p5";

// Scene data we pass to the `draw` method
interface P5SceneInfo {
  canvasSize: CanvasSize;
}

// The callbacks the user uses (usually in MDX)
export type P5SetupCallback = (p: p5, colors: GraphicsColors) => void;
export type P5SketchCallback = (
  p: p5,
  colors: GraphicsColors,
  scene: P5SceneInfo
) => void;

/**
 * Wrapper for the `sketch` prop passed to P5 to create blog viz.
 * Handles sensible defaults like setting canvas size.
 * @param setup
 * @param draw
 * @returns
 */
export const createSketch = (
  setup: P5SetupCallback,
  draw: P5SketchCallback
) => {
  let canvasSize = {
    width: 480,
    height: 400, // Change fixed height here
  };
  return (p) => {
    p.setup = () => {
      // Create the canvas
      // We scale it to 100% width and a fixed height (above)
      // We grab the store instead of querying DOM
      // because store is more accurate thanks to ResizeObserver
      const { canvasSize: canvasSizeStore } = useAppStore.getState();
      canvasSize.width = canvasSizeStore.width;
      //   canvasSize.height = canvasSizeStore.height;
      p.createCanvas(canvasSizeStore.width, canvasSizeStore.height);

      p.frameRate(30);

      // Sensible defaults for the scene
      p.background(colors.background); // Set the background to black

      // Run user's setup function
      setup(p, colors);
    };
    p.draw = () => {
      // Bail if we aren't client-side
      if (typeof window === "undefined") return;

      const scene = {
        canvasSize,
      };

      // Run user's draw function
      draw(p, colors, scene);
    };

    p.windowResized = () => {
      const container = document.querySelector(".p5-viz");
      const containerSize = container.getBoundingClientRect();

      canvasSize.width = containerSize.width;
      //   canvasSize.height = containerSize.height;

      p.resizeCanvas(containerSize.width, containerSize.height);
    };
  };
};
