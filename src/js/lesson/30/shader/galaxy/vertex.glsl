/**
 * @description Galaxy vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform float uSize;

attribute vec3  aOffset;
attribute float aScale;

varying vec3 vColor;

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
    float radius        = length(modelPosition.xyz);
    float angle         = atan(modelPosition.z, modelPosition.x);
    float angleOffset   = (1.0 / radius) * 0.2 * uTime;
    angle              += angleOffset;
    modelPosition.x     = cos(angle) * radius;
    modelPosition.z     = sin(angle) * radius;
    modelPosition.xyz  += aOffset;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position  = projectionPosition;
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vColor = color;
}