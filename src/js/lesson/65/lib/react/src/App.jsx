/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {useControls} from 'leva'
import {useRef, useState, useEffect, useMemo} from 'react'
import {Perf} from 'r3f-perf'
import {useFrame} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import {
  Physics,
  RigidBody,
  CuboidCollider,
  CylinderCollider,
  InstancedRigidBodies,
} from '@react-three/rapier'

export default function App() {
  const [audio] = useState(new Audio('./media/sounds/hit.mp3'))

  const cubeRef = useRef(null)
  const twisterRef = useRef(null)

  const model = useGLTF('./media/models/Hamburger/hamburger-draco.glb')

  const {isDebugEnabled} = useControls('Physics', {
    isDebugEnabled: false,
  })

  useFrame((state) => {
    if (twisterRef.current) {
      const time = state.clock.getElapsedTime()

      const euler = new THREE.Euler(0, 3 * time, 0)
      const quaternion = new THREE.Quaternion()
      quaternion.setFromEuler(euler)
      twisterRef.current.setNextKinematicRotation(quaternion)

      const angle = 0.5 * time
      const radius = 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      twisterRef.current.setNextKinematicTranslation({x: x, y: -0.8, z: z})
    }
  })

  const onClickCubeHandler = () => {
    const mass = cubeRef.current.mass()
    cubeRef.current.applyImpulse({x: 0, y: 5 * mass, z: 0})
    cubeRef.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    })
  }

  const cubeCount = 100
  const cubeInstances = useMemo(() => {
    const instances = []

    for (let i = 0; i < cubeCount; i++) {
      instances.push({
        key: `cube_${i}`,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 8,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      })
    }

    return instances
  }, [])

  return (
    <>
      <color args={['ivory']} attach="background" />

      <Perf position="top-left" />

      <OrbitControls makeDefault={true} />

      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow={true}
        intensity={4.5}
        position={[1, 2, 3]}
      />

      <Physics debug={isDebugEnabled} gravity={[0, -9.8, 0]}>
        <RigidBody colliders="ball" position={[-1.5, 2, 0]}>
          <mesh castShadow={true}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          position={[1.5, 2, 0]}
          ref={cubeRef}
          gravityScale={1}
          restitution={1}
          friction={0}
          colliders={false}
        >
          <CuboidCollider args={[0.5, 0.5, 0.5]} mass={10} />
          <mesh onClick={onClickCubeHandler}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={twisterRef}
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody position={[0, 4, 0]} colliders={false}>
          <CylinderCollider args={[0.5, 1.25]} position={[0, 0.6, 0]} />
          <primitive object={model.scene} scale={0.25} />
        </RigidBody>

        <InstancedRigidBodies instances={cubeInstances}>
          <instancedMesh
            args={[null, null, cubeCount]}
            castShadow={true}
            receiveShadow={true}
          >
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </instancedMesh>
        </InstancedRigidBodies>

        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <mesh receiveShadow={true} position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          restitution={0}
          friction={0.7}
          colliders={false}
        >
          <CuboidCollider args={[5, 3, 0.5]} position={[0, 1.75, 5.5]} />
          <CuboidCollider args={[5, 3, 0.5]} position={[0, 1.75, -5.5]} />
          <CuboidCollider
            args={[5, 3, 0.5]}
            position={[5.5, 1.75, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <CuboidCollider
            args={[5, 3, 0.5]}
            position={[-5.5, 1.75, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </RigidBody>
      </Physics>
    </>
  )
}
