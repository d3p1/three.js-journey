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
   * @type {Processor[]}
   */
  protected _objProcessors: Processor[] = []

  /**
   * Constructor
   *
   * @param {{width: number, height: number}} dimensions
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.WebGLRenderer} _renderer
   */
  constructor(
    public dimensions: RenderDimensions,
    public scene: THREE.Scene = new THREE.Scene(),
    public camera: THREE.Camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000,
    ),
    protected _renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer(),
  ) {
    this.#create()
  }

  /**
   * Add object processor
   *
   * @param   {Processor} objProcessor
   * @returns {void}
   */
  public addObjProcessor(objProcessor: Processor): void {
    this._objProcessors.push(objProcessor)
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
    this._renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Create
   *
   * @returns {void}
   */
  #create(): void {
    this._renderer.setSize(this.dimensions.width, this.dimensions.height)
    document.body.appendChild(this._renderer.domElement)
  }
}
