/**
 * @description Generate ambient light shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec3 genAmbLight(vec3 color, float intensity) {
    return color * intensity;
}