/**
 * @description 19 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/scroll-based-animation}
 * @todo        Analyze if there is a better way to manage parallax effect
 * @todo        Improve animate meshes logic
 */
import * as THREE from 'three'
import gsap from 'gsap'
import {Timer} from 'three/addons/misc/Timer.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import gradientMap from './media/images/textures/gradients/3.jpg'

export default class Lesson extends GeneralLesson {
  /**
   * @type {THREE.Points}
   */
  particles

  /**
   * @type {THREE.Mesh[]}
   */
  meshes = []

  /**
   * @type {THREE.MeshToonMaterial}
   */
  material

  /**
   * @type {THREE.Group}
   */
  cameraGroup

  /**
   * @type {Timer}
   */
  timer

  /**
   * @type {boolean}
   */
  hasGuiTweaks = true

  /**
   * @type {boolean}
   */
  hasAnimation = true

  /**
   * @type {number}
   */
  #meshDistance = 5

  /**
   * @type {number|null}
   */
  #parallaxX = null

  /**
   * @type {number|null}
   */
  #parallaxY = null

  /**
   * @type {number}
   */
  #currentSection = 0

  /**
   * @type {Function}
   */
  #boundCameraScroll

  /**
   * @type {Function}
   */
  #boundParallax

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '19'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Scroll based animation'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/scroll-based-animation'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.timer.update(t)
    const delta = this.timer.getDelta()

    for (const mesh of this.meshes) {
      mesh.rotation.x += delta * 0.1
      mesh.rotation.y += delta * 0.3
    }

