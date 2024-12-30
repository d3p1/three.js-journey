/**
 * @description Wobble vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform float uStrength;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uWarpStrength;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;

attribute vec4 tangent;

varying float vWobble;

#include ../utils/calcSimplexNoise4d.glsl

float _calcWobble(
    vec3  position,
    float time,
    float strength,
    float positionFrequency,
    float timeFrequency,
    float warpStrength,
    float warpPositionFrequency,
    float warpTimeFrequency
) {
    vec3 warpedPosition  = position;
    warpedPosition      += calcSimplexNoise4d(
        vec4(
            position * warpPositionFrequency,
            time     * warpTimeFrequency
        )
    ) * warpStrength;

    return calcSimplexNoise4d(
        vec4(
            warpedPosition * positionFrequency,
            time           * timeFrequency
        )
    ) * strength;
}

void main() {
    vec3 bitangent = cross(normal, tangent.xyz);

    float  shift             = 0.01;
    vec3  tangentNeighbour   = csm_Position + shift * tangent.xyz;
    vec3  bitangentNeighbour = csm_Position + shift * bitangent;
    float positionWobble     = _calcWobble(
        csm_Position,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    float tangentWobble = _calcWobble(
        tangentNeighbour,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    float bitangentWobble = _calcWobble(
        bitangentNeighbour,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    csm_Position            += normal * positionWobble;
    tangentNeighbour        += normal * tangentWobble;
    bitangentNeighbour      += normal * bitangentWobble;

    vec3 computedTangentNeighbourDir = normalize(
        tangentNeighbour - csm_Position
    );
    vec3 computedBitangentNeighbourDir = normalize(
        bitangentNeighbour - csm_Position
    );
    csm_Normal = cross(
        computedTangentNeighbourDir,
        computedBitangentNeighbourDir
    );

    vWobble = positionWobble / uStrength;
}