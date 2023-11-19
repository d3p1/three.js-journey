/**
 * @description Builder. Render canvas with learned topic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import ObjectProcessor from './object-processor'
import { RenderDimensions, IBuilder } from '../../api/bootstrap/builder'

export default class Builder implements IBuilder {
  /**
   * @type {ObjectProcessor[]}
   */
  protected _objectProcessors: ObjectProcessor[] = []

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
    this.#init()
  }

  /**
   * @inheritdoc
   */
  public addObjectProcessors(objectProcessors: ObjectProcessor[]): void {
    this._objectProcessors = objectProcessors
    this.scene.add(...this._objectProcessors.map(
      (objectProcessor) => objectProcessor.object)
    )
  }

  /**
   * @inheritdoc
   * @note    `requestAnimationFrame` callback receives the elapsed time
   *          from its first call
   * {@link   https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
   */
  public animate(elapsedTime: number = 0): void {
    for (const objectProcessor of this._objectProcessors) {
      objectProcessor.update(elapsedTime)
    }
    this.renderer.render(this.scene, this.camera)
    this._animationId = requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * @inheritdoc
   */
  public cancelAnimation(): void {
    if (this._animationId) {
      this.renderer.dispose()
      cancelAnimationFrame(this._animationId)
    }
  }

  /**
   * Init
   *
   * @returns {void}
   * @note    Add camera to scene as a recommended best practice
   * @note    By default, move camera out from the origin to be able to watch
   *          scene elements
   */
  #init(): void {
    this.scene.add(this.camera)
    this.camera.position.z = 3
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
