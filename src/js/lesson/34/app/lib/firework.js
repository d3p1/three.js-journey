/**
 * @description Firework
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/fireworks-shaders}
 */
import * as THREE from 'three'
import vertexShader from '../../shader/firework/vertex.glsl'
import fragmentShader from '../../shader/firework/fragment.glsl'

export default class Firework {
  /**
   * @type {THREE.Points}
   */
  instance

  /**
   * @type {THREE.Texture}
   */
  texture

  /**
   * @type {THREE.ShaderMaterial}
   */
  material

  /**
   * @type {THREE.BufferGeometry}
   */
  geometry

  /**
   * @type {string[]}
   */
  textures = [
    '/three.js-journey/media/images/textures/particles/1.png',
    '/three.js-journey/media/images/textures/particles/2.png',
    '/three.js-journey/media/images/textures/particles/3.png',
    '/three.js-journey/media/images/textures/particles/4.png',
    '/three.js-journey/media/images/textures/particles/5.png',
    '/three.js-journey/media/images/textures/particles/6.png',
    '/three.js-journey/media/images/textures/particles/7.png',
    '/three.js-journey/media/images/textures/particles/8.png',
    '/three.js-journey/media/images/textures/particles/9.png',
    '/three.js-journey/media/images/textures/particles/10.png',
    '/three.js-journey/media/images/textures/particles/11.png',
    '/three.js-journey/media/images/textures/particles/12.png',
    '/three.js-journey/media/images/textures/particles/13.png',
  ]

  /**
   * @type {object}
   */
  parameters = {
    position: new THREE.Vector3(0, 0, 0),
    particles: 1000,
    particleSize: 0.05,
    particleColor: '#8affff',
    radius: 3,
    texture: 10,
  }

  /**
   * Constructor
   *
   * @param {object|null} parameters
   */
  constructor(parameters = null) {
    if (parameters) {
      this.parameters = parameters
    }

    this.#init()
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    this.geometry.dispose()
    this.material.dispose()
    this.texture.dispose()

    this.geometry = null
    this.material = null
    this.texture = null
  }

  /**
   * init
   *
   * @returns {void}
   */
  #init() {
    this.#initGeometry()
    this.#initMaterial()
    this.instance = new THREE.Points(this.geometry, this.material)
    this.instance.position.copy(this.parameters.position)
  }

  /**
   * Init geometry
   *
   * @returns {void}
   */
  #initGeometry() {
    const particles = this.parameters.particles
    const length = particles * 3
    const positionArray = new Float32Array(length)
    const scaleArray = new Float32Array(particles)
    const timeMultiplierArray = new Float32Array(particles)
    for (let particle = 0; particle < particles; particle++) {
      const index = particle * 3

      const sphericalPosition = new THREE.Spherical(
        this.parameters.radius * (0.75 + 0.25 * Math.random()),
        Math.random() * Math.PI,
        Math.random() * 2 * Math.PI,
      )
      const cartesianPosition = new THREE.Vector3().setFromSpherical(
        sphericalPosition,
      )
      // noinspection PointlessArithmeticExpressionJS
      positionArray[index + 0] = cartesianPosition.x
      positionArray[index + 1] = cartesianPosition.y
      positionArray[index + 2] = cartesianPosition.z

      scaleArray[particle] = Math.random()
      timeMultiplierArray[particle] = 1 + Math.random()
    }

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positionArray, 3),
    )
    this.geometry.setAttribute(
      'aScale',
      new THREE.Float32BufferAttribute(scaleArray, 1),
    )
    this.geometry.setAttribute(
      'aTimeMultiplier',
      new THREE.Float32BufferAttribute(timeMultiplierArray, 1),
    )
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    const textureLoader = new THREE.TextureLoader()
    this.texture = textureLoader.load(this.textures[this.parameters.texture])
    this.texture.flipY = false

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(this.parameters.particleSize),
        uTexture: new THREE.Uniform(this.texture),
        uColor: new THREE.Uniform(
          new THREE.Color(this.parameters.particleColor),
        ),
        uProgress: new THREE.Uniform(0),
      },
    })
  }
}
