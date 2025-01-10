/**
 * @description 51 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/importing-and-optimizing-the-scene}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  model

  /**
   * @type {boolean}
   */
  hasGuiTweaks = false

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '51'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Importing and optimizing the scene'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/importing-and-optimizing-the-scene'
  }

  /**
   * Update lesson
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

    this.#initModel()
    this.#setupCamera()
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModel() {
    const textureLoader = new THREE.TextureLoader()
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    const color = textureLoader.load(
      '/three.js-journey/media/images/textures/LessonPortal/color.jpg',
    )
    color.flipY = false
    color.colorSpace = THREE.SRGBColorSpace

    const baseMaterial = new THREE.MeshBasicMaterial({
      map: color,
    })
    const portalLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
    const poleLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffe5})

    gltfLoader.load(
      '/three.js-journey/media/models/LessonPortal/portal.glb',
      (model) => {
        this.model = model.scene
        this.model.traverse((child) => {
          if (child.isMesh) {
            switch (child.name) {
              case 'poleLightA':
              case 'poleLightB':
                child.material = poleLightMaterial
                break

              case 'portalLight':
                child.material = portalLightMaterial
                break

              default:
                child.material = baseMaterial
            }
          }
        })

        this.scene.add(model.scene)
      },
    )
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(4, 2, 4)
    this.camera.fov = 45
    this.camera.updateProjectionMatrix()
  }
}
