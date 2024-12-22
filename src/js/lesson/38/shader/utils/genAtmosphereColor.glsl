/**
 * @description Generate atmosphere color shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec3 genAtmosphereColor(
    vec3  color,
    vec3  atmosphereDayColor,
    vec3  atmosphereTwilightColor,
    float fresnel,
    float sunOrientation
) {
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3  atmosphereColor  = mix(
        atmosphereTwilightColor,
        atmosphereDayColor,
        atmosphereDayMix
    );
    fresnel = pow(fresnel, 2.0);
    return mix(color, atmosphereColor, fresnel * atmosphereDayMix);
}