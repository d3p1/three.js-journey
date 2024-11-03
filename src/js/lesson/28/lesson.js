/**
 * @description 28 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/shader-patterns}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import patternVertexShader from './shader/pattern/vertex.glsl'
import patternFragmentShader from './shader/pattern/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 28] Shader patterns'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/shader-patterns'
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

    this.#initPlane()
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const geometry = new THREE.PlaneGeometry(2, 2, 64, 64)
    const material = new THREE.ShaderMaterial({
      vertexShader: patternVertexShader,
      fragmentShader: patternFragmentShader,
      side: THREE.DoubleSide,
    })
    const plane = new THREE.Mesh(geometry, material)
    this.scene.add(plane)
  }
}
