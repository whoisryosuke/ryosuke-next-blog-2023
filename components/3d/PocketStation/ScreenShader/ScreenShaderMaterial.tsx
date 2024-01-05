import * as THREE from "three";
import { useFrame, extend, MeshProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./shaders/shader.vert";
import fragment from "./shaders/shader.frag";

const ScreenShaderMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    time: 0,
    // offset: 0,
    // A uniform to turn on/off animation if user doesn't want it
    // stop: 1,
    // color: new THREE.Color(0.05, 0.2, 0.825),
  },
  vertex,
  fragment
);

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ScreenShaderMaterial.key = THREE.MathUtils.generateUUID();

export default ScreenShaderMaterial;
