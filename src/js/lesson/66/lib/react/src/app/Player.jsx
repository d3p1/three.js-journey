/**
 * @description Player
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {useEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {RigidBody, useRapier} from '@react-three/rapier'
import {useKeyboardControls} from '@react-three/drei'

const PLAYER_RADIUS = 0.3

const MAX_JUMP_DISTANCE = 0.15

const CAMERA_POSITION_Z_OFFSET = 2.25
const CAMERA_POSITION_Y_OFFSET = 0.65
const CAMERA_TARGET_Y_OFFSET = 0.25
const CAMERA_MAX_POSITION_OFFSET = 0.2
const CAMERA_MAX_TARGET_OFFSET = 0.25
const CAMERA_SPEED = 5

export default function Player() {
  const player = useRef(null)
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const {rapier, world} = useRapier()

  useEffect(() => {
    const unsubscribeKeys = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) {
          _jump(rapier, world, player.current)
        }
      },
    )

    return () => {
      unsubscribeKeys()
    }
  }, [])

  useFrame((state, delta) => {
    _move(player.current, getKeys(), delta)
    _translateCamera(state.camera, player.current, delta)
  })

  return (
    <RigidBody
      ref={player}
      colliders="ball"
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      canSleep={false}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow={true}>
        <icosahedronGeometry args={[PLAYER_RADIUS, 1]} />
        <meshStandardMaterial flatShading={true} color="mediumpurple" />
      </mesh>
    </RigidBody>
  )
}

function _translateCamera(camera, player, delta) {
  const playerPosition = player.translation()

  const finalCameraPosition = new THREE.Vector3()
  finalCameraPosition.copy(playerPosition)
  finalCameraPosition.z += CAMERA_POSITION_Z_OFFSET
  finalCameraPosition.y += CAMERA_POSITION_Y_OFFSET

  const initialCameraTarget = new THREE.Vector3()
  const finalCameraTarget = new THREE.Vector3()
  initialCameraTarget.copy(playerPosition)
  finalCameraTarget.copy(playerPosition)
  finalCameraTarget.y += CAMERA_TARGET_Y_OFFSET

  if (
    camera.position.distanceTo(finalCameraPosition) > CAMERA_MAX_POSITION_OFFSET
  ) {
    camera.position.lerp(finalCameraPosition, CAMERA_SPEED * delta)
  } else {
    camera.position.copy(finalCameraPosition)
  }

  if (
    initialCameraTarget.distanceTo(finalCameraTarget) > CAMERA_MAX_TARGET_OFFSET
  ) {
    camera.lookAt(
      initialCameraTarget.lerp(finalCameraTarget, CAMERA_SPEED * delta),
    )
  } else {
    camera.lookAt(finalCameraTarget)
  }
}

function _jump(rapier, world, player) {
  const rayOrigin = player.translation()
  rayOrigin.y -= PLAYER_RADIUS + 0.1
  const rayDirection = {x: 0, y: -1, z: 0}
  const ray = new rapier.Ray(rayOrigin, rayDirection)
  const {timeOfImpact} = world.castRay(ray, 10, true)

  if (timeOfImpact < MAX_JUMP_DISTANCE) {
    player.applyImpulse({x: 0, y: 0.5, z: 0})
  }
}

function _move(player, keys, delta) {
  const {forward, rightward, backward, leftward} = keys

  const impulse = {x: 0, y: 0, z: 0}
  const torque = {x: 0, y: 0, z: 0}
  const impulseStrength = 0.6 * delta
  const torqueStrength = 0.2 * delta

  if (forward) {
    impulse.z -= impulseStrength
    torque.x -= torqueStrength
  }

  if (rightward) {
    impulse.x += impulseStrength
    torque.z -= torqueStrength
  }

  if (backward) {
    impulse.z += impulseStrength
    torque.x += torqueStrength
  }

  if (leftward) {
    impulse.x -= impulseStrength
    torque.z += torqueStrength
  }

  player.applyImpulse(impulse)
  player.applyTorqueImpulse(torque)
}
