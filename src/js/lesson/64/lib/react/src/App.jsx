/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  Environment,
  Float,
  PresentationControls,
  useGLTF,
  ContactShadows,
  Html,
  Text,
} from '@react-three/drei'

export default function App() {
  const model = useGLTF('./media/models/Macbook/macbook.gltf')

  return (
    <>
      <color args={['#241a1a']} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global={true}
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{mass: 2, tension: 400}}
        snap={{
          mass: 4,
          tension: 400,
        }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ff6900"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={model.scene} position-y={-1.1}>
            <Html
              transform={true}
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                src="https://bruno-simon.com/html/"
                style={{
                  width: 1024,
                  height: 670,
                  border: 'none',
                  borderRadius: 20,
                  background: '#000000',
                }}
              />
            </Html>
          </primitive>

          <Text
            font="./media/fonts/bangers-v20-latin-regular.woff"
            fontSize={0.8}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Portfolio
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} scale={5} opacity={0.4} blur={2.4} />
    </>
  )
}
