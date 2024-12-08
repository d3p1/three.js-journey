/**
 * @description 37 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/halftone-shading-shaders}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import halftoneVertexShader from './shader/halftone/vertex.glsl'
import halftoneFragmentShader from './shader/halftone/fragment.glsl'

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
  halftoneMaterial

  /**
   * @type {number}
   */
  halftoneRepetitions = 100

  /**
   * @type {string}
   */
  halftoneColor = '#8e19b8'

  /**
   * @type {string}
   */
  halftoneBaseColor = '#ff794d'

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
   * @type {Function}
   */
  #boundResizeRenderer

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
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.canvas.removeEventListener('resize', this.#boundResizeRenderer)

    super.dispose()
  }

  /**
   * GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    const halftoneDownward = this.guiControl.addFolder('Halftone Downward')

    halftoneDownward
      .add({repetitions: this.halftoneRepetitions}, 'repetitions')
      .min(10)
      .max(300)
      .step(1)
      .onChange((value) => {
        this.halftoneMaterial.uniforms.uRepetitions.value = value
      })

    halftoneDownward
      .addColor({color: this.halftoneColor}, 'color')
      .onChange((value) => {
        this.halftoneMaterial.uniforms.uColor.value.set(value)
      })

    halftoneDownward
      .addColor({baseColor: this.halftoneBaseColor}, 'baseColor')
      .onChange((value) => {
        this.halftoneMaterial.uniforms.uBaseColor.value.set(value)
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

    this.halftoneMaterial = new THREE.ShaderMaterial({
      vertexShader: halftoneVertexShader,
      fragmentShader: halftoneFragmentShader,
      uniforms: {
        uBaseColor: new THREE.Uniform(new THREE.Color(this.halftoneBaseColor)),
        uColor: new THREE.Uniform(new THREE.Color(this.halftoneColor)),
        uRepetitions: new THREE.Uniform(this.halftoneRepetitions),
        uResolution: new THREE.Uniform(this.#getResolution()),
      },
    })

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(),
      this.halftoneMaterial,
    )
    this.sphere.position.x = -3
    this.scene.add(this.sphere)

    this.torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32),
      this.halftoneMaterial,
    )
    this.torusKnot.position.x = 3
    this.scene.add(this.torusKnot)

    gltfLoader.load(
      '/three.js-journey/media/models/Suzanne/suzanne.glb',
      (gltf) => {
        const scene = gltf.scene
        scene.traverse((model) => {
          if (model.isMesh) {
            model.material = this.halftoneMaterial
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
    this.camera.position.set(3, 3, 3)
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor(this.backgroundColor)

    this.#boundResizeRenderer = () => {
      this.halftoneMaterial.uniforms.uResolution.value = this.#getResolution()
    }
  }

  /**
   * Get resolution
   *
   * @return {THREE.Vector2}
   */
  #getResolution() {
    return new THREE.Vector2(
      this.canvas.width * this.renderer.getPixelRatio(),
      this.canvas.height * this.renderer.getPixelRatio(),
    )
  }
}
