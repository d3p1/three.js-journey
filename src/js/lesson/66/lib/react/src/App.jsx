/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Physics} from '@react-three/rapier'
import Light from './app/stage/Light.jsx'
import {Level} from './app/Level.jsx'

export default function App() {
  return (
    <>
      <color args={['ivory']} attach="background" />

      <OrbitControls makeDefault={true} />

      <Light />

      <Physics debug={true}>
        <Level />
      </Physics>
    </>
  )
}
