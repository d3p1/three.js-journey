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
   * @note  It is necessary to call `_create()` again after the parent
   *        constructor is called (that also calls `_create()`),
   *        because `_geometry` and `_material` properties will not
   *        be initialized when the parent constructor (and parent `_create()`)
   *        is called
   */
  constructor(
    process: (time: number, object: THREE.Object3D) => void,
    protected _geometry: THREE.BufferGeometry,
    protected _material: THREE.Material,
  ) {
    super(process)
    this._create()
  }
}
