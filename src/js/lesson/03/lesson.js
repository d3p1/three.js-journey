/**
 * @description 03 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/first-threejs-project
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  #sizes = {
    width: 800,
    height: 600,
  }

  open() {
    super.open()

    const scene = new THREE.Scene()

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(box)

    const camera = new THREE.PerspectiveCamera(
      75,
      this.#sizes.width / this.#sizes.height,
    )
    camera.position.z = 3
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({canvas: this.canvas})
    renderer.setSize(this.#sizes.width, this.#sizes.height)

    renderer.render(scene, camera)
  }
}
