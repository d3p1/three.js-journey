/**
 * @description 32 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/coffee-smoke-shader}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import perlinNoiseTexture from './media/images/coffee/perlin.png'
import coffeeModel from './media/models/coffee/bakedModel.glb'
import smokeVertexShader from './shader/smoke/vertex.glsl'
import smokeFragmentShader from './shader/smoke/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.ShaderMaterial|null}
   */
  smokeMaterial = null

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
    return '32'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Coffee Smoke'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/coffee-smoke-shader'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    if (this.smokeMaterial) {
      this.smokeMaterial.uniforms.uTime.value = t * 0.001
    }

    this.control.update()
  }

  /**
   * Init the lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initModel()
    this.#setupCamera()
  }

  /**
   * Add smoke
   *
   * @returns {void}
   */
  #addSmoke() {
    const textureLoader = new THREE.TextureLoader()
    const perlinTexture = textureLoader.load(perlinNoiseTexture)
    perlinTexture.wrapS = THREE.RepeatWrapping
    perlinTexture.wrapT = THREE.RepeatWrapping

    const smokeGeometry = new THREE.PlaneGeometry(1, 1, 16, 64)
    this.smokeMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      vertexShader: smokeVertexShader,
      fragmentShader: smokeFragmentShader,
      uniforms: {
        uPerlinNoiseTexture: new THREE.Uniform(perlinTexture),
        uTime: new THREE.Uniform(0),
      },
    })
    const smoke = new THREE.Mesh(smokeGeometry, this.smokeMaterial)
    smoke.scale.set(1.5, 6, 1.5)
    smoke.position.y = 4.83
    this.scene.add(smoke)
  }

  /**
   * Init the model
   *
   * @returns {void}
   */
  #initModel() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(coffeeModel, (model) => {
      this.scene.add(model.scene)

      this.#addSmoke()
    })
  }

  /**
   * Setup the camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(3, 9, 6)
  }
}
