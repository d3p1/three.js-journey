/**
 * @description 07 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/fullscreen-and-resizing
 */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {OrbitControls}
   */
  control

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.control.update()
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.#initMesh()
    this.#initControl()
    this.#addFullScreenListener()

    super.open()
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    super.close()

    this.#removeFullScreenListener()
  }

  /**
   * Add full screen listener
   *
   * @returns {void}
   */
  #addFullScreenListener() {
    document.addEventListener('keydown', this.#toggleFullScreen.bind(this))
  }

  /**
   * Remove full screen listener
   *
   * @returns {void}
   */
  #removeFullScreenListener() {
    document.removeEventListener('keydown', this.#toggleFullScreen)
  }

  /**
   * Toggle full screen
   *
   * @param   {Event} e
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
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)
  }

  /**
   * Init control
   *
   * @returns {void}
   */
  #initControl() {
    this.control = new OrbitControls(this.camera, this.canvas)
    this.control.enableDamping = true
  }
}
