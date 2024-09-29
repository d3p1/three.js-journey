/**
 * @description Three.js exercise
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'

const sizes = {
  width: 500,
  height: 400,
}

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const scene = new THREE.Scene()

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
