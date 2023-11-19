/**
 * @description Bootstrap topic related to rubik
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Add unit test
 */
import AbstractBootstrap from '../../../code/core/model/bootstrap'
import ObjectProcessor from '../../../code/core/model/bootstrap/object-processor'
import Rubik from './object-processor/rubik'

export default class Bootstrap extends AbstractBootstrap {
  /**
   * Constructor
   *
   * @param {ObjectProcessor[]} objectProcessors
   */
  constructor(objectProcessors: ObjectProcessor[] = [new Rubik()]) {
    super(objectProcessors)
  }
}
