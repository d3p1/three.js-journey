/**
 * @description 06 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @link        https://threejs-journey.com/lessons/cameras
 */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'

export default class Lesson extends GeneralLesson {
  /**
   * @type {object}
   */
  control

  /**
   * @type {THREE.Mesh}
   */
  mesh

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.#updateCameraFromControl()
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.#addEventListenerToSetCamera()
    this.#initMesh()
    this.#initControl()

    super.open()
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    super.close()

    this.#removeEventListenerToSetCamera()
    this.#removeEventListenerToSetControl()
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
    this.camera.lookAt(this.mesh.position)
  }

  /**
   * Init control
   *
   * @returns {void}
   */
  #initControl() {
    this.#initCustomControl()
    this.#addEventListenerToSetControl()
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
      this.init = function () {
        canvas.addEventListener('mousemove', (e) => {
          this.x = e.offsetX / canvas.width - 0.5
          this.y = (e.offsetY / canvas.height - 0.5) * -1
        })
      }
      this.update = function (rad = 5) {
        const angle = 2 * Math.PI * this.x
        camera.position.x = Math.cos(angle) * rad
        camera.position.z = Math.sin(angle) * rad
        camera.position.y = this.y * rad
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
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)
  }

  /**
   * Add event listener to set camera
   *
   * @returns {void}
   */
  #addEventListenerToSetCamera() {
    document.addEventListener('keydown', this.#toggleCamera.bind(this))
  }

  /**
   * Remove event listener to set camera
   *
   * @returns {void}
   */
  #removeEventListenerToSetCamera() {
    document.removeEventListener('keydown', this.#toggleCamera)
  }

  /**
   * Add event listener to set control
   *
   * @returns {void}
   */
  #addEventListenerToSetControl() {
    document.addEventListener('keydown', this.#toggleControl.bind(this))
  }

  /**
   * Remove event listener to set control
   *
   * @returns {void}
   */
  #removeEventListenerToSetControl() {
    document.removeEventListener('keydown', this.#toggleControl)
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
