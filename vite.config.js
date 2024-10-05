import restart from 'vite-plugin-restart'

export default {
  root: 'src/',
  base: './',
  publicDir: '../public/static/',
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
  },
  assetsInclude: ['**/*.hdr'],
  plugins: [restart({restart: ['../static/**']})],
}
