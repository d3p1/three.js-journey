/**
 * @description 24 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/environment-map}
 */
import * as THREE from 'three'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import {EXRLoader} from 'three/addons/loaders/EXRLoader.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
import {GroundedSkybox} from 'three/addons/objects/GroundedSkybox.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import BlenderEnvMap1 from './media/images/environmentMap/blender/1.hdr'
import BlenderEnvMap2 from './media/images/environmentMap/blender/2.hdr'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.CubeCamera}
   */
  cubeCamera

  /**
   * @type {THREE.Mesh}
   */
  holyDonut

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

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
    return '[LESSON 24] Environment map'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/environment-map'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    const sec = t * 0.001
    this.holyDonut.rotation.x = Math.abs(Math.cos(sec)) * Math.PI

    this.cubeCamera.update(this.renderer, this.scene)
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initEnvironmentMap()
    this.#initTorusKnot()
    this.#initHelmetModel()
    this.#initHolyDonut()
    this.#initGuiTweaks()

    this.#setupCamera()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(1, 1, 6)
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    const environment = this.guiControl.addFolder('Environment')
    environment
      .add(this.scene, 'environmentIntensity')
      .min(0)
      .max(10)
      .step(0.01)
      .name('intensity')
    environment
      .add(this.scene.environmentRotation, 'y')
      .min(0)
      .max(2 * Math.PI)
      .step(0.01)
      .name('rotation')

    const background = this.guiControl.addFolder('background')
    background
      .add(this.scene, 'backgroundIntensity')
      .min(0)
      .max(10)
      .step(0.01)
      .name('intensity')
    background
      .add(this.scene, 'backgroundBlurriness')
      .min(0)
      .max(1)
      .step(0.01)
      .name('blurriness')
    background
      .add(this.scene.backgroundRotation, 'y')
      .min(0)
      .max(2 * Math.PI)
      .step(0.01)
      .name('rotation')
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvironmentMap() {
    const loader = new THREE.TextureLoader()
    const background = loader.load(
      '/three.js-journey/media/images/environmentMap/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg',
    )
    background.colorSpace = THREE.SRGBColorSpace
    background.mapping = THREE.EquirectangularReflectionMapping
    this.scene.background = background

    const cubeRendererTarget = new THREE.WebGLCubeRenderTarget(64, {
      type: THREE.HalfFloatType,
    })
    this.cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRendererTarget)
    this.cubeCamera.layers.set(1)
    this.scene.environment = cubeRendererTarget.texture
  }

  /**
   * Init holy donut
   *
   * @returns {void}
   */
  #initHolyDonut() {
    this.holyDonut = new THREE.Mesh(
      new THREE.TorusGeometry(4, 0.2),
      new THREE.MeshBasicMaterial(),
    )
    this.holyDonut.layers.enable(1)
    this.scene.add(this.holyDonut)
  }

  /**
   * Init helmet model
   *
   * @returns {void}
   */
  #initHelmetModel() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      '/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf',
      (model) => {
        model.scene.scale.set(3, 3, 3)
        model.scene.position.set(0, -1, 0)
        this.scene.add(model.scene)
      },
    )
  }

  /**
   * Init torus knot
   *
   * @returns {void}
   */
  #initTorusKnot() {
    const torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.5, 0.2),
      new THREE.MeshStandardMaterial({
        metalness: 1,
        roughness: 0,
        color: 0xaaaaaa,
      }),
    )
    torusKnot.position.set(-2, 0, 0)
    this.scene.add(torusKnot)
  }
}
