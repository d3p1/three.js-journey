/**
 * @description Particle vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec2      uResolution;
uniform float     uSize;
uniform sampler2D uPositionTexture;

attribute vec2 aUv;
attribute vec3 aColor;
attribute float aSize;

varying vec3 vColor;

void main() {
    vec4 particle = texture(uPositionTexture, aUv);

    vec4 modelPosition      = modelMatrix      * vec4(particle.xyz, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    float sizeIn  = smoothstep(0.0, 0.1, particle.a);
    float sizeOut = 1.0 - smoothstep(0.7, 1.0, particle.a);
    float size    = min(sizeIn, sizeOut);

    gl_Position   = projectionPosition;
    gl_PointSize  = size * aSize * uSize * uResolution.y;
    gl_PointSize *= (-1.0 / viewPosition.z);

    vColor = aColor;
}