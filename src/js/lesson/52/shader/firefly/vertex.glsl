/**
 * @description Firefly vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform float uSize;
uniform vec2  uResolution;

attribute float aScale;

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
    modelPosition.y    += sin(uTime + modelPosition.x * 100.0) * 0.2 * aScale;

    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position   = projectionPosition;
    gl_PointSize  = uSize * uResolution.y * aScale;
    gl_PointSize *= (-1.0 / viewPosition.z);
}