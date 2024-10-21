/**
 * @description 20 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/imported-models}
 */
import * as THREE from 'three'
import {Timer} from 'three/addons/misc/Timer.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {Timer}
   */
  timer

  /**
   * @type {THREE.AnimationMixer}
   */
  foxMixer = null

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
    return 'Imported models'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/imported-models'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)

    this.control.update()
    if (this.foxMixer) {
      this.foxMixer.update(this.timer.getDelta())
    }
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initTimer()
    this.#initLights()
    this.#initPlane()
    this.#initModels()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 75
    this.camera.near = 0.1
    this.camera.far = 100
    this.camera.position.set(3, 3, 8)
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModels() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      '/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf',
      (model) => {
        model.scene.position.set(3, 0, 3)
        this.scene.add(model.scene)
      },
    )

    gltfLoader.load(
      '/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf',
      (model) => {
        model.scene.position.set(-3, 0, -3)
        model.scene.scale.set(4, 4, 4)
        this.scene.add(model.scene)
      },
    )

    gltfLoader.load(
      '/three.js-journey/media/models/Fox/glTF/Fox.gltf',
      (model) => {
        model.scene.scale.set(0.025, 0.025, 0.025)
        this.scene.add(model.scene)

        this.foxMixer = new THREE.AnimationMixer(model.scene)
        const action = this.foxMixer.clipAction(model.animations[2])
        action.play()
      },
    )
  }

  /**
   * Init timer
   *
   * @returns {void}
   */
  #initTimer() {
    this.timer = new Timer()
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const geometry = new THREE.PlaneGeometry(10, 10, 10)
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 0.7,
    })
    const plane = new THREE.Mesh(geometry, material)
    plane.rotation.x = -Math.PI / 2
    this.scene.add(plane)
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    this.scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 3)
    dirLight.position.set(3, 3, 0)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.set(1024, 1024)
    dirLight.shadow.camera.far = 15
    dirLight.shadow.camera.left = -7
    dirLight.shadow.camera.top = 7
    dirLight.shadow.camera.right = 7
    dirLight.shadow.camera.bottom = -7
    this.scene.add(dirLight)
  }
}
