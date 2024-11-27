/**
 * @description 34 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/fireworks-shaders}
 */
import {Sky} from 'three/addons/objects/Sky.js'
import gsap from 'gsap'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import Firework from './app/lib/firework.js'
import * as THREE from 'three'

export default class Lesson extends GeneralLesson {
  /**
   * @type {Firework[]}
   */
  fireworks = []

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
  #boundFireworkClick

  /**
   * @type {object}
   */
  #skyParameters = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.95,
    elevation: -2.2,
    azimuth: 180,
  }

  /**
   * Get the lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 34] Fireworks'
  }

  /**
   * Get the lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/fireworks-shaders'
  }

  /**
   * Update the lesson
   *
   * @returns {void}
   */
  update() {
    this.control.update()
  }

  /**
   * Init the lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initSky()
    this.#initFirework()
    this.#initFireworkClickEvent()
    this.#setupCamera()
  }

  /**
   * Resize renderer
   *
   * @returns {void}
   */
  resizeRenderer() {
    super.resizeRenderer()

    if (this.fireworks.length) {
      this.fireworks.forEach((firework) => {
        this.#computeFireworkParticleSize(firework)
      })
    }
  }

  /**
   * Dispose the lesson
   *
   * @returns {void}
   */
  dispose() {
    this.#disposeFireworks()
    this.canvas.removeEventListener('click', this.#boundFireworkClick)

    super.dispose()
  }

  /**
   * Init sky
   *
   * @returns {void}
   */
  #initSky() {
    const sky = new Sky()
    sky.scale.setScalar(450000)

    const sun = new THREE.Vector3()
    const uniforms = sky.material.uniforms
    uniforms['turbidity'].value = this.#skyParameters.turbidity
    uniforms['rayleigh'].value = this.#skyParameters.rayleigh
    uniforms['mieCoefficient'].value = this.#skyParameters.mieCoefficient
    uniforms['mieDirectionalG'].value = this.#skyParameters.mieDirectionalG
    const phi = THREE.MathUtils.degToRad(90 - this.#skyParameters.elevation)
    const theta = THREE.MathUtils.degToRad(this.#skyParameters.azimuth)
    sun.setFromSphericalCoords(1, phi, theta)
    uniforms['sunPosition'].value.copy(sun)

    this.scene.add(sky)
  }

  /**
   * Init firework click event
   *
   * @returns {void}
   */
  #initFireworkClickEvent() {
    this.#boundFireworkClick = this.#initFirework.bind(this)

    this.canvas.addEventListener('click', this.#boundFireworkClick)
  }

  /**
   * Init firework
   *
   * @returns {void}
   */
  #initFirework() {
    const firework = new Firework({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
      ),
      particles: 1000 + Math.floor(1000 * Math.random()),
      particleSize: 0.03 + 0.02 * Math.random(),
      particleColor: `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(
        255 * Math.random(),
      )}, ${Math.floor(255 * Math.random())})`,
      radius: 1 + Math.random() * 2,
      texture: Math.floor(12 * Math.random()),
    })
    this.#computeFireworkParticleSize(firework)
    this.scene.add(firework.instance)
    this.fireworks.push(firework)

    gsap.to(firework.material.uniforms.uProgress, {
      value: 1,
      duration: 3,
      ease: 'linear',
      onComplete: () => {
        this.#disposeFirework(firework)
      },
    })
  }

  /**
   * Disposes firework
   *
   * @returns {void}
   */
  #disposeFireworks() {
    this.fireworks.forEach((firework) => {
      if (firework.instance) {
        this.#disposeFirework(firework)
      }
    })
    this.fireworks = []
  }

  /**
   * Dispose firework
   *
   * @param   {Firework} firework
   * @returns {void}
   */
  #disposeFirework(firework) {
    this.scene.remove(firework.instance)
    firework.dispose()
  }

  /**
   * Compute firework particle size
   *
   * @param   {Firework} firework
   * @returns {void}
   */
  #computeFireworkParticleSize(firework) {
    firework.material.uniforms.uSize.value =
      firework.parameters.particleSize *
      this.canvas.height *
      this.renderer.getPixelRatio()
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(4, 4, 4)
  }
}
