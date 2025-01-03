/**
 * @description 31 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/modified-materials}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import lennyCommonVertexShaderChunk from './shader/lenny/chunk/common.glsl'
import lennyUvVertexShaderChunk from './shader/lenny/chunk/uv_vertex.glsl'
import lennyBeginNormalVertexShaderChunk from './shader/lenny/chunk/beginnormal_vertex.glsl'
import lennyBeginVertexShaderChunk from './shader/lenny/chunk/begin_vertex.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.MeshStandardMaterial}
   */
  modelMaterial

  /**
   * @type {object}
   */
  modelUniforms = {
    uTime: {value: 0},
  }

  /**
   * @type {THREE.MeshDepthMaterial}
   */
  customDepthMaterial

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
    return '31'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Modified materials'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/modified-materials'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.modelUniforms.uTime.value = t * 0.001

    this.control.update()
  }

  /**
   * Init the lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initEnvMap()
    this.#initModel()
    this.#setupLight()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Update material shaders
   *
   * @returns {void}
   */
  #updateMaterialShaders() {
    this.modelMaterial.onBeforeCompile =
      this.#processShaderCompilation.bind(this)
    this.customDepthMaterial.onBeforeCompile =
      this.#processShaderCompilation.bind(this)
  }

  /**
   * Process shader compilation
   *
   * @param   {object} shader
   * @returns {void}
   */
  #processShaderCompilation(shader) {
    shader.uniforms.uTime = this.modelUniforms.uTime

    shader.vertexShader = shader.vertexShader.replace(
      `#include <common>`,
      lennyCommonVertexShaderChunk,
    )

    shader.vertexShader = shader.vertexShader.replace(
      `#include <uv_vertex>`,
      lennyUvVertexShaderChunk,
    )

    shader.vertexShader = shader.vertexShader.replace(
      `#include <beginnormal_vertex>`,
      lennyBeginNormalVertexShaderChunk,
    )

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      lennyBeginVertexShaderChunk,
    )
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const envMap = cubeTextureLoader.load([
      '/three.js-journey/media/images/environmentMaps/3/px.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nx.jpg',
      '/three.js-journey/media/images/environmentMaps/3/py.jpg',
      '/three.js-journey/media/images/environmentMaps/3/ny.jpg',
      '/three.js-journey/media/images/environmentMaps/3/pz.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nz.jpg',
    ])
    this.scene.background = envMap
    this.scene.environment = envMap
    this.scene.backgroundIntensity = 1
    this.scene.environmentIntensity = 1
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
      '/three.js-journey/media/models/LeePerrySmith/LeePerrySmith.glb',
      (gltf) => {
        const textureLoader = new THREE.TextureLoader()
        const modelNormal = textureLoader.load(
          '/three.js-journey/media/models/LeePerrySmith/normal.jpg',
        )
        const modelColor = textureLoader.load(
          '/three.js-journey/media/models/LeePerrySmith/color.jpg',
        )
        modelColor.colorSpace = THREE.SRGBColorSpace

        const model = gltf.scene.children[0]
        model.receiveShadow = true
        model.castShadow = true
        this.modelMaterial = model.material
        this.modelMaterial.map = modelColor
        this.modelMaterial.normalMap = modelNormal

        this.customDepthMaterial = new THREE.MeshDepthMaterial({
          depthPacking: THREE.RGBADepthPacking,
        })
        model.customDepthMaterial = this.customDepthMaterial

        this.scene.add(model)

        this.#updateMaterialShaders()
      },
    )
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1
  }

  /**
   * Setup light
   *
   * @returns {void}
   */
  #setupLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(4, 1, 0)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.normalBias = 0.05

    this.scene.add(directionalLight)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(-1, 3, 10)
  }
}
