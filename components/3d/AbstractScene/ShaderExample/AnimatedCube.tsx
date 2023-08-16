import * as THREE from "three";
import { useFrame, extend, MeshProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { shaderMaterial } from "@react-three/drei";


import vertex from "./shaders/shader.vert";
import fragment from "./shaders/shader.frag";

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    offset: 0,
    // A uniform to turn on/off animation if user doesn't want it
    stop: 1,
    color: new THREE.Color(0.05, 0.2, 0.825),
  },
  vertex,
  fragment
);

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ColorShiftMaterial.key = THREE.MathUtils.generateUUID();

extend({ ColorShiftMaterial });

type ShaderProps = Partial<MeshProps> & {
  size: number;
  offset: number;
  shouldAnimate: boolean;
};

const AnimatedCube = ({size, offset, shouldAnimate, ...props}: ShaderProps) => {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    // }
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2);
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      castShadow
      receiveShadow
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxGeometry args={[size, size, size]} />
      {/* @ts-ignore */}
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} offset={offset} stop={shouldAnimate ? 1 : 0} />
    </mesh>
  );
};

export default AnimatedCube;
