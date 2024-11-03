/**
 * @description Flag fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 texture = texture2D(uTexture, vUv);
    vec3 color   = texture.rgb * (vElevation + 0.3) * (1.0 / 0.6);
    gl_FragColor = vec4(color, 1);
}