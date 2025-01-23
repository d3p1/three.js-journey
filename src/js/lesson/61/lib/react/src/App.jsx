/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
  shaderMaterial,
} from '@react-three/drei'
import {extend, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import portalVertexShader from '../../../shader/portal/vertex.glsl'
import portalFragmentShader from '../../../shader/portal/fragment.glsl'
import {useRef} from 'react'

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uInnerColor: new THREE.Color(0xffffff),
    uOuterColor: new THREE.Color(0x000000),
  },
  portalVertexShader,
  portalFragmentShader,
)

extend({PortalMaterial})

export default function App() {
  const portalMaterial = useRef(null)

  const {nodes} = useGLTF('./media/models/LessonPortal/portal.glb')
  const bakedTexture = useTexture(
    './media/images/textures/LessonPortal/color.jpg',
  )
  bakedTexture.flipY = false

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta
  })

  return (
    <>
      <color args={['#030202']} attach="background" />

      <OrbitControls makeDefault={true} />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color={0xffffe5} />
        </mesh>

        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color={0xffffe5} />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <portalMaterial ref={portalMaterial} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  )
}
