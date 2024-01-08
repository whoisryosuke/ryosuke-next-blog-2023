import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { CanvasTexture, TextureLoader, Vector3 } from "three";
import { animated, easings, useSpring } from "@react-spring/three";
import { UserInputMap } from "@store/input";
import useRequestAnimationFrame from "features/animation/useRequestAnimationFrame";
import { useAppStore } from "@store/app";
import ScreenShaderMaterial from "./ScreenShader/ScreenShaderMaterial";
import { screenAnimations } from "./screens/screen-animations";

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
  const currentAnimation = useRef("intro");
  // @ts-ignore Yeah it exists
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const screenMaterial = useRef(null);
  const frameId = useRef(null);
  const screenCanvas = useRef(null);
  const { pocketStationAnimating, customizations } = useAppStore();
  const [hearts, setHearts] = useState<number[]>([]);

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

  const spawnHeart = useCallback((id: number) => {
    setHearts((prevHearts) => [...prevHearts, id]);

    // Destroy heart after animation time
    setTimeout(() => {
      setHearts((prevHearts) =>
        prevHearts.filter((stateHeart) => stateHeart == id)
      );
    }, 1.0);
  }, []);

  // useRequestAnimationFrame(animate);
  useFrame((state, delta) => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    // }
    if (frontPanelRef.current.material) {
      frontPanelRef.current.material.uniforms.time.value += delta;

      // Switch to next screen after certain amount of time
      if (
        frontPanelRef.current.material.uniforms.time.value >
        screenAnimations.intro.animationTime
      ) {
        frontPanelRef.current.material.uniforms.screenIndex.value = 1;
      }

      // if (hearts.length > 1) {
      //   frontPanelRef.current.material.uniforms.heart1.value = hearts[0];
      // }
      // if (
      //   frontPanelRef.current.material.uniforms.screenIndex.value == 1 &&
      //   controls.confirm
      // ) {
      //   //TODO: debounce this
      //   spawnHeart(frontPanelRef.current.material.uniforms.time.value);
      // }
    }
  });

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
        ref={frontPanelRef}
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontScreen.geometry}
        material={materials.PS_FrontScreen}
      >
        {/* @ts-ignore */}
        <screenShaderMaterial
          time={0}
          baseTexture={new TextureLoader().load(
            "./images/Body.Front.Screen.Rotated-textured1.png"
          )}
          introTexture={new TextureLoader().load(
            "./images/ps-screens/screen-intro.png"
          )}
          welcomeToroTexture={new TextureLoader().load(
            "./images/ps-screens/screen-welcome-toro.png"
          )}
          welcomeTextTexture={new TextureLoader().load(
            "./images/ps-screens/screen-welcome.png"
          )}
          heartTexture={new TextureLoader().load(
            "./images/ps-screens/screen-heart.png"
          )}
        />
      </mesh>
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontPanel003.geometry}
        material={materials.PS_FrontPanel}
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
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
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
        position={leftY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsUp.geometry}
        material={materials["Material.030"]}
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
        position={upY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsRight.geometry}
        material={materials["Material.030"]}
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
        position={rightY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsDown.geometry}
        material={materials["Material.030"]}
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
        position={downY}
      />
      <AnimatedMesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.BodyFrontButtonsConfirm.geometry}
        material={materials["Material.030"]}
        rotation={customizations.animation.active ? rotation : [0, 0, 0]}
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
