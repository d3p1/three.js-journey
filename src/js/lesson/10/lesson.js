/**
 * @description 10 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/textures}
 */
import * as THREE from 'three'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import doorColorTexture from './media/images/textures/door/color.jpg'
import smallCheckerboardTexture from './media/images/textures/checkerboard-8x8.png'
import fullCheckerboardTexture from './media/images/textures/checkerboard-1024x1024.png'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.LoadingManager}
   */
  loaderManager

  /**
   * @type {THREE.TextureLoader}
   */
  textureLoader

  /**
   * @type {THREE.Texture}
   */
  texture

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
    this.control.update()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#initTexture()
    this.#initMesh()
    this.#initGuiTweaks()
  }

  /**
   * Init texture
   *
   * @returns {void}
   */
  #initTexture() {
    this.loaderManager = new THREE.LoadingManager()
    this.textureLoader = new THREE.TextureLoader(this.loaderManager)
    this.texture = this.textureLoader.load(doorColorTexture)
    this.texture.colorSpace = THREE.SRGBColorSpace
  }

  /**
   * Init mesh
   *
   * @returns {void}
   */
  #initMesh() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({map: this.texture})
    this.mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    this.scene.add(this.mesh)
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .add(this.texture.repeat, 'x')
      .min(1)
      .max(5)
      .step(0.01)
      .name('Texture x')

    this.guiControl
      .add(this.texture.repeat, 'y')
      .min(1)
      .max(5)
      .step(0.01)
      .name('Texture y')

    this.guiControl
      .add({offset: 0}, 'offset')
      .min(0)
      .max(1)
      .step(0.01)
      .name('Texture offset')
      .onChange((value) => {
        this.texture.offset.x = value
        this.texture.offset.y = value
      })

    this.guiControl
      .add({rotation: 0}, 'rotation')
      .min(0)
      .max(2 * Math.PI)
      .step(0.01)
      .onChange((value) => {
        this.texture.center.x = 0.5
        this.texture.center.y = 0.5
        this.texture.rotation = value
      })

    this.guiControl
      .add(
        {
          addXRepeat: () => {
            this.texture.wrapS = THREE.RepeatWrapping
            this.texture.needsUpdate = true
          },
        },
        'addXRepeat',
      )
      .name('Repeat texture in X')

    this.guiControl
      .add(
        {
          addYRepeat: () => {
            this.texture.wrapT = THREE.RepeatWrapping
            this.texture.needsUpdate = true
          },
        },
        'addYRepeat',
      )
      .name('Repeat texture in Y')

    this.guiControl
      .add(
        {
          updateMinFilterToLinearFilter: () => {
            this.texture.minFilter = THREE.LinearMipmapLinearFilter
            this.texture.generateMipmaps = true
            this.texture.needsUpdate = true
          },
        },
        'updateMinFilterToLinearFilter',
      )
      .name('Update min filter to linear filter')

    this.guiControl
      .add(
        {
          updateMinFilterToNearestFilter: () => {
            this.texture.minFilter = THREE.NearestFilter
            this.texture.generateMipmaps = false
            this.texture.needsUpdate = true
          },
        },
        'updateMinFilterToNearestFilter',
      )
      .name('Update min filter to nearest filter')

    this.guiControl
      .add(
        {
          updateMagFilterToLinearFilter: () => {
            this.texture.magFilter = THREE.LinearFilter
            this.texture.needsUpdate = true
          },
        },
        'updateMagFilterToLinearFilter',
      )
      .name('Update mag filter to linear filter')

    this.guiControl
      .add(
        {
          updateMagFilterToNearestFilter: () => {
            this.texture.magFilter = THREE.NearestFilter
            this.texture.needsUpdate = true
          },
        },
        'updateMagFilterToNearestFilter',
      )
      .name('Update mag filter to nearest filter')
  }
}
