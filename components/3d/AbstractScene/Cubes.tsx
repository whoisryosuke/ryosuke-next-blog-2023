import { GroupProps, MeshProps } from "@react-three/fiber";
import GlassCube from "../GlassCube";
import AnimatedCube from "./ShaderExample/AnimatedCube";
import { UserCustomizations } from "@store/app";

type Props = Partial<GroupProps> & {
  customizations: UserCustomizations;
};

const GRID_SIZE = 50;
const CUBE_SIZE = 4;
const GAP = 0.1;
const START = {
  x: -(GRID_SIZE / 2) * CUBE_SIZE,
  y: -(GRID_SIZE / 2) * CUBE_SIZE,
};

type CubeProps = Partial<MeshProps> & {};

const Cube = ({ ...props }: CubeProps) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
      <meshPhysicalMaterial color={"blue"} />
    </mesh>
  );
};

const Cubes = ({ customizations, ...props }: Props) => {
  return (
    <group {...props}>
      {/* <GlassCube /> */}
      {new Array(GRID_SIZE).fill(0).reduce((merge, _, xIndex) => {
        new Array(GRID_SIZE).fill(0).forEach((_, zIndex) => {
          merge = [
            ...merge,
            <AnimatedCube
              key={`${xIndex}-${zIndex}`}
              size={CUBE_SIZE}
              offset={xIndex * 10 + zIndex}
              position={[
                xIndex * (CUBE_SIZE + GAP) + START.x,
                -3,
                zIndex * (CUBE_SIZE + GAP) + START.y,
              ]}
              shouldAnimate={customizations.animation.active}
            />,
          ];
        });
        return merge;
      }, [])}
    </group>
  );
};
export default Cubes;
