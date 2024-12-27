/**
 * @description 40 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/particles-morphing-shader}
 */
import * as THREE from 'three'
import gsap from 'gsap'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import particleVertexShader from './shader/particle/vertex.glsl'
import particleFragmentShader from './shader/particle/fragment.glsl'
import models from './media/models/models.glb'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {number}
   */
  currentMeshIndex = 0

  /**
   * @type {THREE.BufferAttribute[]}
   */
  meshPositions = []

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
    clearColor: '#160920',
  }

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
    return '40'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Particles Morphing'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/particles-morphing-shader'
  }

  /**
   * Update lesson
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

    this.#initMesh()
    this.#initModels()
    this.#setupCamera()
    this.#setupRenderer()
    this.#addTweaks()
    this.#addResizeRendererListener()
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
   * Add GUI tweaks
   *
   * @returns {void}
   */
  #addTweaks() {
    this.guiControl
      .addColor({clearColor: this.rendererParams.clearColor}, 'clearColor')
      .onChange((value) => {
        this.renderer.setClearColor(value)
      })

    this.guiControl
      .add(this.mesh.material.uniforms.uProgress, 'value')
      .min(0)
      .max(1)
      .step(0.001)
      .name('uProgress')
      .listen()

    this.guiControl
      .addColor(
        {
          uWarmColor:
            this.mesh.material.uniforms.uWarmColor.value.getHexString(),
        },
        'uWarmColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uWarmColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uCoolColor:
            this.mesh.material.uniforms.uCoolColor.value.getHexString(),
        },
        'uCoolColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uCoolColor.value.set(value)
      })

    const morph = (index) => {
      this.#setupMesh(index)
      gsap.fromTo(
        this.mesh.material.uniforms.uProgress,
        {value: 0},
        {
          value: 1,
          ease: 'linear',
          duration: 3,
          onComplete: () => {
            this.currentMeshIndex = index
          },
        },
      )
    }
    this.guiControl.add(
      {
        morphToFirstMesh: () => {
          morph(0)
        },
      },
      'morphToFirstMesh',
    )
    this.guiControl.add(
      {
        morphToSecondMesh: () => {
          morph(1)
        },
      },
      'morphToSecondMesh',
    )
    this.guiControl.add(
      {
        morphToThirdMesh: () => {
          morph(2)
        },
      },
      'morphToThirdMesh',
    )
    this.guiControl.add(
      {
        morphToFourthMesh: () => {
          morph(3)
        },
      },
      'morphToFourthMesh',
    )
  }

  /**
   * Init models
   *
   * @returns {void}
   */
  #initModels() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(models, (gltf) => {
      const geometries = gltf.scene.children.map((child) => child.geometry)
      this.#generateMeshAttributes(geometries)
      this.#setupMesh(1)
    })
  }

  /**
   * Generate mesh attributes
   *
   * @param   {THREE.Geometry[]} geometries
   * @returns {void}
   */
  #generateMeshAttributes(geometries) {
    const maxVertices = geometries.reduce(
      (accumulator, child) =>
        Math.max(accumulator, child.attributes.position.count),
      0,
    )

    for (const geometry of geometries) {
      const position = geometry.attributes.position
      const normalizedPosition = new Float32Array(maxVertices * 3)
      for (let i = 0; i < maxVertices; i++) {
        const i3 = i * 3
        if (i < position.count) {
          normalizedPosition[i3 + 0] = position.array[i3 + 0]
          normalizedPosition[i3 + 1] = position.array[i3 + 1]
          normalizedPosition[i3 + 2] = position.array[i3 + 2]
        } else {
          const index = Math.floor((position.count - 1) * Math.random()) * 3
          normalizedPosition[i3 + 0] = position.array[index + 0]
          normalizedPosition[i3 + 1] = position.array[index + 1]
          normalizedPosition[i3 + 2] = position.array[index + 2]
        }
      }
      this.meshPositions.push(new THREE.BufferAttribute(normalizedPosition, 3))
    }

    const sizes = new Float32Array(maxVertices * 1)
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] = Math.random()
    }
    this.mesh.geometry.setAttribute(
      'aSize',
      new THREE.BufferAttribute(sizes, 1),
    )
  }

  /**
   * Setup mesh
   *
   * @param   {number} targetMeshIndex
   * @returns {void}
   */
  #setupMesh(targetMeshIndex) {
    this.mesh.geometry.setAttribute(
      'position',
      this.meshPositions[this.currentMeshIndex],
    )
    this.mesh.geometry.setAttribute(
      'aTargetPosition',
      this.meshPositions[targetMeshIndex],
    )
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const geometry = new THREE.BufferGeometry()

    const material = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(0.4),
        uResolution: new THREE.Uniform(
          new THREE.Vector2(
            this.#processResolutionWidth(),
            this.#processResolutionHeight(),
          ),
        ),
        uProgress: new THREE.Uniform(0),
        uWarmColor: new THREE.Uniform(new THREE.Color('#ff7300')),
        uCoolColor: new THREE.Uniform(new THREE.Color('#0091ff')),
      },
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    this.mesh = new THREE.Points(geometry, material)
    this.mesh.frustumCulled = false
    this.scene.add(this.mesh)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 35
    this.camera.position.set(0, 0, 16)
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
   * Add resize renderer listener
   *
   * @returns {void}
   */
  #addResizeRendererListener() {
    this.#boundResizeRenderer = () => {
      this.mesh.material.uniforms.uResolution.value.set(
        this.#processResolutionWidth(),
        this.#processResolutionHeight(),
      )
    }
    this.canvas.addEventListener('resize', this.#boundResizeRenderer)
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
