/**
 * @description Fox model
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {useControls} from 'leva'

export default function Fox() {
  const model = useGLTF('./media/models/Fox/glTF/Fox.gltf')
  const animations = useAnimations(model.animations, model.scene)

  const {animationName} = useControls({
    animationName: {
      options: animations.names,
    },
  })

  useEffect(() => {
    const action = animations.actions[animationName]
    action.reset().fadeIn(0.5).play()

    return () => {
      action.fadeOut(0.5)
    }
  }, [animationName])

  return (
    <primitive object={model.scene} scale={0.02} position={[-2.5, 0, 2.5]} />
  )
}

useGLTF.preload('./media/models/Fox/glTF/Fox.gltf')
