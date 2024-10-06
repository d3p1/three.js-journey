/**
 * @description 12 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/3d-text}
 */
import * as THREE from 'three'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.MeshMatcapMaterial}
   */
  material

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
    return '[LESSON 12] 3D Text'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/3d-text'
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

    this.#initMaterial()
    this.#initText()
    this.#initCameraPostion()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.material = null
  }

  /**
   * Init camera position
   *
   * @returns {void}
   */
  #initCameraPostion() {
    this.camera.position.z = 2
    this.camera.position.y = 1
    this.camera.position.x = 1
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(
      '/three.js-journey/media/images/textures/matcaps/1.png',
    )
    texture.colorSpace = THREE.SRGBColorSpace
    this.material = new THREE.MeshMatcapMaterial({matcap: texture})
  }

  /**
   * Init text
   *
   * @returns {void}
   */
  #initText() {
    const fontLoader = new FontLoader()
    fontLoader.load(
      '/three.js-journey/media/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const geometry = new TextGeometry('Three.js rocks!', {
          font: font,
          size: 0.3,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        })
        geometry.center()
        this.mesh = new THREE.Mesh(geometry, this.material)
        this.scene.add(this.mesh)

        this.#initDonutsFromBoundingBox(geometry.boundingBox)
      },
    )
  }

  /**
   * Init donuts from bounding box
   *
   * @param   {THREE.Box3} box
   * @returns {void}
   */
  #initDonutsFromBoundingBox(box) {
    const geometry = new THREE.TorusGeometry(0.2, 0.1, 20, 45)

    const width = box.max.x - box.min.x
    const height = box.max.y - box.min.y
    const depth = box.max.z - box.min.z
    const margin = 5
    for (let i = 0; i < 100; i++) {
      const donut = new THREE.Mesh(geometry, this.material)

      donut.position.x =
        ((width + margin) / 2) * (-1) ** Math.round(Math.random()) +
        Math.random() * 5
      donut.position.y =
        ((height + margin) / 2) * (-1) ** Math.round(Math.random()) +
        Math.random() * 5
      donut.position.z =
        ((depth + margin) / 2) * (-1) ** Math.round(Math.random()) +
        Math.random() * 5

      donut.rotation.x = Math.random() * Math.PI
      donut.rotation.y = Math.random() * Math.PI

      const scale = Math.random() * 2
      donut.scale.set(scale, scale, scale)

      this.scene.add(donut)
    }
  }
}
