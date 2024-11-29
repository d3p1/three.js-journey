/**
 * @description Sea vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform float uBigWavesElevation;
uniform vec2  uBigWavesFrequency;
uniform float uBigWavesSpeed;
uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallWavesIterations;

varying float vElevation;

#include ../utils/cnoise.glsl
#include ./utils/cwave.glsl

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
    modelPosition.xyz   = cwave(
        modelPosition.xyz,
        uBigWavesFrequency,
        uBigWavesElevation,
        uBigWavesSpeed,
        uSmallWavesFrequency,
        uSmallWavesElevation,
        uSmallWavesSpeed,
        uSmallWavesIterations,
        uTime
    );

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    vElevation  = modelPosition.y;
}