/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Perf} from 'r3f-perf'
import {useControls} from 'leva'
import {useRef} from 'react'
import {OrbitControls, Stage} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'

export default function App() {
  const cubeRef = useRef(null)

  const {envMapIntensity} = useControls('Environment Map', {
    envMapIntensity: {
      value: 5,
      min: 0,
      max: 12,
    },
  })

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.2 * delta
  })

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault={true} />

      <Stage
        shadows={{type: 'contact', opacity: 0.8, blur: 5}}
        environment="sunset"
        preset="portrait"
        intensity={envMapIntensity}
      >
        <mesh position-x={-2} position-y={1} castShadow={true}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cubeRef}
          position-x={2}
          position-y={1}
          scale={1.5}
          castShadow={true}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  )
}
