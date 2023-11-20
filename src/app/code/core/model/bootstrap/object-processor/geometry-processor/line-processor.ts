/**
 * @description Line processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../../object-processor/geometry-processor'

export default abstract class LineProcessor extends AbstractProcessor {
  /**
   * @inheritdoc
   */
  protected _create(): void {
    this.object = new THREE.Line(this._geometry, this._material)
  }
}
