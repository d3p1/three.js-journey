/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createRoot} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import * as THREE from 'three'
import App from './src/App.jsx'

export default class Index {
  /**
   * Constructor
   *
   * @param {HTMLElement} rootElement
   */
  constructor(rootElement) {
    const root = createRoot(rootElement)
    root.render(
      <Canvas
        flat={false}
        orthographic={false}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{
          fov: 75,
          near: 0.01,
          far: 100,
          position: [3, 2, 6],
        }}
      >
        <App />
      </Canvas>,
    )
  }
}
