import { MeshTransmissionMaterial } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber"

type Props = Partial<MeshProps> & {};

const GlassCube = ({ ...props }: Props) => {
  return (
    <mesh {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} distortionScale={0} temporalDistortion={0} />
    </mesh>
  )
}
export default GlassCube
