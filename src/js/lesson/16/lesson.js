/**
 * @description 16 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/haunted-house}
 */
import GUI from 'lil-gui'
import * as THREE from 'three'
import {Sky} from 'three/addons/objects/Sky.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import floorAlphaImage from './media/images/textures/floor/alpha.webp'
import floorArmImage from './media/images/textures/floor/arm.webp'
import floorDiffuseImage from './media/images/textures/floor/diffuse.webp'
import floorDisplacementImage from './media/images/textures/floor/displacement.webp'
import floorNormalImage from './media/images/textures/floor/normal.webp'
import wallArmImage from './media/images/textures/wall/arm.webp'
import wallDiffuseImage from './media/images/textures/wall/diffuse.webp'
import wallNormalImage from './media/images/textures/wall/normal.webp'
import roofArmImage from './media/images/textures/roof/arm.webp'
import roofDiffuseImage from './media/images/textures/roof/diffuse.webp'
import roofNormalImage from './media/images/textures/roof/normal.webp'
import bushArmImage from './media/images/textures/bush/arm.webp'
import bushDiffuseImage from './media/images/textures/bush/diffuse.webp'
import bushNormalImage from './media/images/textures/bush/normal.webp'
import graveArmImage from './media/images/textures/grave/arm.webp'
import graveDiffuseImage from './media/images/textures/grave/diffuse.webp'
import graveNormalImage from './media/images/textures/grave/normal.webp'
import doorAlphaImage from './media/images/textures/door/alpha.webp'
import doorNormalImage from './media/images/textures/door/normal.webp'
import doorAmbientOcclusionImage from './media/images/textures/door/ambientOcclusion.webp'
import doorDiffuseImage from './media/images/textures/door/color.webp'
import doorDisplacementImage from './media/images/textures/door/height.webp'
import doorMetalnessImage from './media/images/textures/door/metalness.webp'
import doorRoughnessImage from './media/images/textures/door/roughness.webp'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.PointLight}
   */
  ghostViolet

  /**
   * @type {THREE.PointLight}
   */
  ghostPink

  /**
   * @type {THREE.PointLight}
   */
  ghostRed

  /**
   * @type {THREE.TextureLoader}
   */
  textureLoader

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
    return '[LESSON 16] Haunted House'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/haunted-house'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   * @todo    Use house width to determine ghost radius
   */
  update(t) {
    const seconds = t * 0.001

    this.control.update()

    this.#animateGhost(this.ghostViolet, seconds * 0.5, 4, 2.34, 3.45)
    this.#animateGhost(this.ghostPink, -seconds * 0.38, 5, 2.34, 3.45)
    this.#animateGhost(this.ghostRed, seconds * 0.23, 6, 2.34, 3.45)
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initTextureLoader()
    this.#setupCamera()
    this.#initLights()
    this.#initFloor()
    this.#initHouse()
    this.#initSky()
    this.#initFog()
    this.#setupRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.textureLoader = null
    this.ghostViolet = null
    this.ghostPink = null
    this.ghostRed = null
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }

  /**
   * Init sky
   *
   * @returns {void}
   */
  #initSky() {
    const sky = new Sky()
    sky.material.uniforms['turbidity'].value = 10
    sky.material.uniforms['rayleigh'].value = 3
    sky.material.uniforms['mieCoefficient'].value = 0.1
    sky.material.uniforms['mieDirectionalG'].value = 0.95
    sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95)
    sky.scale.set(100, 100, 100)
    this.scene.add(sky)
  }

  /**
   * Init fog
   *
   * @returns {void}
   */
  #initFog() {
    const fog = new THREE.FogExp2('#04343f', 0.1)
    this.scene.fog = fog
  }

  /**
   * Init house
   *
   * @returns {void}
   */
  #initHouse() {
    const house = new THREE.Group()

    const wallArmTexture = this.textureLoader.load(wallArmImage)
    const wallNormalTexture = this.textureLoader.load(wallNormalImage)
    const wallDiffuseTexture = this.textureLoader.load(wallDiffuseImage)
    wallDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    const walls = new THREE.Mesh(
      new THREE.BoxGeometry(4, 3, 4),
      new THREE.MeshStandardMaterial({
        map: wallDiffuseTexture,
        normalMap: wallNormalTexture,
        roughnessMap: wallArmTexture,
        metalnessMap: wallArmTexture,
        aoMap: wallArmTexture,
      }),
    )
    walls.position.y = walls.geometry.parameters.height * 0.5
    walls.castShadow = true
    walls.receiveShadow = true
    house.add(walls)

    const roofArmTexture = this.textureLoader.load(roofArmImage)
    const roofNormalTexture = this.textureLoader.load(roofNormalImage)
    const roofDiffuseTexture = this.textureLoader.load(roofDiffuseImage)
    roofDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    roofArmTexture.repeat.set(3, 1)
    roofNormalTexture.repeat.set(3, 1)
    roofDiffuseTexture.repeat.set(3, 1)
    roofArmTexture.wrapS = THREE.RepeatWrapping
    roofNormalTexture.wrapS = THREE.RepeatWrapping
    roofDiffuseTexture.wrapS = THREE.RepeatWrapping
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(walls.geometry.parameters.width, 2, 4),
      new THREE.MeshStandardMaterial({
        map: roofDiffuseTexture,
        normalMap: roofNormalTexture,
        roughnessMap: roofArmTexture,
        metalnessMap: roofArmTexture,
        aoMap: roofArmTexture,
      }),
    )
    roof.position.y =
      walls.geometry.parameters.height + roof.geometry.parameters.height * 0.5
    roof.rotation.y = Math.PI * 0.25
    roof.castShadow = true
    house.add(roof)

    const doorAlphaTexture = this.textureLoader.load(doorAlphaImage)
    const doorAmbientOcclusionTexture = this.textureLoader.load(
      doorAmbientOcclusionImage,
    )
    const doorDisplacementTexture = this.textureLoader.load(
      doorDisplacementImage,
    )
    const doorMetalnessTexture = this.textureLoader.load(doorMetalnessImage)
    const doorRoughnessTexture = this.textureLoader.load(doorRoughnessImage)
    const doorNormalTexture = this.textureLoader.load(doorNormalImage)
    const doorDiffuseTexture = this.textureLoader.load(doorDiffuseImage)
    doorDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    const door = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 2.3, 100, 100),
      new THREE.MeshStandardMaterial({
        transparent: true,
        map: doorDiffuseTexture,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture,
        normalMap: doorNormalTexture,
        displacementMap: doorDisplacementTexture,
        displacementScale: 0.15,
        displacementBias: -0.04,
      }),
    )
    door.position.y = door.geometry.parameters.height * 0.5
    door.position.z = walls.geometry.parameters.depth * 0.5 + 0.01
    house.add(door)

    const doorLight = new THREE.PointLight('#ff7d46', 5)
    doorLight.position.z = walls.geometry.parameters.depth * 0.5 + 0.1
    doorLight.position.y = door.geometry.parameters.height + 0.1
    house.add(doorLight)

    this.#initBushes(door.position.z, door.geometry.parameters.width)
    this.#initGraves(walls.geometry.parameters.width)
    this.#initGhosts()

    this.scene.add(house)
  }

  /**
   * Animate ghost
   *
   * @param   {THREE.PointLight} ghost
   * @param   {number}           t
   * @param   {number}           radius
   * @param   {number}           f1
   * @param   {number}           f2
   * @returns {void}
   * @todo    Improve frequency variables and angle variable
   *          used inside harmonic functions
   */
  #animateGhost(ghost, t, radius, f1, f2) {
    const angle = t
    ghost.position.x = Math.cos(angle) * radius
    ghost.position.z = Math.sin(angle) * radius
    ghost.position.y =
      Math.sin(angle) * Math.sin(angle * f1) * Math.sin(angle * f2)
  }

  /**
   * Init ghosts
   *
   * @returns {void}
   */
  #initGhosts() {
    this.ghostViolet = new THREE.PointLight('#8800ff', 6)
    this.ghostPink = new THREE.PointLight('#ff0088', 6)
    this.ghostRed = new THREE.PointLight('#ff0000', 6)
    this.#initGhostShadows(this.ghostViolet)
    this.#initGhostShadows(this.ghostPink)
    this.#initGhostShadows(this.ghostRed)
    this.scene.add(this.ghostViolet, this.ghostPink, this.ghostRed)
  }

  /**
   * Init ghost shadows
   *
   * @param   {THREE.PointLight} ghost
   * @returns {void}
   */
  #initGhostShadows(ghost) {
    ghost.castShadow = true
    ghost.shadow.mapSize.width = 256
    ghost.shadow.mapSize.height = 256
    ghost.shadow.camera.far = 10
  }

  /**
   * Init graves
   *
   * @param   {number} houseWidth
   * @returns {void}
   * @todo    Add floor width/height as parameter to avoid creating graves
   *          outside the boundaries
   */
  #initGraves(houseWidth) {
    const graveArmTexture = this.textureLoader.load(graveArmImage)
    const graveNormalTexture = this.textureLoader.load(graveNormalImage)
    const graveDiffuseTexture = this.textureLoader.load(graveDiffuseImage)
    graveDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    graveDiffuseTexture.repeat.set(0.3, 0.4)
    graveNormalTexture.repeat.set(0.3, 0.4)
    graveArmTexture.repeat.set(0.3, 0.4)
    const graveGeometry = new THREE.BoxGeometry(0.6, 1, 0.3)
    const graveMaterial = new THREE.MeshStandardMaterial({
      map: graveDiffuseTexture,
      normalMap: graveNormalTexture,
      roughnessMap: graveArmTexture,
      metalnessMap: graveArmTexture,
      aoMap: graveArmTexture,
    })

    const graves = new THREE.Group()
    for (let i = 0; i < 30; i++) {
      const grave = new THREE.Mesh(graveGeometry, graveMaterial)
      const angle = Math.random() * 2 * Math.PI
      const rad = houseWidth * 0.5 + 1.5 + Math.random() * 4
      grave.position.y =
        grave.geometry.parameters.height * 0.5 - Math.random() * 0.4
      grave.position.x = Math.cos(angle) * rad
      grave.position.z = Math.sin(angle) * rad
      grave.rotation.x = (Math.random() - 0.5) * 0.4
      grave.rotation.y = (Math.random() - 0.5) * 0.4
      grave.rotation.z = (Math.random() - 0.5) * 0.4
      grave.castShadow = true
      grave.receiveShadow = true
      graves.add(grave)
    }
    this.scene.add(graves)
  }

  /**
   * Init bushes
   *
   * @param   {number} doorZ
   * @param   {number} doorWidth
   * @returns {void}
   */
  #initBushes(doorZ, doorWidth) {
    const bushArmTexture = this.textureLoader.load(bushArmImage)
    const bushNormalTexture = this.textureLoader.load(bushNormalImage)
    const bushDiffuseTexture = this.textureLoader.load(bushDiffuseImage)
    bushDiffuseTexture.colorSpace = THREE.SRGBColorSpace
    bushDiffuseTexture.repeat.set(2, 1)
    bushNormalTexture.repeat.set(2, 1)
    bushArmTexture.repeat.set(2, 1)
    bushDiffuseTexture.wrapS = THREE.RepeatWrapping
    bushNormalTexture.wrapS = THREE.RepeatWrapping
    bushArmTexture.wrapS = THREE.RepeatWrapping
    const bushGeometry = new THREE.SphereGeometry(0.5)
    const bushMaterial = new THREE.MeshStandardMaterial({
      map: bushDiffuseTexture,
      normalMap: bushNormalTexture,
      roughnessMap: bushArmTexture,
      metalnessMap: bushArmTexture,
      aoMap: bushArmTexture,
      color: '#ccffcc',
    })

    const bushXPosition = doorWidth * 0.5 - 0.1
    const bushYPosition = bushGeometry.parameters.radius - 0.3
    const bushZPosition = doorZ + bushGeometry.parameters.radius - 0.3

    const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush1.position.x = bushXPosition
    bush1.position.y = bushYPosition
    bush1.position.z = bushZPosition
    bush1.rotation.x = -0.75
    this.scene.add(bush1)
    this.#initGuiTweaksToObject(bush1, 'Bush 1')

    const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
    bush2.position.x = -bushXPosition
    bush2.position.y = bushYPosition
    bush2.position.z = bushZPosition
    bush2.scale.set(0.8, 0.8, 0.8)
    bush2.rotation.x = -0.75
    this.scene.add(bush2)
    this.#initGuiTweaksToObject(bush2, 'Bush 2')

    const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
    const scale = 0.6
    bush3.position.x = bushXPosition + 0.6
    bush3.position.z = bushZPosition
    bush3.scale.set(scale, scale, scale)
    bush3.position.y = bushYPosition * scale
    bush3.rotation.x = -0.75
    this.scene.add(bush3)
    this.#initGuiTweaksToObject(bush3, 'Bush 3')
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.y = 5
    this.camera.position.x = 5
    this.camera.position.z = 7
    this.#initGuiTweaksToObject(this.camera, 'Camera')
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const ambientLight = new THREE.AmbientLight('#86cdff', 0.275)
    this.#initGuiTweaksToLight(ambientLight, 'Ambient Light')
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight('#86cdff', 1)
    directionalLight.position.x = 1
    directionalLight.position.y = 3
    directionalLight.position.z = -5
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 256
    directionalLight.shadow.mapSize.height = 256
    directionalLight.shadow.camera.top = 8
    directionalLight.shadow.camera.bottom = -8
    directionalLight.shadow.camera.right = 8
    directionalLight.shadow.camera.left = -8
    directionalLight.shadow.camera.near = 1
    directionalLight.shadow.camera.far = 20
    this.#initGuiTweaksToLight(directionalLight, 'Directional Light')
    this.scene.add(directionalLight)
  }

  /**
   * Init floor
   *
   * @returns {void}
   */
  #initFloor() {
    const alphaTexture = this.textureLoader.load(floorAlphaImage)
    const diffuseTexture = this.textureLoader.load(floorDiffuseImage)
    const armTexture = this.textureLoader.load(floorArmImage)
    const normalTexture = this.textureLoader.load(floorNormalImage)
    const displacementTexture = this.textureLoader.load(floorDisplacementImage)

    diffuseTexture.colorSpace = THREE.SRGBColorSpace
    diffuseTexture.repeat.set(8, 8)
    armTexture.repeat.set(8, 8)
    normalTexture.repeat.set(8, 8)
    displacementTexture.repeat.set(8, 8)

    diffuseTexture.wrapS = THREE.RepeatWrapping
    armTexture.wrapS = THREE.RepeatWrapping
    normalTexture.wrapS = THREE.RepeatWrapping
    displacementTexture.wrapS = THREE.RepeatWrapping

    diffuseTexture.wrapT = THREE.RepeatWrapping
    armTexture.wrapT = THREE.RepeatWrapping
    normalTexture.wrapT = THREE.RepeatWrapping
    displacementTexture.wrapT = THREE.RepeatWrapping

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20, 100, 100),
      new THREE.MeshStandardMaterial({
        transparent: true,
        alphaMap: alphaTexture,
        map: diffuseTexture,
        roughnessMap: armTexture,
        metalnessMap: armTexture,
        aoMap: armTexture,
        normalMap: normalTexture,
        displacementMap: displacementTexture,
        displacementScale: 0.3,
        displacementBias: -0.2,
      }),
    )
    floor.rotation.x = -Math.PI * 0.5
    floor.receiveShadow = true

    this.#initGuiTweaksToObject(floor, 'Floor')
    this.scene.add(floor)
  }

  /**
   * Init texture loader
   *
   * @returns {void}
   */
  #initTextureLoader() {
    this.textureLoader = new THREE.TextureLoader()
  }

  /**
   * Init GUI tweaks to light
   *
   * @param   {THREE.Light} light
   * @param   {string}      name
   * @returns {GUI}
   */
  #initGuiTweaksToLight(light, name) {
    const folder = this.#initGuiTweaksToObject(light, name)

    folder.add(light, 'intensity').min(0).max(10).step(0.01)
    folder
      .addColor({color: light.color.getHex()}, 'color')
      .onChange((value) => {
        light.color.setHex(value)
      })

    return folder
  }

  /**
   * Init GUI tweaks to object
   *
   * @param   {THREE.Object3D} object
   * @param   {string}         name
   * @returns {GUI}
   */
  #initGuiTweaksToObject(object, name) {
    const folder = this.guiControl.addFolder(name)

    folder.add(object.position, 'x').min(-8).max(8).step(0.01)
    folder.add(object.position, 'y').min(-8).max(8).step(0.01)
    folder.add(object.position, 'z').min(-8).max(8).step(0.01)

    return folder
  }
}
