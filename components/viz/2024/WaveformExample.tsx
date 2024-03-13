import P5VizWrapper from "@components/dom/P5Viz/P5VizWrapper";
import { P5SetupCallback, P5SketchCallback } from "@utils/p5";

function WaveformExample() {
  const setup: P5SetupCallback = (p, colors) => {};
  const draw: P5SketchCallback = (p, colors, scene) => {
    p.background(colors.gray[9]); // Set the background to black

    p.beginShape();
    p.noFill();
    p.strokeWeight(2);
    p.stroke(colors.primary.default);

    const resolution = 30;
    const scale = p.width / resolution;
    const halfwayDownScreen = p.height / 2;
    for (let i = 0; i <= resolution; i++) {
      const amplitude = 50; // wave height
      const sin = p.sin(i / 5 + p.millis() / 1000) * amplitude;
      p.vertex(i * scale, sin + halfwayDownScreen);
    }
    // p.vertex(p.width, halfwayDownScreen);

    p.endShape();

    // p.ellipse(10, 10, 72, 72);
  };

  return <P5VizWrapper title="Waveform Example" setup={setup} draw={draw} />;
}

export default WaveformExample;
