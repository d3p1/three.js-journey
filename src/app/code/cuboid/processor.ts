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
   * @param {object} _scene
   */
  constructor(protected _scene: THREE.Scene) {
    super(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: 0x00ff00}),
      _scene,
    )
  }

  /**
   * Update
   *
   * @returns {void}
   */
  public update() {
    this._obj.rotation.x += 0.01
    this._obj.rotation.y += 0.01
  }
}
