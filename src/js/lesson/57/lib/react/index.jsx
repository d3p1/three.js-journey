/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Leva} from 'leva'
import {StrictMode} from 'react'
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
      <StrictMode>
        <Leva collapsed={true} />
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <App />
        </Canvas>
      </StrictMode>,
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
