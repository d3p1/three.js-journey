/**
 * @description GPU computation
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {GPUComputationRenderer} from 'three/addons'
import particleShader from './shader/particle.glsl'

export default class Computation {
  /**
   * @type {THREE.BufferAttribute}
   */
  particles

  /**
   * @type {GPUComputationRenderer}
   */
  renderer

  /**
   * @type {THREE.DataTexture}
   */
  baseTexture

  /**
   *  @type {object}
   */
  particleVariable

  /**
   * Constructor
   *
   * @param {THREE.BufferAttribute} particles
   * @param {THREE.WebGLRenderer}   renderer
   */
  constructor(particles, renderer) {
    this.particles = particles
    const size = Math.ceil(Math.sqrt(particles.count))
    this.#initGpuComputationRenderer(size, size, renderer)
  }

  /**
   * Get renderer texture
   *
   * @returns {THREE.DataTexture}
   */
  getRendererTexture() {
    return this.renderer.getCurrentRenderTarget(this.particleVariable).texture
  }

  /**
   * Add debug plane to scene
   *
   * @param   {THREE.Scene} scene
   * @returns {void}
   */
  addDebugPlaneToScene(scene) {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshBasicMaterial({
        map: this.getRendererTexture(),
      }),
    )
    plane.position.x = 3
    scene.add(plane)
  }

  /**
   * Init GPU computation renderer
   *
   * @param   {number}              width
   * @param   {number}              height
   * @param   {THREE.WebGLRenderer} renderer
   * @returns {void}
   */
  #initGpuComputationRenderer(width, height, renderer) {
    this.renderer = new GPUComputationRenderer(width, height, renderer)

    this.#initBaseTexture()

    this.particleVariable = this.renderer.addVariable(
      'uParticle',
      particleShader,
      this.baseTexture,
    )
    this.renderer.setVariableDependencies(this.particleVariable, [
      this.particleVariable,
    ])

    this.renderer.init()
  }

  /**
   * Init base texture
   *
   * @returns {void}
   */
  #initBaseTexture() {
    this.baseTexture = this.renderer.createTexture()

    for (let i = 0; i < this.particles.count; i++) {
      const i3 = i * 3
      const i4 = i * 4
      this.baseTexture.image.data[i4 + 0] = this.particles.array[i3 + 0]
      this.baseTexture.image.data[i4 + 1] = this.particles.array[i3 + 1]
      this.baseTexture.image.data[i4 + 2] = this.particles.array[i3 + 2]
      this.baseTexture.image.data[i4 + 3] = Math.random()
    }
  }
}
