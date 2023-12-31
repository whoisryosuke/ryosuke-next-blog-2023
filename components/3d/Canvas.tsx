import { useRef } from "react";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { OrbitControls, Preload, Stats } from "@react-three/drei";

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} />;
};
const CanvasWrapper = ({ children, ...props }: CanvasProps) => {
  return (
    <>
      <Canvas
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        mode="concurrent"
        {...props}
      >
        {/* <Stats /> */}
        {/* <Controls /> */}
        <Preload all />
        {children}
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
