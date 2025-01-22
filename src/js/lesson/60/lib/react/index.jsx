/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createRoot, Root} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import App from './src/App.jsx'

export default class Index {
  /**
   * @type {Root}
   */
  root

  /**
   * Constructor
   *
   * @param {HTMLElement} rootElement
   */
  constructor(rootElement) {
    this.root = createRoot(rootElement)
    this.root.render(
      <Canvas camera={{fov: 45, near: 0.1, far: 200, position: [4, -2, 6]}}>
        <App />
      </Canvas>,
    )
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    this.root.unmount()
  }
}
