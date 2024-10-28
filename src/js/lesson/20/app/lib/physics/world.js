/**
 * @description Physics world
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as CANNON from 'cannon-es'

export default class World {
  /**
   * @type {object[]}
   */
  bodies = []

  /**
   * @type {CANNON.World}
   */
  instance

  /**
   * Constructor
   *
   * @param   {number} gravity
   * @param   {number} friction
   * @param   {number} restitution
   */
  constructor(gravity, friction, restitution) {
    this.#initWorld(gravity, friction, restitution)
  }

  /**
   * Update
   *
   * @param   {number} delta
   * @returns {void}
   */
  update(delta) {
    this.instance.step(1 / 60, delta, 3)
  }

  /**
   * Add box body
   *
   * @param   {string} id
   * @param   {number} height
   * @param   {number} width
   * @param   {number} depth
   * @param   {object} position
   * @returns {void}
   */
  addBox(id, width, height, depth, position) {
    const shape = new CANNON.Box(new CANNON.Vec3(width, height, depth))
    const body = new CANNON.Body({
      mass: 1,
      shape,
    })

    this.#setupBody(body, position)
    this.#addBody(id, body)
  }

  /**
   * Add sphere body
   *
   * @param   {string} id
   * @param   {number} radius
   * @param   {object} position
   * @returns {void}
   */
  addSphere(id, radius, position) {
    const shape = new CANNON.Sphere(radius)
    const body = new CANNON.Body({
      mass: 1,
      shape,
    })

    this.#setupBody(body, position)
    this.#addBody(id, body)
  }

  /**
   * Add plane body
   *
   * @param   {string} id
   * @param   {object} position
   * @returns {void}
   */
  addPlane(id, position) {
    const shape = new CANNON.Plane()
    const body = new CANNON.Body({
      mass: 0,
      shape: shape,
    })
    body.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2)

    this.#setupBody(body, position)
    this.#addBody(id, body)
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    for (const item of this.bodies) {
      const body = item.body
      this.instance.removeBody(body)
    }
  }

  /**
   * Setup body
   *
   * @param   {CANNON.Body} body
   * @param   {object}      position
   * @returns {void}
   */
  #setupBody(body, position) {
    body.position.copy(position)
  }

  /**
   * Add body
   *
   * @param   {string}      id
   * @param   {CANNON.Body} body
   * @returns {void}
   */
  #addBody(id, body) {
    this.bodies.push({id, body})
    this.instance.addBody(body)
  }

  /**
   * Init a physics world
   *
   * @param   {number}       gravity
   * @param   {number}       friction
   * @param   {number}       restitution
   * @returns {void}
   */
  #initWorld(gravity, friction, restitution) {
    this.instance = new CANNON.World()
    this.instance.allowSleep = true
    this.instance.broadphase = new CANNON.SAPBroadphase(this.instance)
    this.instance.gravity.set(0, gravity, 0)

    const defaultMaterial = new CANNON.Material('default')
    this.instance.defaultContactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: friction,
        restitution: restitution,
      },
    )
  }
}
