/**
 * @description 35 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/lights-shading-shaders}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import shadingVertexShader from './shader/shading/vertex.glsl'
import shadingFragmentShader from './shader/shading/fragment.glsl'

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
  material

  /**
   * @type {string}
   */
  materialColor = '#ffffff'

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
    return '35'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Lights Shading'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/lights-shading-shaders'
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
    this.#initMaterial()
    this.#initMeshes()
    this.#initLightHelpers()
    this.#setupCamera()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(5, 5, 5)
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .addColor({color: this.materialColor}, 'color')
      .onChange((value) => {
        this.material.uniforms.uColor.value.set(value)
      })
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: shadingVertexShader,
      fragmentShader: shadingFragmentShader,
      uniforms: {
        uColor: new THREE.Uniform(new THREE.Color(this.materialColor)),
      },
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

    this.sphere = new THREE.Mesh(new THREE.SphereGeometry(), this.material)
    this.sphere.position.x = -3
    this.scene.add(this.sphere)

    this.torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32),
      this.material,
    )
    this.torusKnot.position.x = 3
    this.scene.add(this.torusKnot)

    gltfLoader.load(
      '/three.js-journey/media/models/Suzanne/suzanne.glb',
      (gltf) => {
        this.suzanne = gltf.scene
        this.suzanne.traverse((object) => {
          if (object.isMesh) {
            object.material = this.material
          }
        })
        this.scene.add(this.suzanne)
      },
    )
  }

  /**
   * Init light helpers
   *
   * @returns {void}
   */
  #initLightHelpers() {
    const dirLightHelper = new THREE.Mesh(
      new THREE.PlaneGeometry(),
      new THREE.MeshBasicMaterial({}),
    )
    dirLightHelper.position.set(0, 0, 3)
    dirLightHelper.material.side = THREE.DoubleSide
    dirLightHelper.material.color.setRGB(0.1, 0.1, 1.0)
    this.scene.add(dirLightHelper)

    const pointLightHelper1 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.1, 2),
      new THREE.MeshBasicMaterial({}),
    )
    pointLightHelper1.position.set(0.0, 2.5, 0.0)
    pointLightHelper1.material.color.setRGB(1.0, 0.1, 0.1)
    this.scene.add(pointLightHelper1)

    const pointLightHelper2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.1, 2),
      new THREE.MeshBasicMaterial({}),
    )
    pointLightHelper2.position.set(2.0, 2.0, 2.0)
    pointLightHelper2.material.color.setRGB(0.1, 1.0, 0.5)
    this.scene.add(pointLightHelper2)
  }
}
