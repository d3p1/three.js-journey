/**
 * @description Builder interface. Render canvas with learned topic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import ObjectProcessor from '../../model/bootstrap/object-processor'

/**
 * @type {{width: number, height: number}}
 */
export type RenderDimensions = {
  readonly width: number
  readonly height: number
}

/**
 * @interface
 */
export interface IBuilder {
  /**
   * @type {{width: number, height: number}}
   */
  dimensions: RenderDimensions

  /**
   * @type {THREE.Camera}
   */
  camera: THREE.Camera

  /**
   * @type {THREE.Scene}
   */
  scene: THREE.Scene

  /**
   * @type {THREE.WebGLRenderer}
   */
  renderer: THREE.WebGLRenderer

  /**
   * Add object processors
   *
   * @param   {ObjectProcessor[]} objectProcessors
   * @returns {void}
   */
  addObjectProcessors(objectProcessors: ObjectProcessor[]): void

  /**
   * Animate
   *
   * @param   {number} elapsedTime
   * @returns {void}
   */
  animate(elapsedTime?: number): void

  /**
   * Cancel animation
   *
   * @returns {void}
   */
  cancelAnimation(): void
}
