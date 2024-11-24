/**
 * @description Lenny common shader chunk
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
#include <common>

uniform float uTime;

mat2 get2dRotateMatrix(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}