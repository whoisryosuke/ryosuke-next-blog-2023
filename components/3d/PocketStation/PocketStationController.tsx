import React from "react";
import PocketStation from "./PocketStation";
import { useInputStore } from "@store/input";
import { easings, useSpring } from "@react-spring/three";

type Props = {};

const PocketStationController = (props: Props) => {
  const { input } = useInputStore();

  const { rotation } = useSpring({
    config: { duration: 4200, easing: easings.easeInOutQuad },
    delay: 4200,
    loop: true,
    from: {
      rotation: [0, 0, 0],
    },
    to: [
      {
        rotation: [0, 1, 0.25],
      },
      {
        rotation: [0, -1, -0.25],
      },
      {
        rotation: [0, 0, 0],
      },
    ],
  });

  return (
    <PocketStation controls={input} position={[-3, 0, 0]} rotation={rotation} />
  );
};

export default PocketStationController;
