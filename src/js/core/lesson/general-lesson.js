/**
 * @description General lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import Lesson from '../lesson.js'

export default class GeneralLesson extends Lesson {
  /**
   * @type {THREE.WebGLRenderer}
   */
  renderer

  /**
   * @type {HTMLCanvasElement}
   */
  canvas

  /**
   * Constructor
   */
  constructor() {
    super()

    this.#initCanvas()
    this.#initRenderer()
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    document.body.appendChild(this.canvas)
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    document.body.removeChild(this.canvas)
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
   * Init renderer
   *
   * @returns {void}
   */
  #initRenderer() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas})
    this.#resizeRenderer()
    document.addEventListener('resize', this.#resizeRenderer.bind(this))
  }

  /**
   * Resize renderer
   *
   * @returns {void}
   */
  #resizeRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
