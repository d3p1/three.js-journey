/**
 * @description Particle fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float alpha            = (0.05 / distanceToCenter) - 0.1;

    gl_FragColor = vec4(vColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}