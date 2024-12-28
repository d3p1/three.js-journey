/**
 * @description 41 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/gpgpu-flow-field-particles-shaders}
 */
import * as THREE from 'three'
import {Timer} from 'three/addons/misc/Timer.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import GpuComputation from './gpgpu/computation.js'
import particleVertexShader from './shader/particle/vertex.glsl'
import particleFragmentShader from './shader/particle/fragment.glsl'
import model from './media/models/model.glb'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  model

  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {Timer}
   */
  timer

  /**
   * @type {GpuComputation|null}
   */
  gpuComputation = null

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
  rendererParams = {
    clearColor: '#29191f',
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
    return '41'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'GPGPU Flow Field Particles'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/gpgpu-flow-field-particles-shaders'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)

    this.control.update()

    if (this.gpuComputation) {
      this.gpuComputation.particleVariable.material.uniforms.uTime.value =
        this.timer.getElapsed()

      this.gpuComputation.particleVariable.material.uniforms.uDeltaTime.value =
        this.timer.getDelta()

      this.gpuComputation.renderer.compute()
      this.mesh.material.uniforms.uPositionTexture.value =
        this.gpuComputation.getRendererTexture()
    }
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.timer = new Timer()
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
    this.canvas.removeEventListener('resize', this.#boundRendererResize)
    this.timer.dispose()

    super.dispose()
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

    gltfLoader.load(model, (gltf) => {
      this.model = gltf.scene.children[0]
      this.#initGpuComputation()
      this.#initMesh()
      this.#addTweaks()
      this.#addRendererResizeListener()
    })
  }

  /**
   * Add GUI tweaks
   *
   * @returns {void}
   */
  #addTweaks() {
    this.guiControl
      .addColor(this.rendererParams, 'clearColor')
      .onChange((value) => {
        this.renderer.setClearColor(value)
      })

    this.guiControl
      .add(this.mesh.material.uniforms.uSize, 'value')
      .min(0)
      .max(1)
      .step(0.001)
      .name('uSize')

    this.guiControl
      .add(
        this.gpuComputation.particleVariable.material.uniforms.uStrengthFactor,
        'value',
      )
      .min(0)
      .max(1)
      .step(0.01)
      .name('uStrength')

    this.guiControl
      .add(
        this.gpuComputation.particleVariable.material.uniforms.uFlowStrength,
        'value',
      )
      .min(0)
      .max(10)
      .step(0.001)
      .name('uFlowStrength')

    this.guiControl
      .add(
        this.gpuComputation.particleVariable.material.uniforms.uFlowFrequency,
        'value',
      )
      .min(0)
      .max(1)
      .step(0.001)
      .name('uFlowFrequency')
  }

  /**
   * Init GPU computation
   *
   * @returns {void}
   */
  #initGpuComputation() {
    this.gpuComputation = new GpuComputation(
      this.model.geometry.attributes.position,
      this.renderer,
    )

    this.gpuComputation.particleVariable.material.uniforms.uTime =
      new THREE.Uniform(0)

    this.gpuComputation.particleVariable.material.uniforms.uDeltaTime =
      new THREE.Uniform(0)

    this.gpuComputation.particleVariable.material.uniforms.uStrengthFactor =
      new THREE.Uniform(0.5)

    this.gpuComputation.particleVariable.material.uniforms.uFlowStrength =
      new THREE.Uniform(2)

    this.gpuComputation.particleVariable.material.uniforms.uFlowFrequency =
      new THREE.Uniform(0.5)

    this.gpuComputation.particleVariable.material.uniforms.uBasePositionTexture =
      new THREE.Uniform(this.gpuComputation.baseTexture)
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const geometry = new THREE.BufferGeometry()
    geometry.setDrawRange(0, this.gpuComputation.particles.count)

    this.mesh = new THREE.Points(
      geometry,
      new THREE.ShaderMaterial({
        vertexShader: particleVertexShader,
        fragmentShader: particleFragmentShader,
        uniforms: {
          uSize: new THREE.Uniform(0.07),
          uResolution: new THREE.Uniform(
            new THREE.Vector2(
              this.#processResolutionWidth(),
              this.#processResolutionHeight(),
            ),
          ),
          uPositionTexture: new THREE.Uniform(
            this.gpuComputation.getRendererTexture(),
          ),
        },
      }),
    )

    this.#addMeshAttributes()

    this.scene.add(this.mesh)
  }

  /**
   * Add mesh attributes
   *
   * @returns {void}
   */
  #addMeshAttributes() {
    const uv = new Float32Array(this.gpuComputation.particles.count * 2)
    const size = new Float32Array(this.gpuComputation.particles.count * 1)
    const gpuTexture = this.gpuComputation.getRendererTexture()
    for (let y = 0; y < gpuTexture.image.height; y++) {
      for (let x = 0; x < gpuTexture.image.width; x++) {
        const pixelIndex = y * gpuTexture.image.width + x
        const i2 = pixelIndex * 2
        const uvX = (x + 0.5) / gpuTexture.image.width
        const uvY = (y + 0.5) / gpuTexture.image.height
        uv[i2 + 0] = uvX
        uv[i2 + 1] = uvY

        size[pixelIndex] = Math.random()
      }
    }
    this.mesh.geometry.setAttribute('aUv', new THREE.BufferAttribute(uv, 2))
    this.mesh.geometry.setAttribute(
      'aColor',
      this.model.geometry.attributes.color,
    )
    this.mesh.geometry.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 35
    this.camera.position.set(4.5, 4, 11)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor(this.rendererParams.clearColor)
  }

  /**
   * Add renderer resize listener
   *
   * @returns {void}
   */
  #addRendererResizeListener() {
    this.#boundRendererResize = () => {
      this.mesh.material.uniforms.uResolution.value.set(
        this.#processResolutionWidth(),
        this.#processResolutionHeight(),
      )
    }

    this.canvas.addEventListener('resize', this.#boundRendererResize)
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
