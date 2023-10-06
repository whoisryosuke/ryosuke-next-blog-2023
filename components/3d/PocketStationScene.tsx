import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { UserCustomizations } from "@store/app";

import { PropsWithChildren } from "react";
import GlassCube from "./GlassCube";
import PocketStation from "./PocketStation/PocketStation";
import Canvas from "./Canvas";
import PocketStationController from "./PocketStation/PocketStationController";

type Props = Partial<GroupProps> & {
  customizations: UserCustomizations;
};

const FLOOR_HEIGHT = 15;

const PocketStationScene = ({ customizations, ...props }: Props) => {
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Environment
        // background
        files="./images/neon_photostudio_1k.hdr"
        {...props}
      >
        {/* Extra space lights if needed */}
        <Lightformer
          intensity={4}
          position={[0, 7, 0]}
          scale={[10, 30, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      {/* <color attach="background" args={["#e0e0e0"]} /> */}

      {/* <spotLight position={[0,0,0]} penumbra={1} castShadow angle={0.2} /> */}
      <rectAreaLight
        position={[0, 0, -10]}
        width={40}
        height={40}
        intensity={10}
        color={"white"}
        lookAt={() => [0, 0, 0]}
      />

      <PocketStationController />

      <OrbitControls
        // autoRotate={customizations.animation.active}
        autoRotate={false}
        rotateSpeed={0.01}
      />
      {/*         
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={1} intensity={2} />
          <TiltShift2 blur={0.2} />
        </EffectComposer> */}
    </Canvas>
  );
};
export default PocketStationScene;
