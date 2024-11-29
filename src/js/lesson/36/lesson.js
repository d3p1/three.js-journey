/**
 * @description 36 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/raging-sea-shading-shaders}
 */
import * as THREE from 'three'
import {GUI} from 'lil-gui'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import seaVertexShader from './shader/sea/vertex.glsl'
import seaFragmentShader from './shader/sea/fragment.glsl'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.ShaderMaterial}
   */
  seaMaterial

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
    return '[LESSON 36] Raging Sea Shading'
  }

  /**
   * Get the lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/raging-sea-shading-shaders'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.seaMaterial.uniforms.uTime.value = t * 0.001

    this.control.update()
  }

  /**
   * Init the lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initSea()
    this.#initGuiTweaks()
    this.#setupCamera()
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.#initGuiNumericTweak('uBigWavesElevation', 0, 1, 0.001)
    this.#initGuiVectorTweak('uBigWavesFrequency', 0, 10, 0.001)
    this.#initGuiNumericTweak('uBigWavesSpeed', 0, 4, 0.001)
    this.#initGuiNumericTweak('uSmallWavesElevation', 0, 1, 0.001)
    this.#initGuiNumericTweak('uSmallWavesFrequency', 0, 10, 0.001)
    this.#initGuiNumericTweak('uSmallWavesSpeed', 0, 4, 0.001)
    this.#initGuiNumericTweak('uSmallWavesIterations', 0, 5, 1)
    this.#initGuiColorTweak('uDepthColor')
    this.#initGuiColorTweak('uSurfaceColor')
  }

  /**
   * Init sea
   *
   * @returns {void}
   */
  #initSea() {
    this.seaMaterial = new THREE.ShaderMaterial({
      vertexShader: seaVertexShader,
      fragmentShader: seaFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uBigWavesElevation: new THREE.Uniform(0.2),
        uBigWavesFrequency: new THREE.Uniform(new THREE.Vector2(4, 1.5)),
        uBigWavesSpeed: new THREE.Uniform(0.75),
        uSmallWavesElevation: new THREE.Uniform(0.15),
        uSmallWavesFrequency: new THREE.Uniform(3),
        uSmallWavesSpeed: new THREE.Uniform(0.2),
        uSmallWavesIterations: new THREE.Uniform(4),
        uDepthColor: new THREE.Uniform(new THREE.Color('#186691')),
        uSurfaceColor: new THREE.Uniform(new THREE.Color('#9bd8ff')),
      },
    })

    const sea = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2, 512, 512),
      this.seaMaterial,
    )
    sea.rotation.x = -Math.PI / 2
    this.scene.add(sea)
  }

  /**
   * Init GUI uColor tweak
   *
   * @param   {string} property
   * @returns {void}
   */
  #initGuiColorTweak(property) {
    this.guiControl
      .addColor({value: this.seaMaterial.uniforms[property].value}, 'value')
      .name(property)
      .onChange((value) => {
        this.seaMaterial.uniforms[property].value.set(value)
      })
  }

  /**
   * Init GUI vector tweak
   *
   * @param   {string} property
   * @param   {number} min
   * @param   {number} max
   * @param   {number} step
   * @returns {void}
   */
  #initGuiVectorTweak(property, min, max, step) {
    const folder = this.guiControl.addFolder(property)
    this.#initGuiNumericTweak(
      'x',
      min,
      max,
      step,
      this.seaMaterial.uniforms[property].value.x,
      folder,
    )
    this.#initGuiNumericTweak(
      'y',
      min,
      max,
      step,
      this.seaMaterial.uniforms[property].value.y,
      folder,
    )
  }

  /**
   * Init GUI numeric tweak
   *
   * @param   {string}      property
   * @param   {number}      min
   * @param   {number}      max
   * @param   {number}      step
   * @param   {number|null} value
   * @param   {GUI|null}    gui
   * @returns {void}
   */
  #initGuiNumericTweak(property, min, max, step, value = null, gui = null) {
    let control = this.guiControl
    if (gui) {
      control = gui
    }

    let guiValue
    if (value) {
      guiValue = value
    } else {
      guiValue = this.seaMaterial.uniforms[property].value
    }

    const tweak = control
      .add({value: guiValue}, 'value')
      .min(min)
      .max(max)
      .step(step)
      .name(property)
    this.#initGuiTweak(tweak)
  }

  /**
   * Init GUI tweak
   *
   * @param   {object} tweak
   * @returns {void}
   */
  #initGuiTweak(tweak) {
    tweak.onChange((value) => {
      this.seaMaterial.uniforms[tweak.property].value = value
    })
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(1, 1, 1)
  }
}
