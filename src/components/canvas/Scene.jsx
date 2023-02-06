import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerformanceMonitor, Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [20, 0.9, 20], fov: 26 }} {...props}>
      {/* <directionalLight intensity={0.75} /> */}
      {/* <ambientLight intensity={0.75} /> */}
      {children}
      {/* <Preload all /> */}
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}
