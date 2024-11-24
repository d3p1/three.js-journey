/**
 * @description Pattern fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

#include ../lib/rotate.glsl
#include ../lib/random.glsl
#include ../lib/cnoise.glsl

void main() {
    float strength  = step(0.9, sin(cnoise(vUv * 10.0) * 20.0));
    strength        = clamp(strength, 0.0, 1.0);
    vec3 blackColor = vec3(0.0);
    vec3 uvColor    = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, strength);

    gl_FragColor = vec4(mixedColor, 1.0);
}
