import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

export default {
  root: 'src/',
  base: '/three.js-journey/',
  publicDir: '../public/',
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
  },
  assetsInclude: ['**/*.hdr', '**/*.gltf', '**/*.glb'],
  plugins: [restart({restart: ['../static/**']}), glsl()],
}
