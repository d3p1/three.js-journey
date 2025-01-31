/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Canvas} from '@react-three/fiber'
import {KeyboardControls} from '@react-three/drei'
import BaseIndex from '../../../../core/lesson/react-lesson/index.jsx'
import App from './src/App.jsx'
import Menu from './src/app/menu/Menu.jsx'

export default class Index extends BaseIndex {
  /**
   * Render
   *
   * @returns {void}
   */
  render() {
    this.root.render(
      <KeyboardControls
        map={[
          {name: 'forward', keys: ['KeyW']},
          {name: 'rightward', keys: ['KeyD']},
          {name: 'backward', keys: ['KeyS']},
          {name: 'leftward', keys: ['KeyA']},
          {name: 'jump', keys: ['Space']},
        ]}
      >
        <Canvas
          shadows={true}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [10, 10, 10],
          }}
        >
          <App />
        </Canvas>
        <Menu />
      </KeyboardControls>,
    )
  }
}
