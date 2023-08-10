import React from "react";
import Wave from "./Wave/Wave";

const Waves = () => {
  const waves = new Array(18)
    .fill(0)
    .map((_, index) => (
      <Wave key={index} position={[index * 0.6, 0, 0]} offset={index} />
    ));

  return (
    <group position={[-2, 1, 10]} rotation={[0, Math.PI / 3, 0]}>
      {waves}
    </group>
  );
};

export default Waves;
