/**
 * @description Firework fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3      uColor;
uniform sampler2D uTexture;

void main() {
    float alpha = texture(uTexture, gl_PointCoord).r;

    gl_FragColor = vec4(uColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}