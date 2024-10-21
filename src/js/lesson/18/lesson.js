/**
 * @description 18 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/galaxy-generator}
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
  galaxyTweaks

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 18] Galaxy Generator'
  }

  /**
   * Get link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/galaxy-generator'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    const seconds = t * 0.001
    this.galaxy.rotation.y = seconds * 0.2
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#setupCamera()
    this.#initGalaxyTweaks()
    this.#initGalaxy()
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
   * Generate galaxy
   *
   * @returns {void}
   */
  #generateGalaxy() {
    this.#disposeGalaxy()
    this.#initGalaxy()
  }

  /**
   * Init galaxy
   *
   * @returns {void}
   */
  #initGalaxy() {
    this.galaxyGeometry = new THREE.BufferGeometry()

    const vertices = this.galaxyTweaks.particles * 3
    const positions = new Float32Array(vertices)
    const colors = new Float32Array(vertices)
    const insideColor = new THREE.Color(this.galaxyTweaks.insideColor)
    const outsideColor = new THREE.Color(this.galaxyTweaks.outsideColor)
    for (let i = 0; i < vertices; i += 3) {
      const particle = i / 3

      const radius = Math.random() * this.galaxyTweaks.radius
      const angle =
        2 *
        Math.PI *
        ((particle % this.galaxyTweaks.branches) / this.galaxyTweaks.branches)
      const spin = this.galaxyTweaks.spin * radius
      const offsetX =
        Math.pow(Math.random(), this.galaxyTweaks.gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        this.galaxyTweaks.offset *
        radius
      const offsetY =
        Math.pow(Math.random(), this.galaxyTweaks.gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        this.galaxyTweaks.offset *
        radius
      const offsetZ =
        Math.pow(Math.random(), this.galaxyTweaks.gravityStrength) *
        Math.pow(-1, Math.round(Math.random())) *
        this.galaxyTweaks.offset *
        radius

      positions[i] = Math.cos(angle + spin) * radius + offsetX
      positions[i + 1] = offsetY
      positions[i + 2] = Math.sin(angle + spin) * radius + offsetZ

      const mixedColor = insideColor.clone()
      const color = mixedColor.lerp(
        outsideColor,
        radius / this.galaxyTweaks.radius,
      )
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }
    this.galaxyGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    )
    this.galaxyGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3),
    )

    this.galaxyMaterial = new THREE.PointsMaterial({
      size: this.galaxyTweaks.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    this.galaxy = new THREE.Points(this.galaxyGeometry, this.galaxyMaterial)

    this.scene.add(this.galaxy)
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

  /**
   * Init galaxy tweaks
   *
   * @returns {void}
   */
  #initGalaxyTweaks() {
    this.galaxyTweaks = {
      particles: 20000,
      size: 0.01,
      radius: 4,
      branches: 7,
      spin: 0.7,
      offset: 0.3,
      gravityStrength: 5,
      insideColor: '#ff6030',
      outsideColor: '#1b3984',
    }
    this.#addGalaxyRangeTweak('particles', 100, 100000, 1)
    this.#addGalaxyRangeTweak('size', 0.01, 1, 0.01)
    this.#addGalaxyRangeTweak('radius', 1, 20, 0.1)
    this.#addGalaxyRangeTweak('branches', 2, 20, 1)
    this.#addGalaxyRangeTweak('spin', 0.2, 20, 0.1)
    this.#addGalaxyRangeTweak('offset', 0.1, 20, 0.1)
    this.#addGalaxyRangeTweak('gravityStrength', 1, 20, 1)
    this.#addGalaxyColorTweak('insideColor')
    this.#addGalaxyColorTweak('outsideColor')
  }

  /**
   * Add galaxy range tweak
   *
   * @returns {void}
   */
  #addGalaxyRangeTweak(property, min, max, step) {
    this.guiControl
      .add(this.galaxyTweaks, property)
      .min(min)
      .max(max)
      .step(step)
      .onFinishChange(this.#generateGalaxy.bind(this))
  }

  /**
   * Add galaxy color tweak
   *
   * @param   {string} property
   * @returns {void}
   */
  #addGalaxyColorTweak(property) {
    this.guiControl
      .addColor(this.galaxyTweaks, property)
      .onFinishChange(this.#generateGalaxy.bind(this))
  }

  /**
   * Setup camera
   *
   * @returs {void}
   */
  #setupCamera() {
    this.camera.position.x = 3
    this.camera.position.y = 3
    this.camera.position.z = 5
  }
}
