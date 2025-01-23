/**
 * @description Index for React lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The idea behind this class is to work as an abstract class
 *              that React implementations must inherit from
 */
import {createRoot, Root} from 'react-dom/client'

export default class Index {
  /**
   * @type {Root}
   */
  root

  /**
   * Init
   *
   * @param   {HTMLElement} rootElement
   * @returns {void}
   * @throws  {Error}
   */
  init(rootElement) {
    this.root = createRoot(rootElement)
  }

  /**
   * Render
   *
   * @returns {void}
   */
  render() {
    throw new Error('You should implement a `render` method')
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    this.root.unmount()
  }
}
