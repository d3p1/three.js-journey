/**
 * @description Line processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../processor'

export default abstract class LineProcessor extends AbstractProcessor {
  /**
   * @inheritdoc
   */
  protected _create(): THREE.Object3D {
    return new THREE.Line(this._geometry, this._material)
  }
}
