/**
 * @description 04 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/transform-objects
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

    const axes = new THREE.AxesHelper(6)
    scene.add(axes)

    const camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
    )
    camera.position.z = 3
    scene.add(camera)

    const group = new THREE.Group()
    group.scale.y = 2
    group.scale.x = 0.5
    group.rotation.y = Math.PI * 0.25
    scene.add(group)

    const boxGeometry1 = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial1 = new THREE.MeshBasicMaterial({color: 0xff0000})
    const box1 = new THREE.Mesh(boxGeometry1, boxMaterial1)
    box1.position.x = -1.5
    group.add(box1)

    const boxGeometry2 = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial2 = new THREE.MeshBasicMaterial({color: 0x00ff00})
    const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2)
    box2.position.x = 0
    group.add(box2)

    const boxGeometry3 = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial3 = new THREE.MeshBasicMaterial({color: 0x0000ff})
    const box3 = new THREE.Mesh(boxGeometry3, boxMaterial3)
    box3.position.x = 1.5
    group.add(box3)

    camera.lookAt(box1.position)

    this.renderer.render(scene, camera)
  }
}
