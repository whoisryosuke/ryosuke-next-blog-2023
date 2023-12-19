import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    BodyBackComplete001: THREE.Mesh;
    BodyFrontScreen: THREE.Mesh;
    BodyFrontPanel003: THREE.Mesh;
    CurveLanyardBaked: THREE.Mesh;
    LanyardNotch: THREE.Mesh;
    CurveLanyardTie001: THREE.Mesh;
    BodyFrontButtonsLeft: THREE.Mesh;
    BodyFrontButtonsUp: THREE.Mesh;
    BodyFrontButtonsRight: THREE.Mesh;
    BodyFrontButtonsDown: THREE.Mesh;
    BodyFrontButtonsConfirm: THREE.Mesh;
    BodyFrontBase002: THREE.Mesh;
  };
  materials: {
    PS_Back: THREE.MeshStandardMaterial;
    PS_FrontScreen: THREE.MeshStandardMaterial;
    PS_FrontPanel: THREE.MeshStandardMaterial;
    Lanyard: THREE.MeshStandardMaterial;
    BlackPlastic: THREE.MeshStandardMaterial;
    ["BlackPlastic.001"]: THREE.MeshStandardMaterial;
    ["Material.030"]: THREE.MeshStandardMaterial;
    ["PS_FrontScreen.001"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function PocketStationClean(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/PocketStation-v11.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.BodyBackComplete001.geometry}
        material={materials.PS_Back}
      />
      <mesh
        geometry={nodes.BodyFrontScreen.geometry}
        material={materials.PS_FrontScreen}
      />
      <mesh
        geometry={nodes.BodyFrontPanel003.geometry}
        material={materials.PS_FrontPanel}
      />
      <mesh
        geometry={nodes.CurveLanyardBaked.geometry}
        material={materials.Lanyard}
      />
      <mesh
        geometry={nodes.LanyardNotch.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        geometry={nodes.CurveLanyardTie001.geometry}
        material={materials["BlackPlastic.001"]}
      />
      <mesh
        geometry={nodes.BodyFrontButtonsLeft.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        geometry={nodes.BodyFrontButtonsUp.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        geometry={nodes.BodyFrontButtonsRight.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        geometry={nodes.BodyFrontButtonsDown.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        geometry={nodes.BodyFrontButtonsConfirm.geometry}
        material={materials["Material.030"]}
      />
      <mesh
        geometry={nodes.BodyFrontBase002.geometry}
        material={materials["PS_FrontScreen.001"]}
      />
    </group>
  );
}

useGLTF.preload("/models/PocketStation-v11.glb");
