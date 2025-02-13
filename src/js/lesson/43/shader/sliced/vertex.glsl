/**
 * @description Sliced vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vPosition;

void main() {
    vPosition = csm_Position;
}