/**
 * @description Object processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'

export default abstract class Processor {
  /**
   * @type {THREE.Object3D}
   */
  public obj: THREE.Object3D

  /**
   * Constructor
   *
   * @param {THREE.BufferGeometry} _geometry
   * @param {THREE.Material} _material
   */
  constructor(
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
  ) {
    this.obj = this._create()
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
   * @returns {THREE.Object3D}
   */
  protected abstract _create(): THREE.Object3D
}
