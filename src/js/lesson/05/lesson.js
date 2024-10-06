/**
 * @description 05 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/animations}
 */
import * as THREE from 'three'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {Array}
   */
  animations = []

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
    return '[LESSON 05] Animations'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/animations'
  }

  /**
   * Update
   *
   * @params  {number} t
   * @returns {void}
   */
  update(t) {
    this.object3d.position.x = Math.sin(t / 1000)
    this.object3d.position.y = Math.cos(t / 1000)
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff})
    this.object3d = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.object3d)

    this.animations.push(
      gsap.to(this.object3d.position, {z: -3, delay: 1, duration: 1}),
    )
    this.animations.push(
      gsap.to(this.object3d.position, {z: 0, delay: 2, duration: 1}),
    )
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.animations.forEach((animation) => animation.kill())
    this.animations = []
  }
}
