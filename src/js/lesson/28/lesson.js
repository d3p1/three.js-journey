/**
 * @description 28 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/shader-patterns}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
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
    return '[LESSON 28] Shader patterns'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/shader-patterns'
  }

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initPlane()
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const geometry = new THREE.PlaneGeometry(2, 2, 64, 64)
    const material = new THREE.ShaderMaterial({
      vertexShader: this.#initPlaneVertexShader(),
      fragmentShader: this.#initPlaneFragmentShader(),
      side: THREE.DoubleSide,
    })
    const plane = new THREE.Mesh(geometry, material)
    this.scene.add(plane)
  }

  /**
   * Init plane vertex shader
   *
   * @returns {string}
   */
  #initPlaneVertexShader() {
    return `
      varying vec2 vUv;
    
      void main() {
        gl_Position = 
          projectionMatrix * 
          viewMatrix       *
          modelMatrix      * 
          vec4(position, 1.0);
          
        vUv = uv;
      }
    `
  }

  /**
   * Init plane fragment shader
   *
   * @returns {string}
   */
  #initPlaneFragmentShader() {
    return `
      #define PI 3.1415926538
    
      varying vec2 vUv;
      
      void main() {
        float clipX     = mod(vUv.x * 10.0, 1.0);
        float strengthX = step(0.8, clipX);        
        float clipY     = mod(vUv.y * 10.0, 1.0);
        float strengthY = step(0.8, clipY);
        
        float barX = step(0.4, clipY);
        float barY = step(0.4, clipX);
      
        float strength = (strengthX * barX) + (strengthY * barY);
      
        gl_FragColor = vec4(vec3(strength), 1.0);
      }
    `
  }
}
