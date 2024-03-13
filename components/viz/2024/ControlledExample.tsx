import Button from "@components/dom/Button/Button";
import Glass from "@components/dom/Glass/Glass";
import P5VizWrapper from "@components/dom/P5Viz/P5VizWrapper";
import Slider from "@components/dom/Slider/Slider";
import Stack from "@components/dom/Stack/Stack";
import { P5SetupCallback, P5SketchCallback } from "@utils/p5";
import { useRef, useState } from "react";

function ControlledExample() {
  const visible = useRef(false);
  const [inputOffsetX, setOffsetX] = useState(0); // For DOM
  const offsetX = useRef(0); // For canvas

  const setup: P5SetupCallback = (p, colors) => {};
  const draw: P5SketchCallback = (p, colors, scene) => {
    p.background(colors.gray[9]); // Set the background to black

    p.fill(colors.primary.default);
    p.strokeWeight(2);
    p.stroke(colors.primary.pressed);

    const halfwayAcrossScreen = p.width / 2;
    const halfwayDownScreen = p.height / 2;
    if (visible.current)
      p.circle(halfwayAcrossScreen + offsetX.current, halfwayDownScreen, 60);

    // p.ellipse(10, 10, 72, 72);
  };

  const toggleVisibility = () => {
    visible.current = !visible.current;
  };
  const handleWeightChange = (e: React.FormEvent<HTMLInputElement>) => {
    offsetX.current = Number(e.currentTarget.value);
    setOffsetX(Number(e.currentTarget.value));
  };

  return (
    <div>
      <P5VizWrapper title="Controlled Example" setup={setup} draw={draw} />
      <Glass width="50%" p={3} margin="auto" borderRadius="round">
        <Stack responsive={false} alignItems="center">
          <Button solid onClick={toggleVisibility}>
            {visible ? "Hide" : "Show"}
          </Button>
          <Slider
            type="range"
            id="volume"
            name="fontWeightRegular"
            value={inputOffsetX}
            min="0"
            max="100"
            step="1"
            onChange={handleWeightChange}
          />
        </Stack>
      </Glass>
    </div>
  );
}

export default ControlledExample;
