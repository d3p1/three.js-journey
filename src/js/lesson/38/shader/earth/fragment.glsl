/**
 * @description Earth fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudTexture;
uniform vec3      uSunDirection;
uniform vec3      uAtmosphereDayColor;
uniform vec3      uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#include ../utils/genAtmosphereColor.glsl

void main() {
    vec3 normal        = normalize(vNormal);
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel      = dot(viewDirection, normal) + 1.0;

    vec3  color          = vec3(0.0);
    float sunOrientation = dot(uSunDirection, normal);
    float dayMix         = smoothstep(-0.25, 0.5, sunOrientation);
    vec3  dayColor       = texture(uDayTexture, vUv).rgb;
    vec3  nightColor     = texture(uNightTexture, vUv).rgb;
    color                = mix(nightColor, dayColor, dayMix);

    vec2  specularCloud  = texture(uSpecularCloudTexture, vUv).rg;
    float cloudMix       = smoothstep(0.5, 1.0, specularCloud.g);
    cloudMix            *= dayMix;
    color                = mix(color, vec3(1.0), cloudMix);

    vec3 atmosphereColor = genAtmosphereColor(
        color,
        uAtmosphereDayColor,
        uAtmosphereTwilightColor,
        fresnel,
        sunOrientation
    );
    color = atmosphereColor;

    vec3  reflectDirection  = normalize(reflect(-uSunDirection, normal));
    float specular          = -1.0 * dot(viewDirection, reflectDirection);
    specular                = max(0.0, specular);
    specular                = pow(specular, 32.0);
    specular               *= specularCloud.r;
    vec3 specularColor      = vec3(1.0);
    specularColor           = mix(specularColor, atmosphereColor, fresnel);
    color                  += specular * specularColor;

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}