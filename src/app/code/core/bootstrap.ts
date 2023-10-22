/**
 * @description Bootstrap. Init app related to learned topic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Builder} from './bootstrap/builder'
import Processor from './bootstrap/processor'

export default abstract class Bootstrap {
  /**
   * Constructor
   *
   * @param {Builder}     builder
   * @param {Processor[]} processors
   */
  constructor(
    public processors: Processor[] = [],
    public builder: Builder = new Builder({
      width: innerWidth,
      height: innerHeight,
    }),
  ) {
    builder.addProcessors(processors)
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
