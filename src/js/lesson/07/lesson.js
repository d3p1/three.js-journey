/**
 * @description 07 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/fullscreen-and-resizing}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {Function}
   */
  #boundToggleFullScreen

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 07] Fullscreen and resizing'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/fullscreen-and-resizing'
  }

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initMesh()
    this.#addFullScreenListener()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.#removeFullScreenListener()
  }

  /**
   * Add full screen listener
   *
   * @returns {void}
   */
  #addFullScreenListener() {
    this.#boundToggleFullScreen = this.#toggleFullScreen.bind(this)
    document.addEventListener('keydown', this.#boundToggleFullScreen)
  }

  /**
   * Remove full screen listener
   *
   * @returns {void}
   */
  #removeFullScreenListener() {
    document.removeEventListener('keydown', this.#boundToggleFullScreen)
  }

  /**
   * Toggle full screen
   *
   * @param   {KeyboardEvent} e
   * @returns {void}
   */
  #toggleFullScreen(e) {
    if (e.code === 'KeyF') {
      document.fullscreenElement
        ? document.exitFullscreen()
        : this.canvas.requestFullscreen()
    }
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
    this.object3d = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.object3d)
  }
}
