/**
 * @description 44 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/procedural-terrain-shader}
 */
import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import {SUBTRACTION, Brush, Evaluator} from 'three-bvh-csg'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import terrainVertexShader from './shader/terrain/vertex.glsl'
import terrainFragmentShader from './shader/terrain/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  mesh

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
    return '44'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Procedural Terrain'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/procedural-terrain-shader'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.mesh.material.uniforms.uTime.value = t * 0.001

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initEnvMap()
    this.#initLights()
    this.#initBoard()
    this.#initMesh()
    this.#addTweaks()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Add tweaks
   *
   * @returns {void}
   */
  #addTweaks() {
    this.guiControl
      .add(this.mesh.material.uniforms.uPositionFrequency, 'value')
      .min(0)
      .max(1)
      .step(0.001)
      .name('uPositionFrequency')

    this.guiControl
      .add(this.mesh.material.uniforms.uStrength, 'value')
      .min(0)
      .max(10)
      .step(0.001)
      .name('uStrength')

    this.guiControl
      .add(this.mesh.material.uniforms.uWarpFrequency, 'value')
      .min(0)
      .max(10)
      .step(0.001)
      .name('uWarpFrequency')

    this.guiControl
      .add(this.mesh.material.uniforms.uWarpStrength, 'value')
      .min(0)
      .max(1)
      .step(0.001)
      .name('uWarpStrength')

    this.guiControl
      .addColor(
        {
          uDeepWaterColor:
            this.mesh.material.uniforms.uDeepWaterColor.value.getHexString(),
        },
        'uDeepWaterColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uDeepWaterColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uSurfaceWaterColor:
            this.mesh.material.uniforms.uSurfaceWaterColor.value.getHexString(),
        },
        'uSurfaceWaterColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uSurfaceWaterColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uSandColor:
            this.mesh.material.uniforms.uSandColor.value.getHexString(),
        },
        'uSandColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uSandColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uGrassColor:
            this.mesh.material.uniforms.uGrassColor.value.getHexString(),
        },
        'uGrassColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uGrassColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uSnowColor:
            this.mesh.material.uniforms.uSnowColor.value.getHexString(),
        },
        'uSnowColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uSnowColor.value.set(value)
      })

    this.guiControl
      .addColor(
        {
          uRockColor:
            this.mesh.material.uniforms.uRockColor.value.getHexString(),
        },
        'uRockColor',
      )
      .onChange((value) => {
        this.mesh.material.uniforms.uRockColor.value.set(value)
      })
  }

  /**
   * Init board
   *
   * @returns {void}
   */
  #initBoard() {
    const evaluator = new Evaluator()
    const boardFill = new Brush(new THREE.BoxGeometry(11, 2, 11))
    const boardHole = new Brush(new THREE.BoxGeometry(10, 2.1, 10))
    const board = evaluator.evaluate(boardFill, boardHole, SUBTRACTION)
    board.geometry.clearGroups()
    board.material = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      metalness: 0,
      roughness: 0.3,
    })
    board.receiveShadow = true
    board.castShadow = true
    this.scene.add(board)
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const uniforms = {
      uPositionFrequency: new THREE.Uniform(0.2),
      uStrength: new THREE.Uniform(2.0),
      uWarpFrequency: new THREE.Uniform(5.0),
      uWarpStrength: new THREE.Uniform(0.5),
      uTime: new THREE.Uniform(0.0),
      uDeepWaterColor: new THREE.Uniform(new THREE.Color('#002b3d')),
      uSurfaceWaterColor: new THREE.Uniform(new THREE.Color('#66a8ff')),
      uSandColor: new THREE.Uniform(new THREE.Color('#ffe894')),
      uGrassColor: new THREE.Uniform(new THREE.Color('#85d534')),
      uSnowColor: new THREE.Uniform(new THREE.Color('#ffffff')),
      uRockColor: new THREE.Uniform(new THREE.Color('#bfbd8d')),
    }

    const geometry = new THREE.PlaneGeometry(10, 10, 500, 500)
    geometry.rotateX(-Math.PI / 2)
    geometry.deleteAttribute('normal')
    geometry.deleteAttribute('uv')

    const material = new CustomShaderMaterial({
      baseMaterial: THREE.MeshStandardMaterial,
      vertexShader: terrainVertexShader,
      fragmentShader: terrainFragmentShader,
      uniforms: uniforms,
      silent: true,
      metalness: 0,
      roughness: 0.5,
      color: '#85d534',
    })

    const depthMaterial = new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader: terrainVertexShader,
      uniforms: uniforms,
      silent: true,
      depthPacking: THREE.RGBADepthPacking,
    })

    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.customDepthMaterial = depthMaterial
    this.mesh.receiveShadow = true
    this.mesh.castShadow = true
    this.scene.add(this.mesh)

    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10, 1, 1),
      new THREE.MeshPhysicalMaterial({transmission: 1, roughness: 0.3}),
    )
    water.rotation.x = -Math.PI / 2
    water.position.y = -0.1
    this.scene.add(water)
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const rgbeLoader = new RGBELoader()
    rgbeLoader.load(
      '/three.js-journey/media/images/environmentMap/spruit_sunrise.hdr',
      (image) => {
        image.mapping = THREE.EquirectangularReflectionMapping

        this.scene.environment = image
        this.scene.background = image
        this.scene.backgroundBlurriness = 0.5
      },
    )
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(6.25, 3, 4)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 30
    directionalLight.shadow.camera.top = 8
    directionalLight.shadow.camera.right = 8
    directionalLight.shadow.camera.bottom = -8
    directionalLight.shadow.camera.left = -8
    this.scene.add(directionalLight)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 35
    this.camera.position.set(-10, 6, -2)
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
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
  }
}
