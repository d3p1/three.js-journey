/**
 * @description Remap shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
float remap(float value, float originMin, float originMax, float destinationMin, float destinationMax) {
    return destinationMin                    +
           (value - originMin)               *
           (destinationMax - destinationMin) /
           (originMax - originMin);
}