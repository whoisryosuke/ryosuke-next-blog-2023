import P5VizWrapper from "@components/dom/P5Viz/P5VizWrapper";
import { P5SetupCallback, P5SketchCallback } from "@utils/p5";

function TestViz() {
  const setup: P5SetupCallback = (p, colors) => {
    console.log("setup canvas inside MDX");
  };
  const draw: P5SketchCallback = (p, colors, scene) => {
    p.background(colors.gray[9]); // Set the background to black

    p.fill("#008080");
    const distance = 10;
    const speed = 120; // larger = slower
    const offsetX = p.sin(p.millis() / speed) * distance;
    const offsetY = p.cos(p.millis() / speed) * distance;
    p.ellipse(
      scene.canvasSize.width / 2 + offsetX,
      scene.canvasSize.height / 2 + offsetY,
      72,
      72
    );

    // p.ellipse(10, 10, 72, 72);
  };

  return <P5VizWrapper title="Test Viz" setup={setup} draw={draw} />;
}

export default TestViz;
