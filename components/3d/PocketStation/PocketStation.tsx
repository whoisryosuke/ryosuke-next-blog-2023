import React, { useCallback, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { CanvasTexture, TextureLoader, Vector3 } from "three";
import { animated, easings, useSpring } from "@react-spring/three";
import { UserInputMap } from "@store/input";
import useRequestAnimationFrame from "features/animation/useRequestAnimationFrame";
import { useAppStore } from "@store/app";
import ScreenShaderMaterial from "./ScreenShader/ScreenShaderMaterial";

extend({ ScreenShaderMaterial });

const AnimatedMesh = (props) => {
  return <animated.mesh {...props} />;
};

const MODEL_PATH = "/models/PocketStation-v11.glb";
const BUTTON_PRESSED_DEPTH = [0, 0, -0.1];
const BUTTON_DEFAULT_DEPTH = [0, 0, 0];

type Props = {
  controls: UserInputMap;
  position: any;
  rotation: any;
};

export default function PocketStation({ controls, ...props }: Props) {
  const frontPanelRef = useRef(null);
  // @ts-ignore Yeah it exists
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const screenMaterial = useRef(null);
  const frameId = useRef(null);
  const screenCanvas = useRef(null);
  const { pocketStationAnimating } = useAppStore();

  const { upY, downY, leftY, rightY, confirmY } = useSpring({
    upY: controls.up ? BUTTON_PRESSED_DEPTH : BUTTON_DEFAULT_DEPTH,
    downY: controls.down ? BUTTON_PRESSED_DEPTH : BUTTON_DEFAULT_DEPTH,
    leftY: controls.left ? BUTTON_PRESSED_DEPTH : BUTTON_DEFAULT_DEPTH,
    rightY: controls.right ? BUTTON_PRESSED_DEPTH : BUTTON_DEFAULT_DEPTH,
    confirmY: controls.confirm ? BUTTON_PRESSED_DEPTH : BUTTON_DEFAULT_DEPTH,
  });

  const { rotation } = useSpring({
    config: { duration: 4200, easing: easings.easeInOutQuad },
    delay: 4200,
    loop: false,
    from: {
      rotation: [0, 0, 0],
    },
    to: [
      {
        rotation: [-1, 0, 0],
      },
      {
        rotation: [0, 0, 0],
      },
    ],
  });

  // useEffect(() => {
  //   if (window) {
  //     const screenCanvas = document.getElementById("pocketstation-screen");
  //     const canvasTexture = new CanvasTexture(screenCanvas);
  //     // screenMaterial.current = materials.PS_FrontScreen;
  //     console.log("materials.PS_FrontScreen", materials.PS_FrontScreen);
  //     //@ts-ignore
  //     materials.PS_FrontScreen.map = canvasTexture;
  //     materials.PS_FrontScreen.needsUpdate = true;
  //   }
  // }, []);

  // const animate = (timer) => {
  //   // console.log("updating material", timer);
  //   const screenCanvas = document.getElementById("pocketstation-screen");

  //   const canvasTexture = new CanvasTexture(screenCanvas);
  //   // screenMaterial.current = materials.PS_FrontScreen;
  //   // @ts-ignore
  //   materials.PS_FrontScreen.map = canvasTexture;
  // };

  // const startAnimation = useCallback(() => {
  //   cancelAnimationFrame(frameId.current);
  //   frameId.current = requestAnimationFrame(animate);
  // }, [animate]);

  // React.useEffect(() => {
  //   if (window) {
  //     console.log("restarting material sync", pocketStationAnimating);
  //     pocketStationAnimating && startAnimation();
  //   }
  //   return () => cancelAnimationFrame(frameId.current);
  // }, [pocketStationAnimating]);

  // useRequestAnimationFrame(animate);

  return (
    <animated.group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyBackComplete001.geometry}
        material={materials.PS_Back}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontScreen.geometry}
        material={materials.PS_FrontScreen}
      >
        <screenShaderMaterial
          time={0}
          uTexture={new TextureLoader().load(
            "./images/Body.Front.Screen.Rotated-textured1.png"
          )}
        />
      </mesh>
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontPanel003.geometry}
        material={materials.PS_FrontPanel}
        rotation={rotation}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.CurveLanyardBaked.geometry}
        material={materials.Lanyard}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.LanyardNotch.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.CurveLanyardTie001.geometry}
        material={materials["BlackPlastic.001"]}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsLeft.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={leftY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsUp.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={upY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsRight.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={rightY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsDown.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={downY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsConfirm.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={confirmY}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontBase002.geometry}
        material={materials["PS_FrontScreen.001"]}
      />
    </animated.group>
  );
}
useGLTF.preload(MODEL_PATH);
