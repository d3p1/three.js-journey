/**
 * @description Generate point light shader utility
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
vec3 genPointLight(
    vec3  color,
    float intensity,
    vec3  lightPosition,
    vec3  fragPosition,
    vec3  viewDirection,
    vec3  normal,
    float specularFactor,
    float decayFactor
) {
    vec3  lightVector    = lightPosition - fragPosition;
    vec3  lightDirection = normalize(lightVector);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  reflectionDirection = normalize(reflect(-lightDirection, normal));
    float specular            = -dot(reflectionDirection, viewDirection);
    specular                  = max(0.0, specular);
    specular                  = pow(specular, specularFactor);

    float decay = 1.0 - length(lightVector) * decayFactor;
    decay       = max(0.0, decay);

    return color * intensity * decay * (shading + specular);
}