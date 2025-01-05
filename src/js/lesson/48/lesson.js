/**
 * @description 48 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/mixing-html-and-webgl}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {object}
   */
  points

  /**
   * @type {HTMLDivElement}
   */
  loader

  /**
   * @type {THREE.Raycaster}
   */
  raycaster

  /**
   * @type {THREE.LoadingManager}
   */
  loadingManager

  /**
   * @type {THREE.Mesh}
   */
  overlay

  /**
   * @type {boolean}
   */
  isSceneReady = false

  /**
   * @type {number}
   */
  loadDelay = 500

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
    return '48'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Mixing HTML and WebGL'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/mixing-html-and-webgl'
  }

  /**
   * Update lesson
   *
   * @returns {void}
   */
  update() {
    this.control.update()

    if (this.isSceneReady) {
      for (const point of this.points) {
        const screenCoords = point.position.clone()
        screenCoords.project(this.camera)

        const x = screenCoords.x * this.canvas.width * 0.5
        const y = screenCoords.y * this.canvas.height * 0.5
        point.element.style.transform = `translate(${x}px, ${-y}px)`

        this.raycaster.setFromCamera(screenCoords, this.camera)
        const intersections = this.raycaster.intersectObjects(
          this.scene.children,
          true,
        )
        if (intersections.length) {
          const intersectionDistance = intersections[0].distance
          const pointDistance = point.position.distanceTo(this.camera.position)
          if (pointDistance < intersectionDistance) {
            point.element.firstChild.style.transform = `scale(1, 1)`
          } else {
            point.element.firstChild.style.transform = `scale(0, 0)`
          }
        } else {
          point.element.firstChild.style.transform = `scale(1,1)`
        }
      }
    }
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.raycaster = new THREE.Raycaster()
    this.#initLoader()
    this.#initPoints()
    this.#initOverlay()
    this.#initLoadingManager()
    this.#initEnvMap()
    this.#initDirectionalLight()
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

    for (const point of this.points) {
      document.body.removeChild(point.element)
    }

    super.dispose()
  }

  /**
   * Init points
   *
   * @returns {void}
   */
  #initPoints() {
    this.points = [
      {
        position: new THREE.Vector3(1.55, 0.3, -0.6),
        element: this.#createPoint(
          '1',
          'Front and top screen with HUD aggregating terrain and battle information.',
        ),
      },
      {
        position: new THREE.Vector3(0.5, 0.8, -1.6),
        element: this.#createPoint(
          '2',
          'Ventilation with air purifier and detection of environment toxicity.',
        ),
      },
      {
        position: new THREE.Vector3(1.6, -1.3, -0.7),
        element: this.#createPoint(
          '3',
          'Cameras supporting night vision and heat vision with automatic adjustment.',
        ),
      },
    ]
  }

  /**
   * Init loader
   *
   * @returns {void}
   */
  #initLoader() {
    this.loader = document.createElement('div')
    this.loader.style.position = 'absolute'
    this.loader.style.top = '50%'
    this.loader.style.width = '100%'
    this.loader.style.height = '2px'
    this.loader.style.backgroundColor = '#ffffff'
    this.loader.style.transformOrigin = 'top left'
    this.loader.style.transform = 'scaleX(0)'
    this.loader.style.transition = `transform ${this.loadDelay}ms`
    this.loader.style.willChange = 'transform'
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
          this.loader.style.transformOrigin = 'top right'
          this.loader.style.transition = 'transform 1.5s ease-in-out'
          this.loader.style.transform = 'scaleX(0)'
          this.isSceneReady = true
        }, this.loadDelay)
      },
      (assetUrl, assetCount, assetTotal) => {
        const progress = assetCount / assetTotal
        this.loader.style.transform = `scaleX(${progress})`
      },
    )
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
      '/three.js-journey/media/models/DamagedHelmet/glTF/DamagedHelmet.gltf',
      (model) => {
        model.scene.scale.set(2.5, 2.5, 2.5)
        model.scene.rotation.y = Math.PI / 2

        model.scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child instanceof THREE.MeshStandardMaterial
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
   * Init directional light
   *
   * @returns {void}
   */
  #initDirectionalLight() {
    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(0.25, 3, -2.25)
    light.castShadow = true
    light.shadow.mapSize.set(1024, 1024)
    light.shadow.normalBias = 0.05
    light.shadow.camera.far = 15
    this.scene.add(light)
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager)
    const envMap = cubeTextureLoader.load([
      '/three.js-journey/media/images/environmentMaps/3/px.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nx.jpg',
      '/three.js-journey/media/images/environmentMaps/3/py.jpg',
      '/three.js-journey/media/images/environmentMaps/3/ny.jpg',
      '/three.js-journey/media/images/environmentMaps/3/pz.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nz.jpg',
    ])
    envMap.colorSpace = THREE.SRGBColorSpace

    this.scene.background = envMap
    this.scene.environment = envMap
  }

  /**
   * Create point
   *
   * @param   {string}         label
   * @param   {string}         text
   * @returns {HTMLDivElement}
   */
  #createPoint(label, text) {
    const point = document.createElement('div')
    point.style.position = 'absolute'
    point.style.top = '50%'
    point.style.left = '50%'

    const pointLabel = document.createElement('div')
    pointLabel.textContent = label
    pointLabel.style.position = 'absolute'
    pointLabel.style.width = '40px'
    pointLabel.style.height = '40px'
    pointLabel.style.top = '-20px'
    pointLabel.style.left = '-20px'
    pointLabel.style.color = '#ffffff'
    pointLabel.style.backgroundColor = '#00000077'
    pointLabel.style.border = '1px solid #ffffff77'
    pointLabel.style.borderRadius = '50%'
    pointLabel.style.textAlign = 'center'
    pointLabel.style.lineHeight = '40px'
    pointLabel.style.transform = 'scale(0,0)'
    pointLabel.style.transition = 'transform 0.3s'
    pointLabel.style.willChange = 'transform'
    pointLabel.style.cursor = 'help'

    const pointText = document.createElement('div')
    pointText.textContent = text
    pointText.style.position = 'absolute'
    pointText.style.width = '200px'
    pointText.style.padding = '20px'
    pointText.style.top = '30px'
    pointText.style.left = '-120px'
    pointText.style.color = '#ffffff'
    pointText.style.backgroundColor = '#00000077'
    pointText.style.border = '1px solid #ffffff77'
    pointText.style.borderRadius = '4px'
    pointText.style.textAlign = 'center'
    pointText.style.lineHeight = '1.3em'
    pointText.style.opacity = '0'
    pointText.style.transition = 'opacity 0.3s'
    pointText.style.willChange = 'opacity'
    pointText.style.pointerEvents = 'none'

    point.addEventListener('mouseenter', () => {
      pointText.style.opacity = '1'
    })

    point.addEventListener('mouseleave', () => {
      pointText.style.opacity = '0'
    })

    point.appendChild(pointLabel)
    point.appendChild(pointText)
    document.body.appendChild(point)

    return point
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
    this.renderer.shadowMap.autoUpdate = true
    this.renderer.shadowMap.needsUpdate = true
    this.renderer.toneMapping = THREE.ReinhardToneMapping
    this.renderer.toneMappingExposure = 3
  }
}
