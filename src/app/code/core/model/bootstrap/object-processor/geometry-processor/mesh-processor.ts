/**
 * @description Mesh processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../../object-processor/geometry-processor'

export default abstract class MeshProcessor extends AbstractProcessor {
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
    this.object = new THREE.Mesh(this._geometry, this._material)
  }
}
