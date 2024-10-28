/**
 * @description 3D world
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'

export default class World {
  /**
   * @type {object}
   */
  meshes = {}

  /**
   * @type {THREE.Scene}
   */
  instance

  /**
   * @type {THREE.BoxGeometry}
   */
  boxGeometry

  /**
   * @type {THREE.SphereGeometry}
   */
  sphereGeometry

  /**
   * @type {THREE.PlaneGeometry}
   */
  planeGeometry

  /**
   * @type {THREE.MeshStandardMaterial}
   */
  planeMaterial

  /**
   * @type {THREE.MeshStandardMaterial}
   */
  meshMaterial

  /**
   * Constructor
   *
   * @param {THREE.Scene} scene
   */
  constructor(scene) {
    this.instance = scene

    this.#initGeometries()
    this.#initMaterials()
  }

  /**
   * Add box mesh
   *
   * @param   {string} id
   * @param   {number} width
   * @param   {number} height
   * @param   {number} depth
   * @param   {object} position
   * @returns {void}
   */
  addBox(id, width, height, depth, position) {
    const mesh = new THREE.Mesh(this.boxGeometry, this.meshMaterial)
    mesh.scale.set(width, height, depth)

    this.#setupMesh(mesh, position)
    this.#addMesh(id, mesh)
  }

  /**
   * Add sphere mesh
   *
   * @param   {string} id
   * @param   {number} radius
   * @param   {object} position
   * @returns {void}
   */
  addSphere(id, radius, position) {
    const mesh = new THREE.Mesh(this.sphereGeometry, this.meshMaterial)

    this.#setupMesh(mesh, position, radius)
    this.#addMesh(id, mesh)
  }

  /**
   * Add plane mesh
   *
   * @param   {string} id
   * @param   {object} position
   * @returns {void}
   */
  addPlane(id, position) {
    const mesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
    mesh.rotation.x = -Math.PI / 2

    this.#setupMesh(mesh, position, 1)
    this.#addMesh(id, mesh)
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    for (const id in this.meshes) {
      this.instance.remove(this.meshes[id])
    }
  }

  /**
   * Setup mesh
   *
   * @param   {THREE.Mesh}  mesh
   * @param   {object}      position
   * @param   {number|null} scale
   * @returns {void}
   */
  #setupMesh(mesh, position, scale = null) {
    mesh.castShadow = true
    mesh.receiveShadow = true
    mesh.position.copy(position)
    if (scale) {
      mesh.scale.set(scale, scale, scale)
    }
  }

  /**
   * Add mesh
   *
   * @param   {string}     id
   * @param   {THREE.Mesh} mesh
   * @returns {void}
   */
  #addMesh(id, mesh) {
    this.meshes[id] = mesh
    this.instance.add(mesh)
  }

  /**
   * Init geometries
   *
   * @returns {void}
   */
  #initGeometries() {
    this.sphereGeometry = new THREE.SphereGeometry(1)
    this.planeGeometry = new THREE.PlaneGeometry(8, 8, 8)
    this.boxGeometry = new THREE.BoxGeometry(1, 1, 1)
  }

  /**
   * Init materials
   *
   * @returns {void}
   */
  #initMaterials() {
    this.meshMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
    })

    this.planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x777777,
      metalness: 0.3,
      roughness: 0.4,
    })
  }
}
