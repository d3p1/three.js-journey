/**
 * @description Lenny uv vertex shader chunk
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
#include <uv_vertex>
float angle        = sin(position.y + uTime) * 0.4;
mat2  rotateMatrix = get2dRotateMatrix(angle);