/**
 * @description Environment utility for lesson
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import cubeImageNX from '../../media/images/textures/environmentMaps/0/nx.png'
import cubeImageNY from '../../media/images/textures/environmentMaps/0/ny.png'
import cubeImageNZ from '../../media/images/textures/environmentMaps/0/nz.png'
import cubeImagePX from '../../media/images/textures/environmentMaps/0/px.png'
import cubeImagePY from '../../media/images/textures/environmentMaps/0/py.png'
import cubeImagePZ from '../../media/images/textures/environmentMaps/0/pz.png'

export default class Environment {
  /**
   * Setup environment
   *
   * @param   {THREE.Scene}             scene
   * @param   {THREE.PerspectiveCamera} camera
   * @param   {THREE.WebGLRenderer}     renderer
   * @returns {void}
   */
  static setup(scene, camera, renderer) {
    this.initLights(scene)
    this.initEnvMap(scene)
    this.setupCamera(camera)
    this.setupRenderer(renderer)
  }

  /**
   * Setup camera
   *
   * @param   {THREE.PerspectiveCamera} camera
   * @returns {void}
   */
  static setupCamera(camera) {
    camera.fov = 75
    camera.near = 0.1
    camera.far = 100
    camera.position.set(-3, 3, 3)
  }

  /**
   * Setup renderer
   *
   * @param   {THREE.WebGLRenderer} renderer
   * @returns {void}
   */
  static setupRenderer(renderer) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }

  /**
   * Init lights
   *
   * @param   {THREE.Scene} scene
   * @returns {void}
   */
  static initLights(scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.camera.left = -7
    directionalLight.shadow.camera.top = 7
    directionalLight.shadow.camera.right = 7
    directionalLight.shadow.camera.bottom = -7
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)
  }

  /**
   * Init environment map
   *
   * @param   {THREE.Scene} scene
   * @returns {void}
   */
  static initEnvMap(scene) {
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    scene.environment = cubeTextureLoader.load([
      cubeImagePX,
      cubeImageNX,
      cubeImagePY,
      cubeImageNY,
      cubeImagePZ,
      cubeImageNZ,
    ])
    scene.environmentIntensity = 0.5
  }
}
