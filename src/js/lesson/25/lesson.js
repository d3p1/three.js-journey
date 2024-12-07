/**
 * @description 25 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/realistic-render}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.DirectionalLight}
   */
  directionalLight

  /**
   * @type {THREE.TextureLoader}
   */
  textureLoader

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
    return '25'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Realistic render'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/realistic-render'
  }

  /**
   * Update
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

    this.#initTextureLoader()
    this.#initEnvMap()
    this.#initLights()
    this.#initModel()
    this.#initFloor()
    this.#initWall()
    this.#setupCamera()
    this.#setupRenderer()

    this.#initGuiTweaks()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(2, 2, 4)
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
    this.renderer.toneMappingExposure = 1.5
  }

  /**
   * Init texture loader
   *
   * @returns {void}
   */
  #initTextureLoader() {
    this.textureLoader = new THREE.TextureLoader()
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .add(this.scene, 'environmentIntensity')
      .min(0)
      .max(10)
      .step(0.01)

    this.guiControl.add(this.renderer, 'toneMapping', {
      No: THREE.NoToneMapping,
      Linear: THREE.LinearToneMapping,
      Reinhard: THREE.ReinhardToneMapping,
      Cineon: THREE.CineonToneMapping,
      ACESFilmic: THREE.ACESFilmicToneMapping,
    })

    this.guiControl
      .add(this.renderer, 'toneMappingExposure')
      .min(0)
      .max(10)
      .step(0.01)

    const light = this.guiControl.addFolder('Light')
    light.add(this.directionalLight, 'intensity').min(0).max(20).step(0.01)
    light.add(this.directionalLight.position, 'x').min(-10).max(10).step(0.01)
    light.add(this.directionalLight.position, 'y').min(-10).max(10).step(0.01)
    light.add(this.directionalLight.position, 'z').min(-10).max(10).step(0.01)
    light
      .add(this.directionalLight.shadow, 'bias')
      .min(-0.05)
      .max(0.05)
      .step(0.001)
    light
      .add(this.directionalLight.shadow, 'normalBias')
      .min(-0.05)
      .max(0.05)
      .step(0.001)
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    this.directionalLight.position.set(-8.5, 4.27, 3)
    this.directionalLight.castShadow = true
    this.directionalLight.shadow.mapSize.set(512, 512)
    this.directionalLight.shadow.camera.far = 15
    this.directionalLight.shadow.bias = -0.011
    this.directionalLight.shadow.normalBias = 0.009
    this.directionalLight.target.position.set(0, 0.25, 0)
    this.directionalLight.target.updateWorldMatrix()
    this.scene.add(this.directionalLight)
  }

  /**
   * Init wall
   *
   * @returns {void}
   */
  #initWall() {
    const wallDiffuseTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/castle/castle_diff.jpg',
    )
    const wallAoRoughnessMetalnessTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/castle/castle_arm.jpg',
    )
    const wallNormalTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/castle/castle_nor.png',
    )

    wallDiffuseTexture.colorSpace = THREE.SRGBColorSpace

    const wall = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshStandardMaterial({
        map: wallDiffuseTexture,
        normalMap: wallNormalTexture,
        aoMap: wallAoRoughnessMetalnessTexture,
        roughnessMap: wallAoRoughnessMetalnessTexture,
        metalnessMap: wallAoRoughnessMetalnessTexture,
      }),
    )
    wall.position.set(0, 1.5, -1.5)
    wall.receiveShadow = true
    this.scene.add(wall)
  }

  /**
   * Init floor
   *
   * @returns {void}
   */
  #initFloor() {
    const floorDiffuseTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/wood/wood_diff.jpg',
    )
    const floorAoRoughnessMetalnessTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/wood/wood_arm.jpg',
    )
    const floorNormalTexture = this.textureLoader.load(
      '/three.js-journey/media/images/textures/wood/wood_nor.png',
    )

    floorDiffuseTexture.colorSpace = THREE.SRGBColorSpace

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshStandardMaterial({
        map: floorDiffuseTexture,
        normalMap: floorNormalTexture,
        aoMap: floorAoRoughnessMetalnessTexture,
        metalnessMap: floorAoRoughnessMetalnessTexture,
        roughnessMap: floorAoRoughnessMetalnessTexture,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true

    this.scene.add(floor)
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
      '/three.js-journey/media/models/Hamburger/hamburger.glb',
      (model) => {
        model.scene.scale.set(0.15, 0.15, 0.15)
        model.scene.children.forEach((child) => {
          child.castShadow = true
          child.receiveShadow = true
        })
        this.scene.add(model.scene)
      },
    )
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const rgbeLoader = new RGBELoader()
    rgbeLoader.load(
      '/three.js-journey/media/images/environmentMap/0/2k.hdr',
      (envMap) => {
        envMap.mapping = THREE.EquirectangularReflectionMapping

        this.scene.environment = envMap
        this.scene.background = envMap
      },
    )
  }
}
