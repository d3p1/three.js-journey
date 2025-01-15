/**
 * @description Custom object
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useMemo, useRef, useEffect} from 'react'
import * as THREE from 'three'

export default function CustomObject({vertexCount}) {
  const geometryRef = useRef(null)

  const positions = useMemo(() => {
    const positionArray = new Float32Array(vertexCount * 3)
    for (let i = 0; i < positionArray.length; i++) {
      positionArray[i] = (Math.random() - 0.5) * 3
    }
    return positionArray
  }, [vertexCount])

  useEffect(() => geometryRef.current.computeVertexNormals(), [positions])

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={vertexCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  )
}
