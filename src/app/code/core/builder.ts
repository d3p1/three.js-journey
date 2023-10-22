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
   * @type {number|null}
   */
  protected _animationId: number | null = null

  /**
   * Constructor
   *
   * @param {{width: number, height: number}} dimensions
   * @param {THREE.Camera} camera
   * @param {THREE.Scene} scene
   * @param {THREE.WebGLRenderer} _renderer
   */
  constructor(
    public dimensions: RenderDimensions,
    public camera: THREE.Camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000,
    ),
    public scene: THREE.Scene = new THREE.Scene(),
    protected _renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer(),
  ) {
    this.#create()
    this.init()
  }

  /**
   * Init
   *
   * @returns {void}
   * @note    By default, move camera out from the origin to be able to watch
   *          scene elements
   */
  public init(): void {
    this.camera.position.z = 3
  }

  /**
   * Set object processors
   *
   * @param   {Processor[]} objProcessor
   * @returns {void}
   */
  public setObjProcessors(objProcessors: Processor[]): void {
    this._objProcessors = objProcessors
    this.scene.add(...this._objProcessors.map((processor) => processor.obj))
  }

  /**
   * Add object processor
   *
   * @param   {Processor} objProcessor
   * @returns {void}
   */
  public addObjProcessor(objProcessor: Processor): void {
    this._objProcessors.push(objProcessor)
    this.scene.add(objProcessor.obj)
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
    this._animationId = requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Inanimate
   *
   * @returns {void}
   */
  public inanimate(): void {
    if (this._animationId) {
      cancelAnimationFrame(this._animationId)
    }
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
