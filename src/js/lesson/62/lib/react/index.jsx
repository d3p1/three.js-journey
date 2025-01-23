/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import BaseIndex from '../../../../core/lesson/react-lesson/index.jsx'
import {Canvas} from '@react-three/fiber'
import {Bvh} from '@react-three/drei'
import App from './src/App.jsx'

export default class Index extends BaseIndex {
  /**
   * Render
   *
   * @returns {void}
   */
  render() {
    this.root.render(
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        onPointerMissed={() => alert('Click on the objects.')}
      >
        <Bvh>
          <App />
        </Bvh>
      </Canvas>,
    )
  }
}
