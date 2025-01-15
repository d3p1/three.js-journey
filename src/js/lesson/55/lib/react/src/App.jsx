/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useRef} from 'react'
import {extend, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import CustomObject from './app/CustomObject.jsx'

extend({OrbitControls})

export default function App() {
  const {camera} = useThree()
  const cubeRef = useRef(null)

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
  })

  return (
    <>
      <orbitControls args={[camera, document.querySelector('body')]} />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <group>
        <mesh position-x={2} ref={cubeRef}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial args={[{color: 'mediumpurple'}]} />
        </mesh>

        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject vertexCount={100} />
    </>
  )
}
