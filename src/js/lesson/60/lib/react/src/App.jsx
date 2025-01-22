/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Perf} from 'r3f-perf'
import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei'
import {useEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry()
const material = new THREE.MeshMatcapMaterial()

export default function App() {
  const donutCollectionRef = useRef([])

  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    for (const donut of donutCollectionRef.current) {
      donut.rotation.x += 0.001 + 0.2 * delta * Math.random()
    }
  })

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault={true} />

      <color args={['ivory']} attach="background" />

      <Center>
        <Text3D
          material={material}
          font="./media/fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HELLO R3F
        </Text3D>
      </Center>

      {[...Array(100)].map((value, key) => (
        <mesh
          ref={(element) => (donutCollectionRef.current[key] = element)}
          key={key}
          geometry={torusGeometry}
          material={material}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        ></mesh>
      ))}
    </>
  )
}
