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
   * @param {THREE.BufferGeometry}                        _geometry
   * @param {THREE.Material}                              _material
   * @param {(time: number, obj: THREE.Object3D) => void} _process
   */
  constructor(
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
    protected _process: (time: number, obj: THREE.Object3D) => void,
  ) {
    this.obj = this._create()
  }

  /**
   * Update object
   *
   * @param   {number} time
   * @returns {void}
   */
  public update(time: number): void {
    this._process(time, this.obj)
  }

  /**
   * Create object
   *
   * @returns {THREE.Object3D}
   */
  protected abstract _create(): THREE.Object3D
}
