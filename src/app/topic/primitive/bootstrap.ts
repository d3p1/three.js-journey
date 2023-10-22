/**
 * @description Bootstrap primitive topic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Builder} from '../../code/core/builder'
import Processor from '../../code/core/processor'
import Cuboid from './processor/mesh/cuboid'

export default class Bootstrap {
  /**
   * Constructor
   *
   * @param {Builder}     builder
   * @param {Processor[]} _objProcessors
   */
  constructor(
    public builder: Builder = new Builder({
      width: innerWidth,
      height: innerHeight,
    }),
    protected _objProcessors: Processor[] = [new Cuboid()],
  ) {
    builder.setObjProcessors(_objProcessors)
  }
}
