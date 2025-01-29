/**
 * @description Light
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

const LIGHT_POSITION_OFFSET = -3
const LIGHT_TARGET_POSITION_OFFSET = -4

export default function Light() {
  const directionalLight = useRef(null)

  useFrame((state) => {
    directionalLight.current.position.z =
      state.camera.position.z + LIGHT_POSITION_OFFSET
    directionalLight.current.target.position.z =
      state.camera.position.z + LIGHT_TARGET_POSITION_OFFSET
    directionalLight.current.target.updateWorldMatrix()
  })

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        ref={directionalLight}
        castShadow={true}
        intensity={4.5}
        position={[4, 4, 1]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />
    </>
  )
}
