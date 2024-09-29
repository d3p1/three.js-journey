/**
 * @description Lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The idea behind this class is to work as an abstract class
 *              that lesson implementations must inherit from
 */
export default class Lesson {
  /**
   * Open lesson
   *
   * @return {void}
   * @throws {Error}
   */
  open() {
    throw new Error(
      'Lesson class must implement an `open` method that implements current lesson logic',
    )
  }

  /**
   * Close lesson
   *
   * @return {void}
   * @throws {Error}
   */
  close() {
    throw new Error(
      'Lesson class must implement `close` method that release resources used by the lesson implementation',
    )
  }
}
