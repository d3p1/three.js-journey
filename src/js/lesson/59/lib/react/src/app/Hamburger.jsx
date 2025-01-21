/**
 * @description Hamburger
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://github.com/pmndrs/gltfjsx}
 */
import React from 'react'
import {useGLTF} from '@react-three/drei'

export default function Hamburger(props) {
  const {nodes, materials} = useGLTF(
    './media/models/Hamburger/hamburger-draco.glb',
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  )
}

useGLTF.preload('./media/models/Hamburger/hamburger-draco.glb')
