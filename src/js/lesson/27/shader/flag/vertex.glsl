/**
 * @description Flag vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);

    vElevation       = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    vElevation      += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    modelPosition.z += vElevation;

    vec4 viewPosition      = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
}