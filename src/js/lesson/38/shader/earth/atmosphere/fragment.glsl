/**
 * @description Earth atmosphere fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

#include ../../utils/genAtmosphereColor.glsl

void main() {
    vec3  normal        = normalize(vNormal);
    vec3  viewDirection = normalize(vPosition - cameraPosition);
    float fresnel       = 1.0 + dot(viewDirection, normal);
    vec3  color         = vec3(0.0);

    float sunOrientation = dot(uSunDirection, normal);
    color                = genAtmosphereColor(
        color,
        uAtmosphereDayColor,
        uAtmosphereTwilightColor,
        fresnel,
        sunOrientation
    );

    float edgeAlpha = smoothstep(1.1, 1.5, fresnel);
    float dayAlpha  = smoothstep(0.0, 1.0, length(color));
    float alpha     = edgeAlpha * dayAlpha;

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}