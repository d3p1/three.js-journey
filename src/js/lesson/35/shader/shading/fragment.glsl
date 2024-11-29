/**
 * @description Shading fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

#include ../utils/genAmbLight.glsl
#include ../utils/genDirLight.glsl
#include ../utils/genPointLight.glsl

void main() {
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    vec3 color    = uColor;
    vec3 ambLight = genAmbLight(
        vec3(1.0),
        0.03
    );
    vec3 dirLight = genDirLight(
        vec3(0.1, 0.1, 1.0),
        1.0,
        vec3(0.0, 0.0, 3.0),
        vNormal,
        viewDirection,
        20.0
    );
    vec3 pointLight1 = genPointLight(
        vec3(1.0, 0.1, 0.1),
        1.0,
        vPosition,
        vec3(0.0, 2.5, 0.0),
        vNormal,
        viewDirection,
        20.0,
        0.25
    );
    vec3 pointLight2 = genPointLight(
        vec3(0.1, 1.0, 0.5),
        1.0,
        vPosition,
        vec3(2.0, 2.0, 2.0),
        vNormal,
        viewDirection,
        20.0,
        0.2
    );
    vec3 totalLight = ambLight + dirLight + pointLight1 + pointLight2;
    vec3 finalColor = color * totalLight;

    gl_FragColor = vec4(finalColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}