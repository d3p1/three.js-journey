/**
 * @description 11 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/materials}
 */
import * as THREE from 'three'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  plane

  /**
   * @type {THREE.Mesh}
   */
  torus

  /**
   * @type {THREE.Mesh}
   */
  sphere

  /**
   * @type {THREE.Texture}
   */
  doorColorTexture

  /**
   * @type {THREE.Texture}
   */
  doorAlphaTexture

  /**
   * @type {THREE.Texture}
   */
  doorAmbientOcclusionTexture

  /**
   * @type {THREE.Texture}
   */
  doorHeightTexture

  /**
   * @type {THREE.Texture}
   */
  doorMetalnessTexture

  /**
   * @type {THREE.Texture}
   */
  doorRoughnessTexture

  /**
   * @type {THREE.Texture}
   */
  doorNormalTexture

  /**
   * @type {THREE.Texture}
   */
  matcapTexture

  /**
   * @type {THREE.Texture}
   */
  gradientTexture

  /**
   * @type {THREE.Material}
   */
  material

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
    return '11'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Materials'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/materials'
  }

  /**
   * Update
   *
   * @params  {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    this.plane.rotation.x = 0.0001 * t
    this.plane.rotation.y = 0.0001 * t

    this.sphere.rotation.x = 0.0001 * t
    this.sphere.rotation.y = 0.0001 * t

    this.torus.rotation.x = 0.0001 * t
    this.torus.rotation.y = 0.0001 * t
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initEnvMap()
    this.#initTextures()
    this.#initMaterial()
    this.#initPlane()
    this.#initSphere()
    this.#initTorus()
    this.#initGuiTweaks()

    this.sphere.position.x = -2
    this.torus.position.x = 2
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.plane = null
    this.sphere = null
    this.torus = null
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl.add(this.material, 'metalness').min(0).max(1).step(0.001)

    this.guiControl.add(this.material, 'roughness').min(0).max(1).step(0.001)

    this.guiControl.add(this.material, 'clearcoat').min(0).max(1).step(0.001)

    this.guiControl
      .add(this.material, 'clearcoatRoughness')
      .min(0)
      .max(1)
      .step(0.001)

    this.guiControl.add(this.material, 'sheen').min(0).max(1).step(0.001)

    this.guiControl
      .add(this.material, 'sheenRoughness')
      .min(0)
      .max(1)
      .step(0.001)

    this.guiControl.addColor(this.material, 'sheenColor')

    this.guiControl.add(this.material, 'iridescence').min(0).max(1).step(0.0001)

    this.guiControl
      .add(this.material, 'iridescenceIOR')
      .min(1)
      .max(2.333)
      .step(0.0001)

    this.guiControl
      .add(this.material.iridescenceThicknessRange, '0')
      .min(1)
      .max(1000)
      .step(1)
      .name('iridescenceThicknessRange - 0')

    this.guiControl
      .add(this.material.iridescenceThicknessRange, '1')
      .min(1)
      .max(1000)
      .step(1)
      .name('iridescenceThicknessRange - 1')

    this.guiControl
      .add(this.material, 'transmission')
      .min(0)
      .max(1)
      .step(0.0001)

    this.guiControl.add(this.material, 'ior').min(1).max(10).step(0.0001)

    this.guiControl.add(this.material, 'thickness').min(0).max(1).step(0.0001)
  }

  /**
   * Init textures
   *
   * @returns {void}
   */
  #initTextures() {
    const textureLoader = new THREE.TextureLoader()

    this.doorColorTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/color.jpg',
    )
    this.doorAlphaTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/alpha.jpg',
    )
    this.doorAmbientOcclusionTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/ambientOcclusion.jpg',
    )
    this.doorHeightTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/height.jpg',
    )
    this.doorMetalnessTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/metalness.jpg',
    )
    this.doorRoughnessTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/roughness.jpg',
    )
    this.doorNormalTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/door/normal.jpg',
    )
    this.doorColorTexture.colorSpace = THREE.SRGBColorSpace

    this.matcapTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/matcaps/7.png',
    )

    this.gradientTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/gradients/3.jpg',
    )
    this.gradientTexture.generateMipmaps = false
    this.gradientTexture.minFilter = THREE.NearestFilter
    this.gradientTexture.magFilter = THREE.NearestFilter
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    this.material = new THREE.MeshPhysicalMaterial()
    this.material.side = THREE.DoubleSide
    this.material.transparent = true
    this.material.alphaMap = this.doorAlphaTexture
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const rgbeLoader = new RGBELoader()
    rgbeLoader.load(
      '/three.js-journey/media/images/environmentMap/2k.hdr',
      (env) => {
        env.mapping = THREE.EquirectangularReflectionMapping

        this.scene.background = env
        this.scene.environment = env
      },
    )
  }

  /**
   * Init torus
   *
   * @returns {void}
   */
  #initTorus() {
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 64, 28)
    this.torus = new THREE.Mesh(torusGeometry, this.material)
    this.scene.add(this.torus)
  }

  /**
   * Init sphere
   *
   * @returns {void}
   */
  #initSphere() {
    const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64)
    this.sphere = new THREE.Mesh(sphereGeometry, this.material)
    this.scene.add(this.sphere)
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const planeGeometry = new THREE.PlaneGeometry(1, 1, 100, 100)
    this.plane = new THREE.Mesh(planeGeometry, this.material)
    this.scene.add(this.plane)
  }
}
