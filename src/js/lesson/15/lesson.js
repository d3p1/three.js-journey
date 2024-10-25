/**
 * @description 15 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/shadows}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  plane

  /**
   * @type {THREE.Sphere}
   */
  sphere

  /**
   * @type {THREE.Mesh}
   */
  sphereShadow

  /**
   * @type {THREE.Material}
   */
  material

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

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
    return '[LESSON 15] Shadows'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/shadows'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    const rad = 1.5
    this.sphere.position.x = Math.cos(t / 1000) * rad
    this.sphere.position.z = Math.sin(t / 1000) * rad
    this.sphere.position.y = Math.abs(Math.sin(t / 1000))

    this.sphereShadow.position.x = this.sphere.position.x
    this.sphereShadow.position.z = this.sphere.position.z
    this.sphereShadow.material.opacity = (1 - this.sphere.position.y) * 0.3

    const scale = this.sphere.position.y * 1.5
    this.sphereShadow.scale.set(scale, scale, scale)
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initMaterial()
    this.#initSphere()
    this.#initPlane()
    this.#initSphereShadow()
    this.#initLights()

    this.#switchShadowsOnRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.plane = null
    this.sphere = null
    this.sphereShadow = null
    this.material = null
  }

  /**
   * Switch shadows on renderer
   *
   * @returns {void}
   */
  #switchShadowsOnRenderer() {
    this.renderer.shadowMap.enabled = false
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    this.material = new THREE.MeshStandardMaterial()
    this.#initMaterialTweaks()
  }

  /**
   * Init sphere
   *
   * @returns {void}
   */
  #initSphere() {
    const sphereGeometry = new THREE.SphereGeometry(0.5)
    this.sphere = new THREE.Mesh(sphereGeometry, this.material)
    this.sphere.castShadow = true
    this.sphere.receiveShadow = false
    this.scene.add(this.sphere)
  }

  /**
   * Init sphere shadow
   *
   * @returns {void}
   * @note It is also possible to group the sphere and the shadow together
   *       in order to manipulate them easily
   */
  #initSphereShadow() {
    const textureLoader = new THREE.TextureLoader()
    const shadow = textureLoader.load(
      '/three.js-journey/media/images/textures/shadows/simple.jpg',
    )
    shadow.colorSpace = THREE.SRGBColorSpace

    const sphereShadowGeometry = new THREE.PlaneGeometry(1, 1)
    const sphereShadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      alphaMap: shadow,
    })
    this.sphereShadow = new THREE.Mesh(
      sphereShadowGeometry,
      sphereShadowMaterial,
    )
    this.sphereShadow.rotation.x = -Math.PI / 2
    this.sphereShadow.position.y = this.plane.position.y + 0.001
    this.scene.add(this.sphereShadow)
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const planeGeometry = new THREE.PlaneGeometry(5, 5)
    this.plane = new THREE.Mesh(planeGeometry, this.material)
    this.plane.rotation.x = -Math.PI / 2
    this.plane.position.y = -0.5
    this.plane.castShadow = false
    this.plane.receiveShadow = true
    this.scene.add(this.plane)
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    this.scene.add(ambientLight)
    this.#initLightTweaks(ambientLight, 'Ambient Light')

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.x = 3
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.shadow.camera.near = 1
    directionalLight.shadow.camera.far = 6
    directionalLight.shadow.camera.top = 1
    directionalLight.shadow.camera.bottom = -1
    directionalLight.shadow.camera.right = 1
    directionalLight.shadow.camera.left = -1
    this.scene.add(directionalLight)
    this.#initLightTweaks(directionalLight, 'Directional Light')

    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI * 0.1)
    spotLight.position.x = 1
    spotLight.position.z = 1
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 1024
    spotLight.shadow.mapSize.height = 1024
    spotLight.shadow.camera.near = 1
    spotLight.shadow.camera.far = 5
    spotLight.visible = false
    this.scene.add(spotLight)
    this.scene.add(spotLight.target)
    this.#initLightTweaks(spotLight, 'Spot Light')
    this.guiControl.add(spotLight, 'visible').name('Enable Spotlight')

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.x = 1
    pointLight.position.z = -1
    pointLight.castShadow = true
    pointLight.shadow.mapSize.width = 1024
    pointLight.shadow.mapSize.height = 1024
    pointLight.shadow.camera.near = 0.1
    pointLight.shadow.camera.far = 4
    pointLight.visible = false
    this.scene.add(pointLight)
    this.#initLightTweaks(pointLight, 'Point Light')
    this.guiControl.add(pointLight, 'visible').name('Enable Point Light')
  }

  /**
   * Init material tweaks
   *
   * @returns {void}
   */
  #initMaterialTweaks() {
    this.guiControl.add(this.material, 'metalness').min(0).max(1).step(0.001)
    this.guiControl.add(this.material, 'roughness').min(0).max(1).step(0.001)
  }

  /**
   * Init light tweaks
   *
   * @param   {THREE.Light} light
   * @param   {string}      name
   * @returns {void}
   */
  #initLightTweaks(light, name) {
    const folder = this.guiControl.addFolder(name)
    folder.add(light, 'intensity').min(0).max(5).step(0.001)
  }
}
