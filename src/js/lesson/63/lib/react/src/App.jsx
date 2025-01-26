/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useRef} from 'react'
import {useControls} from 'leva'
import {Perf} from 'r3f-perf'
import {OrbitControls} from '@react-three/drei'
import {ToneMapping, EffectComposer} from '@react-three/postprocessing'
import {ToneMappingMode, BlendFunction} from 'postprocessing'
import DrunkEffect from './utils/post-processing/react/DrunkEffect.jsx'

export default function App() {
  const drunkEffectRef = useRef(null)

  const drunkEffectProps = useControls('Drunk Effect', {
    frequency: {value: 10, min: 1, max: 40},
    amplitude: {value: 0.1, min: 0.01, max: 1},
  })

  return (
    <>
      <Perf position="top-left" />

      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        <DrunkEffect
          ref={drunkEffectRef}
          {...drunkEffectProps}
          blendFunction={BlendFunction.DARKEN}
        />
      </EffectComposer>

      <color args={['ivory']} attach="background" />

      <OrbitControls makeDefault={true} />

      <directionalLight
        castShadow={true}
        position={[1, 2, 3]}
        instensity={4.5}
      />
      <ambientLight intensity={1.5} />

      <mesh castShadow={true} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow={true} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow={true}
        position-y={-1}
        scale={10}
        rotation-x={-Math.PI / 2}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
