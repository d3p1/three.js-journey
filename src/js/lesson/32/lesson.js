/**
 * @description 32 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/coffee-smoke-shader}
 */
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import coffeeModel from './media/models/coffee/bakedModel.glb'

export default class Lesson extends GeneralLesson {
  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * Get the lesson title
   *
   * @returns {string}
   */
  get title() {
    return '[LESSON 32] Coffee Smoke'
  }

  /**
   * Get the lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/coffee-smoke-shader'
  }

  /**
   * Update
   *
   * @returns {void}
   */
  update() {
    this.control.update()
  }

  /**
   * Init the lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initModel()
    this.#setupCamera()
  }

  /**
   * Init the model
   *
   * @returns {void}
   */
  #initModel() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(coffeeModel, (model) => {
      this.scene.add(model.scene)
    })
  }

  /**
   * Setup the camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.position.set(8, 9, 6)
  }
}
