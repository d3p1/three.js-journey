/**
 * @description GPGPU particle shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float     uTime;
uniform float     uDeltaTime;
uniform float     uStrengthFactor;
uniform float     uFlowStrength;
uniform float     uFlowFrequency;
uniform sampler2D uBasePositionTexture;

#include ../../shader/utils/calcSimplexNoise4d.glsl

void main() {
    float time         = uTime * 0.2;
    vec2  uv           = gl_FragCoord.xy / resolution.xy;
    vec4  particle     = texture(uParticle, uv);
    vec4  basePosition = texture(uBasePositionTexture, uv);

    if (particle.a >= 1.0) {
        particle = basePosition;
    }
    else {
        float strength = calcSimplexNoise4d(
            vec4(particle.xyz * 0.2, time + 1.0)
        );
        strength = smoothstep(
            (uStrengthFactor - 0.5) * 2.0 * -1.0,
            1.0,
            strength
        );
        vec3 flowField = vec3(
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 0.0), time)
            ),
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 1.0), time)
            ),
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 2.0), time)
            )
        );
        flowField     = normalize(flowField);
        particle.xyz += flowField * uFlowStrength * uDeltaTime * strength;

        particle.a += 0.3 * uDeltaTime;
    }

    gl_FragColor  = particle;
}