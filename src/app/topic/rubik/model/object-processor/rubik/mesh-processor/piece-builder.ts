/**
 * @description Rubik piece builder
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Add unit test
 * @todo        Improve `pieceSize` property type
 * @todo        Improve `pieceOutlineColor` property type
 * @todo        Analyze if there is a way to improve class hierarchy.
 *              Create an abstraction to init/build objects/groups/meshes 
 *              like this class does
 */
import * as THREE from 'three'
import Piece from './piece-builder/piece'

export default class PieceBuilder {
  /**
   * Constructor
   *
   * @param {number}                  pieceSize
   * @param {number}                  pieceOutlineColor
   * @param {THREE.PlaneGeometry}     _pieceGeometry
   * @param {THREE.MeshBasicMaterial} _pieceOutlineMaterial
   */
  constructor(
    public pieceSize: number,
    public pieceOutlineColor: number,
    protected _pieceGeometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(
      pieceSize,
      pieceSize,
    ),
    protected _pieceOutlineMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial(
      {
        color: pieceOutlineColor,
      },
    ),
  ) {}

  /**
   * Build Rubik piece with outline
   * 
   * @param   {number}                  pieceColor
   * @param   {THREE.MeshBasicMaterial} pieceMaterial
   * @returns {THREE.Group}
   * {@link   https://discourse.threejs.org/t/how-can-i-add-an-outline-to-a-plane/10605}
   * {@link   https://jsfiddle.net/w1tfrL6p/}
   */
  public build(
    pieceColor: number, 
    pieceMaterial: THREE.MeshBasicMaterial
  ): THREE.Group {
    const pieceGroup = new THREE.Group()
    const piece = this.#createPiece(pieceColor, pieceMaterial)
    const pieceOutline = this.#createPieceOutline()
    piece.renderOrder = 0;
    pieceOutline.renderOrder = 1;
    pieceGroup.add(piece)
    pieceGroup.add(pieceOutline)
    return pieceGroup
  }

  /**
   * Create Rubik piece outline
   * 
   * @returns {THREE.Mesh}
   * {@link   https://discourse.threejs.org/t/how-can-i-add-an-outline-to-a-plane/10605}
   * {@link   https://jsfiddle.net/w1tfrL6p/}
   */
  #createPieceOutline(): THREE.Mesh {
    const pieceOutline = new Piece(
      this.pieceSize,
      this.pieceOutlineColor,
      this._pieceGeometry,
      this._pieceOutlineMaterial
    ).object as THREE.Mesh
    pieceOutline.scale.multiplyScalar(1.05)
    return pieceOutline
  }

  /**
   * Create Rubik piece
   * 
   * @param   {number}                  pieceColor
   * @param   {THREE.MeshBasicMaterial} pieceMaterial
   * @returns {THREE.Mesh}
   */
  #createPiece(
    pieceColor: number, 
    pieceMaterial: THREE.MeshBasicMaterial
  ): THREE.Mesh {
    return new Piece(
      this.pieceSize,
      pieceColor,
      this._pieceGeometry,
      pieceMaterial
    ).object as THREE.Mesh
  }
}
