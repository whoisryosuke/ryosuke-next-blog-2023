import { ContactShadows, Environment, Lightformer, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"

import { PropsWithChildren } from "react";
import GlassCube from "./GlassCube";

type Props = Partial<GroupProps> & {};

const FLOOR_HEIGHT = 15

const Scene = ({ ...props }: Props) => {
  return (
    <>
        <Environment background files="./images/neon_photostudio_1k.hdr" {...props}>
          {/* Extra space lights if needed */}
          <Lightformer intensity={4} position={[0, 7, 0]} scale={[10, 30, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        </Environment>
        <color attach="background" args={["#e0e0e0"]} />

        {/* <spotLight position={[0,0,0]} penumbra={1} castShadow angle={0.2} /> */}
        <rectAreaLight position={[0,0,-10]} width={40} height={40} intensity={10} color={"white"} lookAt={() => [0,0,0]} />


        <GlassCube scale={[2,2,2]} />
        <GlassCube position={[6,6,6]} />
        <GlassCube shape="torus" position={[-6,-6,6]} />

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -(FLOOR_HEIGHT + .1), 0]}>
          <planeGeometry args={[100, 100]}  />
          <meshPhysicalMaterial color={"white"} />
          {/* <MeshTransmissionMaterial backside backsideThickness={2} thickness={1} distortionScale={0} temporalDistortion={0} /> */}
        </mesh>

        <ContactShadows scale={100} position={[0, -FLOOR_HEIGHT, 0]} blur={1} far={100} opacity={0.85} />

        <OrbitControls autoRotate rotateSpeed={0.01} />    
{/*         
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={1} intensity={2} />
          <TiltShift2 blur={0.2} />
        </EffectComposer> */}
    </>
  )
}
export default Scene