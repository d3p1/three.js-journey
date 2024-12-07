/**
 * @description 20 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/physics}
 */
import {Timer} from 'three/addons/misc/Timer.js'
import ThreeWorld from './app/lib/3d/world.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import Environment from './app/utils/environment.js'
import Gui from './app/utils/gui.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {ThreeWorld}
   */
  threeWorld

  /**
   * @type {Worker}
   */
  physicsWorld

  /**
   * @type {Timer}
   */
  timer

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
    return '20'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Physics'
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

    this.physicsWorld.postMessage({
      type: 'update',
      payload: {
        delta: this.timer.getDelta(),
      },
    })

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    Environment.setup(this.scene, this.camera, this.renderer)

    this.#initTimer()
    this.#initThreeWorld()
    this.#initPhysicsWorld()
    this.#initTweaks()

    this.#addPlane({x: 0, y: 0, z: 0})
    this.#addSphere(0.5, {x: 0, y: 3, z: 0})
    this.#addBox(1, 1, 1, {x: 3, y: 3, z: 0})
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.#disposePhysicsWorld()
    this.#disposeThreeWorld()
    this.physicsWorld.terminate()
  }

  /**
   * Dispose the three world
   *
   * @returns {void}
   */
  #disposeThreeWorld() {
    this.threeWorld.dispose()
  }

  /**
   * Dispose the physics world
   *
   * @returns {void}
   */
  #disposePhysicsWorld() {
    this.physicsWorld.postMessage({
      type: 'dispose',
    })
  }

  /**
   * Add plane
   *
   * @param   {object} position
   * @returns {void}
   */
  #addPlane(position) {
    const id = this.#generateWorldObjectId()

    this.threeWorld.addPlane(id, position)
    this.physicsWorld.postMessage({
      type: 'add',
      payload: {
        bodyType: 'plane',
        id: id,
        position: position,
      },
    })
  }

  /**
   * Add sphere
   *
   * @param   {number} radius
   * @param   {object} position
   * @returns {void}
   */
  #addSphere(radius, position) {
    const id = this.#generateWorldObjectId()

    this.threeWorld.addSphere(id, radius, position)
    this.physicsWorld.postMessage({
      type: 'add',
      payload: {
        bodyType: 'sphere',
        id: id,
        radius: radius,
        position: position,
      },
    })
  }

  /**
   * Add box
   *
   * @param   {number} width
   * @param   {number} height
   * @param   {number} depth
   * @param   {object} position
   * @returns {void}
   */
  #addBox(width, height, depth, position) {
    const id = this.#generateWorldObjectId()

    this.threeWorld.addBox(id, width, height, depth, position)
    this.physicsWorld.postMessage({
      type: 'add',
      payload: {
        bodyType: 'box',
        id: id,
        width: width / 2,
        height: height / 2,
        depth: depth / 2,
        position: position,
      },
    })
  }

  /**
   * Add physics world update handler
   *
   * @returns {void}
   */
  #addPhysicsWorldUpdateHandler() {
    this.physicsWorld.onmessage = (e) => {
      const {type, payload} = e.data

      switch (type) {
        case 'refresh':
          for (const item of payload) {
            const mesh = this.threeWorld.meshes[item.id]
            mesh.position.copy(item.position)
            mesh.quaternion.copy(item.quaternion)
          }
          break
      }
    }
  }

  /**
   * Generate world object ID
   *
   * @returns {string}
   */
  #generateWorldObjectId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
  }

  /**
   * Init a three world
   *
   * @returns {void}
   */
  #initThreeWorld() {
    this.threeWorld = new ThreeWorld(this.scene)
  }

  /**
   * Init a physics world
   *
   * @returns {void}
   */
  #initPhysicsWorld() {
    this.physicsWorld = new Worker(
      new URL('./app/lib/physics/world/worker.js', import.meta.url),
      {
        type: 'module',
      },
    )

    this.physicsWorld.postMessage({
      type: 'init',
      payload: {
        gravity: -9.8,
        friction: 0.1,
        restitution: 0.7,
      },
    })

    this.#addPhysicsWorldUpdateHandler()
  }

  /**
   * Init tweaks
   *
   * @returns {void}
   */
  #initTweaks() {
    Gui.addAction(
      this.guiControl,
      () => {
        this.#addSphere(Math.random(), {
          x: (Math.random() - 0.5) * 3,
          y: 3,
          z: (Math.random() - 0.5) * 3,
        })
      },
      'Create Sphere',
    )

    Gui.addAction(
      this.guiControl,
      () => {
        this.#addBox(Math.random(), Math.random(), Math.random(), {
          x: (Math.random() - 0.5) * 3,
          y: 3,
          z: (Math.random() - 0.5) * 3,
        })
      },
      'Create Box',
    )
  }

  /**
   * Init timer
   *
   * @returns {void}
   */
  #initTimer() {
    this.timer = new Timer()
  }
}
