import { Environment, OrbitControls } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { PropsWithChildren } from "react";
import GlassCube from "./GlassCube";

type Props = Partial<GroupProps> & {};

const Scene = ({ ...props }: Props) => {
  return (
    <>
        <Environment background files="./images/neon_photostudio_1k.hdr" {...props} />

        <GlassCube scale={[2,2,2]} />
        <GlassCube position={[2,2,2]} />
        <GlassCube position={[-2,-2,2]} />

        <OrbitControls autoRotate rotateSpeed={0.01} />    
    </>
  )
}
export default Scene