/**
 * @description 06 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/cameras}
 */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {Function}
   */
  #boundToggleCamera

  /**
   * @type {Function}
   */
  #boundToggleControl

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.#updateCameraFromControl()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#addEventListenerToSetCamera()
    this.#initMesh()
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.#removeEventListenerToSetCamera()
    this.#removeEventListenerToSetControl()
  }

  /**
   * Init control
   *
   * @returns {void}
   */
  initControl() {
    this.#initCustomControl()
    this.#addEventListenerToSetControl()
  }

  /**
   * Init orthographic camera
   *
   * @returns {void}
   */
  initOrthographicCamera() {
    const ratio = this.canvas.width / this.canvas.height
    this.camera = new THREE.OrthographicCamera(-ratio, ratio, 1, -1)
    this.camera.position.z = 3
  }

  /**
   * Update camera from control
   *
   * @returns {void}
   */
  #updateCameraFromControl() {
    this.control.update()
    this.camera.lookAt(this.object3d.position)
  }

  /**
   * Init orbit control
   *
   * @returns {void}
   */
  #initOrbitControl() {
    this.control = new OrbitControls(this.camera, this.canvas)
    this.control.enableDamping = true
  }

  /**
   * Init custom control
   *
   * @returns {void}
   */
  #initCustomControl() {
    function CustomControl(camera, canvas) {
      this.x = 0
      this.y = 0
      this.boundUpdateCoordinates = null

      this.init = function () {
        this.boundUpdateCoordinates = this.updateCoordindates.bind(this)
        canvas.addEventListener('mousemove', this.boundUpdateCoordinates)
      }

      this.update = function (rad = 5) {
        const angle = 2 * Math.PI * this.x
        camera.position.x = Math.cos(angle) * rad
        camera.position.z = Math.sin(angle) * rad
        camera.position.y = this.y * rad
      }

      this.updateCoordindates = function (e) {
        this.x = e.offsetX / canvas.width - 0.5
        this.y = (e.offsetY / canvas.height - 0.5) * -1
      }

      this.dispose = function () {
        canvas.removeEventListener('mousemove', this.boundUpdateCoordinates)
      }
    }
    this.control = new CustomControl(this.camera, this.canvas)
    this.control.init()
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})
    this.object3d = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.object3d)
  }

  /**
   * Add event listener to set camera
   *
   * @returns {void}
   */
  #addEventListenerToSetCamera() {
    this.#boundToggleCamera = this.#toggleCamera.bind(this)
    document.addEventListener('keydown', this.#boundToggleCamera)
  }

  /**
   * Remove event listener to set camera
   *
   * @returns {void}
   */
  #removeEventListenerToSetCamera() {
    document.removeEventListener('keydown', this.#boundToggleCamera)
  }

  /**
   * Add event listener to set control
   *
   * @returns {void}
   */
  #addEventListenerToSetControl() {
    this.#boundToggleControl = this.#toggleControl.bind(this)
    document.addEventListener('keydown', this.#boundToggleControl)
  }

  /**
   * Remove event listener to set control
   *
   * @returns {void}
   */
  #removeEventListenerToSetControl() {
    document.removeEventListener('keydown', this.#boundToggleControl)
  }

  /**
   * Toggle control
   *
   * @param   {KeyboardEvent} e
   * @returns {void}
   */
  #toggleControl(e) {
    switch (e.code) {
      case 'KeyR':
        this.#initOrbitControl()
        break

      case 'KeyC':
        this.#initCustomControl()
        break
    }
  }

  /**
   * Toggle camera
   *
   * @param   {KeyboardEvent} e
   * @returns {void}
   */
  #toggleCamera(e) {
    switch (e.code) {
      case 'KeyP':
        this.initCamera()
        break

      case 'KeyO':
        this.initOrthographicCamera()
        break
    }
  }
}
