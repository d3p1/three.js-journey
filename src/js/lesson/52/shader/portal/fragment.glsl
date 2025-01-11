/**
 * @description Portal fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform vec3  uInnerColor;
uniform vec3  uOuterColor;

varying vec2 vUv;

#include ../utils/calcPerlinNoise3d.glsl

void main() {
    vec2  processedUv  = vUv + calcPerlinNoise3d(vec3(vUv * 5.0, uTime * 0.1));
    float strength     = calcPerlinNoise3d(vec3(processedUv * 5.0, uTime * 0.2));
    float outerGlow    = distance(vUv, vec2(0.5)) * 5.0 - 1.4;
          strength    += outerGlow;
          strength    += step(-0.2, strength) * 0.8;
          strength     = clamp(strength, 0.0, 1.0);

    vec3 color = mix(uInnerColor, uOuterColor, strength);

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}