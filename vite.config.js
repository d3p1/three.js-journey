import restart from 'vite-plugin-restart'

export default {
  root: 'src/',
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
  plugins: [restart({restart: ['../static/**']})],
}
