/**
 * @description Firework vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uProgress;
uniform float uSize;

attribute float aTimeMultiplier;
attribute float aScale;

#include ../utils/remap.glsl

void main() {
    vec3 transformed = position;
    float progress   = uProgress * aTimeMultiplier;

    float explodeProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);
    explodeProgress       = clamp(explodeProgress, 0.0, 1.0);
    explodeProgress       = 1.0 - pow(1.0 - explodeProgress, 3.0);
    transformed           = mix(vec3(0.0), transformed, explodeProgress);

    float fallProgress  = remap(progress, 0.1, 1.0, 0.0, 1.0);
    fallProgress        = clamp(fallProgress, 0.0, 1.0);
    transformed.y      -= 0.2 * fallProgress;

    float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);
    float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);
    float sizeProgress        = min(sizeOpeningProgress, sizeClosingProgress);
    sizeProgress              = clamp(sizeProgress, 0.0, 1.0);

    float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);
    twinklingProgress       = clamp(twinklingProgress, 0.0, 1.0);
    float twinklingSize     = sin(progress * 30.0) * 0.5 + 0.5;
    twinklingSize           = 1.0 - twinklingSize * twinklingProgress;

    vec4 modelPosition      = modelMatrix      * vec4(transformed, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position   = projectionPosition;
    gl_PointSize  = uSize;
    gl_PointSize *= aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);
    gl_PointSize *= sizeProgress;
    gl_PointSize *= twinklingSize;

    if (gl_PointSize < 1.0) {
        gl_Position = vec4(9999.9);
    }
}