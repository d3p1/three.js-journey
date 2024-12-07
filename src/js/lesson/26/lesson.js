/**
 * @description 26 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/code-structuring-for-bigger-projects}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import {Timer} from 'three/addons/misc/Timer.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.AnimationMixer|null}
   */
  animation = null

  /**
   * @type {THREE.AnimationAction|null}
   */
  currentAction = null

  /**
   * @type {THREE.AnimationClip[]}
   */
  actions = []

  /**
   * @type {Timer}
   */
  timer

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

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
    return '26'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Code structuring for bigger projects'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/code-structuring-for-bigger-projects'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)

    if (this.animation) {
      this.animation.update(this.timer.getDelta())
    }

    this.control.update()
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
    this.#initFloor()
    this.#initModel()
    this.#initEnvMap()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(3, 2, 3)
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
   * Init floor
   *
   * @returns {void}
   */
  #initFloor() {
    const loader = new THREE.TextureLoader()
    const floorColor = loader.load(
      '/three.js-journey/media/images/textures/dirt/color.jpg',
    )
    const floorNormal = loader.load(
      '/three.js-journey/media/images/textures/dirt/normal.jpg',
    )

    floorColor.colorSpace = THREE.SRGBColorSpace
    floorColor.repeat.set(2, 2)
    floorNormal.repeat.set(2, 2)
    floorColor.wrapS = THREE.RepeatWrapping
    floorColor.wrapT = THREE.RepeatWrapping
    floorNormal.wrapS = THREE.RepeatWrapping
    floorNormal.wrapT = THREE.RepeatWrapping

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(2.5),
      new THREE.MeshStandardMaterial({
        map: floorColor,
        normalMap: floorNormal,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    this.scene.add(floor)
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const loader = new THREE.CubeTextureLoader()
    this.scene.environment = loader.load([
      '/three.js-journey/media/images/environmentMap/3/px.jpg',
      '/three.js-journey/media/images/environmentMap/3/nx.jpg',
      '/three.js-journey/media/images/environmentMap/3/py.jpg',
      '/three.js-journey/media/images/environmentMap/3/ny.jpg',
      '/three.js-journey/media/images/environmentMap/3/pz.jpg',
      '/three.js-journey/media/images/environmentMap/3/nz.jpg',
    ])
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModel() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      '/three.js-journey/media/models/Fox/glTF/Fox.gltf',
      (model) => {
        model.scene.scale.set(0.015, 0.015, 0.015)
        model.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        this.scene.add(model.scene)

        this.#initAnimation(model.scene, model.animations)
        this.#playAction('survey')
        this.#initGuiAnimationTweaks()
      },
    )
  }

  /**
   * Init Animation
   *
   * @param   {THREE.Group}           model
   * @param   {THREE.AnimationClip[]} animations
   * @returns {void}
   */
  #initAnimation(model, animations) {
    this.animation = new THREE.AnimationMixer(model)
    this.actions['survey'] = this.animation.clipAction(animations[0])
    this.actions['walk'] = this.animation.clipAction(animations[1])
    this.actions['run'] = this.animation.clipAction(animations[2])
  }

  /**
   * Init GUI animation tweaks
   *
   * @returns {void}
   */
  #initGuiAnimationTweaks() {
    const foxFolder = this.guiControl.addFolder('Fox')

    foxFolder.add(
      {
        survey: () => {
          this.#playAction('survey')
        },
      },
      'survey',
    )

    foxFolder.add(
      {
        walk: () => {
          this.#playAction('walk')
        },
      },
      'walk',
    )

    foxFolder.add(
      {
        run: () => {
          this.#playAction('run')
        },
      },
      'run',
    )
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(3, 2, 0)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 10
    this.scene.add(directionalLight)
  }

  /**
   * Play action
   *
   * @param   {string} name
   * @returns {void}
   */
  #playAction(name) {
    const newAction = this.actions[name]
    newAction?.reset()
    newAction?.play()

    if (this.currentAction) {
      newAction?.crossFadeFrom(this.currentAction, 1)
    }

    this.currentAction = newAction
  }
}
