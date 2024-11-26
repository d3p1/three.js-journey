/**
 * @description Hologram fragment shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform float uTime;
uniform vec3  uColor;

varying vec3 vModelPosition;
varying vec3 vNormalPosition;

void main() {
    float stripe = mod((vModelPosition.y - (uTime * 0.02)) * 20.0, 1.0);
    stripe       = pow(stripe, 2.0);

    vec3 normal = normalize(vNormalPosition);
    if (!gl_FrontFacing) {
        normal *= -1.0;
    }
    vec3 viewDirection = normalize(vModelPosition - cameraPosition);
    float fresnel      = 1.0 + dot(viewDirection, normal);
    fresnel            = pow(fresnel, 2.0);

    float fallof = smoothstep(0.8, 0.0, fresnel);

    float holographic  = stripe * fresnel;
    holographic       += fresnel * 1.25;
    holographic       *= fallof;

    gl_FragColor = vec4(uColor, holographic);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}