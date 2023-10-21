/**
 * @description Declaration file to be able to import font assets
 *              as webpack modules
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
declare module '*.ttf' {
  const content: string
  export default content
}
declare module '*.otf' {
  const content: string
  export default content
}
declare module '*.woff' {
  const content: string
  export default content
}
declare module '*.woff2' {
  const content: string
  export default content
}