/**
 * @description Builder. Render canvas with learned topic
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
  protected _processors: Processor[] = []

  /**
   * @type {number|null}
   */
  protected _animationId: number | null = null

  /**
   * Constructor
   *
   * @param {{width: number, height: number}} dimensions
   * @param {THREE.Camera}                    camera
   * @param {THREE.Scene}                     scene
   * @param {THREE.WebGLRenderer}             renderer
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
    public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer(),
  ) {
    this.#create()
    this.init()
  }

  /**
   * Init
   *
   * @returns {void}
   * @note    Add camera to scene as a recommended best practice
   * @note    By default, move camera out from the origin to be able to watch
   *          scene elements
   */
  public init(): void {
    this.scene.add(this.camera)
    this.camera.position.z = 3
  }

  /**
   * Add object processors
   *
   * @param   {Processor[]} processors
   * @returns {void}
   */
  public addProcessors(processors: Processor[]): void {
    this._processors = processors
    this.scene.add(...this._processors.map((processor) => processor.obj))
  }

  /**
   * Animate
   *
   * @param   {number} elapsedTime
   * @returns {void}
   * @note    `requestAnimationFrame` callback receives the elapsed time
   *          from its first call
   * {@link   https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
   */
  public animate(elapsedTime: number = 0): void {
    for (const processor of this._processors) {
      processor.update(elapsedTime)
    }
    this.renderer.render(this.scene, this.camera)
    this._animationId = requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Cancel animation
   *
   * @returns {void}
   */
  public cancelAnimation(): void {
    if (this._animationId) {
      this.renderer.dispose()
      cancelAnimationFrame(this._animationId)
    }
  }

  /**
   * Create
   *
   * @returns {void}
   */
  #create(): void {
    this.renderer.setSize(this.dimensions.width, this.dimensions.height)
    document.body.appendChild(this.renderer.domElement)
  }
}