    if (this.#parallaxX && this.#parallaxY) {
      const displacementX = this.#parallaxX - this.cameraGroup.position.x
      const displacementY = this.#parallaxY - this.cameraGroup.position.y
      this.cameraGroup.position.x += displacementX * 2 * delta
      this.cameraGroup.position.y += displacementY * 2 * delta
    }
  }

  /**
   * Open lesson
   *
   * @returns {void}
   */
  open() {
    this.#setupBody()
    this.#addSectionToBody('My portfolio', 'start')
    this.#addSectionToBody('My projects', 'end')
    this.#addSectionToBody('Contact me', 'start')

    super.open()
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    this.#removeSectionsFromBody()
    this.#restoreBodyStyles()

    super.close()
  }

  /**
   * Init lesson
   *
   * @returns {void}
   */
  init() {
    super.init()

    this.#disposeControl()
    this.#setupRenderer()
    this.#initTimer()
    this.#initLights()
    this.#initMaterial()
    this.#initMeshes()
    this.#initParticles()
    this.#initGuiTweaks()
    this.#initMeshPositions()
    this.#addCameraScrollEvent()
    this.#addParallaxEvent()
  }

  /**
   * Init camera
   *
   * @returns {void}
   */
  initCamera() {
    this.cameraGroup = new THREE.Group()
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
    )
    this.camera.position.z = 3
    this.cameraGroup.add(this.camera)
    this.scene.add(this.cameraGroup)
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    super.dispose()

    this.#removeCameraScrollEvent()
    this.#removeParallaxEvent()
    this.#disposeTimer()
    this.particles = null
    this.meshes = []
    this.cameraGroup = null
    this.timer = null
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.setClearAlpha(0)
  }

  /**
   * Setup body
   *
   * @returns {void}
   */
  #setupBody() {
    document.body.style.overflow = 'visible'
    document.body.style.backgroundColor = '#1e1a20'
  }

  /**
   * Restore body styles
   *
   * @returns {void}
   */
  #restoreBodyStyles() {
    document.body.style.overflow = 'hidden'
    document.body.style.backgroundColor = null
  }

  /**
   * Add section to body
   *
   * @param   {string} sectionTitle
   * @param   {string} justifyContent
   * @returns {void}
   */
  #addSectionToBody(sectionTitle, justifyContent) {
    const section = document.createElement('section')
    const h2 = document.createElement('h2')
    h2.textContent = sectionTitle
    section.className = 'section'
    section.style.display = 'flex'
    section.style.alignItems = 'center'
    section.style.justifyContent = justifyContent
    section.style.paddingLeft = '8em'
    section.style.paddingRight = '8em'
    section.style.fontSize = '2rem'
    section.style.height = '100vh'
    section.style.textTransform = 'uppercase'
    section.appendChild(h2)
    document.body.appendChild(section)
  }

  /**
   * Remove sections from body
   *
   * @returs {void}
   */
  #removeSectionsFromBody() {
    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => section.remove())
  }

  /**
   * Dispose unneeded control
   *
   * @returns {void}
   */
  #disposeControl() {
    this.control.dispose()
  }

  /**
   * Dispose timer
   *
   * @returns {void}
   */
  #disposeTimer() {
    this.timer.dispose()
  }

  /**
   * Add parallax event
   *
   * @returns {void}
   */
  #addParallaxEvent() {
    this.#boundParallax = this.#initParallax.bind(this)
    window.addEventListener('mousemove', this.#boundParallax)
  }

  /**
   * Remove parallax event
   *
   * @returns {void}
   */
  #removeParallaxEvent() {
    window.removeEventListener('mousemove', this.#boundParallax)
  }

  /**
   * Init parallax
   *
   * @param {MouseEvent} event
   */
  #initParallax(event) {
    this.#parallaxX = event.clientX / window.innerWidth - 0.5
    this.#parallaxY = -(event.clientY / window.innerHeight) - 0.5
  }

  /**
   * Add camera scroll event
   *
   * @returns {void}
   */
  #addCameraScrollEvent() {
    this.#boundCameraScroll = this.#scrollCameraAndAnimateMeshes.bind(this)
    window.addEventListener('scroll', this.#boundCameraScroll)
  }

  /**
   * Remove camera scroll event
   *
   * @returns {void}
   */
  #removeCameraScrollEvent() {
    window.removeEventListener('scroll', this.#boundCameraScroll)
  }

  /**
   * Scroll camera and animate meshes
   *
   * @returns {void}
   */
  #scrollCameraAndAnimateMeshes() {
    const sectionRatio = window.scrollY / window.innerHeight
    const section = Math.round(sectionRatio)

    this.camera.position.y = -sectionRatio * this.#meshDistance

    if (this.#currentSection !== section) {
      this.#currentSection = section

      gsap.to(this.meshes[section].rotation, {
        duration: 1.5,
        ease: 'power2.inOut',
        x: '+=6',
        y: '+=3',
        z: '+=1.5',
      })
    }
  }

  /**
   * Init mesh positions
   *
   * @returns {void}
   */
  #initMeshPositions() {
    for (let i = 0; i < this.meshes.length; i++) {
      this.meshes[i].position.y = -this.#meshDistance * i
      this.meshes[i].position.x = 1.5 * Math.pow(-1, i % 2)
    }
  }

  /**
   * Init meshes
   *
   * @returns {void}
   */
  #initMeshes() {
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.3, 16, 60),
      this.material,
    )
    torus.geometry.name = 'Torus'

    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.75, 1.5, 32),
      this.material,
    )
    cone.geometry.name = 'Cone'

    const torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16),
      this.material,
    )
    torusKnot.geometry.name = 'Torus Knot'

    this.meshes.push(torus)
    this.meshes.push(cone)
    this.meshes.push(torusKnot)
    this.scene.add(...this.meshes)
  }

  /**
   * Init particles
   *
   * @returns {void}
   */
  #initParticles() {
    const items = 200

    const positions = new Float32Array(items * 3)
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] =
        this.#meshDistance / 2 -
        Math.random() * this.#meshDistance * this.meshes.length
      positions[i + 2] = (Math.random() - 0.5) * 10
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    this.particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true,
        color: this.material.color.getHex(),
      }),
    )

    this.scene.add(this.particles)
  }

  /**
   * Init material
   *
   * @returns {void}
   */
  #initMaterial() {
    const textureLoader = new THREE.TextureLoader()
    const gradientTexture = textureLoader.load(gradientMap)
    gradientTexture.magFilter = THREE.NearestFilter
    this.material = new THREE.MeshToonMaterial({
      color: '#ffeded',
      gradientMap: gradientTexture,
    })
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(4, 2)
    this.scene.add(directionalLight)
  }

  /**
   * Init timer
   *
   * @returns {void}
   */
  #initTimer() {
    this.timer = new Timer()
  }

  /**
   * Init GUI tweaks
   *
   * @returns {void}
   */
  #initGuiTweaks() {
    this.guiControl
      .addColor({color: this.material.color.getHex()}, 'color')
      .onChange((value) => {
        this.material.color.setHex(value)
        this.particles.material.color.setHex(value)
      })

    for (const mesh of this.meshes) {
      const name = mesh.geometry.name
      const folder = this.guiControl.addFolder(
        name.charAt(0).toUpperCase() + name.slice(1),
      )
      folder.add(mesh.position, 'y').min(-100).max(100).step(0.01)
      folder.add(mesh.position, 'x').min(-100).max(100).step(0.01)
    }
  }
}
