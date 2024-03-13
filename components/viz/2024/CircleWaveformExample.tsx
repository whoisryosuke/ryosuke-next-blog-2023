import P5VizWrapper from "@components/dom/P5Viz/P5VizWrapper";
import { P5SetupCallback, P5SketchCallback } from "@utils/p5";

function CircleWaveformExample() {
  const setup: P5SetupCallback = (p, colors) => {};
  const draw: P5SketchCallback = (p, colors, scene) => {
    p.background(colors.gray[9]); // Set the background to black

    p.beginShape();
    p.noFill();
    p.strokeWeight(2);
    p.stroke(colors.primary.default);

    const resolution = 64;
    const angleConversion = 360 / resolution;
    const radius = 100;
    const halfwayAcrossScreen = p.width / 2;
    const halfwayDownScreen = p.height / 2;
    for (let i = 0; i <= resolution; i++) {
      const amplitude = 2; // wave height
      const sin = p.sin(i / 5 + p.millis() / 1000) * amplitude;

      // const x = radius * p.cos(i / angleConversion) + halfwayAcrossScreen;
      // const y = radius * p.sin(i / angleConversion) + halfwayDownScreen;

      const circleX = radius * p.cos(i / 10) + halfwayAcrossScreen;
      const circleY = radius * p.sin(i / 10) + halfwayDownScreen;
      const noise = 100 * p.noise(0.005 * p.frameCount, circleX, circleY);

      const normal = p.createVector(circleX, circleY).normalize();

      const x = circleX + normal.x * noise;
      const y = circleY - normal.y * noise;

      p.vertex(x, y);
    }
    // p.vertex(p.width, halfwayDownScreen);

    p.endShape();

    // p.ellipse(10, 10, 72, 72);
  };

  return (
    <P5VizWrapper title="Circle Waveform Example" setup={setup} draw={draw} />
  );
}

export default CircleWaveformExample;
