/**
 * @description Rubik
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Add unit test
 * @todo        Improve `dimension` property type
 * @todo        Improve `size` property type
 */
import * as THREE from 'three'
import GroupProcessor from '../../../../code/core/model/bootstrap/object-processor/group-processor'
import Piece from './rubik/mesh-processor/piece'

export default class Rubik extends GroupProcessor {
  /**
   * Constructor
   *
   * @param {number}                                         dimension
   * @param {number}                                         size
   * @param {(time: number, object: THREE.Object3D) => void} process
   */
  constructor(
    public dimension: number = 3,
    public size: number = 6,
    process: (time: number, obj: THREE.Object3D) => void = () => {},
  ) {
    super(process)
    this.object.add(new Piece(1, 1).object)
  }
}
