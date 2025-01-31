/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Physics} from '@react-three/rapier'
import Light from './app/stage/Light.jsx'
import {Level} from './app/Level.jsx'
import Player from './app/Player.jsx'
import {useGame} from './store/useGame.jsx'

export default function App() {
  const trapCount = useGame((state) => state.trapCount)
  const trapSeed = useGame((state) => state.trapSeed)

  return (
    <>
      <color args={['#bdedfc']} attach="background" />

      <OrbitControls makeDefault={true} />

      <Light />

      <Physics debug={false}>
        <Level count={trapCount} seed={trapSeed} />
        <Player />
      </Physics>
    </>
  )
}
