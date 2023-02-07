import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useControls, button } from 'leva'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  CameraControls,
  useProgress,
  OrbitControls,
} from '@react-three/drei'
import { COLORS } from '@/styles/COLORS'
import { TIMERS_SEC } from '@/templates/TIMERS'

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: 'black',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2,
})

function Camera() {
  const cameraControlsRef = useRef()

  const { active: isLoading } = useProgress()
  const [isInTrasition, setIsInTrasition] = useState(true)

  const { position, zoom, isCameraControlEnabled } = useControls({
    position: [-1, 1.5, 4],
    zoom: 0.5,
    apply: button((get) => {
      cameraControlsRef.current?.zoomTo(get('zoom'), true)
      cameraControlsRef.current?.setPosition(...get('position'), true)
    }),
    reset: button(() => cameraControlsRef.current?.reset(true)),
    isCameraControlEnabled: {
      value: false,
      label: 'camera control',
    },
  })

  useEffect(() => {
    if (!isLoading) {
      cameraControlsRef.current.addEventListener('rest', () => {
        setIsInTrasition(false)
      })
      cameraControlsRef.current.smoothTime = 2
      setTimeout(() => {
        cameraControlsRef.current?.zoomTo(zoom, true)
        cameraControlsRef.current?.setPosition(...position, true)
      }, TIMERS_SEC.SCENE_START * 1000)
    }
  }, [isLoading, position, zoom])

  return (
    <>
      <OrbitControls enabled={!isInTrasition} minPolarAngle={0} maxPolarAngle={Math.PI / 2.2} />
      <CameraControls ref={cameraControlsRef} enabled={isCameraControlEnabled || isInTrasition} />
    </>
  )
}

export default function App() {
  const [isPerformanceSucks, degradePerfromance] = useState(false)

  return (
    <>
      <Camera />
      <PerformanceMonitor onDecline={() => degradePerfromance(true)} />
      <color attach='background' args={[COLORS.primaryBg]} />
      <group position={[0, -0.3, 0]} rotation={[0, -0.75, 0]}>
        <Suspense fallback={null}>
          <Scene />
          <AccumulativeShadows
            frames={100}
            alphaTest={0.85}
            opacity={0.8}
            color='red'
            scale={20}
            position={[0, -0.005, 0]}>
            <RandomizedLight
              amount={8}
              radiuss={6}
              ambient={0.5}
              intensity={1}
              position={[-1.5, 2.5, -2.5]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </Suspense>
      </group>
      <Env isPerformanceSucks={isPerformanceSucks} />
    </>
  )
}

/*
Kit-bash auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 scene.glb --transform
Licenses: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Authors:
  matousekfoto (https://sketchfab.com/matousekfoto) (Fruit Cake Slice)
    https://sketchfab.com/3d-models/fruit-cake-slice-7b9a33386eab4dd986aa0980054ead3c
  Felix Yadomi (https://sketchfab.com/felixyadomi) (Cute milkshake)
    https://sketchfab.com/3d-models/cute-milkshake-3ba52a41b4b248df953684861d9e7a20
  Second Studio (https://sketchfab.com/kayaaku) (Dry flower)
    https://sketchfab.com/3d-models/dry-flower-ff0005d6eb4d4077bd08b8992299c45c
  CDcruz (https://sketchfab.com/cdcruz) (Ikea - Pokal Glass Cups)
    https://sketchfab.com/3d-models/ikea-pokal-glass-cups-21837e54a14346aa900e1ae719779b86
*/
function Scene(props) {
  const { nodes, materials } = useGLTF('/glass-transformed.glb')

  const causticsProps = useControls({
    lightSource: [-2, 2.5, -2.5],
    intensity: {
      value: 0.02,
      min: 0,
      max: 0.1,
      step: 0.001,
    },
    worldRadius: {
      value: -0.4,
      min: -1,
      max: 1,
    },
    ior: {
      value: 5,
      min: -1,
      max: 6,
    },
    debug: false,
  })
  return (
    <group {...props} dispose={null}>
      <Caustics debug backfaces color={[1, 0.8, 0.8]} {...causticsProps}>
        <mesh castShadow receiveShadow geometry={nodes.glass.geometry}>
          <MeshTransmissionMaterial
            thickness={0.2}
            chromaticAberration={0.05}
            anisotropy={1.5}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={3}
          />
        </mesh>

        {/** Some hacks to get some back face reflections, otherwise the glass would look fake */}
        <mesh
          scale={[0.95, 1, 0.95]}
          geometry={nodes.glass_back.geometry}
          material={innerMaterial}
        />
        <mesh geometry={nodes.glass_inner.geometry} material={innerMaterial} />
      </Caustics>

      <mesh
        castShadow
        rotation={[0, -0.5, 0]}
        geometry={nodes.cake.geometry}
        material={materials.FruitCakeSlice_u1_v1}
      />
      <mesh castShadow geometry={nodes.straw_1.geometry} material={materials.straw_2} />
      <mesh castShadow geometry={nodes.straw_2.geometry} material={materials.straw_1} />
      <mesh
        castShadow
        position={[0, -0.005, 0]}
        geometry={nodes.straw001_1.geometry}
        material={materials.straw_2}
      />
      <mesh
        castShadow
        position={[0, -0.005, 0]}
        geometry={nodes.straw001_2.geometry}
        material={materials.straw_1}
      />
      <Center rotation={[0, -0.4, 0]} position={[-1, -0.01, -2]} top>
        <mesh
          scale={1.2}
          castShadow
          geometry={nodes.flowers.geometry}
          material={materials['draifrawer_u1_v1.001']}
        />
      </Center>

      <mesh
        castShadow
        geometry={nodes.fork.geometry}
        material={materials.ForkAndKnivesSet001_1K}
        material-color='#999'
      />
    </group>
  )
}

function Env({ isPerformanceSucks }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!isPerformanceSucks) {
      easing.damp3(
        ref.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
        0.2,
        delta,
      )
    }
  })

  return (
    <Environment
      frames={isPerformanceSucks ? 1 : Infinity}
      preset='city'
      resolution={256}
      background
      blur={0.9}>
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      <group ref={ref}>
        <Lightformer
          intensity={5}
          form='ring'
          color='red'
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  )
}
