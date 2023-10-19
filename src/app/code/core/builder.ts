/**
 * @description Builder
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import Processor from './processor'

/**
 * @type {{width: number, height: number}}
 */
export type RenderDimensions = {
  readonly width: number
  readonly height: number
}

/**
 * @class
 */
export class Builder {
  /**
   * Constructor
   *
   * @param {{width: number, height: number}} _dimensions
   * @param {Processor[]} _objProcessors
   * @param {THREE.WebGLRenderer} _renderer
   * @param {THREE.Scene} _scene
   * @param {THREE.Camera} _camera
   */
  constructor(
    protected _dimensions: RenderDimensions,
    protected _objProcessors: Processor[],
    protected _renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer(),
    protected _scene: THREE.Scene = new THREE.Scene(),
    protected _camera: THREE.Camera = new THREE.PerspectiveCamera(
      75,
      _dimensions.width / _dimensions.height,
      0.1,
      1000,
    ),
  ) {
    this.#create()
  }

  /**
   * Animate
   *
   * @returns {void}
   */
  public animate(): void {
    for (const objProcessor of this._objProcessors) {
      objProcessor.update()
    }
    requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Create
   *
   * @returns {void}
   */
  #create(): void {
    this._renderer.setSize(this._dimensions.width, this._dimensions.height)
    document.body.appendChild(this._renderer.domElement)
  }
}
