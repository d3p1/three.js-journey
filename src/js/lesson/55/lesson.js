/**
 * @description 55 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/first-r3f-application}
 */
import BaseLesson from '../../core/lesson.js'
import Index from './lib/react/index.jsx'

export default class Lesson extends BaseLesson {
  /**
   * @type {Index}
   */
  app

  /**
   * @type {HTMLElement}
   */
  appElement

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '55'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'First R3F Application'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/first-r3f-application'
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.appElement = document.createElement('div')
    this.appElement.style.width = '100vw'
    this.appElement.style.height = '100vh'
    document.body.appendChild(this.appElement)

    this.app = new Index(this.appElement)
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
