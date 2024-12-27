/**
 * @description Particle vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uProgress;
uniform float uSize;
uniform vec2  uResolution;
uniform vec3  uWarmColor;
uniform vec3  uCoolColor;

attribute float aSize;
attribute vec3  aTargetPosition;

varying vec3 vColor;

#include ../utils/calcSimplexNoise3d.glsl

void main() {
    float frequency     = 0.2;
    float originNoise   = calcSimplexNoise3d(position * frequency);
    float targetNoise   = calcSimplexNoise3d(aTargetPosition * frequency);
    float noise         = mix(originNoise, targetNoise, uProgress);
    noise               = smoothstep(-1.0, 1.0, noise);
    float duration      = 0.4;
    float delay         = (1.0 - duration) * noise;
    float end           = delay + duration;
    float progress      = smoothstep(delay, end, uProgress);
    vec3  finalPosition = mix(position, aTargetPosition, progress);

    vec4 modelPosition      = modelMatrix      * vec4(finalPosition, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position   = projectionPosition;
    gl_PointSize  = aSize * uSize * uResolution.y;
    gl_PointSize *= (-1.0 / viewPosition.z);

    vColor = mix(uWarmColor, uCoolColor, noise);
}