/**
 * @description Bootstrap class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default class Bootstrap {
  /**
   * @type {[]}
   */
  #lessons = []

  /**
   * @type {number}
   */
  #currentLessonIndex = 0

  /**
   * Constructor
   *
   * @param {Lesson[]} lessons
   * @param {string}   navLeftSelector
   * @param {string}   navRightSelector
   */
  constructor(lessons, navLeftSelector, navRightSelector) {
    this.#lessons = lessons
    this.#initNav(navLeftSelector, navRightSelector)
    this.#initListener()
  }

  /**
   * Run
   *
   * @returns {void}
   */
  run() {
    if (this.#lessons.length) {
      this.#openLesson()
    }
  }

  /**
   * Init navigation
   *
   * @param   {string}   navLeftSelector
   * @param   {string}   navRightSelector
   * @returns {void}
   */
  #initNav(navLeftSelector, navRightSelector) {
    const navLeft = document.querySelector(navLeftSelector)
    const navRight = document.querySelector(navRightSelector)
    navLeft.addEventListener('click', this.#openPreviousLesson.bind(this))
    navRight.addEventListener('click', this.#openNextLesson.bind(this))
  }

  /**
   * Init listeners
   *
   * @returns {void}
   */
  #initListener() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        this.#openNextLesson()
      }

      if (e.key === 'ArrowLeft') {
        this.#openPreviousLesson()
      }
    })
  }

  /**
   * Open next lesson
   *
   * @returns {void}
   */
  #openNextLesson() {
    this.#closeLesson()

    if (this.#currentLessonIndex >= this.#lessons.length - 1) {
      this.#currentLessonIndex = 0
    } else {
      this.#currentLessonIndex++
    }

    this.#openLesson()
  }

  /**
   * Open previous lesson
   *
   * @returns {void}
   */
  #openPreviousLesson() {
    this.#closeLesson()

    if (this.#currentLessonIndex <= 0) {
      this.#currentLessonIndex = this.#lessons.length - 1
    } else {
      this.#currentLessonIndex--
    }

    this.#openLesson()
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  #closeLesson() {
    this.#lessons[this.#currentLessonIndex].close()
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  #openLesson() {
    this.#lessons[this.#currentLessonIndex].open()
  }
}
