/**
 * @description Group processor
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import AbstractProcessor from '../object-processor'

export default abstract class GroupProcessor extends AbstractProcessor {
  /**
   * @inheritdoc
   */
  protected _create(): void {
    this.object = new THREE.Group()
  }
}
