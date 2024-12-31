/**
 * @description Sliced fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uStartAngle;
uniform float uArcAngle;

varying vec3 vPosition;

void main() {
    float angle  = atan(vPosition.y, vPosition.x);
    angle       -= uStartAngle;
    angle        = mod(angle, PI2);

    if ((angle > 0.0) && (angle < uArcAngle)) {
        discard;
    }

    float csm_Slice;
}