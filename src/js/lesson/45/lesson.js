/**
 * @description 45 lesson class
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://threejs-journey.com/lessons/post-processing}
 */
import * as THREE from 'three'
import {
  EffectComposer,
  RGBShiftShader,
  GammaCorrectionShader,
  RenderPass,
  DotScreenPass,
  GlitchPass,
  UnrealBloomPass,
  SMAAPass,
  ShaderPass,
} from 'three/addons'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import GeneralLesson from '../../core/lesson/general-lesson.js'
import futuristicNormalImage from './media/images/textures/interfaceNormalMap.png'

export default class Lesson extends GeneralLesson {
  /**
   * @type {ShaderPass}
   */
  displacementPass

  /**
   * @type {EffectComposer}
   */
  effectComposer

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
  #requestAnimationId

  /**
   * @type {Function}
   */
  #boundEffectComposerResize

  /**
   * Get lesson number
   *
   * @returns {string}
   */
  get number() {
    return '45'
  }

  /**
   * Get lesson title
   *
   * @returns {string}
   */
  get title() {
    return 'Post-processing'
  }

  /**
   * Get lesson link
   *
   * @returns {string}
   */
  get link() {
    return 'https://threejs-journey.com/lessons/post-processing'
  }

  /**
   * Update lesson
   *
   * @param   {number} t
   * @returns {void}
   */
  update(t) {
    this.displacementPass.material.uniforms.uTime.value = t * 0.001

    this.control.update()
  }

  /**
   * Animate
   *
   * @poram   {number} t
   * @returns {void}
   */
  animate(t) {
    this.update(t)
    this.effectComposer.render()
    this.#requestAnimationId = requestAnimationFrame(this.animate.bind(this))
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
    this.#initModel()
    this.#initEffectComposer()
    this.#setupCamera()
    this.#setupRenderer()
  }

  /**
   * Close lesson
   *
   * @returns {void}
   */
  close() {
    super.close()
    cancelAnimationFrame(this.#requestAnimationId)
  }

  /**
   * Dispose lesson
   *
   * @returns {void}
   */
  dispose() {
    window.removeEventListener('resize', this.#boundEffectComposerResize)

    super.dispose()
  }

  /**
   * Init environment map
   *
   * @returns {void}
   */
  #initEnvMap() {
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const envMap = cubeTextureLoader.load([
      '/three.js-journey/media/images/environmentMaps/3/px.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nx.jpg',
      '/three.js-journey/media/images/environmentMaps/3/py.jpg',
      '/three.js-journey/media/images/environmentMaps/3/ny.jpg',
      '/three.js-journey/media/images/environmentMaps/3/pz.jpg',
      '/three.js-journey/media/images/environmentMaps/3/nz.jpg',
    ])
    this.scene.background = envMap
    this.scene.environment = envMap
  }

  /**
   * Init lights
   *
   * @returns {void}
   */
  #initLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    directionalLight.position.set(0.25, 3, -2.25)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.05
    directionalLight.shadow.camera.far = 15
    this.scene.add(directionalLight)
  }

  /**
   * Init model
   *
   * @returns {void}
   */
  #initModel() {
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()

