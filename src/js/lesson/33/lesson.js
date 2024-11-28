/**
 * @description 33 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/hologram-shader}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import hologramVertexShader from './shader/hologram/vertex.glsl'
import hologramFragmentShader from './shader/hologram/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh|null}
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
  material

  /**
   * @type {string}
   */
  hologramColor = '#70c1ff'

  /**
   * @type {string}
   */
  backgroundColor = '#1d1f2a'

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get the lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 33] Hologram'
  }

  /**
   * Get the lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/hologram-shader'
  }

  /**
   * Update the lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const sec = t * 0.001
    const rDisplacementX = -sec * 0.1
    const rDisplacementY = sec * 0.2

    this.material.uniforms.uTime.value = sec

    if (this.suzanne) {
      this.suzanne.rotation.x = rDisplacementX
      this.suzanne.rotation.y = rDisplacementY
    }

    this.sphere.rotation.x = rDisplacementX
    this.sphere.rotation.y = rDisplacementY

    this.torusKnot.rotation.x = rDisplacementX
    this.torusKnot.rotation.y = rDisplacementY

    this.control.update()
  }

  /**
   * Init the lesson
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
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .addColor({backgroundColor: this.backgroundColor}, 'backgroundColor')
      .onChange((value) => {
        this.renderer.setClearColor(value)
      })

    this.guiControl
      .addColor({hologramColor: this.hologramColor}, 'hologramColor')
      .onChange((value) => {
        this.material.uniforms.uColor.value.set(value)
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

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: hologramVertexShader,
      fragmentShader: hologramFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uColor: new THREE.Uniform(new THREE.Color(this.hologramColor)),
      },
    })

    this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1), this.material)
    this.sphere.position.x = -3
    this.scene.add(this.sphere)

    this.torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32),
      this.material,
    )
    this.torusKnot.position.x = 3
    this.scene.add(this.torusKnot)

    gltfLoader.load('/three.js-journey/media/models/Suzanne/suzanne.glb', (gltf) => {
      const modelScene = gltf.scene
      modelScene.traverse((model) => {
        if (model.isMesh) {
          this.suzanne = model
          this.suzanne.material = this.material
          this.scene.add(this.suzanne)
        }
      })
    })
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
  }
}
