import { GroupProps, MeshProps } from "@react-three/fiber";
import GlassCube from "../GlassCube";
import AnimatedCube from "./ShaderExample/AnimatedCube";

type Props = Partial<GroupProps> & {};

const CUBE_SIZE = 4;
const GAP = 0.1;
const START = {
    x: -5,
    y: -5,
}

type CubeProps = Partial<MeshProps> & {};

const Cube = ({ ...props }: CubeProps) => {
  return (
    <mesh {...props}>
        <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
        <meshPhysicalMaterial color={'blue'} />
    </mesh>
  )
}

const Cubes = ({ ...props }: Props) => {
  return (
      <group {...props}>
        {/* <GlassCube /> */}
        {new Array(10).fill(0).reduce((merge, _, xIndex) => {
            new Array(10).fill(0).forEach((_, zIndex) => {
                merge = [
                    ...merge,
                    <AnimatedCube size={CUBE_SIZE} offset={xIndex * 10 + zIndex} position={[(xIndex * (CUBE_SIZE + GAP)) + START.x, -3, (zIndex * (CUBE_SIZE + GAP)) + START.y]} />
                ]
            })
            return merge;
        }, [])}
      </group>
  )
}
export default Cubes