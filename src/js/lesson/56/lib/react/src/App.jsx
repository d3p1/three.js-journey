/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useRef} from 'react'
import {
  Float,
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Text,
  MeshReflectorMaterial,
} from '@react-three/drei'

export default function App() {
  const cubeRef = useRef(null)
  const sphereRef = useRef(null)

  return (
    <>
      <OrbitControls enableDamping={true} makeDefault={true} />

      <directionalLight position={[1, 2, 3]} intesity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center={true}
            distanceFactor={8}
            occlude={[cubeRef, sphereRef]}
            style={{
              fontFamily: 'Helvetica, Arial',
              background: '#00000088',
              padding: '15px',
              borderRadius: '30px',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            That's a sphere &#128133;
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={1024}
          blur={[1000, 1000]}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./media/fonts/bangers-v20-latin-regular.woff"
          fontSize={0.5}
          color="salmon"
          position-y={2}
          maxWidth={1}
          textAlign="center"
        >
          I love R3F
        </Text>
      </Float>
    </>
  )
}
