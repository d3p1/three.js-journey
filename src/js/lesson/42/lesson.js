/**
 * @description 42 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/wobbly-sphere-shader}
 */
import * as THREE from 'three'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import wobbleVertexShader from './shader/wobble/vertex.glsl'
import wobbleFragmentShader from './shader/wobble/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {object}
   */
  uniforms

  /**
   * @type {object}
   */
  wobbleParams = {
    innerColor: '#0000ff',
    outerColor: '#ff0000',
  }

  /**
   * @type {THREE.Mesh|null}
   */
  mesh = null

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
    return '42'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Wobbly Sphere'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/wobbly-sphere-shader'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const seconds = t * 0.001
    this.mesh.material.uniforms.uTime.value = seconds

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
    this.#initLights()
    this.#initEnvironmentMap()
    this.#initTweaks()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initTweaks() {
    this.guiControl
      .add(this.mesh.material, 'metalness')
      .min(0)
      .max(1)
      .step(0.001)

    this.guiControl
      .add(this.mesh.material, 'roughness')
      .min(0)
      .max(1)
      .step(0.001)

    this.guiControl
      .add(this.mesh.material, 'transmission')
      .min(0)
      .max(1)
      .step(0.001)

    this.guiControl.add(this.mesh.material, 'ior').min(0).max(10).step(0.001)

    this.guiControl
      .add(this.mesh.material, 'thickness')
      .min(0)
      .max(10)
      .step(0.001)

    this.guiControl
      .addColor({color: this.mesh.material.color.getHexString()}, 'color')
      .onChange((value) => this.mesh.material.color.set(value))

    this.guiControl
      .add(this.mesh.material.uniforms.uStrength, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uStrength')

    this.guiControl
      .add(this.mesh.material.uniforms.uPositionFrequency, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uPositionFrequency')

    this.guiControl
      .add(this.mesh.material.uniforms.uTimeFrequency, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uTimeFrequency')

    this.guiControl
      .add(this.mesh.material.uniforms.uWarpStrength, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uWarpStrength')

    this.guiControl
      .add(this.mesh.material.uniforms.uWarpPositionFrequency, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uWarpPositionFrequency')

    this.guiControl
      .add(this.mesh.material.uniforms.uWarpTimeFrequency, 'value')
      .min(0)
      .max(2)
      .step(0.001)
      .name('uWarpTimeFrequency')

    this.guiControl
      .addColor(this.wobbleParams, 'innerColor')
      .onChange((value) => {
        this.mesh.material.uniforms.uInnerColor.value.set(value)
      })

    this.guiControl
      .addColor(this.wobbleParams, 'outerColor')
      .onChange((value) => {
        this.mesh.material.uniforms.uOuterColor.value.set(value)
      })
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    this.#initUniforms()

    const geometry = new THREE.IcosahedronGeometry(2.5, 50)
    const indexedGeometry = mergeVertices(geometry)
    indexedGeometry.computeTangents()

    const depthMaterial = new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader: wobbleVertexShader,
      silent: true,
      depthPacking: THREE.RGBADepthPacking,
      uniforms: this.uniforms,
    })

    this.mesh = new THREE.Mesh(
      indexedGeometry,
      new CustomShaderMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: wobbleVertexShader,
        fragmentShader: wobbleFragmentShader,
        silent: true,
        metalness: 0,
        roughness: 0.5,
        color: 0xffffff,
        transmission: 0,
        ior: 1.5,
        thickness: 1.5,
        transparent: true,
        wireframe: false,
        uniforms: this.uniforms,
      }),
    )
    this.mesh.customDepthMaterial = depthMaterial
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    this.scene.add(this.mesh)

    const debugPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 15, 15),
      new THREE.MeshStandardMaterial({}),
    )
    debugPlane.position.set(0, -5, 5)
    debugPlane.rotation.y = Math.PI
    debugPlane.receiveShadow = true
    debugPlane.visible = false
    this.scene.add(debugPlane)
  }

  /**
   * Init uniforms
   *
   * @returns {void}
   */
  #initUniforms() {
    this.uniforms = {
      uTime: new THREE.Uniform(0),
      uStrength: new THREE.Uniform(0.3),
      uTimeFrequency: new THREE.Uniform(0.4),
      uPositionFrequency: new THREE.Uniform(0.5),
      uWarpStrength: new THREE.Uniform(1.7),
      uWarpTimeFrequency: new THREE.Uniform(0.12),
      uWarpPositionFrequency: new THREE.Uniform(0.38),
      uInnerColor: new THREE.Uniform(
        new THREE.Color(this.wobbleParams.innerColor),
      ),
      uOuterColor: new THREE.Uniform(
        new THREE.Color(this.wobbleParams.outerColor),
      ),
    }
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvironmentMap() {
    const loader = new RGBELoader()
    loader.load(
      '/three.js-journey/media/images/environmentMaps/2k.hdr',
      (image) => {
        image.mapping = THREE.EquirectangularReflectionMapping
        this.scene.environment = image
      },
    )
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(0.25, 2, -2.25)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.05
    directionalLight.shadow.camera.far = 15
    this.scene.add(directionalLight)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 35
    this.camera.position.set(13, -3, -5)
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
    this.renderer.toneMappingExposure = 1
  }
}
