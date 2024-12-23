/**
 * @description 39 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/particles-cursor-animation-shader}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import particleVertexShader from './shader/particle/vertex.glsl'
import particleFragmentShader from './shader/particle/fragment.glsl'
import dogImage from './media/images/textures/picture-1.png'
import glowImage from './media/images/textures/glow.png'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Points}
   */
  particles

  /**
   * @type {THREE.PlaneGeometry}
   */
  particleGeometry

  /**
   * @type {THREE.Raycaster}
   */
  raycaster

  /**
   * @type {HTMLCanvasElement}
   */
  interactiveCanvas

  /**
   * @type {THREE.CanvasTexture}
   */
  interactiveCanvasTexture

  /**
   * @type {CanvasRenderingContext2D}
   */
  interactiveCanvasContext

  /**
   * @type {HTMLImageElement}
   */
  interactiveCanvasImage

  /**
   * @type {THREE.Mesh}
   */
  interactiveCanvasPlane

  /**
   * @type {{x: number|null, y: number|null, prevX: number|null, prevY: number|null}}
   */
  pointer = {
    x: null,
    y: null,
    prevX: null,
    prevY: null,
  }

  /**
   * @type {boolean}
   */
  hasGuiTweaks = false

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {Function}
   */
  #boundPointerMove

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
    return '39'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Particles Cursor Animation'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/particles-cursor-animation-shader'
  }

  /**
   * Update lesson
   *
   * @returns {void}
   */
  update() {
    this.control.update()

    if (
      this.pointer.x &&
      this.pointer.y &&
      this.pointer.prevX &&
      this.pointer.prevY
    ) {
      this.raycaster.setFromCamera(this.pointer, this.camera)
      const intersections = this.raycaster.intersectObject(
        this.interactiveCanvasPlane,
      )
      this.#processInteractiveCanvas(intersections)
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
    this.#initInteractiveCanvas()
    this.#initParticles()
    this.#setupCamera()
    this.#setupRenderer()
    this.#addPointerMoveEvent()
    this.#addResizeRendererEvent()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.canvas.removeEventListener('pointermove', this.#boundPointerMove)
    this.canvas.removeEventListener('resize', this.#boundResizeRenderer)
    super.dispose()
  }

  /**
   * Process interactive canvas
   *
   * @param   {object} intersections
   * @returns {void}
   */
  #processInteractiveCanvas(intersections) {
    this.#fillInteractiveCanvas()

    if (intersections.length) {
      this.#drawInteractiveCanvas(intersections[0].uv)
    }

    this.interactiveCanvasTexture.needsUpdate = true
  }

  /**
   * Init interactive canvas
   *
   * @returns {void}
   */
  #initInteractiveCanvas() {
    this.interactiveCanvas = document.createElement('canvas')
    this.interactiveCanvas.width = 128
    this.interactiveCanvas.height = 128

    this.interactiveCanvasTexture = new THREE.CanvasTexture(
      this.interactiveCanvas,
    )

    this.interactiveCanvasContext = this.interactiveCanvas.getContext('2d')

    this.interactiveCanvasImage = new Image()
    this.interactiveCanvasImage.src = glowImage

    this.interactiveCanvasPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10, 1, 1),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
      }),
    )
    this.interactiveCanvasPlane.visible = false

    this.#fillInteractiveCanvas()
  }

  /**
   * Init particles
   *
   * @returns {void}
   */
  #initParticles() {
    const textureLoader = new THREE.TextureLoader()
    const dogTexture = textureLoader.load(dogImage)

    this.particleGeometry = new THREE.PlaneGeometry(
      this.interactiveCanvasPlane.geometry.parameters.width,
      this.interactiveCanvasPlane.geometry.parameters.height,
      128,
      128,
    )
    this.particleGeometry.setIndex(null)
    this.particleGeometry.deleteAttribute('normal')

    const displacementRandomFactorArray = new Float32Array(
      this.particleGeometry.attributes.position.count,
    )
    const displacementRandomAngleArray = new Float32Array(
      this.particleGeometry.attributes.position.count,
    )
    for (let i = 0; i < displacementRandomFactorArray.length; i++) {
      displacementRandomFactorArray[i] = Math.random()
      displacementRandomAngleArray[i] = 2 * Math.PI * Math.random()
    }
    this.particleGeometry.setAttribute(
      'aDisplacementRandomFactor',
      new THREE.BufferAttribute(displacementRandomFactorArray, 1),
    )
    this.particleGeometry.setAttribute(
      'aDisplacementRandomAngle',
      new THREE.BufferAttribute(displacementRandomAngleArray, 1),
    )

    this.particles = new THREE.Points(
      this.particleGeometry,
      new THREE.ShaderMaterial({
        vertexShader: particleVertexShader,
        fragmentShader: particleFragmentShader,
        uniforms: {
          uPictureTexture: new THREE.Uniform(dogTexture),
          uDisplacementTexture: new THREE.Uniform(
            this.interactiveCanvasTexture,
          ),
          uResolution: new THREE.Uniform(
            new THREE.Vector2(
              this.canvas.width * this.renderer.getPixelRatio(),
              this.canvas.height * this.renderer.getPixelRatio(),
            ),
          ),
        },
        blending: THREE.AdditiveBlending,
      }),
    )
    this.scene.add(this.particles)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 35
    this.camera.position.set(0, 0, 18)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor('#181818')
  }

  /**
   * Add pointer move event
   *
   * @returns {void}
   */
  #addPointerMoveEvent() {
    this.#boundPointerMove = (event) => {
      this.pointer.prevX = this.pointer.x
      this.pointer.prevY = this.pointer.y
      this.pointer.x = (event.offsetX / this.canvas.width - 0.5) * 2
      this.pointer.y = -((event.offsetY / this.canvas.height - 0.5) * 2)
    }
    this.canvas.addEventListener('pointermove', this.#boundPointerMove)
  }

  /**
   * Add resize renderer event
   *
   * @returns {void}
   */
  #addResizeRendererEvent() {
    this.#boundResizeRenderer = () => {
      this.particles.material.uniforms.uResolution.value.set(
        this.canvas.width * this.renderer.getPixelRatio(),
        this.canvas.height * this.renderer.getPixelRatio(),
      )
    }
    this.canvas.addEventListener('resize', this.#boundResizeRenderer)
  }

  /**
   * Draw interactive canvas
   *
   * @param   {{x: number, y: number}} uv
   * @returns {void}
   */
  #drawInteractiveCanvas(uv) {
    const canvasX = uv.x * this.interactiveCanvas.width
    const canvasY = (1 - uv.y) * this.interactiveCanvas.height
    const imageSize = 0.15 * this.interactiveCanvas.width
    let alpha =
      Math.hypot(
        this.pointer.x - this.pointer.prevX,
        this.pointer.y - this.pointer.prevY,
      ) * 500
    alpha = Math.min(1, alpha)
    this.pointer.prevX = this.pointer.x
    this.pointer.prevY = this.pointer.y

    this.interactiveCanvasContext.save()
    this.interactiveCanvasContext.globalCompositeOperation = 'lighten'
    this.interactiveCanvasContext.globalAlpha = alpha
    this.interactiveCanvasContext.drawImage(
      this.interactiveCanvasImage,
      canvasX - imageSize / 2,
      canvasY - imageSize / 2,
      imageSize,
      imageSize,
    )
    this.interactiveCanvasContext.restore()
  }

  /**
   * Fill interactive canvas
   *
   * @returns {void}
   */
  #fillInteractiveCanvas() {
    this.interactiveCanvasContext.save()
    this.interactiveCanvasContext.globalAlpha = 0.02
    this.interactiveCanvasContext.fillRect(
      0,
      0,
      this.interactiveCanvas.width,
      this.interactiveCanvas.height,
    )
    this.interactiveCanvasContext.restore()
  }
}
