/**
 * @description Fragment shader for drunk effect
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uFrequency;
uniform float uAmplitude;
uniform float uTime;

void mainUv(inout vec2 uv) {
    uv.y += sin(uv.x * uFrequency + uTime) * uAmplitude;
}

void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    out      vec4 outputColor
) {
    outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
}