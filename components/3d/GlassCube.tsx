import { MeshTransmissionMaterial } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

type Props = Partial<MeshProps> & {
  shape?: "cube" | "torus";
};

const GlassCube = ({ shape = "cube", ...props }: Props) => {
  let geometry;
  switch (shape) {
    case "cube":
      geometry = <boxGeometry args={[4, 4, 4]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[4, 1.2, 128, 64]} />;
      break;
  }
  return (
    <mesh receiveShadow castShadow {...props}>
      {geometry}
      <MeshTransmissionMaterial
        backside
        backsideThickness={5}
        thickness={2}
        distortionScale={0}
        temporalDistortion={0}
      />
    </mesh>
  );
};
export default GlassCube;
