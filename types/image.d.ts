/**
 * @description Declaration file to be able to import image assets
 *              as webpack modules
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
declare module '*.png' {
  const content: string
  export default content
}
declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.jpeg' {
  const content: string
  export default content
}
declare module '*.gif' {
  const content: string
  export default content
}