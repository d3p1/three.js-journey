/**
 * @description Cuboid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import MeshProcessor from '../../../../../code/core/model/bootstrap/object-processor/mesh-processor'

export default class Cuboid extends MeshProcessor {
  /**
   * Constructor
   *
   * @param {THREE.MeshBasicMaterial} process
   * @param {THREE.BoxGeometry}       geometry
   * @param {THREE.MeshBasicMaterial} material
   */
  constructor(
    process: (time: number, obj: THREE.Object3D) => void = (
      time: number,
      obj: THREE.Object3D,
    ) => {
      obj.position.x = Math.cos(time * ((2 * Math.PI) / 10000))
      obj.position.z = Math.sin(time * ((2 * Math.PI) / 10000))
    },
    geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
    material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    }),
  ) {
    super(process, geometry, material)
  }
}
