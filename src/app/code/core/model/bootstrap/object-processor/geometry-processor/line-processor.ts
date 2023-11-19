/**
 * @description Line processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../../object-processor/geometry-processor'

export default abstract class LineProcessor extends AbstractProcessor {
  /**
   * Constructor
   *
   * @param {(time: number, object: THREE.Object3D) => void} process
   * @param {THREE.BufferGeometry}                           geometry
   * @param {THREE.Material}                                 material
   */
  constructor(
    process: (time: number, object: THREE.Object3D) => void,
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
  ) {
    super(process, geometry, material)
    this.object = new THREE.Line(this._geometry, this._material)
  }
}
