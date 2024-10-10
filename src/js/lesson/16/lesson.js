/**
 * @description 16 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/particles}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Points}
   */
  particles

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
    return 'Particles'
  }

  /**
   * Get link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/particles'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    const positions = this.particles.geometry.attributes.position
    for (let i = 0; i < positions.array.length; i += 3) {
      positions.array[i + 1] = Math.sin(t * 0.001 + positions.array[i])
    }
    positions.needsUpdate = true
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initParticles()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.particles = null
  }

  /**
   * Init particles
   *
   * @returns {void}
   */
  #initParticles() {
    const items = 1000
    const vertices = items * 3

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(vertices)
    const colors = new Float32Array(vertices)
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 5
      colors[i] = Math.random()
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const textureLoader = new THREE.TextureLoader()
    const particleTexture = textureLoader.load(
      '/three.js-journey/media/images/textures/particles/2.png',
    )
    const material = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      alphaMap: particleTexture,
    })
    material.depthWrite = false
    material.blending = THREE.AdditiveBlending
    material.vertexColors = true

    this.particles = new THREE.Points(geometry, material)
    this.scene.add(this.particles)
  }
}
