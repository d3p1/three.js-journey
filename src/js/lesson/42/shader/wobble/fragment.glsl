/**
 * @description Wobble fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;

varying float vWobble;

void main() {
    float colorFactor    = smoothstep(-1.0, 1.0, vWobble);
    vec3  color          = mix(uInnerColor, uOuterColor, colorFactor);
    csm_DiffuseColor.rgb = color;
    csm_Roughness        = 1.0 - colorFactor;
}