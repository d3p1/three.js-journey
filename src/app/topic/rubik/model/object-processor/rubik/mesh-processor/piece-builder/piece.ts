/**
 * @description Rubik piece
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Add unit test
 * @todo        Improve `size` property type
 * @todo        Improve `color` property type
 */
import * as THREE from 'three'
import MeshProcessor from '../../../../../../../code/core/model/bootstrap/object-processor/geometry-processor/mesh-processor'

export default class Piece extends MeshProcessor {
  /**
   * Constructor
   *
   * @param {number}                  size
   * @param {number}                  color
   * @param {THREE.PlaneGeometry}     geometry
   * @param {THREE.MeshBasicMaterial} material
   */
  constructor(
    public size: number,
    public color: number,
    geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(size, size),
    material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: color,
    }),
  ) {
    super(() => {}, geometry, material)
  }
}
