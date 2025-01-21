/**
 * @description Model
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useGLTF, Clone} from '@react-three/drei'

export default function Model() {
  const model = useGLTF('./media/models/Hamburger/hamburger-draco.glb')

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  )
}

useGLTF.preload('./media/models/Hamburger/hamburger-draco.glb')
