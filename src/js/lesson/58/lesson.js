/**
 * @description 58 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/environment-and-staging-with-r3f}
 */
import ReactLesson from '../../core/lesson/react-lesson.js'
import Index from './lib/react/index.jsx'

export default class Lesson extends ReactLesson {
  /**
   * Constructor
   */
  constructor() {
    super()
    this.app = new Index()
  }

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '58'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Environment and Staging'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/environment-and-staging-with-r3f'
  }
}
