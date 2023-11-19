/**
 * @description Geometry processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../object-processor'

export default abstract class GeometryProcessor extends AbstractProcessor {
  /**
   * Constructor
   *
   * @param {(time: number, object: THREE.Object3D) => void} process
   * @param {THREE.BufferGeometry}                           _geometry
   * @param {THREE.Material}                                 _material
   */
  constructor(
    process: (time: number, object: THREE.Object3D) => void,
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
  ) {
    super(process)
  }
}
