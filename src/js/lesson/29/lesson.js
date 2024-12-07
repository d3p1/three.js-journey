/**
 * @description 29 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/raging-sea}
 */
import * as THREE from 'three'
import {Timer} from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import waterVertexShader from './shader/water/vertex.glsl'
import waterFragmentShader from './shader/water/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {Timer}
   */
  timer

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
    return '29'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Raging sea'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/raging-sea'
  }

  /**
   * Update lesson
   *
   * @type    {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)
    this.control.update()

    this.mesh.material.uniforms.uTime.value = this.timer.getElapsed()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initTimer()
    this.#initWater()
    this.#initTweaks()
    this.#setupCamera()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.timer.dispose()
    this.timer = null
  }

  /**
   * Init tweaks
   *
   * @returns {void}
   */
  #initTweaks() {
    const smallWavesFolder = this.guiControl.addFolder('Small Waves')
    const bigWavesFolder = this.guiControl.addFolder('Big Waves')
    const bigWavesFrequencyFolder = bigWavesFolder.addFolder('Frequency')
    this.#addNumberTweakFromUniform(
      smallWavesFolder,
      'uSmallWaveElevation',
      0,
      4,
      0.001,
    )
    this.#addNumberTweakFromUniform(
      smallWavesFolder,
      'uSmallWaveFrequency',
      0,
      10,
      0.001,
    )
    this.#addNumberTweakFromUniform(
      smallWavesFolder,
      'uSmallWaveSpeed',
      0,
      5,
      0.001,
    )
    this.#addNumberTweakFromUniform(
      smallWavesFolder,
      'uSmallWaveIteration',
      0,
      5,
      1,
    )
    this.#addNumberTweakFromUniform(
      bigWavesFolder,
      'uBigWaveElevation',
      0,
      4,
      0.001,
    )
    this.#addVectorTweakFromUniform(
      bigWavesFrequencyFolder,
      'uBigWaveFrequency',
      0,
      4,
      0.001,
    )
    this.#addNumberTweakFromUniform(
      bigWavesFolder,
      'uBigWaveSpeed',
      0,
      10,
      0.001,
    )
    this.#addColorTweakFromUniform(this.guiControl, 'uDepthColor')
    this.#addColorTweakFromUniform(this.guiControl, 'uSurfaceColor')
  }

  /**
   * Init water
   *
   * @returns {void}
   */
  #initWater() {
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 4, 512, 512),
      new THREE.ShaderMaterial({
        vertexShader: waterVertexShader,
        fragmentShader: waterFragmentShader,
        uniforms: {
          uTime: {
            value: 0.0,
          },
          uBigWaveElevation: {
            value: 0.3,
          },
          uBigWaveFrequency: {
            value: new THREE.Vector2(0.5, 0.3),
          },
          uBigWaveSpeed: {
            value: 1.5,
          },
          uSmallWaveElevation: {
            value: 0.2,
          },
          uSmallWaveFrequency: {
            value: 3.0,
          },
          uSmallWaveSpeed: {
            value: 0.3,
          },
          uSmallWaveIteration: {
            value: 3.0,
          },
          uDepthColor: {
            value: new THREE.Color(0x186691),
          },
          uSurfaceColor: {
            value: new THREE.Color(0x9bd8ff),
          },
        },
      }),
    )
    this.mesh.rotation.x = -Math.PI / 2
    this.scene.add(this.mesh)
  }

  /**
   * Init timer
   *
   * @returns {void}
   */
  #initTimer() {
    this.timer = new Timer()
  }

  /**
   * Add color tweak from uniform
   *
   * @param   {GUI}    folder
   * @param   {string} key
   * @returns {void}
   */
  #addColorTweakFromUniform(folder, key) {
    const uniform = this.mesh.material.uniforms[key].value
    folder
      .addColor({color: uniform.getHexString()}, 'color')
      .onChange((value) => {
        uniform.set(value)
      })
      .name(key)
  }

  /**
   * Add vector tweak from uniform
   *
   * @param   {GUI}    folder
   * @param   {string} key
   * @param   {number} min
   * @param   {number} max
   * @param   {number} step
   * @returns {void}
   */
  #addVectorTweakFromUniform(folder, key, min, max, step) {
    this.#addTweak(
      folder,
      this.mesh.material.uniforms[key].value,
      'x',
      min,
      max,
      step,
      'x',
    )
    this.#addTweak(
      folder,
      this.mesh.material.uniforms[key].value,
      'y',
      min,
      max,
      step,
      'y',
    )
  }

  /**
   * Add number tweak from uniform
   *
   * @param   {GUI}    folder
   * @param   {string} key
   * @param   {number} min
   * @param   {number} max
   * @param   {number} step
   * @returns {void}
   */
  #addNumberTweakFromUniform(folder, key, min, max, step) {
    this.#addTweak(
      folder,
      this.mesh.material.uniforms[key],
      'value',
      min,
      max,
      step,
      key,
    )
  }

  /**
   * Add tweak
   *
   * @param   {GUI}    folder
   * @param   {object} object
   * @param   {string} property
   * @param   {number} min
   * @param   {number} max
   * @param   {number} step
   * @param   {string} name
   * @returns {void}
   */
  #addTweak(folder, object, property, min, max, step, name) {
    folder.add(object, property).min(min).max(max).step(step).name(name)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(3, 3, 1)
  }
}
