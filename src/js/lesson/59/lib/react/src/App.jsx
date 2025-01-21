/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Perf} from 'r3f-perf'
import {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import Placeholder from './app/Placeholder.jsx'
import Hamburger from './app/Hamburger.jsx'
import Fox from './app/Fox.jsx'

export default function App() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault={true} />

      <color args={['ivory']} attach="background" />

      <directionalLight
        castShadow={true}
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Hamburger scale={0.35} />
      </Suspense>

      <Fox />

      <mesh
        receiveShadow={true}
        position-y={-1}
        rotation-x={-Math.PI / 2}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
