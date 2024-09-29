/**
 * @description General lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Lesson from '../lesson.js'

export default class GeneralLesson extends Lesson {
  /**
   * @type {HTMLCanvasElement}
   */
  canvas

  /**
   * Constructor
   */
  constructor() {
    super()

    this.#initCanvas()
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    document.body.appendChild(this.canvas)
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    document.body.removeChild(this.canvas)
  }

  /**
   * Init canvas
   *
   * @returns {void}
   */
  #initCanvas() {
    this.canvas = document.createElement('canvas')
  }
}
