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
import {
  Camera,
  Vector3,
  PerspectiveCamera as ThreePerspectiveCamera,
  MathUtils,
  Quaternion,
} from "three";
import GlassCube from "../GlassCube";
import { dampE } from "maath/easing";

const useAnimatedCamera = (rotate: number) => {
  const ANIMATION_DURATION = 0.7;
  const prevRotate = useRef(rotate);
  const prevRotateTime = useRef(0);

  useEffect(() => {
    if (rotate !== prevRotate.current) {
      prevRotateTime.current = 0;
    }
  }, [rotate]);

  useFrame(({ camera, clock }, delta) => {
    // HERE, looking for a way to lerp camera lookAt in a way that can toggle.
    // cameraRef.current.rotateY(rotate);
    // cameraRef.current.rotateY(
    //   MathUtils.lerp(cameraRef.current.rotation.y, rotate, 0.25)
    // );

    // camera.rotation.y = MathUtils.lerp(camera.rotation.y, rotate, 0.1);
    // camera.rotation.y = MathUtils.lerp(camera.rotation.y, rotate, 0.1 * Math.max(delta, 1));
    // camera.quaternion.slerp(new Quaternion(0, rotate, 0, 0), 0.01 * delta)
    // camera.quaternion.slerp(new Quaternion(0, 0, 0, 0).setFromAxisAngle(new Vector3(0, 1, 0), rotate), Math.max(0.01 * delta, 1))
    // camera.quaternion.slerp(new Quaternion(0, 0, 0, 0).setFromAxisAngle(new Vector3(0, 1, 0), rotate), 0.1)
    // camera.updateProjectionMatrix();

    // dampE(camera.rotation, [0, rotate, 0], 1, delta)
    // camera.updateProjectionMatrix();

    prevRotateTime.current += delta;

    const duration =
      Math.min(prevRotateTime.current, ANIMATION_DURATION) / ANIMATION_DURATION;
    console.log("time", prevRotateTime.current, duration);
    camera.rotation.y = MathUtils.lerp(camera.rotation.y, rotate, duration);
    console.log("animating", camera.rotation.y, rotate);
    // camera.rotateY(MathUtils.lerp(camera.rotation.y, rotate, duration));
    if (prevRotateTime.current >= ANIMATION_DURATION) {
      prevRotate.current = rotate;
    }

    // console.log('time', clock.getElapsedTime())
    // const time = clock.getElapsedTime() - prevRotateTime.current;
    // if (time >= ANIMATION_DURATION) {
    //   prevRotate.current = rotate;
    //   prevRotateTime.current = 0;
    // }
    // if(prevRotate.current !== rotate && time < ANIMATION_DURATION) {
    //   console.log('animating', time, prevRotateTime.current)
    //   if(prevRotateTime.current === 0) {
    //     prevRotateTime.current = clock.getElapsedTime();
    //   }
    //   camera.rotation.y = MathUtils.lerp(camera.rotation.y, rotate, ANIMATION_DURATION / time);
    //   camera.updateProjectionMatrix();
    // }
  });
};

type Props = Partial<GroupProps> & {
  customizations: UserCustomizations;
  rotate: number;
};

const FLOOR_HEIGHT = 6;
const CUBE_SIZE = 4;
const CUBE_SUBDIVISIONS = 6;

const PrimitiveScene = ({ customizations, rotate, ...props }: Props) => {
  const cameraRef = useRef<ThreePerspectiveCamera>();
  useAnimatedCamera(rotate);

  console.log("rotate", rotate);

  //    useFrame((state) => {
  //     // HERE, looking for a way to lerp camera lookAt in a way that can toggle.
  //     cameraRef.current.lookAt(50, -50, 50);
  //     cameraRef.current.updateProjectionMatrix();
  //   });

  return (
    <>
      <Environment
        background
        blur={0.15}
        files="/images/studio_small_08_1k.hdr"
      >
        {/* Extra space lights if needed */}
        {/* <Lightformer intensity={4} position={[0, 7, 0]} scale={[10, 30, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
      </Environment>

      {/* <spotLight position={[0,10,0]} penumbra={1} castShadow angle={0.2} color="blue" intensity={5} /> */}
      {/* <rectAreaLight position={[0, 10, 0]} width={300} height={300} intensity={5} color={"blue"} castShadow /> */}

      <mesh
        name="left-back-cube"
        position={[CUBE_SIZE / 3, -(FLOOR_HEIGHT - CUBE_SIZE), CUBE_SIZE]}
        rotation={[0, Math.PI / 1.0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE, CUBE_SUBDIVISIONS]}
        />
        <meshPhysicalMaterial
          color={"#010101"}
          transmission={0.3}
          roughness={0.3}
          clearcoatRoughness={0.5}
          reflectivity={0.3}
        />
      </mesh>

      <mesh
        name="right-back-cube"
        position={[CUBE_SIZE + 0.1, -(FLOOR_HEIGHT - CUBE_SIZE), 0]}
        rotation={[0, Math.PI / 1.03, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE, CUBE_SUBDIVISIONS]}
        />
        <meshPhysicalMaterial
          color={"#010101"}
          transmission={0.3}
          roughness={0.3}
          clearcoatRoughness={0.5}
          reflectivity={0.3}
        />
      </mesh>

      <mesh
        name="left-front-cube"
        position={[-CUBE_SIZE / 4, -(FLOOR_HEIGHT - CUBE_SIZE), -CUBE_SIZE / 4]}
        rotation={[0, -Math.PI / 1.02, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE, CUBE_SUBDIVISIONS]}
        />
        <meshPhysicalMaterial
          color={"#010101"}
          transmission={0.3}
          roughness={0.3}
          clearcoatRoughness={0.5}
          reflectivity={0.3}
        />
      </mesh>

      <mesh
        name="sphere-inside"
        position={[CUBE_SIZE, -(FLOOR_HEIGHT - CUBE_SIZE * 2 - 2), 0]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[CUBE_SIZE / 3, 32, 16]} />
        <meshPhysicalMaterial
          color={"#FFFFFF"}
          transmission={1}
          roughness={0.1}
          reflectivity={0.5}
          clearcoatRoughness={0.5}
        />
        {/* <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} distortionScale={0} temporalDistortion={0} anisotropicBlur={0.3}  /> */}
      </mesh>

      <GlassCube
        shape="torus"
        position={[CUBE_SIZE, -(FLOOR_HEIGHT - 10), 0]}
        scale={0.75}
      />

      {/* Floor */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -(FLOOR_HEIGHT + .1), 0]} receiveShadow>
          <planeGeometry args={[100, 100]}  />
          <meshPhysicalMaterial color={"white"} />
        </mesh> */}

      <ContactShadows
        scale={60}
        position={[0, -FLOOR_HEIGHT + 1.75, 0]}
        blur={1}
        far={100}
        opacity={0.4}
      />

      {/* <OrbitControls autoRotate={customizations.animation.active} rotateSpeed={0.01} />     */}

      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        zoom={1}
        near={1}
        far={2000}
        fov={75}
        position={[4, 2, 20]}
      />

      {/* <EffectComposer disableNormalPass>
        <DepthOfField
          focusDistance={0} // where to focus
          focalLength={0.05} // focal length
          bokehScale={2} // bokeh size
        /></EffectComposer> */}
    </>
  );
};
export default PrimitiveScene;
