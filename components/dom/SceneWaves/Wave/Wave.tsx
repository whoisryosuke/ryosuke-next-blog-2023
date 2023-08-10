import React, { useMemo, useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import "./material";
import { Color } from "three";
import useStore from "src/store";
import { MainNavNames } from "src/types/main-nav";

type WaveProps = MeshProps & {
  offset: number;
};

const NAV_TO_INDEX: Record<MainNavNames, number> = {
  none: 0,
  writing: 1,
  work: 2,
  resources: 3,
  playlist: 4,
};

const WAVE_SIZE = {
  width: 0.5,
  height: 10,
  depth: 0.05,
  widthSegment: 2,
  heightSegment: 64,
};

const WAVE_PROPERTIES = {
  color: {
    light: new Color({
      r: 0.95,
      g: 0.95,
      b: 0.95,
    }),
    dark: new Color("#000"),
    hovered: new Color("#001BD8"),
  },
};
const SPEED = 2;

function Wave({ offset, ...props }: WaveProps) {
  const { mainNav, theme } = useStore();

  // There's 18 waves, we want to do nearest ones and skip between
  // Take the NAV_TO_INDEX and multiply by 2 to adjust for spacing
  // And we add 8 to offset it enough to be in camera view
  const isColored =
    mainNav !== "none" && offset === NAV_TO_INDEX[mainNav] * 2 + 8;

  const themeColor =
    theme === "light"
      ? WAVE_PROPERTIES.color.light
      : WAVE_PROPERTIES.color.dark;

  const geom = useRef();
  useFrame((state) => {
    state.gl.setClearColor(theme === "light" ? "#FFF" : "#111");
    const time = state.clock.getElapsedTime();
    geom.current.material.uniforms.time.value = time;
    geom.current.material.uniforms.offset.value = offset;

    if (isColored) {
      geom.current.material.uniforms.color.value =
        WAVE_PROPERTIES.color.hovered;
    } else {
      geom.current.material.uniforms.color.value = themeColor;
    }

    // if(mainNav === 'logo' && offset % Math.round(Math.cos(time * 4) + 1) === 0) {

    // We light up the bands when user hovers over logo
    // It's offset by 12 so we don't light up anything off camera
    if (
      mainNav === "logo" &&
      offset === Math.round(Math.cos(time * SPEED) * 4) + 12
    ) {
      geom.current.material.uniforms.color.value =
        WAVE_PROPERTIES.color.hovered;
    }
    // geom.current.geometry.verticesNeedUpdate = true
  });

  return (
    <mesh
      ref={geom}
      rotation={[-Math.PI / 2, -Math.PI, 0]}
      castShadow
      receiveShadow
      {...props}
    >
      <boxBufferGeometry
        args={[
          WAVE_SIZE.width,
          WAVE_SIZE.height,
          WAVE_SIZE.depth,
          WAVE_SIZE.widthSegment,
          WAVE_SIZE.heightSegment,
        ]}
      />
      <waveMaterial />
      {/* <meshBasicMaterial wireframe /> */}
    </mesh>
  );
}

export default Wave;
