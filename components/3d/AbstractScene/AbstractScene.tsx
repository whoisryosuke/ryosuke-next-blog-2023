import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { UserCustomizations } from "@store/app";

import { PropsWithChildren, useEffect, useRef } from "react";
import GlassCube from "../GlassCube";
import Cubes from "./Cubes";
import {
  Camera,
  Vector3,
  PerspectiveCamera as ThreePerspectiveCamera,
} from "three";

type Props = Partial<GroupProps> & {
  customizations: UserCustomizations;
};

const FLOOR_HEIGHT = 15;

const AbstractScene = ({ customizations, ...props }: Props) => {
  const cameraRef = useRef<ThreePerspectiveCamera>();

  useFrame((state) => {
    // HERE, looking for a way to lerp camera lookAt in a way that can toggle.
    cameraRef.current.lookAt(50, -50, 50);
    cameraRef.current.updateProjectionMatrix();
  });

  return (
    <>
      {/* <Environment background files="./images/studio_small_08_1k.hdr" {...props}> */}
      {/* Extra space lights if needed */}
      {/* <Lightformer intensity={4} position={[0, 7, 0]} scale={[10, 30, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
      {/* </Environment> */}
      <color attach="background" args={["#e0e0e0"]} />

      {/* <spotLight position={[0,0,0]} penumbra={1} castShadow angle={0.2} /> */}
      <rectAreaLight
        position={[0, 0, 20]}
        width={40}
        height={40}
        intensity={5}
        color={"white"}
        lookAt={() => [0, 0, 0]}
      />

      <Cubes customizations={customizations} />

      {/* Floor */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -(FLOOR_HEIGHT + .1), 0]}>
          <planeGeometry args={[100, 100]}  />
          <meshPhysicalMaterial color={"white"} />
        </mesh> */}

      <ContactShadows
        scale={500}
        position={[0, -FLOOR_HEIGHT, 0]}
        blur={1}
        far={100}
        opacity={0.3}
      />

      {/* <OrbitControls autoRotate={customizations.animation.active} rotateSpeed={0.01} />     */}

      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        zoom={1}
        near={1}
        far={2000}
        fov={75}
        position={[4, 20, 100]}
      />

      <EffectComposer disableNormalPass>
        <DepthOfField
          focusDistance={0} // where to focus
          focalLength={0.05} // focal length
          bokehScale={2} // bokeh size
        />
      </EffectComposer>
      {/*         
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={1} intensity={2} />
          <TiltShift2 blur={0.2} />
        </EffectComposer> */}
    </>
  );
};
export default AbstractScene;
