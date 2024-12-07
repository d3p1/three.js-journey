/**
 * @description 14 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/lights}
 */
import * as THREE from 'three'
import {RectAreaLightHelper} from 'three/addons/helpers/RectAreaLightHelper.js'
import GUI from 'lil-gui'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.MeshStandardMaterial}
   */
  material

  /**
   * @type {THREE.Mesh}
   */
  plane

  /**
   * @type {THREE.Mesh}
   */
  box

  /**
   * @type {THREE.Mesh}
   */
  sphere

  /**
   * @type {THREE.Mesh}
   */
  torus

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '14'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Lights'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/lights'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.control.update()

    this.box.rotation.x = 0.0001 * t
    this.box.rotation.y = 0.0001 * t
    this.sphere.rotation.x = 0.0001 * t
    this.sphere.rotation.y = 0.0001 * t
    this.torus.rotation.x = 0.0001 * t
    this.torus.rotation.y = 0.0001 * t
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initMaterial()
    this.#initPlane()
    this.#initBox()
    this.#initSphere()
    this.#initTorus()
    this.#updateCameraPosition()

    this.#addAmbientLight()
    this.#addDirectionalLight()
    this.#addHemisphereLight()
    this.#addPointLight()
    this.#addRectAreaLight()
    this.#addSpotLight()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.plane = null
    this.box = null
    this.sphere = null
    this.torus = null
  }

  /**
   * Add spot light
   *
   * @returns {void}
   */
  #addSpotLight() {
    const spotLight = new THREE.SpotLight(
      0xff1100,
      1,
      0,
      Math.PI * 0.1,
      0.25,
      1,
    )
    spotLight.position.z = -3
    spotLight.position.x = -2
    spotLight.target.position.x = -3
    this.scene.add(spotLight)
    this.scene.add(spotLight.target)

    const gui = this.#addGuiTweaksToLight(spotLight, 'Spot Light')
    this.#addGuiRangeTweakToLight(gui, spotLight, 'distance')
    this.#addGuiRangeTweakToLight(gui, spotLight, 'angle')
    this.#addGuiRangeTweakToLight(gui, spotLight, 'penumbra')
    this.#addGuiRangeTweakToLight(gui, spotLight, 'decay')

    const helper = new THREE.SpotLightHelper(spotLight)
    this.scene.add(helper)
  }

  /**
   * Add rect area light
   *
   * @returns {void}
   */
  #addRectAreaLight() {
    const rectAreaLight = new THREE.RectAreaLight(0x00ff00, 1, 2.5, 2.5)
    rectAreaLight.position.x = -2
    rectAreaLight.position.z = 2
    rectAreaLight.lookAt(this.box.position)
    this.scene.add(rectAreaLight)

    const gui = this.#addGuiTweaksToLight(rectAreaLight, 'Rect Area Light')
    this.#addGuiRangeTweakToLight(gui, rectAreaLight, 'width')
    this.#addGuiRangeTweakToLight(gui, rectAreaLight, 'height')

    const helper = new RectAreaLightHelper(rectAreaLight)
    this.scene.add(helper)
  }

  /**
   * Add point light
   *
   * @returns {void}
   */
  #addPointLight() {
    const pointLight = new THREE.PointLight(0xee11aa, 1, 0, 2)
    pointLight.position.x = 2
    pointLight.position.z = 2
    this.scene.add(pointLight)

    const gui = this.#addGuiTweaksToLight(pointLight, 'Point Light')
    this.#addGuiRangeTweakToLight(gui, pointLight, 'distance')
    this.#addGuiRangeTweakToLight(gui, pointLight, 'decay')

    const helper = new THREE.PointLightHelper(pointLight, 0.2)
    this.scene.add(helper)
  }

  /**
   * Add hemisphere light
   *
   * @returns {void}
   */
  #addHemisphereLight() {
    const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.5)
    this.scene.add(hemisphereLight)

    const gui = this.#addGuiTweaksToLight(hemisphereLight, 'Hemisphere Light')
    this.#addGuiColorTweakToLight(gui, hemisphereLight, 'groundColor')

    const helper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
    this.scene.add(helper)
  }

  /**
   * Add directional light
   *
   * @returns {void}
   */
  #addDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.9)
    directionalLight.position.set(5, 1, 0)
    this.scene.add(directionalLight)

    this.#addGuiTweaksToLight(directionalLight, 'Directional Light')

    const helper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
    this.scene.add(helper)
  }

  /**
   * Add ambient light
   *
   * @returns {void}
   */
  #addAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    this.#addGuiTweaksToLight(ambientLight, 'Ambient Light')
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    this.material = new THREE.MeshStandardMaterial()
    this.material.roughness = 0.5
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const planeGeometry = new THREE.PlaneGeometry(10, 10)
    this.plane = new THREE.Mesh(planeGeometry, this.material)
    this.plane.rotation.x = -Math.PI / 2
    this.plane.position.y = -2
    this.scene.add(this.plane)
  }

  /**
   * Init box
   *
   * @returns {void}
   */
  #initBox() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    this.box = new THREE.Mesh(boxGeometry, this.material)
    this.scene.add(this.box)
  }

  /**
   * Init sphere
   *
   * @returns {void}
   */
  #initSphere() {
    const sphereGeometry = new THREE.SphereGeometry(1)
    this.sphere = new THREE.Mesh(sphereGeometry, this.material)
    this.sphere.position.x = 2
    this.scene.add(this.sphere)
  }

  /**
   * Init torus
   *
   * @returns {void}
   */
  #initTorus() {
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.3)
    this.torus = new THREE.Mesh(torusGeometry, this.material)
    this.torus.position.x = -2
    this.scene.add(this.torus)
  }

  /**
   * Update camera position
   *
   * @returs {void}
   */
  #updateCameraPosition() {
    this.camera.position.z = 5
  }

  /**
   * Add GUI tweaks to light object
   *
   * @param   {THREE.Light} light
   * @param   {string}      name
   * @returns {GUI}
   */
  #addGuiTweaksToLight(light, name) {
    const folder = this.guiControl.addFolder(name)
    this.#addGuiRangeTweakToLight(folder, light, 'intensity')
    this.#addGuiColorTweakToLight(folder, light, 'color')
    return folder
  }

  /**
   * Add GUI color tweak to light object
   *
   * @param   {GUI}         gui
   * @param   {THREE.Light} light
   * @param   {string}      colorPropertyName
   * @returns {void}
   */
  #addGuiColorTweakToLight(gui, light, colorPropertyName) {
    gui
      .addColor({color: light[colorPropertyName].getHex()}, 'color')
      .onChange((value) => {
        light[colorPropertyName].setHex(value)
      })
  }

  /**
   * Add GUI range tweak to light object
   *
   * @param   {GUI}         gui
   * @param   {THREE.Light} light
   * @param   {string}      rangePropertyName
   * @returns {void}
   */
  #addGuiRangeTweakToLight(gui, light, rangePropertyName) {
    gui.add(light, rangePropertyName).min(0).max(5).step(0.01)
  }
}
