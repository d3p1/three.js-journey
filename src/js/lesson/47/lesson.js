/**
 * @description 47 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/intro-and-loading-progress}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {HTMLDivElement}
   */
  loader

  /**
   * @type {THREE.LoadingManager}
   */
  loadingManager

  /**
   * @type {THREE.Mesh}
   */
  overlay

  /**
   * @type {number}
   */
  onLoadEffectDelay = 500

  /**
   * @type {boolean}
   */
  hasGuiTweaks = false

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
    return '47'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Intro and loading progress'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/intro-and-loading-progress'
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

    this.#initLoader()
    this.#initLoadingManager()
    this.#initEnvMap()
    this.#initDirLight()
    this.#initOverlay()
    this.#initModel()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    document.body.removeChild(this.loader)

    super.dispose()
  }

  /**
   * Init loader
   *
   * @returns {void}
   */
  #initLoader() {
    this.loader = document.createElement('div')
    this.loader.classList.add('loader')
    this.loader.style.transition = `transform ${this.onLoadEffectDelay}ms`
    document.body.appendChild(this.loader)
  }

  /**
   * Init loading manager
   *
   * @returns {void}
   */
  #initLoadingManager() {
    this.loadingManager = new THREE.LoadingManager(
      () => {
        window.setTimeout(() => {
          gsap.to(this.overlay.material.uniforms.uProgress, {
            value: 1,
            duration: 3,
          })
          this.loader.classList.add('loader--on-finish')
          this.loader.style.transform = `scaleX(0)`
        }, this.onLoadEffectDelay)
      },
      (assetUrl, assetCount, assetTotal) => {
        const progress = assetCount / assetTotal
        this.loader.style.transform = `scaleX(${progress})`
      },
    )
  }

  /**
   * Init directional light
   *
   * @returns {void}
   */
  #initDirLight() {
    const dirLight = new THREE.DirectionalLight(0xffffff, 3)
    dirLight.position.set(0.25, 3, -2.25)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.set(1024, 1024)
    dirLight.shadow.normalBias = 0.05
    dirLight.shadow.camera.far = 15
    this.scene.add(dirLight)
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager)
    const environmentMap = cubeTextureLoader.load([
      '/three.js-journey/media/images/environmentMaps/3/px.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nx.jpg',
      '/three.js-journey/media/images/environmentMaps/3/py.jpg',
      '/three.js-journey/media/images/environmentMaps/3/ny.jpg',
      '/three.js-journey/media/images/environmentMaps/3/pz.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nz.jpg',
    ])
    environmentMap.colorSpace = THREE.SRGBColorSpace
    this.scene.background = environmentMap
    this.scene.environment = environmentMap
  }

  /**
   * Init overlay
   *
   * @returns {void}
   */
  #initOverlay() {
    this.overlay = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2, 1, 1),
      new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          uProgress: new THREE.Uniform(0),
        },
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uProgress;
          
          void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0 - uProgress);
          }
        `,
      }),
    )
    this.scene.add(this.overlay)
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModel() {
    const gltfLoader = new GLTFLoader(this.loadingManager)
    const dracoLoader = new DRACOLoader(this.loadingManager)

    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      '/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf',
      (model) => {
        model.scene.scale.set(10, 10, 10)
        model.scene.position.set(0, -4, 0)
        model.scene.rotation.y = Math.PI * 0.5

        model.scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshStandardMaterial
          ) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.envMapIntensity = 2.5
            child.material.needsUpdate = true
          }
        })

        this.scene.add(model.scene)
      },
    )
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 75
    this.camera.position.set(4, 1, -4)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.shadowMap.autoUpdate = false
    this.renderer.shadowMap.needsUpdate = true
    this.renderer.toneMapping = THREE.ReinhardToneMapping
    this.renderer.toneMappingExposure = 3
  }
}
