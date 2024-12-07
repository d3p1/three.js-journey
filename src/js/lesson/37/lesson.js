/**
 * @description 37 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/halftone-shading-shaders}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import halfToneVertexShader from './shader/half-tone/vertex.glsl'
import halfToneFragmentShader from './shader/half-tone/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  suzanne = null

  /**
   * @type {THREE.Mesh}
   */
  torusKnot

  /**
   * @type {THREE.Mesh}
   */
  sphere

  /**
   * @type {THREE.ShaderMaterial}
   */
  halfToneMaterial

  /**
   * @type {string}
   */
  halfToneBaseColor = '#ff794d'

  /**
   * @type {string}
   */
  backgroundColor = '#26132f'

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
    return '37'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Halftone Shading'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/halftone-shading-shaders'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const sec = t * 0.001

    if (this.suzanne) {
      this.suzanne.rotation.x = -sec * 0.1
      this.suzanne.rotation.y = sec * 0.2
    }

    this.sphere.rotation.x = -sec * 0.1
    this.sphere.rotation.y = sec * 0.2

    this.torusKnot.rotation.x = -sec * 0.1
    this.torusKnot.rotation.y = sec * 0.2

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initGuiTweaks()
    this.#initMeshes()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .addColor({baseColor: this.halfToneBaseColor}, 'baseColor')
      .onChange((value) => {
        this.halfToneMaterial.uniforms.uBaseColor.value.set(value)
      })

    this.guiControl
      .addColor({backgroundColor: this.backgroundColor}, 'backgroundColor')
      .onChange((value) => {
        this.renderer.setClearColor(value)
      })
  }

  /**
   * Init meshes
   *
   * @returns {void}
   */
  #initMeshes() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    this.halfToneMaterial = new THREE.ShaderMaterial({
      vertexShader: halfToneVertexShader,
      fragmentShader: halfToneFragmentShader,
      uniforms: {
        uBaseColor: new THREE.Uniform(new THREE.Color(this.halfToneBaseColor)),
      },
    })

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(),
      this.halfToneMaterial,
    )
    this.sphere.position.x = -3
    this.scene.add(this.sphere)

    this.torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32),
      this.halfToneMaterial,
    )
    this.torusKnot.position.x = 3
    this.scene.add(this.torusKnot)

    gltfLoader.load(
      '/three.js-journey/media/models/Suzanne/suzanne.glb',
      (gltf) => {
        const scene = gltf.scene
        scene.traverse((model) => {
          if (model.isMesh) {
            model.material = this.halfToneMaterial
            this.suzanne = model
            this.scene.add(this.suzanne)
          }
        })
      },
    )
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(7, 7, 7)
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor(this.backgroundColor)
  }
}
