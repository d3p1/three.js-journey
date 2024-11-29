/**
 * @description Shading vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec4 modelPosition      = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    vec4 modelNormal        = normalize(modelMatrix * vec4(normal, 0.0));

    gl_Position = projectionPosition;
    vPosition   = modelPosition.xyz;
    vNormal     = modelNormal.xyz;
}