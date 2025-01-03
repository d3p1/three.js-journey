/**
 * @description 43 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/sliced-model-shader}
 */
import * as THREE from 'three'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import slicedVertexShader from './shader/sliced/vertex.glsl'
import slicedFragmentShader from './shader/sliced/fragment.glsl'
import gearModel from './media/models/gears.glb'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Mesh|null}
   */
  model = null

  /**
   * @type {THREE.Mesh|null}
   */
  outerHullMesh = null

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

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
    return '43'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Sliced Model'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/sliced-model-shader'
  }

  /**
   * Update
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    const seconds = t * 0.001

    if (this.model) {
      this.model.rotation.y = 0.1 * seconds
    }

    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initEnvMap()
    this.#initLights()
    this.#initMesh()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Add tweaks
   *
   * @returns {void}
   */
  #addTweaks() {
    this.guiControl
      .add(this.outerHullMesh.material.uniforms.uStartAngle, 'value')
      .min(-Math.PI)
      .max(Math.PI)
      .step(0.001)
      .name('uStartAngle')

    this.guiControl
      .add(this.outerHullMesh.material.uniforms.uArcAngle, 'value')
      .min(0)
      .max(2 * Math.PI)
      .step(0.001)
      .name('uArcAngle')
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    const uniforms = {
      uStartAngle: new THREE.Uniform(1.75),
      uArcAngle: new THREE.Uniform(1.25),
    }

    const patchMap = {
      csm_Slice: {
        '#include <colorspace_fragment>': `
          #include <colorspace_fragment>
          
          if (!gl_FrontFacing) {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
          }
        `,
      },
    }

    const material = new THREE.MeshStandardMaterial({
      metalness: 0.5,
      roughness: 0.25,
      envMapIntensity: 0.5,
      color: '#858080',
    })

    const slicedMaterial = new CustomShaderMaterial({
      baseMaterial: THREE.MeshStandardMaterial,
      patchMap: patchMap,
      vertexShader: slicedVertexShader,
      fragmentShader: slicedFragmentShader,
      uniforms: uniforms,
      silent: true,
      metalness: 0.5,
      roughness: 0.25,
      envMapIntensity: 0.5,
      color: '#858080',
      side: THREE.DoubleSide,
    })

    const depthMaterial = new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      patchMap: patchMap,
      vertexShader: slicedVertexShader,
      fragmentShader: slicedFragmentShader,
      uniforms: uniforms,
      silent: true,
      depthPacking: THREE.RGBADepthPacking,
    })

    gltfLoader.load(gearModel, (model) => {
      this.model = model.scene

      this.model.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'outerHull') {
            child.material = slicedMaterial
            child.customDepthMaterial = depthMaterial
            this.outerHullMesh = child
          } else {
            child.material = material
          }
          child.receiveShadow = true
          child.castShadow = true
        }
      })

      this.scene.add(this.model)

      this.#addTweaks()
    })

    const debugPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10, 10),
      new THREE.MeshStandardMaterial({}),
    )
    debugPlane.position.set(-4, -3, -4)
    debugPlane.lookAt(new THREE.Vector3(0, 0, 0))
    debugPlane.receiveShadow = true
    debugPlane.visible = false
    this.scene.add(debugPlane)
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const rgbeLoader = new RGBELoader()
    rgbeLoader.load(
      '/three.js-journey/media/images/environmentMaps/aerodynamics_workshop.hdr',
      (image) => {
        image.mapping = THREE.EquirectangularReflectionMapping
        this.scene.environment = image
        this.scene.background = image
        this.scene.backgroundBlurriness = 0.5
      },
    )
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5)
    directionalLight.position.set(6.25, 3, 4)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.top = 8
    directionalLight.shadow.camera.bottom = -8
    directionalLight.shadow.camera.left = -8
    directionalLight.shadow.camera.right = 8
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 30
    directionalLight.shadow.camera.normalBias = 0.05
    this.scene.add(directionalLight)
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(-5, 5, 12)
    this.camera.fov = 35
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
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
  }
}
