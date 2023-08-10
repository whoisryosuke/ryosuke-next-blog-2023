import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import React, { Suspense } from "react";
import useStore from "src/store";
import Box from "../Box/Box";
import Scene from "./Scene";

type Props = {};

export const SceneWaves = (props: Props) => {
  const { theme } = useStore();
  return (
    <Box
      height={{
        mobile: 5,
        tablet: 3,
      }}
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        // Mask the bottom of the canvas with a gradient
        WebkitMaskImage: `linear-gradient(to top, transparent 25%, black 75%)`,
        // '-webkit-mask-image': `linear-gradient(to top, transparent 25%, black 75%)`,
      }}
    >
      <Canvas
        // concurrent
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
        shadows
        dpr={[1, 2]}
      >
        {/* <Stats /> */}
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <EffectComposer>
          <DepthOfField
            focusDistance={2.0}
            focalLength={0.1}
            bokehScale={2.0}
          />
        </EffectComposer>
      </Canvas>
    </Box>
  );
};

export default SceneWaves;
