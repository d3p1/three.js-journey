/**
 * @description 08 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/geometries}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {boolean}
   */
  hasAnimation = true

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
    this.#initMesh()
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    })
    this.mesh = new THREE.Mesh(this.#initBufferGeometry(), boxMaterial)
    this.scene.add(this.mesh)
  }

  /**
   * Init buffer geometry
   *
   * @returns {THREE.BufferGeometry}
   */
  #initBufferGeometry() {
    const bufferGeometry = new THREE.BufferGeometry()
    bufferGeometry.setAttribute('position', this.#initBufferPositionAttribute())
    return bufferGeometry
  }

  /**
   * Init buffer position attribute
   *
   * @returns {THREE.BufferAttribute}
   */
  #initBufferPositionAttribute() {
    const triangles = 50
    const vertexCount = triangles * 3 * 3
    const vertexCollection = new Float32Array(vertexCount)
    for (let i = 0; i < vertexCount; i++) {
      vertexCollection[i] = (Math.random() - 0.5) * 2
    }
    return new THREE.BufferAttribute(vertexCollection, 3)
  }
}
