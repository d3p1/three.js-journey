/**
 * @description 03 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/first-threejs-project}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '03'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'First Three.js Project'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/first-threejs-project'
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
    this.object3d = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.object3d)

    this.renderer.render(this.scene, this.camera)
  }
}
