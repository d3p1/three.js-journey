/**
 * @description Cuboid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import MeshProcessor from '../core/processor/mesh-processor'

export default class Processor extends MeshProcessor {
  /**
   * Constructor
   *
   * @param {THREE.BoxGeometry} _geometry
   * @param {THREE.Material} _material
   */
  constructor(
    protected _geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
    protected _material: THREE.Material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    }),
  ) {
    super(_geometry, _material)
  }

  /**
   * @inheritdoc
   */
  public update(): void {
    this.obj.rotation.x += 0.01
    this.obj.rotation.y += 0.01
  }
}
