/**
 * @description Worker for physics world
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import PhysicsWorld from '../world.js'

/**
 * @type {PhysicsWorld}
 */
let world = null

/**
 * Worker message handler
 *
 * @param   {MessageEvent} e
 * @returns {void}
 */
onmessage = (e) => {
  const {type, payload} = e.data

  switch (type) {
    case 'init':
      initWorld(payload)
      break

    case 'add':
      addToWorld(payload)
      break

    case 'update':
      updateWorld(payload)
      break

    case 'dispose':
      disposeWorld()
  }
}

/**
 * Init the world
 *
 * @param   {object} payload
 * @returns {void}
 */
const initWorld = (payload) => {
  world = new PhysicsWorld(
    payload.gravity,
    payload.friction,
    payload.restitution,
    payload.bodyCollisionHandler,
  )
}

/**
 * Add to the world
 *
 * @param   {object} payload
 * @returns {void}
 */
const addToWorld = (payload) => {
  if (world) {
    switch (payload.bodyType) {
      case 'box':
        world.addBox(
          payload.id,
          payload.width,
          payload.height,
          payload.depth,
          payload.position,
        )
        break

      case 'sphere':
        world.addSphere(payload.id, payload.radius, payload.position)
        break

      case 'plane':
        world.addPlane(payload.id, payload.position)
        break
    }
  }
}

/**
 * Update world
 *
 * @param   {object} payload
 * @returns {void}
 */
const updateWorld = (payload) => {
  world.update(payload.delta)
  const data = world.bodies.map((item) => {
    return {
      id: item.id,
      position: item.body.position,
      quaternion: item.body.quaternion,
      width: item.body.shape,
    }
  })
  postMessage({
    type: 'refresh',
    payload: data,
  })
}

/**
 * Dispose world
 *
 * @returns {void}
 */
const disposeWorld = () => {
  world.dispose()
}
