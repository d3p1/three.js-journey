/**
 * @description Drunk effect
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {Effect, BlendFunction} from 'postprocessing'
import drunkFragmentShader from './shader/drunk/fragment.glsl'

export default class DrunkEffect extends Effect {
  /**
   * Constructor
   *
   * @param {object} props
   */
  constructor({
    frequency = 10,
    amplitude = 0.1,
    blendFunction = BlendFunction.DARKEN,
  }) {
    super('DrunkEffect', drunkFragmentShader, {
      blendFunction,
      uniforms: new Map([
        ['uFrequency', new THREE.Uniform(frequency)],
        ['uAmplitude', new THREE.Uniform(amplitude)],
        ['uTime', new THREE.Uniform(0)],
      ]),
    })
  }

  /**
   * Update
   *
   * @returns {void}
   */
  update(renderer, inputBuffer, delta) {
    this.uniforms.get('uTime').value += delta
  }
}
