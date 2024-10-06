/**
 * @description 09 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/debug-ui}
 */
import * as THREE from 'three'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'

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
    return '[LESSON 09] Debug UI'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/debug-ui'
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

    this.#initMesh()
    this.#addGuiTweaks()
  }

  /**
   * Add GUI tweaks
   *
   * @returns {void}
   */
  #addGuiTweaks() {
    this.guiControl
      .add(this.mesh.position, 'y')
      .min(-2)
      .max(2)
      .step(0.01)
      .name('elevation')
    this.guiControl.add(this.mesh, 'visible')
    this.guiControl.add(this.mesh.material, 'wireframe')

    this.guiControl
      .addColor({color: this.mesh.material.color.getHex()}, 'color')
      .onChange((value) => {
        this.mesh.material.color.setHex(value)
      })

    this.guiControl.add(
      {
        spin: () => {
          gsap.to(this.mesh.rotation, {y: this.mesh.rotation.y + Math.PI * 2})
        },
      },
      'spin',
    )

    this.guiControl
      .add({subdivisions: 1}, 'subdivisions')
      .min(1)
      .max(20)
      .step(1)
      .onFinishChange((value) => {
        this.mesh.geometry.dispose()
        this.mesh.geometry = new THREE.BoxGeometry(1, 1, 1, value, value, value)
      })
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xd97df2,
      wireframe: true,
    })
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)
  }
}
