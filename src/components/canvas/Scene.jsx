import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [1.4, 16, 1.5], fov: 26 }} {...props}>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      {children}
      <Preload all />
    </Canvas>
  )
}
