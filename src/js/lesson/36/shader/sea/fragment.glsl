/**
 * @description Sea fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uBigWavesElevation;
uniform vec3  uDepthColor;
uniform vec3  uSurfaceColor;

varying float vElevation;

void main() {
    float mixStrength = smoothstep(
        -uBigWavesElevation,
        uBigWavesElevation,
        vElevation
    );
    vec3 color   = mix(uDepthColor, uSurfaceColor, mixStrength);
    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}