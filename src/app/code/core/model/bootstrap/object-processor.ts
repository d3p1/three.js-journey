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
   */
  constructor(
    protected _process: (time: number, object: THREE.Object3D) => void,
  ) {}

  /**
   * Update object
   *
   * @param   {number} time
   * @returns {void}
   */
  public update(time: number): void {
    this._process(time, this.object)
  }
}
