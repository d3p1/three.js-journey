/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useRef} from 'react'
import {OrbitControls, useGLTF, meshBounds} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'

export default function App() {
  const cubeRef = useRef(null)
  const model = useGLTF('./media/models/Hamburger/hamburger-draco.glb')

  useEffect(() => {
    return () => {
      document.body.style.cursor = 'default'
    }
  }, [])

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.2 * delta
  })

  const onPointerEnterHandler = () => {
    document.body.style.cursor = 'pointer'
  }

  const onPointerLeaveHandler = () => {
    document.body.style.cursor = 'default'
  }

  const onClickHandler = (event) => {
    if (event.object && event.object.isMesh) {
      event.object.material.color.set(`hsl(${360 * Math.random()}, 100%, 75%)`)
      event.stopPropagation()
    }
  }

  return (
    <>
      <color args={['ivory']} attach="background" />

      <OrbitControls makeDefault={true} />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh
        position-x={-2}
        onClick={onClickHandler}
        onPointerEnter={onPointerEnterHandler}
        onPointerLeave={onPointerLeaveHandler}
      >
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        ref={cubeRef}
        position-x={2}
        scale={1.5}
        onClick={onClickHandler}
        onPointerEnter={onPointerEnterHandler}
        onPointerLeave={onPointerLeaveHandler}
        raycast={meshBounds}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive
        object={model.scene}
        scale={0.35}
        position-y={1}
        onClick={onClickHandler}
        onPointerEnter={onPointerEnterHandler}
        onPointerLeave={onPointerLeaveHandler}
      />
    </>
  )
}
