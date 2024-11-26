/**
 * @description Smoke vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float     uTime;
uniform sampler2D uPerlinNoiseTexture;

varying vec2 vUv;

#include ../utils/rotate2D.glsl

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float rotationNoise = texture(
        uPerlinNoiseTexture,
        vec2(0.5, modelPosition.y * 0.1 - uTime * 0.02)
    ).r;
    float angle      = rotationNoise * 5.0;
    modelPosition.xz = rotate2D(modelPosition.xz, angle);

    float windNoiseX = texture(
        uPerlinNoiseTexture,
        vec2(0.25, uTime * 0.01)
    ).r;
    float windNoiseZ = texture(
        uPerlinNoiseTexture,
        vec2(0.75, uTime * 0.01)
    ).r;
    vec2 windOffset   = vec2(windNoiseX - 0.5, windNoiseZ - 0.5);
    windOffset       *= pow(uv.y, 2.0) * 10.0;
    modelPosition.xz += windOffset;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}