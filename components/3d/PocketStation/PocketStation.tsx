import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CanvasTexture, Vector3 } from "three";
import { animated, easings, useSpring } from "@react-spring/three";
import { UserInputMap } from "@store/input";

const BUTTON_PRESSED_DEPTH = [0, 0, -0.1];
const BUTTON_DEFAULT_DEPTH = [0, 0, 0];

type Props = {
  controls: UserInputMap;
};

export default function PocketStation({ controls, ...props }: Props) {
  const frontPanelRef = useRef(null);
  const { nodes, materials } = useGLTF("/models/PocketStation-v7.glb");
  const screenMaterial = useRef(null);

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

  useEffect(() => {
    if (window) {
      const screenCanvas = document.getElementById("pocketstation-screen");
      const canvasTexture = new CanvasTexture(screenCanvas);
      // screenMaterial.current = materials.PS_FrontScreen;
      materials.PS_FrontScreen.map = canvasTexture;
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyBackComplete001.geometry}
        material={materials.PS_Back}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontBase001.geometry}
        material={materials.PS_FrontScreen}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontPanel003.geometry}
        material={materials.PS_FrontPanel}
        rotation={rotation}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CurveLanyardBaked.geometry}
        material={materials.Lanyard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LanyardNotch.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CurveLanyardTie001.geometry}
        material={materials["BlackPlastic.001"]}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontButtonsLeft.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={leftY}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontButtonsUp.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={upY}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontButtonsRight.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={rightY}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontButtonsDown.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={downY}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.BodyFrontButtonsConfirm.geometry}
        material={materials["Material.030"]}
        rotation={rotation}
        position={confirmY}
      />
    </group>
  );
}

useGLTF.preload("/PocketStation-v1.glb");
