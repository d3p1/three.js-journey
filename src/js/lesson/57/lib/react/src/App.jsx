/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import gsap from 'gsap'
import {Perf} from 'r3f-perf'
import {useControls, button} from 'leva'
import {useRef} from 'react'
import {OrbitControls} from '@react-three/drei'

export default function App() {
  const sphereRef = useRef(null)

  const performancePanel = useControls('Performance Panel', {
    isVisible: true,
  })

  const {position, color, isVisible} = useControls('Sphere', {
    position: {
      value: {x: -2, y: 0},
      step: 0.01,
      joystick: 'invertY',
    },
    color: 'orange',
    isVisible: true,
    move: button(() =>
      gsap.to(sphereRef.current.position, {
        duration: 2,
        x: sphereRef.current.position.x + 3 * (Math.random() - 0.5),
      }),
    ),
  })

  const {scale} = useControls('Cube', {
    scale: {
      value: 1.5,
      min: 0,
      max: 5,
      step: 0.01,
    },
  })

  return (
    <>
      {performancePanel.isVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault={true} />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intesity={1.5} />

      <mesh position-x={2} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        ref={sphereRef}
        position={[position.x, position.y, 0]}
        visible={isVisible}
      >
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
