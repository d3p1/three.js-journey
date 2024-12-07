/**
 * @description Half tone fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3 uBaseColor;

void main() {
    gl_FragColor = vec4(uBaseColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}