/**
 * @description Galaxy fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vColor;

void main() {
    float strength = 1.0 - (distance(vec2(0.5), gl_PointCoord) * 2.0);
    strength = pow(strength, 10.0);
    vec3 mixedColor = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
    #include <colorspace_fragment>
}