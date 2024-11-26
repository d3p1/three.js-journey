/**
 * @description Hologram vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;

varying vec3 vModelPosition;
varying vec3 vNormalPosition;

#include ../utils/random2D.glsl

void main() {
    vec4 normalPosition   = modelMatrix * vec4(normal, 0.0);
    vec4 modelPosition    = modelMatrix * vec4(position, 1.0);
    float glitchFactor    = uTime - modelPosition.y;
    float glitchStrength  = sin(glitchFactor)        +
                            sin(glitchFactor * 3.45) +
                            sin(glitchFactor * 8.76);
    float glitchRandomX   = random2D(modelPosition.xz + uTime) - 0.5;
    float glitchRandomZ   = random2D(modelPosition.zx + uTime) - 0.5;
    glitchStrength       /= 3.0;
    glitchStrength        = smoothstep(0.3, 1.0, glitchStrength);
    glitchStrength       *= 0.25;
    modelPosition.x      += glitchRandomX * glitchStrength;
    modelPosition.z      += glitchRandomZ * glitchStrength;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vModelPosition  = modelPosition.xyz;
    vNormalPosition = normalPosition.xyz;
}