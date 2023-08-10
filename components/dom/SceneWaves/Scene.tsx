import React from "react";
import Waves from "./Waves";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      {/* <gridHelper /> */}
      {/* <axesHelper /> */}
      {/* <Lights /> */}
      <pointLight intensity={1.0} position={[5, 3, 5]} castShadow />
      <ambientLight intensity={1.0} position={[0, 3, 5]} />
      {/* <Stage preset="rembrandt" intensity={1} environment="city">
        <Waves />
      </Stage> */}
      <Waves />
    </>
  );
};

export default Scene;
