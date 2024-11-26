/**
 * @description Random 2D shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
}