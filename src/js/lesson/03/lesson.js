/**
 * @description 03 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/first-threejs-project
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    super.open()

    const scene = new THREE.Scene()

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(box)

    const camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
    )
    camera.position.z = 3
    scene.add(camera)

    this.renderer.render(scene, camera)
  }
}
