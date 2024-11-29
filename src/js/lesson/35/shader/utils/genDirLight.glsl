/**
 * @description Generate directional light shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec3 genDirLight(
    vec3  color,
    float intensity,
    vec3  lightPosition,
    vec3  normal,
    vec3  viewDirection,
    float specularFactor
) {
    vec3  lightDirection = normalize(lightPosition);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  lightReflection = normalize(reflect(-lightDirection, normal));
    float specular        = -dot(viewDirection, lightReflection);
    specular              = max(0.0, specular);
    specular              = pow(specular, specularFactor);

    return color * intensity * (shading + specular);
}