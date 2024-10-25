/**
 * @description General lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import Lesson from '../lesson.js'

export default class GeneralLesson extends Lesson {
  /**
   * @type {THREE.Object3D|null}
   */
  object3d = null

  /**
   * @type {THREE.Scene}
   */
  scene

  /**
   * @type {THREE.PerspectiveCamera|THREE.Camera}
   */
  camera

  /**
   * @type {THREE.WebGLRenderer}
   */
  renderer

  /**
   * @type {GUI}
   */
  guiControl

  /**
   * @type {OrbitControls}
   */
  control

  /**
   * @type {HTMLCanvasElement}
   */
  canvas

  /**
   * @type {boolean}
   */
  hasGuiTweaks

  /**
   * @type {boolean}
   */
  hasAnimation

  /**
   * @type {number}
   */
  #requestAnimationId

  /**
   * @type {Function}
   */
  #boundToggleGuiControl

  /**
   * @type {Function}
   */
  #boundResizeRenderer

  /**
   * Update
   *
   * @params  {number} t
   * @returns {void}
   * @throws  {Error}
   */
  update(t) {
    throw new Error(
      'General lesson class with animations must implement an `update` method that implements current lesson logic',
    )
  }

  /**
   * Animate
   *
   * @param   {number} t
   * @returns {void}
   */
  animate(t = 0) {
    this.update(t)
    this.renderer.render(this.scene, this.camera)
    this.#requestAnimationId = requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.init()

    document.body.appendChild(this.canvas)

    if (this.hasAnimation) {
      this.animate()
    }
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    document.body.removeChild(this.canvas)

    this.dispose()

    if (this.#requestAnimationId) {
      cancelAnimationFrame(this.#requestAnimationId)
    }
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    this.#initCanvas()
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initControl()
    this.initGuiControl()

    if (this.hasGuiTweaks) {
      this.guiControl.show(true)
    }
  }

  /**
   * Init scene
   *
   * @returns {void}
   */
  initScene() {
    this.scene = new THREE.Scene()
  }

  /**
   * Init camera
   *
   * @returns {void}
   */
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
    )
    this.camera.position.z = 3
    this.scene.add(this.camera)
  }

  /**
   * Init renderer
   *
   * @returns {void}
   */
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas})
    this.#resizeRenderer()
    this.#boundResizeRenderer = this.#resizeRenderer.bind(this)
    window.addEventListener('resize', this.#boundResizeRenderer)
  }

  /**
   * Init control
   *
   * @returns {void}
   */
  initControl() {
    this.control = new OrbitControls(this.camera, this.canvas)
    this.control.enableDamping = true
  }

  /**
   * Init GUI control
   *
   * @returns {void}
   */
  initGuiControl() {
    this.guiControl = new GUI({
      width: 300,
      title: 'GUI',
    })
    this.guiControl.hide()
    this.#boundToggleGuiControl = this.#toggleGuiControl.bind(this)
    document.addEventListener('keydown', this.#boundToggleGuiControl)
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    this.#disposeResources()

    this.scene = null
    this.camera = null
    this.object3d = null
    this.renderer = null
    this.control = null
    this.guiControl = null
    this.canvas = null
  }

  /**
   * Dispose resources
   *
   * @returns {void}
   */
  #disposeResources() {
    this.#disposeGeometriesAndMaterials()
    this.#disposeScene()
    this.#disposeRenderer()
    this.#disposeControl()
    this.#disposeGuiControl()
  }

  /**
   * Dispose geometries and materials
   *
   * @returns {void}
   */
  #disposeGeometriesAndMaterials() {
    this.scene.traverse((object) => {
      if (!object.isMesh) {
        return
      }
      this.#disposeObjectGeometry(object)
      this.#disposeObjectMaterial(object)
    })
  }

  /**
   * Dispose object geometry
   *
   * @param   {THREE.Object3D} object
   * @returns {void}
   */
  #disposeObjectGeometry(object) {
    if (object.geometry) {
      object.geometry.dispose()
    }
  }

  /**
   * Dispose object material
   *
   * @param   {THREE.Object3D} object
   * @returns {void}
   */
  #disposeObjectMaterial(object) {
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => {
          if (material.map) {
            material.map.dispose()
          }
          material.dispose()
        })
      } else {
        if (object.material.map) {
          object.material.map.dispose()
        }
        object.material.dispose()
      }
    }
  }

  /**
   * Dispose scene
   *
   * @returns {void}
   */
  #disposeScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0])
    }
  }

  /**
   * Dispose renderer
   *
   * @returns {void}
   */
  #disposeRenderer() {
    this.renderer.dispose()
    window.removeEventListener('resize', this.#boundResizeRenderer)
  }

  /**
   * Dispose control
   *
   * @returns {void}
   */
  #disposeControl() {
    this.control.dispose()
  }

  /**
   * Dispose GUI control
   *
   * @returns {void}
   */
  #disposeGuiControl() {
    this.guiControl.destroy()
    document.removeEventListener('keydown', this.#boundToggleGuiControl)
  }

  /**
   * Toggle GUI control
   *
   * @param   {KeyboardEvent} e
   * @returns {void}
   * @todo    Improve toggle logic
   */
  #toggleGuiControl(e) {
    if (e.code === 'KeyH') {
      this.guiControl.show(this.guiControl._hidden)
    }
  }

  /**
   * Init canvas
   *
   * @returns {void}
   */
  #initCanvas() {
    this.canvas = document.createElement('canvas')
  }

  /**
   * Resize renderer
   *
   * @returns {void}
   */
  #resizeRenderer() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.render(this.scene, this.camera)
  }
}
