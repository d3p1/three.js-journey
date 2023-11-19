/**
 * @description Object 3D processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs.org/docs/index.html#api/en/core/Object3D}
 */
import * as THREE from 'three'

export default abstract class ObjectProcessor {
  /**
   * @type {THREE.Object3D}
   */
  public object: THREE.Object3D

  /**
   * Constructor
   *
   * @param {(time: number, object: THREE.Object3D) => void} _process
   * @param {THREE.BufferGeometry}                           _geometry
   * @param {THREE.Material}                                 _material
   */
  constructor(
    protected _process: (time: number, object: THREE.Object3D) => void,
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
  ) {
    this.object = this._create()
  }

  /**
   * Update object
   *
   * @param   {number} time
   * @returns {void}
   */
  public update(time: number): void {
    this._process(time, this.object)
  }

  /**
   * Create object
   *
   * @returns {THREE.Object3D}
   */
  protected abstract _create(): THREE.Object3D
}
