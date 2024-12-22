/**
 * @description Earth atmosphere vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vNormal   = (modelMatrix * vec4(normal, 1.0)).xyz;
    vPosition = modelPosition.xyz;
}