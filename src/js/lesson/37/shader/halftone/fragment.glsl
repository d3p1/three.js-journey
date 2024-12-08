/**
 * @description Halftone fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3  uBaseColor;
uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uRepetitions;

varying vec3 vPosition;
varying vec3 vNormal;

#include ../utils/genAmbLight.glsl
#include ../utils/genDirLight.glsl

vec3 halftone(
    vec2  uv,
    float repetitions,
    vec3  halftoneDir,
    float lowRadFactor,
    float highRadFactor,
    vec3  normal,
    vec3  pointColor,
    vec3  baseColor
) {
    float intensity  = dot(normal, halftoneDir);
    intensity        = smoothstep(lowRadFactor, highRadFactor, intensity);
    uv              *= repetitions;
    uv               = mod(uv, 1.0);
    float point      = distance(uv, vec2(0.5));
    point            = 1.0 - step(0.5 * intensity, point);
    return mix(baseColor, pointColor, point);
}

void main() {
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    vec2 uv  = gl_FragCoord.xy;
         uv /= uResolution.y;

    vec3 color = uBaseColor;

    vec3 light  = vec3(0.0);
    light      += genAmbLight(vec3(1.0), 1.0);
    light      += genDirLight(
        vec3(1.0),
        1.0,
        vec3(1.0, 1.0, 0.0),
        vNormal,
        viewDirection,
        1.0
    );
    color *= light;

    color = halftone(
        uv,
        uRepetitions,
        normalize(vec3(0.0, -1.0, 0.0)),
        -0.8,
        1.5,
        vNormal,
        uColor,
        color
    );

    color = halftone(
        uv,
        uRepetitions * 2.0,
        normalize(vec3(1.0, 1.0, 0.0)),
        -0.8,
        1.5,
        vNormal,
        vec3(1.0),
        color
    );

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}