/**
 * @description 64 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/fun-and-simple-portfolio-with-r3f}
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
    return '64'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Fun and Simple Portfolio'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/fun-and-simple-portfolio-with-r3f'
  }
}
