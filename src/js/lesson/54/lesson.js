/**
 * @description 54 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/first-react-application}
 */
import BaseLesson from '../../core/lesson.js'
import App from './lib/react/index.jsx'

export default class Lesson extends BaseLesson {
  /**
   * @type {App}
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
    return '54'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'First React Application'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/first-react-application'
  }

  /**
   * Open lesson
   *
   * @return {void}
   * @throws {Error}
   */
  open() {
    this.appElement = document.createElement('div')
    document.body.appendChild(this.appElement)

    this.app = new App()
    this.app.init(this.appElement)
  }

  /**
   * Close lesson
   *
   * @return {void}
   * @throws {Error}
   */
  close() {
    this.app.dispose()
    document.body.removeChild(this.appElement)
  }
}
