/**
 * @description 52 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/adding-details-to-the-scene}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import portalVertexShader from './shader/portal/vertex.glsl'
import portalFragmentShader from './shader/portal/fragment.glsl'
import fireflyVertexShader from './shader/firefly/vertex.glsl'
import fireflyFragmentShader from './shader/firefly/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  portal

  /**
   * @type {THREE.Points}
   */
  fireflies

  /**
   * @type {THREE.Mesh}
   */
  model

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {object}
   */
  renderParams = {
    clearColor: '#201919',
    innerPortalColor: '#000000',
    outerPortalColor: '#ffffff',
  }

  /**
   * @type {Function}
   */
  #boundRendererResize

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '52'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Adding details to the scene'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/adding-details-to-the-scene'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const seconds = t * 0.001
    this.fireflies.material.uniforms.uTime.value = seconds
    this.portal.uniforms.uTime.value = seconds

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initPortal()
    this.#initFireflies()
    this.#initModel()
    this.#setupCamera()
    this.#setupRenderer()
    this.#addRendererResizeListener()
    this.#addTweaks()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.canvas.removeEventListener('resize', this.#boundRendererResize)

    super.dispose()
  }

  /**
   * Add tweaks
   *
   * @returns {void}
   */
  #addTweaks() {
    this.guiControl
      .addColor(this.renderParams, 'clearColor')
      .onChange((value) => {
        this.renderer.setClearColor(value)
      })

    this.guiControl
      .add(this.fireflies.material.uniforms.uSize, 'value')
      .min(0.001)
      .max(1.0)
      .step(0.001)
      .name('fireflySize')

    this.guiControl
      .addColor(this.renderParams, 'innerPortalColor')
      .onChange((value) => {
        this.portal.uniforms.uInnerColor.value.set(value)
      })

    this.guiControl
      .addColor(this.renderParams, 'outerPortalColor')
      .onChange((value) => {
        this.portal.uniforms.uOuterColor.value.set(value)
      })
  }

  /**
   * Add renderer resize listener
   *
   * @returns {void}
   */
  #addRendererResizeListener() {
    this.#boundRendererResize = () => {
      this.fireflies.material.uniforms.uResolution.value.set(
        this.#processResolutionWidth(),
        this.#processResolutionHeight(),
      )
    }

    this.canvas.addEventListener('resize', this.#boundRendererResize)
  }

  /**
   * Init portal
   *
   * @returns {void}
   */
  #initPortal() {
    this.portal = new THREE.ShaderMaterial({
      vertexShader: portalVertexShader,
      fragmentShader: portalFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uInnerColor: new THREE.Uniform(
          new THREE.Color(this.renderParams.innerPortalColor),
        ),
        uOuterColor: new THREE.Uniform(
          new THREE.Color(this.renderParams.outerPortalColor),
        ),
      },
    })
  }

  /**
   * Init fireflies
   *
   * @returns {void}
   */
  #initFireflies() {
    const geometry = new THREE.BufferGeometry()
    const fireflyCount = 30
    const fireflyPositions = new Float32Array(fireflyCount * 3)
    const fireflyScales = new Float32Array(fireflyCount * 1)
    for (let i = 0; i < fireflyCount; i++) {
      const fireflyPositionIndex = i * 3
      fireflyPositions[fireflyPositionIndex + 0] = (Math.random() - 0.5) * 4
      fireflyPositions[fireflyPositionIndex + 1] = Math.random() * 1.5
      fireflyPositions[fireflyPositionIndex + 2] = (Math.random() - 0.5) * 4

      fireflyScales[i] = Math.random()
    }
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(fireflyPositions, 3),
    )
    geometry.setAttribute('aScale', new THREE.BufferAttribute(fireflyScales, 1))

    const material = new THREE.ShaderMaterial({
      vertexShader: fireflyVertexShader,
      fragmentShader: fireflyFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uSize: new THREE.Uniform(0.1),
        uResolution: new THREE.Uniform(
          new THREE.Vector2(
            this.#processResolutionWidth(),
            this.#processResolutionHeight(),
          ),
        ),
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    this.fireflies = new THREE.Points(geometry, material)

    this.scene.add(this.fireflies)
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModel() {
    const textureLoader = new THREE.TextureLoader()
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    const modelTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/LessonPortal/color.jpg',
    )
    modelTexture.colorSpace = THREE.SRGBColorSpace
    modelTexture.flipY = false

    const baseMaterial = new THREE.MeshBasicMaterial({
      map: modelTexture,
    })
    const poleLightMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffe5,
    })

    gltfLoader.load(
      '/three.js-journey/media/models/LessonPortal/portal.glb',
      (model) => {
        this.model = model.scene

        this.model.traverse((child) => {
          if (child.isMesh) {
            switch (child.name) {
              case 'poleLightA':
              case 'poleLightB':
                child.material = poleLightMaterial
                break

              case 'portalLight':
                child.material = this.portal
                break

              default:
                child.material = baseMaterial
            }
          }
        })

        this.scene.add(this.model)
      },
    )
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(4, 2, 4)
    this.camera.fov = 45
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor(this.renderParams.clearColor)
  }

  /**
   * Process resolution width
   *
   * @returns {number}
   */
  #processResolutionWidth() {
    return this.canvas.width * this.renderer.getPixelRatio()
  }

  /**
   * Process resolution height
   *
   * @returns {number}
   */
  #processResolutionHeight() {
    return this.canvas.height * this.renderer.getPixelRatio()
  }
}
