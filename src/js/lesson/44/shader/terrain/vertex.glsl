/**
 * @description Terrain vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform float uPositionFrequency;
uniform float uStrength;
uniform float uWarpFrequency;
uniform float uWarpStrength;

varying vec3  vPosition;
varying float vUpDot;

#include ../utils/calcSimplexNoise2d.glsl

float _calcElevation(
    vec2  position,
    float positionFreq,
    float strength,
    float warpFreq,
    float warpStrength
) {
    float elevation      = 0.0;
    vec2 warpedPosition  = position;
    warpedPosition      += calcSimplexNoise2d(
        position * positionFreq * warpFreq
    ) * warpStrength;

    elevation += calcSimplexNoise2d(warpedPosition * positionFreq)       / 2.0;
    elevation += calcSimplexNoise2d(warpedPosition * positionFreq * 2.0) / 4.0;
    elevation += calcSimplexNoise2d(warpedPosition * positionFreq * 4.0) / 8.0;

    float elevationSign = sign(elevation);
    elevation           = pow(abs(elevation), 2.0) * elevationSign;

    elevation *= strength;

    return elevation;
}

void main() {
    float displacement  = 0.2 * uTime;
    vec3 pos            = csm_Position;
    pos.xz             += displacement;
    float shift         = 0.01;
    vec3  positionA     = pos + vec3(1.0, 0.0, 0.0)  * shift;
    vec3  positionB     = pos + vec3(0.0, 0.0, -1.0) * shift;

    pos.y += _calcElevation(
        pos.xz,
        uPositionFrequency,
        uStrength,
        uWarpFrequency,
        uWarpStrength
    );
    positionA.y += _calcElevation(
        positionA.xz,
        uPositionFrequency,
        uStrength,
        uWarpFrequency,
        uWarpStrength
    );
    positionB.y += _calcElevation(
        positionB.xz,
        uPositionFrequency,
        uStrength,
        uWarpFrequency,
        uWarpStrength
    );
    csm_Position.y = pos.y;

    vec3 toA   = normalize(positionA - pos);
    vec3 toB   = normalize(positionB - pos);
    csm_Normal = cross(toA, toB);

    vPosition = pos;
    vUpDot    = dot(csm_Normal, vec3(0.0, 1.0, 0.0));
}