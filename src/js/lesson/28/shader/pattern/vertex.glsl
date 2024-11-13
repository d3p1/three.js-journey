/**
 * @description Pattern vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec2 vUv;

void main() {
    gl_Position =
    projectionMatrix *
    viewMatrix       *
    modelMatrix      *
    vec4(position, 1.0);

    vUv = uv;
}