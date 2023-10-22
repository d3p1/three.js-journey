/**
 * @description Cuboid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import MeshProcessor from '../../../../code/core/processor/mesh-processor'

export default class Cuboid extends MeshProcessor {
  /**
   * Constructor
   *
   * @param {THREE.BoxGeometry} _geometry
   * @param {THREE.MeshBasicMaterial} _material
   */
  constructor(
    protected _geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
    protected _material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    }),
  ) {
    super(_geometry, _material)
  }

  /**
   * @inheritdoc
   */
  update() {
    this.obj.rotation.y += 0.1
  }
}
