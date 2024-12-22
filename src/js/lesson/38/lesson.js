/**
 * @description 38 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/earth-shaders}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import earthDayImage from './media/images/textures/earth/day.jpg'
import earthNightImage from './media/images/textures/earth/night.jpg'
import earthSpecularCloudImage from './media/images/textures/earth/specularCloud.jpg'
import earthAtmosphereVertexShader from './shader/earth/atmosphere/vertex.glsl'
import earthAtmosphereFragmentShader from './shader/earth/atmosphere/fragment.glsl'
import earthVertexShader from './shader/earth/vertex.glsl'
import earthFragmentShader from './shader/earth/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  earth

  /**
   * @type {THREE.ShaderMaterial}
   */
  earthMaterial

  /**
   * @type {THREE.SphereGeometry}
   */
  earthGeometry

  /**
   * @type {object}
   */
  earthParameters = {
    atmosphereDayColor: '#00aaff',
    atmosphereTwilightColor: '#ff6600',
  }

  /**
   * @type {THREE.Mesh}
   */
  atmosphere

  /**
   * @type {THREE.ShaderMaterial}
   */
  atmosphereMaterial

  /**
   * @type {THREE.Mesh}
   */
  sun

  /**
   * @type {THREE.Vector3}
   */
  sunDirection

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
    return '38'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Earth'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/earth-shaders'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const sec = t * 0.001

    this.earth.rotation.y = 0.1 * sec

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initSun()
    this.#initEarth()
    this.#initAtmosphere()
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
    const spherical = new THREE.Spherical()
    spherical.setFromCartesianCoords(...this.sun.position)

    this.guiControl
      .add(spherical, 'phi')
      .min(0)
      .max(Math.PI)
      .step(0.1)
      .onChange((value) => {
        spherical.phi = value
        this.#tweakSunDirectionFromSpherical(spherical)
      })

    this.guiControl
      .add(spherical, 'theta')
      .min(0)
      .max(2 * Math.PI)
      .step(0.1)
      .onChange((value) => {
        spherical.theta = value
        this.#tweakSunDirectionFromSpherical(spherical)
      })

    this.guiControl
      .addColor(this.earthParameters, 'atmosphereDayColor')
      .onChange((value) => {
        this.earthMaterial.uniforms.uAtmosphereDayColor.value.set(value)
        this.atmosphereMaterial.uniforms.uAtmosphereDayColor.value.set(value)
      })

    this.guiControl
      .addColor(this.earthParameters, 'atmosphereTwilightColor')
      .onChange((value) => {
        this.earthMaterial.uniforms.uAtmosphereTwilightColor.value.set(value)
        this.atmosphereMaterial.uniforms.uAtmosphereTwilightColor.value.set(
          value,
        )
      })
  }

  /**
   * Tweak sun direction from spherical
   *
   * @param   {THREE.Spherical} spherical
   * @returns {void}
   */
  #tweakSunDirectionFromSpherical(spherical) {
    this.sun.position.setFromSpherical(spherical)
    this.sunDirection.set(...this.sun.position).normalize()
    this.earthMaterial.uniforms.uSunDirection.value = this.sunDirection
    this.atmosphereMaterial.uniforms.uSunDirection.value = this.sunDirection
  }

  /**
   * Init sun
   *
   * @returns {void}
   */
  #initSun() {
    this.sun = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.1, 2),
      new THREE.MeshBasicMaterial({}),
    )
    this.sun.position.set(0, 0, 10)
    this.scene.add(this.sun)

    this.sunDirection = new THREE.Vector3(...this.sun.position).normalize()
  }

  /**
   * Init atmosphere
   *
   * @returns {void}
   */
  #initAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: earthAtmosphereVertexShader,
      fragmentShader: earthAtmosphereFragmentShader,
      side: THREE.BackSide,
      transparent: true,
      uniforms: {
        uSunDirection: new THREE.Uniform(this.sunDirection),
        uAtmosphereDayColor: new THREE.Uniform(
          new THREE.Color(this.earthParameters.atmosphereDayColor),
        ),
        uAtmosphereTwilightColor: new THREE.Uniform(
          new THREE.Color(this.earthParameters.atmosphereTwilightColor),
        ),
      },
    })
    this.atmosphere = new THREE.Mesh(
      this.earthGeometry,
      this.atmosphereMaterial,
    )
    this.atmosphere.scale.set(1.04, 1.04, 1.04)
    this.scene.add(this.atmosphere)
  }

  /**
   * Init earth
   *
   * @returns {void}
   */
  #initEarth() {
    const textureLoader = new THREE.TextureLoader()
    const textureAnisotropy = Math.floor(
      this.renderer.capabilities.getMaxAnisotropy() / 2,
    )

    const dayTexture = textureLoader.load(earthDayImage)
    dayTexture.colorSpace = THREE.SRGBColorSpace
    dayTexture.anisotropy = textureAnisotropy

    const nightTexture = textureLoader.load(earthNightImage)
    nightTexture.colorSpace = THREE.SRGBColorSpace
    nightTexture.anisotropy = textureAnisotropy

    const specularCloudTexture = textureLoader.load(earthSpecularCloudImage)
    specularCloudTexture.anisotropy = textureAnisotropy

    this.earthGeometry = new THREE.SphereGeometry(2, 64, 64)
    this.earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayTexture: new THREE.Uniform(dayTexture),
        uNightTexture: new THREE.Uniform(nightTexture),
        uSpecularCloudTexture: new THREE.Uniform(specularCloudTexture),
        uSunDirection: new THREE.Uniform(this.sunDirection),
        uAtmosphereDayColor: new THREE.Uniform(
          new THREE.Color(this.earthParameters.atmosphereDayColor),
        ),
        uAtmosphereTwilightColor: new THREE.Uniform(
          new THREE.Color(this.earthParameters.atmosphereTwilightColor),
        ),
      },
    })
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial)
    this.scene.add(this.earth)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 25
    this.camera.position.set(12, 6, 4)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearColor('#000011')
  }
}
