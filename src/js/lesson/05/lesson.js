/**
 * @description 05 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/animations
 */
import * as THREE from 'three'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Update
   *
   * @params  {number} t
   * @returns {void}
   */
  update(t) {
    this.mesh.position.x = Math.sin(t / 1000)
    this.mesh.position.y = Math.cos(t / 1000)
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff})
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)

    gsap.to(this.mesh.position, {z: -3, delay: 1, duration: 1})
    gsap.to(this.mesh.position, {z: 0, delay: 2, duration: 1})

    super.open()
  }
}
