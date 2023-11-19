/**
 * @description Bootstrap topic related to primitives
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import AbstractBootstrap from '../../code/core/model/bootstrap'
import Processor from '../../code/core/bootstrap/processor'
import Cuboid from './processor/mesh/cuboid'

export default class Bootstrap extends AbstractBootstrap {
  /**
   * Constructor
   *
   * @param {Processor[]} processors
   */
  constructor(processors: Processor[] = [new Cuboid()]) {
    super(processors)
  }
}
