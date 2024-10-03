/**
 * @description 08 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/geometries
 */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
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
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.control = new OrbitControls(this.camera, this.canvas)

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    })
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)
  }
}
