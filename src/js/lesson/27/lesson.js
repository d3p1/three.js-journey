/**
 * @description 27 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/shaders}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import flagVertexShader from './shader/flag/vertex.glsl'
import flagFragmentShader from './shader/flag/fragment.glsl'
import FlagImage from './media/images/argentinian-flag.png'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.ShaderMaterial|THREE.RawShaderMaterial}
   */
  material

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 27] Shaders'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/shaders'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.material.uniforms.uTime.value = t * 0.001

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initFlag()
    this.#initGuiTweaks()
  }

  /**
   * Init flag
   *
   * @returns {void}
   */
  #initFlag() {
    const textureLoader = new THREE.TextureLoader()
    const flagTexture = textureLoader.load(FlagImage)

    const geometry = new THREE.PlaneGeometry(2, 2, 64, 64)

    this.material = new THREE.ShaderMaterial({
      vertexShader: flagVertexShader,
      fragmentShader: flagFragmentShader,
      uniforms: {
        uFrequency: {value: new THREE.Vector2(10, 5)},
        uTime: {value: 0},
        uTexture: {value: flagTexture},
      },
    })
    const flag = new THREE.Mesh(geometry, this.material)
    flag.scale.y = 2 / 3
    this.scene.add(flag)
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    const frequencyFolder = this.guiControl.addFolder('Frequency')
    frequencyFolder
      .add(this.material.uniforms.uFrequency.value, 'x')
      .min(0)
      .max(20)
    frequencyFolder
      .add(this.material.uniforms.uFrequency.value, 'y')
      .min(0)
      .max(20)
  }
}
