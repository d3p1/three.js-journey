/**
 * @description 59 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/load-models-with-r3f}
 */
import BaseLesson from '../../core/lesson.js'
import Index from './lib/react/index.jsx'

export default class Lesson extends BaseLesson {
  /**
   * @type {HTMLElement}
   */
  appElement

  /**
   * @type {Index}
   */
  app

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '59'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Load models'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/load-models-with-r3f'
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.appElement = document.createElement('div')
    this.appElement.style.height = '100vh'
    this.appElement.style.width = '100vw'
    this.app = new Index(this.appElement)

    document.body.appendChild(this.appElement)
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    this.app.dispose()
    document.body.removeChild(this.appElement)
  }
}
