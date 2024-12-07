/**
 * @description Half tone vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
}