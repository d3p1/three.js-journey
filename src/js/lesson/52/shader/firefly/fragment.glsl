/**
 * @description Firefly fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float strength         = (0.05 / distanceToCenter) - 0.1;

    gl_FragColor = vec4(1.0, 1.0, 1.0, strength);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}