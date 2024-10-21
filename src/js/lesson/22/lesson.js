/**
 * @description 22 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/raycaster-and-mouse-events}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Raycaster}
   */
  raycaster

  /**
   * @type {THREE.Mesh[]}
   */
  objs = []

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {THREE.Vector2}
   */
  cursor

  /**
   * @type {Function}
   */
  #boundMouseMove

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 22] Raycaster and Mouse Events'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/raycaster-and-mouse-events'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const seconds = t * 0.001

    for (let i = 0; i < this.objs.length; i++) {
      const mesh = this.objs[i]
      mesh.position.y = Math.sin(seconds + i * 10) * 3
      mesh.scale.set(1, 1, 1)
      mesh.material.color.set(0xffffff)
      if (mesh.name === 'duck') {
        mesh.scale.set(0.008, 0.008, 0.008)
      }
    }

    this.raycaster.setFromCamera(this.cursor, this.camera)
    const intersects = this.raycaster.intersectObjects(this.objs)
    for (const intersect of intersects) {
      const mesh = intersect.object
      mesh.scale.set(1.2, 1.2, 1.2)
      mesh.material.color.set(0xe233e8)
      if (mesh.name === 'duck') {
        mesh.scale.set(0.0085, 0.0085, 0.0085)
      }
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

    this.#initLights()
    this.#initObjects()
    this.#initRaycaster()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.canvas.removeEventListener('mousemove', this.#boundMouseMove)
    this.raycaster = null

    super.dispose()
  }

  /**
   * Init raycaster
   *
   * @returns {void}
   */
  #initRaycaster() {
    this.raycaster = new THREE.Raycaster(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0),
    )
    this.cursor = new THREE.Vector2(0, 0)
    this.#boundMouseMove = this.#updateCursor.bind(this)
    this.canvas.addEventListener('mousemove', this.#boundMouseMove)
  }

  /**
   * Init cursor
   *
   * @param   {MouseEvent} event
   * @returns {void}
   */
  #updateCursor(event) {
    this.cursor.x = (event.offsetX / this.canvas.width - 0.5) * 2
    this.cursor.y = -((event.offsetY / this.canvas.height - 0.5) * 2)
  }

  /**
   * Init objects
   *
   * @returns {void}
   */
  #initObjects() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    const radius = 1
    const geometry = new THREE.SphereGeometry(radius)
    for (let i = 0; i < 3; i++) {
      if (i === 1) {
        continue
      }

      const material = new THREE.MeshStandardMaterial({
        metalness: 0.7,
        roughness: 0.3,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.position.set(-3 + i * radius * 3, 0, 0)

      this.objs.push(mesh)
      this.scene.add(mesh)
    }

    gltfLoader.load(
      '/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf',
      (model) => {
        const obj = model.scene.children[0].children[0]
        obj.name = 'duck'
        obj.scale.set(0.008, 0.008, 0.008)
        obj.rotation.y = -Math.PI / 2
        this.scene.add(obj)
        this.objs.push(obj)
      },
    )
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(5, 5, 0)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.top = 2
    directionalLight.shadow.camera.bottom = -2
    directionalLight.shadow.camera.right = 2
    directionalLight.shadow.camera.left = -2
    directionalLight.shadow.camera.far = 10
    this.scene.add(directionalLight)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.z = 5
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
}
