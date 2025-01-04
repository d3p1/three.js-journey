/**
 * @description 46 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/performance-tips}
 */
import * as THREE from 'three'
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import Stats from 'stats.js'
import displacementImage from './media/images/textures/displacementMap.png'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh}
   */
  torusKnot

  /**
   * @type {THREE.Mesh}
   */
  sphere

  /**
   * @type {THREE.Mesh}
   */
  box

  /**
   * @type {Stats}
   */
  stats

  /**
   * @type {boolean}
   */
  hasGuiTweaks = false

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '46'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Performance tips'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/performance-tips'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.stats.begin()

    this.torusKnot.rotation.y = 0.1 * t * 0.001

    this.control.update()

    this.stats.end()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initStats()
    this.#initLights()
    this.#initMeshes()
    this.#initRandomMergedBoxes()
    this.#initInstancedMesh()
    this.#initShader()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    document.body.removeChild(this.stats.dom)

    super.dispose()
  }

  /**
   * Init stats
   *
   * @returns {void}
   */
  #initStats() {
    this.stats = new Stats()
    this.stats.showPanel(0)
    document.body.appendChild(this.stats.dom)
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(0.25, 3, 2.25)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 10
    directionalLight.shadow.normalBias = 0.05
    directionalLight.shadow.camera.top = 3
    directionalLight.shadow.camera.bottom = -3
    directionalLight.shadow.camera.left = -6
    directionalLight.shadow.camera.right = 6
    this.scene.add(directionalLight)
  }

  /**
   * Init random merged boxes
   *
   * @returns {void}
   */
  #initRandomMergedBoxes() {
    const geometries = []
    const material = new THREE.MeshNormalMaterial()
    for (let i = 0; i < 25; i++) {
      const boxGeometry = new THREE.BoxGeometry()
      boxGeometry.translate(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      )
      boxGeometry.rotateX((Math.random() - 0.5) * 2 * Math.PI)
      boxGeometry.rotateY((Math.random() - 0.5) * 2 * Math.PI)
      geometries.push(boxGeometry)
    }
    const finalGeometry = mergeGeometries(geometries)
    const mesh = new THREE.Mesh(finalGeometry, material)
    this.scene.add(mesh)
  }

  /**
   * Init instanced mesh
   *
   * @returns {void}
   */
  #initInstancedMesh() {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.InstancedMesh(geometry, material, 25)
    for (let i = 0; i < 25; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      )

      const quaternion = new THREE.Quaternion()
      quaternion.setFromEuler(
        new THREE.Euler(
          (Math.random() - 0.5) * 2 * Math.PI,
          (Math.random() - 0.5) * 2 * Math.PI,
          0,
        ),
      )

      const matrix = new THREE.Matrix4()
      matrix.makeRotationFromQuaternion(quaternion)
      matrix.setPosition(position)
      mesh.setMatrixAt(i, matrix)
    }
    this.scene.add(mesh)
  }

  /**
   * Init shader
   *
   * @returns {void}
   */
  #initShader() {
    const loader = new THREE.TextureLoader()
    const texture = loader.load(displacementImage)

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10, 256, 256),
      new THREE.ShaderMaterial({
        precision: 'lowp',
        defines: {
          uDisplacementStrength: 1.5,
        },
        uniforms: {
          uDisplacementTexture: new THREE.Uniform(texture),
        },
        vertexShader: `
          uniform sampler2D uDisplacementTexture;
  
          varying vec3 vColor;
  
          void main() {
              vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
              float elevation  = texture2D(uDisplacementTexture, uv).r;
              elevation        = max(elevation, 0.5);  
              modelPosition.y += elevation * uDisplacementStrength;
  
              gl_Position = projectionMatrix * viewMatrix * modelPosition;
  
              float colorFactor = max(elevation, 0.25);
              vec3 depthColor   = vec3(1.0, 0.1, 0.1);
              vec3 surfaceColor = vec3(0.1, 0.0, 0.5);
              vColor            = mix(depthColor, surfaceColor, elevation);
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
  
          void main() {              
              gl_FragColor = vec4(vColor, 1.0);
          }
        `,
      }),
    )
    mesh.position.set(0, -1.99, 0)
    mesh.rotation.x = -Math.PI / 2

    this.scene.add(mesh)
  }

  /**
   * Init meshes
   *
   * @returns {void}
   */
  #initMeshes() {
    const material = new THREE.MeshStandardMaterial()

    this.box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material)
    this.box.position.set(-5, 0, 0)
    this.box.castShadow = true
    this.box.receiveShadow = false

    this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material)
    this.sphere.position.set(5, 0, 0)
    this.sphere.castShadow = true
    this.sphere.receiveShadow = false

    this.torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1, 0.4, 128, 32),
      material,
    )
    this.torusKnot.castShadow = true
    this.torusKnot.receiveShadow = false

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material)
    floor.position.set(0, -2, 0)
    floor.rotation.x = -Math.PI / 2
    floor.castShadow = false
    floor.receiveShadow = true

    this.scene.add(this.box, this.sphere, this.torusKnot, floor)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 75
    this.camera.position.set(2, 2, 6)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.shadowMap.autoUpdate = true
    this.renderer.shadowMap.needsUpdate = true
  }
}
