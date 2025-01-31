/**
 * @description React lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Lesson from '../lesson.js'
import Index from './react-lesson/index.jsx'

export default class ReactLesson extends Lesson {
  /**
   * @type {Index}
   */
  app

  /**
   * @type {HTMLElement}
   */
  appElement

  /**
   * Open lesson
   *
   * @returns {void}
   * @throws  {Error}
   */
  open() {
    if (!this.app instanceof Index) {
      throw new Error('You should provide a React app')
    }

    this.appElement = document.createElement('div')
    this.appElement.style.position = 'fixed'
    this.appElement.style.width = '100vw'
    this.appElement.style.height = '100vh'
    this.appElement.style.zIndex = '-1'
    document.body.appendChild(this.appElement)

    this.app.init(this.appElement)
    this.app.render()
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
