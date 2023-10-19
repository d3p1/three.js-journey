/**
 * @description Object processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'

export default abstract class Processor {
  /**
   * @type {object}
   */
  protected _obj: THREE.Object3D

  /**
   * Constructor
   *
   * @param {object} _geometry
   * @param {object} _material
   * @param {object} _scene
   */
  constructor(
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
    protected _scene: THREE.Scene,
  ) {
    this.init()
  }

  /**
   * Init object
   *
   * @returns {void}
   */
  public init(): void {
    this._obj = this._create()
    this._scene.add(this._obj)
  }

  /**
   * Update object
   *
   * @returns {void}
   */
  public abstract update(): void

  /**
   * Create object
   *
   * @returns {object}
   */
  protected abstract _create(): THREE.Object3D
}
