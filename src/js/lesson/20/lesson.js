/**
 * @description 20 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/physics}
 */
import * as THREE from 'three'
import {Timer} from 'three/addons/misc/Timer.js'
import * as CANNON from 'cannon-es'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import CubeImageNX from './media/images/textures/environmentMaps/0/nx.png'
import CubeImageNY from './media/images/textures/environmentMaps/0/ny.png'
import CubeImageNZ from './media/images/textures/environmentMaps/0/nz.png'
import CubeImagePX from './media/images/textures/environmentMaps/0/px.png'
import CubeImagePY from './media/images/textures/environmentMaps/0/py.png'
import CubeImagePZ from './media/images/textures/environmentMaps/0/pz.png'
import HitAudio from './media/sounds/hit.mp3'

export default class Lesson extends GeneralLesson {
  /**
   * @type {{mesh: THREE.Mesh, body: CANNON.Body}[]}
   */
  worldObjects = []

  /**
   * @type {CANNON.World}
   */
  world

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
  worldObjectMaterial

  /**
   * @type {THREE.MeshStandardMaterial}
   */
  planeMaterial

  /**
   * @type {Timer}
   */
  timer

  /**
   * @type {THREE.CubeTexture}
   */
  cubeTexture

  /**
   * @type {HTMLAudioElement}
   */
  hitAudio

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {Function}
   */
  #boundBodyCollision

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 20] Physics'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/physics'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)

    this.world.step(1 / 60, this.timer.getDelta(), 3)
    for (const worldObject of this.worldObjects) {
      worldObject.mesh.position.copy(worldObject.body.position)
      worldObject.mesh.quaternion.copy(worldObject.body.quaternion)
    }

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#boundBodyCollision = this.#handleBodyCollision.bind(this)
    this.#initTimer()
    this.#initAudio()
    this.#initCubeTexture()
    this.#initGeometries()
    this.#initMaterials()
    this.#initLights()
    this.#initWorld()
    this.#initPlane()
    this.#initSphere(0.5, {x: 0, y: 3, z: 0})
    this.#initBox(1, 1, 1, {x: 3, y: 3, z: 1})
    this.#initTweaks()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.#disposeWorld()
    this.world = null
    this.hitAudio = null
  }

  /**
   * Handle body collision
   *
   * @param   {object} collision
   * @returns {void}
   */
  #handleBodyCollision(collision) {
    const impactStrength = collision.contact.getImpactVelocityAlongNormal()
    if (impactStrength > 1.5) {
      this.hitAudio.currentTime = 0
      this.hitAudio.volume = Math.random()
      this.hitAudio.play()
    }
  }

  /**
   * Dispose world
   *
   * @returns {void}
   */
  #disposeWorld() {
    for (const worldObject of this.worldObjects) {
      worldObject.body.removeEventListener('collide', this.#boundBodyCollision)
      this.world.removeBody(worldObject.body)
    }
    this.worldObjects.splice(0, this.worldObjects.length)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 75
    this.camera.near = 0.1
    this.camera.far = 100
    this.camera.position.set(-3, 3, 3)
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
   * Init tweaks
   *
   * @returns {void}
   */
  #initTweaks() {
    const generateSphere = this.#initSphere.bind(this)
    const generateBox = this.#initBox.bind(this)
    const reset = () => {
      for (const worldObject of this.worldObjects) {
        this.scene.remove(worldObject.mesh)
      }
      this.#disposeWorld()
    }

    this.guiControl
      .add(
        {
          createSphere: function () {
            generateSphere(Math.random(), {
              x: (Math.random() - 0.5) * 3,
              y: 3,
              z: (Math.random() - 0.5) * 3,
            })
          },
        },
        'createSphere',
      )
      .name('Create Sphere')

    this.guiControl
      .add(
        {
          createBox: function () {
            generateBox(Math.random(), Math.random(), Math.random(), {
              x: (Math.random() - 0.5) * 3,
              y: 3,
              z: (Math.random() - 0.5) * 3,
            })
          },
        },
        'createBox',
      )
      .name('Create Box')

    this.guiControl
      .add(
        {
          reset,
        },
        'reset',
      )
      .name('Reset')
  }

  /**
   * Init audio
   *
   * @returns {void}
   */
  #initAudio() {
    this.hitAudio = new Audio(HitAudio)
  }

  /**
   * Init timer
   *
   * @returns {void}
   */
  #initTimer() {
    this.timer = new Timer()
  }

  /**
   * Init world
   *
   * @returns {void}
   */
  #initWorld() {
    const defaultMaterial = new CANNON.Material('default')
    const contactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: 0.1,
        restitution: 0.7,
      },
    )
    this.world = new CANNON.World()
    this.world.gravity.set(0, -9.8, 0)
    this.world.defaultContactMaterial = contactMaterial

    this.world.broadphase = new CANNON.SAPBroadphase(this.world)
    this.world.allowSleep = true
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.camera.left = -7
    directionalLight.shadow.camera.top = 7
    directionalLight.shadow.camera.right = 7
    directionalLight.shadow.camera.bottom = -7
    directionalLight.position.set(5, 5, 5)
    this.scene.add(directionalLight)
  }

  /**
   * Init cube texture
   *
   * @returns {void}
   */
  #initCubeTexture() {
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    this.cubeTexture = cubeTextureLoader.load([
      CubeImagePX,
      CubeImageNX,
      CubeImagePY,
      CubeImageNY,
      CubeImagePZ,
      CubeImageNZ,
    ])
  }

  /**
   * Init geometries
   *
   * @returns {void}
   */
  #initGeometries() {
    this.sphereGeometry = new THREE.SphereGeometry(1)
    this.planeGeometry = new THREE.PlaneGeometry(5, 5, 5)
    this.boxGeometry = new THREE.BoxGeometry(1, 1, 1)
  }

  /**
   * Init materials
   *
   * @returns {void}
   */
  #initMaterials() {
    this.worldObjectMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      envMap: this.cubeTexture,
      envMapIntensity: 0.5,
    })

    this.planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x777777,
      metalness: 0.3,
      roughness: 0.4,
      envMap: this.cubeTexture,
      envMapIntensity: 0.5,
    })
  }

  /**
   * Init box
   *
   * @param   {number} width
   * @param   {number} height
   * @param   {number} depth
   * @param   {number} position
   * @returns {void}
   */
  #initBox(width, height, depth, position) {
    const mesh = new THREE.Mesh(this.boxGeometry, this.worldObjectMaterial)
    mesh.castShadow = true
    mesh.position.copy(position)
    mesh.scale.set(width, height, depth)
    this.scene.add(mesh)

    const shape = new CANNON.Box(
      new CANNON.Vec3(width / 2, height / 2, depth / 2),
    )
    const body = new CANNON.Body({
      mass: 1,
      shape,
    })
    body.position.set(...mesh.position)
    body.addEventListener('collision', this.#boundBodyCollision)
    this.world.addBody(body)

    this.worldObjects.push({
      mesh,
      body,
    })
  }

  /**
   * Init sphere
   *
   * @returns {void}
   */
  #initSphere(radius, position) {
    const mesh = new THREE.Mesh(this.sphereGeometry, this.worldObjectMaterial)
    mesh.castShadow = true
    mesh.position.copy(position)
    mesh.scale.set(radius, radius, radius)
    this.scene.add(mesh)

    const shape = new CANNON.Sphere(radius)
    const body = new CANNON.Body({
      mass: 1,
      shape,
    })
    body.position.set(...mesh.position)
    body.addEventListener('collide', this.#boundBodyCollision)
    this.world.addBody(body)

    this.worldObjects.push({
      mesh,
      body,
    })
  }

  /**
   * Init plane
   *
   * @returns {void}
   */
  #initPlane() {
    const plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
    plane.rotation.x = -Math.PI / 2
    plane.receiveShadow = true
    this.scene.add(plane)

    const shape = new CANNON.Plane()
    const body = new CANNON.Body({
      mass: 0,
      shape: shape,
    })
    body.position.set(...plane.position)
    body.quaternion.set(...plane.quaternion)

    this.world.addBody(body)
  }
}
