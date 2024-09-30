/**
 * @description General lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import Lesson from '../lesson.js'

export default class GeneralLesson extends Lesson {
  /**
   * @type {THREE.Scene}
   */
  scene

  /**
   * @type {THREE.PerspectiveCamera|THREE.Camera}
   */
  camera

  /**
   * @type {THREE.WebGLRenderer}
   */
  renderer

  /**
   * @type {HTMLCanvasElement}
   */
  canvas

  /**
   * @type {boolean}
   */
  hasAnimation

  /**
   * @type {number}
   */
  #requestAnimationId

  /**
   * Constructor
   */
  constructor() {
    super()

    this.#initCanvas()
    this.initScene()
    this.initCamera()
    this.initRenderer()
  }

  /**
   * Update
   *
   * @params  {number} t
   * @returns {void}
   * @throws  {Error}
   */
  update(t) {
    throw new Error(
      'General lesson class with animations must implement an `update` method that implements current lesson logic',
    )
  }

  /**
   * Animate
   *
   * @param   {number} t
   * @returns {void}
   */
  animate(t = 0) {
    this.update(t)
    this.renderer.render(this.scene, this.camera)
    this.#requestAnimationId = requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    document.body.appendChild(this.canvas)

    if (this.hasAnimation) {
      this.animate()
    }
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    document.body.removeChild(this.canvas)

    if (this.#requestAnimationId) {
      cancelAnimationFrame(this.#requestAnimationId)
    }
  }

  /**
   * Init scene
   *
   * @returns {void}
   */
  initScene() {
    this.scene = new THREE.Scene()
  }

  /**
   * Init camera
   *
   * @returns {void}
   */
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
    )
    this.camera.position.z = 3
    this.scene.add(this.camera)
  }

  /**
   * Init renderer
   *
   * @returns {void}
   */
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas})
    this.#resizeRenderer()
    window.addEventListener('resize', this.#resizeRenderer.bind(this))
  }

  /**
   * Init canvas
   *
   * @returns {void}
   */
  #initCanvas() {
    this.canvas = document.createElement('canvas')
  }

  /**
   * Resize renderer
   *
   * @returns {void}
   */
  #resizeRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.render(this.scene, this.camera)
  }
}
