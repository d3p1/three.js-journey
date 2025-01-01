/**
 * @description Terrain fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3 uDeepWaterColor;
uniform vec3 uSurfaceWaterColor;
uniform vec3 uSandColor;
uniform vec3 uGrassColor;
uniform vec3 uSnowColor;
uniform vec3 uRockColor;

varying vec3  vPosition;
varying float vUpDot;

#include ../utils/calcSimplexNoise2d.glsl

void main() {
    vec3 color = vec3(1.0);

    float waterMixFactor = smoothstep(-1.0, -0.1, vPosition.y);
    color                = mix(
        uDeepWaterColor, uSurfaceWaterColor, waterMixFactor
    );

    float sandMixFactor = step(-0.1, vPosition.y);
    color               = mix(color, uSandColor, sandMixFactor);

    float grassMixFactor = step(-0.06, vPosition.y);
    color                = mix(color, uGrassColor, grassMixFactor);

    float rockMixFactor  = 1.0 - step(0.8, vUpDot);
    rockMixFactor       *= grassMixFactor;
    color                = mix(color, uRockColor, rockMixFactor);

    float snowThreshold   = 0.45;
    snowThreshold        += calcSimplexNoise2d(vPosition.xz * 15.0) * 0.1;
    float snowMixFactor   = step(snowThreshold, vPosition.y);
    color                 = mix(color, uSnowColor, snowMixFactor);

    csm_DiffuseColor = vec4(color, 1.0);
}