    dracoLoader.setDecoderPath('/three.js-journey/js/utils/loader/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      '/three.js-journey/media/models/DamagedHelmet/glTF/DamagedHelmet.gltf',
      (model) => {
        model.scene.scale.set(2, 2, 2)
        model.scene.rotation.y = Math.PI / 2
        this.scene.add(model.scene)

        model.scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshStandardMaterial
          ) {
            child.receiveShadow = true
            child.castShadow = true
            child.material.envMapIntensity = 2.5
            child.material.needsUpdate = true
          }
        })
      },
    )
  }

  /**
   * Init effect composer
   *
   * @returns {void}
   */
  #initEffectComposer() {
    const textureLoader = new THREE.TextureLoader()

    const renderTarget = new THREE.WebGLRenderTarget(
      this.canvas.width * window.devicePixelRatio,
      this.canvas.height * window.devicePixelRatio,
      {
        samples: window.devicePixelRatio === 1 ? 2 : 0,
      },
    )
    this.effectComposer = new EffectComposer(this.renderer, renderTarget)
    this.#setupEffectComposer()

    this.#boundEffectComposerResize = this.#setupEffectComposer.bind(this)
    window.addEventListener('resize', this.#boundEffectComposerResize)

    const renderPass = new RenderPass(this.scene, this.camera)
    this.effectComposer.addPass(renderPass)

    const dotScreenPass = new DotScreenPass()
    dotScreenPass.enabled = false
    this.effectComposer.addPass(dotScreenPass)

    const glitchPass = new GlitchPass()
    glitchPass.enabled = false
    this.effectComposer.addPass(glitchPass)

    const rgbShiftPass = new ShaderPass(RGBShiftShader)
    rgbShiftPass.enabled = false
    this.effectComposer.addPass(rgbShiftPass)

    const bloomPass = new UnrealBloomPass()
    bloomPass.strength = 0.3
    bloomPass.radius = 1
    bloomPass.threshold = 0.6
    const bloomTweak = this.guiControl.addFolder('Bloom')
    bloomTweak.add(bloomPass, 'enabled')
    bloomTweak.add(bloomPass, 'strength').min(0).max(2).step(0.001)
    bloomTweak.add(bloomPass, 'radius').min(0).max(2).step(0.001)
    bloomTweak.add(bloomPass, 'threshold').min(0).max(1).step(0.001)
    this.effectComposer.addPass(bloomPass)

    const tintPass = new ShaderPass({
      uniforms: {
        tDiffuse: new THREE.Uniform(null),
        uTint: new THREE.Uniform(null),
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
          vec4 viewPosition       = viewMatrix       * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          gl_Position             = projectionPosition;
          
          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec3      uTint;
        
        varying vec2 vUv;
        
        void main() {
          vec4 color    = texture2D(tDiffuse, vUv);
          color.rgb    += uTint;
          gl_FragColor  = color;
        }
      `,
    })
    tintPass.material.uniforms.uTint.value = new THREE.Vector3(0, 0, 0)
    const tintTweak = this.guiControl.addFolder('Tint')
    tintTweak.add(tintPass, 'enabled')
    tintTweak
      .add(tintPass.material.uniforms.uTint.value, 'x')
      .min(-1)
      .max(1)
      .step(0.001)
      .name('red')
    tintTweak
      .add(tintPass.material.uniforms.uTint.value, 'y')
      .min(-1)
      .max(1)
      .step(0.001)
      .name('green')
    tintTweak
      .add(tintPass.material.uniforms.uTint.value, 'z')
      .min(-1)
      .max(1)
      .step(0.001)
      .name('blue')
    this.effectComposer.addPass(tintPass)

    this.displacementPass = new ShaderPass({
      uniforms: {
        tDiffuse: new THREE.Uniform(null),
        uTime: new THREE.Uniform(null),
      },
      vertexShader: `
        varying vec2 vUv;
      
        void main() {
          vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
          vec4 viewPosition       = viewMatrix       * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          gl_Position             = projectionPosition;
          
          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float     uTime;
        
        varying vec2 vUv;
            
        void main() {
          vec2 displacedUv = vec2(
            vUv.x,
            vUv.y + sin(vUv.x * 10.0 + uTime) * 0.1
          );
          vec4 color   = texture2D(tDiffuse, displacedUv);
          gl_FragColor = color;
        }
      `,
    })
    this.displacementPass.enabled = false
    this.displacementPass.material.uniforms.uTime.value = 0
    const displacementTweak = this.guiControl.addFolder('Displacement')
    displacementTweak.add(this.displacementPass, 'enabled')
    this.effectComposer.addPass(this.displacementPass)

    const futuristicPass = new ShaderPass({
      uniforms: {
        tDiffuse: new THREE.Uniform(null),
        uNormalTexture: new THREE.Uniform(null),
      },
      vertexShader: `
        varying vec2 vUv;
      
        void main() {
          vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
          vec4 viewPosition       = viewMatrix       * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectionPosition;
          
          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D uNormalTexture;
        
        varying vec2 vUv;
        
        void main() {
          vec3  normalFactor     = texture2D(uNormalTexture, vUv).xyz * 2.0 - 1.0;
          vec2  processedUv      = vUv + normalFactor.xy * 0.1;
          vec4  color            = texture2D(tDiffuse, processedUv);
          vec3  lightDirection   = normalize(vec3(-1.0, 1.0, 0.0));
          vec3  normalDirection  = normalize(normalFactor);
          float lightFactor      = dot(lightDirection, normalDirection);
          lightFactor            = clamp(lightFactor, 0.0, 1.0);
          color.rgb             += lightFactor * 2.0;
          gl_FragColor           = color;
        }
      `,
    })
    futuristicPass.material.uniforms.uNormalTexture.value = textureLoader.load(
      futuristicNormalImage,
    )
    const futuristicTweak = this.guiControl.addFolder('Futuristic')
    futuristicTweak.add(futuristicPass, 'enabled')
    this.effectComposer.addPass(futuristicPass)

    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader)
    this.effectComposer.addPass(gammaCorrectionPass)

    if (window.devicePixelRatio === 1 && !this.renderer.capabilities.isWebGL2) {
      const smaaPass = new SMAAPass()
      this.effectComposer.addPass(smaaPass)
    }
  }

  /**
   * Setup effect composer
   *
   * @returns {void}
   */
  #setupEffectComposer() {
    this.effectComposer.setSize(this.canvas.width, this.canvas.height)
    this.effectComposer.setPixelRatio(this.renderer.getPixelRatio())
  }

  /**
   * Setup camera
   *
   * @returns {void}
   */
  #setupCamera() {
    this.camera.fov = 75
    this.camera.position.set(4, 1, -4)
    this.camera.updateProjectionMatrix()
  }

  /**
   * Setup renderer
   *
   * @returns {void}
   */
  #setupRenderer() {
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.toneMapping = THREE.ReinhardToneMapping
    this.renderer.toneMappingExposure = 1.5
  }
}
