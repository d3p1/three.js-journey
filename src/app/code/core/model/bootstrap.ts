/**
 * @description Bootstrap. Init app related to learned topic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {IBuilder} from '../api/bootstrap/builder'
import Builder from './bootstrap/builder'
import ObjectProcessor from './bootstrap/object-processor'

export default abstract class Bootstrap {
  /**
   * Constructor
   *
   * @param {ObjectProcessor[]} objectProcessors
   * @param {IBuilder}          builder
   */
  constructor(
    public objectProcessors: ObjectProcessor[] = [],
    public builder: IBuilder = new Builder({
      width: innerWidth,
      height: innerHeight,
    }),
  ) {
    builder.addObjectProcessors(objectProcessors)
  }

  /**
   * Boot animation
   *
   * @returns {void}
   */
  boot(): void {
    this.builder.renderer.domElement.style.display = 'block'
    this.builder.animate()
  }

  /**
   * Shut down animation
   *
   * @returns {void}
   */
  shutDown(): void {
    this.builder.renderer.domElement.style.display = 'none'
    this.builder.cancelAnimation()
  }
}
