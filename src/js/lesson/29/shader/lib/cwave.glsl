/**
 * @description Wave calculation shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
float cwave(
    float position,
    float frequency,
    float uBigWaveSpeed,
    float uTime
) {
    return sin(position * 2.0 * PI * frequency + uTime * uBigWaveSpeed);
}