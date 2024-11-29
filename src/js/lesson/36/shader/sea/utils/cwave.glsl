/**
 * @description Wave calculation utility for sea shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec3 cwave(
    vec3  position,
    vec2  bigWavesFrequency,
    float bigWavesElevation,
    float bigWavesSpeed,
    float smallWavesFrequency,
    float smallWavesElevation,
    float smallWavesSpeed,
    float smallWavesIterations,
    float time
) {
    position.y =
        sin(position.x * bigWavesFrequency.x + time * bigWavesSpeed) *
        sin(position.z * bigWavesFrequency.y + time * bigWavesSpeed) *
        bigWavesElevation;

    for(float i = 1.0; i <= smallWavesIterations; i++) {
        position.y -= abs(
            cnoise(
                vec3(
                    position.xz * smallWavesFrequency * i,
                    time * smallWavesSpeed
                )
            ) * smallWavesElevation / i
        );
    }

    return position;
}