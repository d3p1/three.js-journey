/**
 * @description 30 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/animated-galaxy}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Points}
   */
  galaxy

  /**
   * @type {THREE.PointsMaterial}
   */
  galaxyMaterial

  /**
   * @type {THREE.BufferGeometry}
   */
  galaxyGeometry

  /**
   * @type {object}
   */
  galaxyParams = {
    particles: 20000,
    particleSize: 0.02,
    particleOffset: 0.3,
    branches: 7,
    radius: 6,
    spin: 0.7,
    gravityStrength: 5,
    innerColor: '#ff6030',
    outerColor: '#1b3984',
  }

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get the lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 30] Animated galaxy'
  }

  /**
   * Get the lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/animated-galaxy'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const sec = t * 0.001
    this.galaxy.rotation.y = 0.2 * sec

    this.control.update()
  }

  /**
   * Init
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initGalaxyTweaks()
    this.#generateGalaxy()
    this.#setupCamera()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.#disposeGalaxy()
    super.dispose()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(1, 5, 10)
  }

  /**
   * Generate galaxy
   *
   * @returns {void}
   */
  #generateGalaxy() {
    this.#initGalaxyGeometry()
    this.#initGalaxyMaterial()
    this.#initGalaxy()
  }

  /**
   * Init galaxy tweaks
   *
   * @returns {void}
   */
  #initGalaxyTweaks() {
    this.#addGalaxyTweak('particles', 100, 1000000, 1)
    this.#addGalaxyTweak('particleSize', 0.01, 10, 0.01)
    this.#addGalaxyTweak('particleOffset', 0.01, 10, 0.01)
    this.#addGalaxyTweak('branches', 1, 20, 1)
    this.#addGalaxyTweak('radius', 1, 20, 0.1)
    this.#addGalaxyTweak('spin', 0.1, 20, 0.1)
    this.#addGalaxyTweak('gravityStrength', 1, 20, 1)
    this.#addGalaxyColorTweak('innerColor')
    this.#addGalaxyColorTweak('outerColor')
  }

  /**
   * Init galaxy geometry
   *
   * @returns {void}
   */
  #initGalaxyGeometry() {
    this.galaxyGeometry = new THREE.BufferGeometry()

    const particles = this.galaxyParams['particles']
    const particleOffset = this.galaxyParams['particleOffset']
    const branches = this.galaxyParams['branches']
    const radius = this.galaxyParams['radius']
    const spin = this.galaxyParams['spin']
    const gravityStrength = this.galaxyParams['gravityStrength']
    const innerColor = new THREE.Color(this.galaxyParams['innerColor'])
    const outerColor = new THREE.Color(this.galaxyParams['outerColor'])
    const branchAngle = (2 * Math.PI) / branches

    const length = particles * 3
    const positionArray = new Float32Array(length)
    const colorArray = new Float32Array(length)
    for (let particle = 0; particle < particles; particle += 1) {
      const coord = particle * 3
      const rad = radius * Math.random()
      const offsetX =
        Math.pow(Math.random(), gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        rad *
        particleOffset
      const offsetY =
        Math.pow(Math.random(), gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        rad *
        particleOffset
      const offsetZ =
        Math.pow(Math.random(), gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        rad *
        particleOffset
      let angle = branchAngle * (particle % branches)

      angle += spin * rad

      // noinspection PointlessArithmeticExpressionJS
      positionArray[coord + 0] = Math.cos(angle) * rad + offsetX
      positionArray[coord + 1] = offsetY
      positionArray[coord + 2] = Math.sin(angle) * rad + offsetZ

      const mixedColor = new THREE.Color().lerpColors(
        innerColor,
        outerColor,
        rad / radius,
      )

      // noinspection PointlessArithmeticExpressionJS
      colorArray[coord + 0] = mixedColor.r
      colorArray[coord + 1] = mixedColor.g
      colorArray[coord + 2] = mixedColor.b
    }

    const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
    const colorAttribute = new THREE.BufferAttribute(colorArray, 3)
    this.galaxyGeometry.setAttribute('position', positionAttribute)
    this.galaxyGeometry.setAttribute('color', colorAttribute)
  }

  /**
   * Init galaxy material
   *
   * @returns {void}
   */
  #initGalaxyMaterial() {
    this.galaxyMaterial = new THREE.PointsMaterial({
      size: this.galaxyParams.particleSize,
      sizeAttenuation: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })
  }

  /**
   * Init galaxy
   *
   * @returns {void}
   */
  #initGalaxy() {
    this.galaxy = new THREE.Points(this.galaxyGeometry, this.galaxyMaterial)
    this.scene.add(this.galaxy)
  }

  /**
   * Process galaxy
   *
   * @param {string}        param
   * @param {string|number} value
   */
  #processGalaxy(param, value) {
    this.galaxyParams[param] = value
    this.#disposeGalaxy()
    this.#generateGalaxy()
  }

  /**
   * Add galaxy color tweak
   *
   * @param   {string} name
   * @returns {void}
   */
  #addGalaxyColorTweak(name) {
    this.guiControl
      .addColor({value: this.galaxyParams[name]}, 'value')
      .name(name)
      .onFinishChange((value) => {
        this.#processGalaxy(name, value)
      })
  }

  /**
   * Add galaxy tweak
   *
   * @param   {string} name
   * @param   {number} min
   * @param   {number} max
   * @param   {number} step
   * @returns {void}
   */
  #addGalaxyTweak(name, min, max, step) {
    this.guiControl
      .add({value: this.galaxyParams[name]}, 'value')
      .min(min)
      .max(max)
      .step(step)
      .name(name)
      .onFinishChange((value) => {
        this.#processGalaxy(name, value)
      })
  }

  /**
   * Dispose galaxy
   *
   * @returns {void}
   */
  #disposeGalaxy() {
    this.galaxyGeometry.dispose()
    this.galaxyMaterial.dispose()
    this.scene.remove(this.galaxy)

    this.galaxyGeometry = null
    this.galaxyMaterial = null
    this.galaxy = null
  }
}
