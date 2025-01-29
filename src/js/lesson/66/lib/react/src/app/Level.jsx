/**
 * @description Level
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {useMemo, useRef, useState} from 'react'
import {CuboidCollider, RigidBody} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import {useGLTF} from '@react-three/drei'

const FIELD_SIZE = 4
const FIELD_THICKNESS = 0.2

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floor1Material = new THREE.MeshStandardMaterial({color: 'limegreen'})
const floor2Material = new THREE.MeshStandardMaterial({color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})
const wallMaterial = new THREE.MeshStandardMaterial({color: 'slategrey'})

export function Level({
  count = 5,
  types = [FieldSpinner, FieldLimbo, FieldAxe],
}) {
  const [boundLength] = useState(FIELD_SIZE * (count + 2))
  const [boundScale] = useState([0.3, 1.5, boundLength])

  const hamburger = useGLTF('./media/models/Hamburger/hamburger-draco.glb')
  hamburger.scene.children.forEach((child) => {
    if (child.isMesh) {
      child.castShadow = true
    }
  })

  const blocks = useMemo(() => {
    const blocks = []

    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * types.length)
      const block = types[index]
      blocks.push(block)
    }

    return blocks
  }, [count, types])

  return (
    <>
      <FieldEndpoint position={[0, 0, 0]} />

      {...blocks.map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * FIELD_SIZE]} />
      ))}

      <FieldEndpoint position={[0, 0, -(count + 1) * FIELD_SIZE]}>
        <RigidBody
          type="fixed"
          colliders="hull"
          position={[0, 0.25, 0]}
          restitution={0.2}
          friction={0}
        >
          <primitive object={hamburger.scene} scale={0.2} />
        </RigidBody>
      </FieldEndpoint>

      <Bound boundLength={boundLength} boundScale={boundScale} />
    </>
  )
}

export function FieldSpinner({position = [0, 0, 0]}) {
  const [speed] = useState(
    (Math.random() + 0.2) * (-1) ** Math.round(Math.random()),
  )

  return (
    <FieldTrap
      fieldPosition={position}
      trapPosition={[0, 0.3, 0]}
      scale={[3.5, 0.3, 0.3]}
      update={(state, delta, obstacle) => {
        const time = state.clock.getElapsedTime()

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))

        obstacle.setNextKinematicRotation(rotation)
      }}
    />
  )
}

export function FieldLimbo({position = [0, 0, 0]}) {
  const [scale] = useState([3.5, 0.3, 0.3])
  const [trapPosition] = useState([0, scale[1] / 2 + 0.15, 0])
  const [offset] = useState(2 * Math.PI * Math.random())

  return (
    <FieldTrap
      fieldPosition={position}
      trapPosition={trapPosition}
      scale={scale}
      update={(state, delta, obstacle) => {
        const time = state.clock.getElapsedTime()

        const y = Math.sin(time + offset) + 1

        obstacle.setNextKinematicTranslation({
          x: position[0] + trapPosition[0],
          y: position[1] + trapPosition[1] + y,
          z: position[2] + trapPosition[2],
        })
      }}
    />
  )
}

export function FieldAxe({position = [0, 0, 0]}) {
  const [scale] = useState([1.5, 1.5, 0.3])
  const [trapPosition] = useState([0, scale[1] / 2, 0])
  const [offset] = useState(2 * Math.PI * Math.random())

  return (
    <FieldTrap
      fieldPosition={position}
      trapPosition={trapPosition}
      scale={scale}
      update={(state, delta, obstacle) => {
        const time = state.clock.getElapsedTime()

        const x = Math.sin(time + offset) * (FIELD_SIZE / 2 - scale[0] / 2)

        obstacle.setNextKinematicTranslation({
          x: position[0] + trapPosition[0] + x,
          y: position[1] + trapPosition[1],
          z: position[2] + trapPosition[2],
        })
      }}
    />
  )
}

function Bound({boundLength = 1, boundScale = [1, 1, 1]}) {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <Wall
        scale={[0.3, 1.5, boundLength]}
        position={[
          FIELD_SIZE / 2 + boundScale[0] / 2,
          boundScale[1] / 2,
          -boundLength / 2 + FIELD_SIZE / 2,
        ]}
        castShadow={true}
      />

      <Wall
        scale={[0.3, 1.5, boundLength]}
        position={[
          -(FIELD_SIZE / 2 + boundScale[0] / 2),
          boundScale[1] / 2,
          -boundLength / 2 + FIELD_SIZE / 2,
        ]}
        receiveShadow={true}
      />

      <Wall
        scale={[FIELD_SIZE, 1.5, 0.3]}
        position={[0, boundScale[1] / 2, FIELD_SIZE / 2 - boundLength]}
        receiveShadow={true}
      />

      <CuboidCollider
        args={[FIELD_SIZE / 2, FIELD_THICKNESS / 2, boundLength / 2]}
        position={[0, -FIELD_THICKNESS / 2, FIELD_SIZE / 2 - boundLength / 2]}
        restitution={0.2}
        friction={1}
      />
    </RigidBody>
  )
}

function Wall({position = [0, 0, 0], scale = [1, 1, 1], ...props}) {
  return (
    <mesh
      geometry={boxGeometry}
      material={wallMaterial}
      scale={scale}
      position={position}
      {...props}
    />
  )
}

function Field({position = [0, 0, 0], material, children}) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={material}
        scale={[FIELD_SIZE, FIELD_THICKNESS, FIELD_SIZE]}
        position-y={-0.1}
        receiveShadow={true}
      />
      {children}
    </group>
  )
}

function FieldEndpoint({position = [0, 0, 0], children}) {
  return (
    <Field material={floor1Material} position={position} children={children} />
  )
}

function FieldTrap({
  fieldPosition = [0, 0, 0],
  trapPosition = [0, 0, 0],
  scale = [1, 1, 1],
  update = () => {},
}) {
  const obstacleRef = useRef(null)

  useFrame((state, delta) => {
    update(state, delta, obstacleRef.current)
  })

  return (
    <Field material={floor2Material} position={fieldPosition}>
      <RigidBody
        type="kinematicPosition"
        restitution={0.2}
        friction={0}
        position={trapPosition}
        ref={obstacleRef}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={scale}
          receiveShadow={true}
          castShadow={true}
        />
      </RigidBody>
    </Field>
  )
}
