/**
 * @description Light
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Light() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow={true}
        intensity={4.5}
        position={[4, 4, 1]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />
    </>
  )
}
