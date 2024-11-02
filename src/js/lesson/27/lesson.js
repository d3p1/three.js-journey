/**
 * @description 27 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/shaders}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
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
      vertexShader: this.#getFlagVertexShader(),
      fragmentShader: this.#getFlagFragmentShader(),
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
   * Get flag vertex shader
   *
   * @returns {string}
   */
  #getFlagVertexShader() {
    return `
      uniform vec2 uFrequency;
      uniform float uTime;
            
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
        
        vElevation       = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        vElevation      += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
        modelPosition.z  = vElevation; 
        
        vec4 viewPosition      = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
      
        gl_Position = projectedPosition;
        
        vUv = uv;
      }
    `
  }

  /**
   * Get flag fragment shader
   *
   * @returns {string}
   */
  #getFlagFragmentShader() {
    return `
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        vec4 texture = texture2D(uTexture, vUv);
        vec3 color   = texture.rgb * (vElevation + 0.3) * (1.0 / 0.6);
        gl_FragColor = vec4(color, 1);
      }
    `
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
