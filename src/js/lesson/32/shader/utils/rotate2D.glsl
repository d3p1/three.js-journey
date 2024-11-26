/**
 * @description Rotate 2D shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec2 rotate2D(vec2 value, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}