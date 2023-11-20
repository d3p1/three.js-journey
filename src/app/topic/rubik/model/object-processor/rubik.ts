/**
 * @description Rubik
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Add unit test
 * @todo        Improve `dimension` property type
 * @todo        Improve `size` property type
 * @todo        Improve `faceColors` property type
 */
import * as THREE from 'three'
import GroupProcessor from '../../../../code/core/model/bootstrap/object-processor/group-processor'
import Piece from './rubik/mesh-processor/piece-builder/piece'

export default class Rubik extends GroupProcessor {
  /**
   * Constructor
   *
   * @param {number}                                         dimension
   * @param {number}                                         size
   * @param {(string|number)[]}                              faceColors
   * @param {(time: number, object: THREE.Object3D) => void} process
   */
  constructor(
    public dimension: number = 3,
    public size: number = 3,
    public faceColors: (string | number)[] = [
      0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0xffffff,
    ],
    process: (time: number, obj: THREE.Object3D) => void = () => {},
  ) {
    super(process)
    this.#initCube()
  }

  /**
   * Init Rubik cube
   *
   * @returns {void}
   */
  #initCube(): void {
    /**
     * @note Init cube face from face color
     */
    const pieceSize = this.size / this.dimension
    for (const faceColor of this.faceColors) {
      this.#initCubeFace(faceColor, pieceSize)
    }
  }

  /**
   * Init Rubik cube face
   *
   * @param   {string|number} faceColor
   * @param   {number}        pieceSize
   * @returns {void}
   * @todo    Improve `faceColor` type
   * @todo    Improve the way that cube piece position is instantiated
   */
  #initCubeFace(faceColor: string | number, pieceSize: number): void {
    /**
     * @note Init cube pieces from cube dimension
     * @note The dimension determine the number of rows and columns
     *       for each face
     */
    for (let y = 0; y < this.size; y += pieceSize) {
      for (let x = 0; x < this.size; x += pieceSize) {
        this.#initCubeFacePiece(
          pieceSize,
          faceColor,
          new THREE.Vector3(x, y, 0),
        )
      }
    }
  }

  /**
   * Init Rubik cube face piece
   *
   * @param   {number}        size
   * @param   {number|string} color
   * @param   {THREE.Vector3} position
   * @returns {void}
   * @todo    Improve `size`, `color` types
   * @todo    Improve the way that rubyk pieces are instantiated.
   *          Analyze if there is a way to implement a factory class
   * @todo    For each piece, we are creating a new geometry and material.
   *          Implement a logic that re-utilizes them
   */
  #initCubeFacePiece(
    size: number,
    color: string | number,
    position: THREE.Vector3,
  ): void {
    const piece = new Piece(size, color)
    piece.object.position.copy(position)
    this.object.add(piece.object)
  }
}
